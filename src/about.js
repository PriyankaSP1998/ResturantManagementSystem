import React from "react";
import {Media,Card} from "reactstrap";
import BreadCrumb from "/home/priyanka/react-appl/src/BreadCrumb.js";
export default function About(props)
{
    const RenderLeader=props.leaders.map
    ((leader)=>{
        return(
            <div>
        <Card  style={{margin:"20px",boxShadow:" 0 0 6px 1px",}}>
            <Media style={{marginBottom:"20px"}}>
              <Media left top href="#">
                <Media object src={leader.image} height="250"  />
              </Media>
              <Media body style={{margin:"50px"}}>
                <Media heading>
                  {leader.name}
                </Media>
                <Media heading>
                  {leader.designation}
                </Media>
               {leader.description}
              </Media>
            </Media>
            </Card>
          </div>
        )
    })
    return(
        <div  style={{height:"175vh"}}>{RenderLeader}</div>
    )
}
