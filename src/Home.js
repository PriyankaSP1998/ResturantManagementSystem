import React from "react";
import "/home/priyanka/react-appl/src/index.css";
import BreadCrumb from "/home/priyanka/react-appl/src/BreadCrumb.js";
import {Loading} from "/home/priyanka/react-appl/src/Redux/LoadingComponent.js";
import {baseUrl} from "/home/priyanka/react-appl/src/baseUrl.js"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Badge,Breadcrumb,BreadcrumbItem
  } from 'reactstrap';
const Home=(props)=>
{
    console.log(props);
    // isLOading=props.isLoading;
     
        
        function Dish(props)
        {
           
            if (props.isLoading)
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
                console.log(props.dishes1)
                const disharr=props.dishes1.filter((dish)=>dish.featured);
          return   disharr.map((dish)=>{
            return(
                <div style={{height:"600px"}}>
                   <Card style={{height:"100%"}}>
                     <CardBody>
                       <CardTitle>{dish.name}</CardTitle>
                       <CardImg src={baseUrl+dish.image}   />
                       <CardText >{dish.description}</CardText>
                     </CardBody>
                   </Card> 
                </div>
            )})
            }
        }
   function Promo(props)
   {
       if(props.isLoading)
       {
           return(
               <div>
                   <Loading/>
               </div>
           )
       }
       else if(props.errMsg)
       {
           return(
               <h1>{props.errMsg}</h1>
           )
       }
       else{
           console.log(props.promotions);
        const promo=props.promotions.map((prom)=>{
            console.log(prom.name);
            return(
                <div  style={{height:"600px"}}>
                   <Card style={{height:"100%"}}>
                     <CardBody>
                         <CardTitle>{prom.name}</CardTitle>
                         <CardImg src={baseUrl+prom.image}   />
                         <CardText >{prom.description}</CardText>
                     </CardBody>
                   </Card>
                </div>
            )
        })
        
        return promo;
       }
      
   }
   const leaders=props.leaders.filter((leader)=>leader.featured);
   const leader=leaders.map((leader)=>{
       return(
           <div style={{height:"600px"}}>
              <Card style={{height:"100%"}}>
                <CardBody>
                  <CardTitle>{leader.name}</CardTitle>
                  <CardImg src={leader.image}   />
                  <CardText >{leader.description}</CardText>
                </CardBody>
              </Card> 
           </div>
       )
   })      
        return(
            <div class="container" style={{height:"100vh"}}>   
            <BreadCrumb />   
            <div class="row">
            <div className="col-12 col-md-4  py-2 " >
                <div ><Dish  isLoading={props.isLoading} errMsg={props.errMsg}  dishes1={props.dishes}/> </div>
            </div>
            <div className="col-12 col-md-4  py-2 " >
                <div><Promo isLoading={props.isLoading} errMsg={props.errMsg} promotions={props.promotion} /></div>     
            </div>
            <div className="col-12 col-md-4  py-2 " >
                <div>{leader}</div>      
            </div>
            </div>  
            </div>
        )
    }

export default Home;