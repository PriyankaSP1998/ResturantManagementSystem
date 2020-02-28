import React from "react";
import{
    Breadcrumb,
    BreadcrumbItem
  } from "reactstrap";
  import { NavLink as Link } from 'react-router-dom';
const items=[
    {
      to:"/Home",
      lable:"Home"
    },
    {
      to:"/Contactus",
      lable:"Contactus"
    },
    {
      to:"/Menu",
      lable:"Menu"
    },
    {
      to:"/About",
      lable:"Aboutus"
    },
    
  ]

  // export default function BreadCrumb()
  // {
  //     return(
  //           <Breadcrumb>
  //             <BreadcrumbItem>
  //            { items.map((item)=>{
  //                  return(
  //                 //  <Link  activeStyle={{color:"red"}} to={item.to}>{item.lable} </Link>
  //                 <a href={item.to}>{item.lable}</a> 
  //                  );
  //               })
  //           }
  //             </BreadcrumbItem> 
  //           </Breadcrumb>
          
  //     )

  // }
  
  export default function BreadCrumb()
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
      </Breadcrumb>
    )
  }