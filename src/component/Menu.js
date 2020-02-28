import React, { Component } from "react";
import "/home/priyanka/react-appl/src/App.css";
import {baseUrl} from "/home/priyanka/react-appl/src/baseUrl.js";
// import DishDetails from "/home/priyanka/react-appl/src/component/dishdetails.js";
import BreadCrumb from "/home/priyanka/react-appl/src/BreadCrumb.js";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,Badge,Breadcrumb,BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
const pStyle = {
  fontSize: '25px',
  textAlign: 'center'
};
const card={
  overflow:'inline-block',
  boxShadow :' 0 0 15px 1px'
};
function RenderMenu(props)
{ 
  const menu=props.dish.map(dish=>{
    return(
    <div key={dish.id} className="col-12 col-md-5 mx-auto center py-2" > 
      <Card style={card}>
           <CardBody>
                <CardTitle style={pStyle}>{dish.name}</CardTitle>
                <Link to={`/DishDetails/${dish.id}/${dish.name}`}>  
                {/* <Link to={`/Breadcrumb/${dish.name}`}> */}
                  <CardImg src={baseUrl+dish.image}/>
                </Link>
                {/* </Link> */}
           </CardBody>
           <CardBody>
                <CardSubtitle style={pStyle}><Badge color="light">${dish.price}</Badge></CardSubtitle>
           </CardBody>
      </Card>
    </div>
         )
       } )
  return(

    <div className="row">{menu}</div>
  )
}
const Menu=(props)=>{
  console.log(props);
  return(
    <div>
      <BreadCrumb />
      <RenderMenu dish={props.dishes} isLoading={props.isLoading}
                   errMsg={props.dishes.errmsg} />
    </div>
  )
}
export default Menu;