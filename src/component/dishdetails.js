import React, { Component } from "react";
import {baseUrl} from "/home/priyanka/react-appl/src/baseUrl.js"
import {
    CardImg,UncontrolledAlert,Card,BreadcrumbItem,Breadcrumb
  } from 'reactstrap';
  import {Loading} from "/home/priyanka/react-appl/src/Redux/LoadingComponent.js";
  import { Link } from 'react-router-dom';
  // import {COMMENTS} from "../component/comments"
// import {dishes} from "../package/dishes";
import CommentForm from "./CommentForm.js";
export default  function DishDetails(props)
{
  
  if(props.isLoading)
  {
    return(
      <div>
     <Loading />
     </div>);
  }
  else if (props.errMsg)
  {
      return(
      <h1>{props.errMsg}</h1>
      )
  }
  else
  {
      console.log(props);
     const dish=props.dish;
      const comment=props.comment;
     const name=props.name;
     console.log(dish);

     return(
       <div style={{height:"220vh"}}>
                  <Bread  name={name}/>
                    <div style={{height:"110vh",border:"1px solid grey",marginLeft:"15%",marginRight:"15%"}}>
                    <DisplayDish  selectedDish={dish}  />
                   <DisplayComment comments={comment} postComment={props.postComment} dishId={dish.id}/>
                   <div style={{marginTop:"40px"}}>
                   </div>
                   </div>
                 </div> 
            );
  
   }
  } 


 function DisplayDish(props)
  {  
    if (props.isLoading)
  {
    return(
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    )
  }       
    return(
        <div  className="col-12 col-md-5 mx-auto center py-2"> 
       <div><h1>{props.selectedDish.name}</h1></div>
       <div>
       {/* <Link to="/Menu"> */}
       <CardImg src={baseUrl+props.selectedDish.image }   />
       {/* </Link> */}
       </div>
       <div>{props.selectedDish.description}</div>
 
       </div>
    )
  }  
  function DisplayComment(props)
  {  
    const comm=props.comments.map((dish)=>{
        return(
            <div>  
            <div><li><b>{dish.author}:</b>{dish.comment}</li></div>
            </div>
        )
    })
      return(
          <div>
              <h3 >Comments</h3>
       <div style={{textAlign:"left",position:"relative",left:"30%",right:"30%",marginBottom:"20px"}}>{comm}</div>
       <CommentForm  postComment={props.postComment} dishId={props.dishId}/>
       </div>
      )
  }
 function Bread(props)
 {
   return(
    <Breadcrumb>
    <BreadcrumbItem> 
        <Link to="/Home" activeStyle={{color:"red"}}>Home</Link>
    </BreadcrumbItem>
    <BreadcrumbItem>
        <Link to="/Contactus" activeStyle={{color:"red"}}>Contact</Link>
    </BreadcrumbItem>
    <BreadcrumbItem>
        <Link to="/Menu" activeStyle={{color:"red"}}>Menu</Link>
    </BreadcrumbItem>
    <BreadcrumbItem>
        <Link to="/About" activeStyle={{color:"red"}}>AboutUs</Link>
    </BreadcrumbItem>
    <BreadcrumbItem>
        <Link  style={{color:"red"}}>{props.name}</Link>
    </BreadcrumbItem>
</Breadcrumb>
   )
 }
