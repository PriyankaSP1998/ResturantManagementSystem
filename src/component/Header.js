import React, { Component } from "react";
import {Jumbotron} from 'reactstrap';
import Nav from "/home/priyanka/react-appl/src/component/navbar.js";
const jmb={textAlign:"center"}
// import Menu from "/home/priyanka/my-app/src/component/Menu.js";
class Header extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron >
           <div className="container">
               <div className="row row-header">
                   <div>
                       <h1 style={{color:"#F47F3C ",textAlign:"center"}}>Ristorante conFusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
      </div>
    );
  }
}
export default Header;
