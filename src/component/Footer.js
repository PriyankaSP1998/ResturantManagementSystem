import React from "react";
const Footer=(props)=>{
    return(   
         <div style={{backgroundColor:"#e9ecef",height:"auto",position:"fixed",bottom:"0",width:"100%"}} >   
            
             <div style={{margin:"15px"}}>
              <h5>contact us</h5>
                  <a href="#">
                    <i className="fa fa-facebook-f white-text fa-2x mr-5 "> </i>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter mr-5 fa-2x"> </i>
                  </a>
                  <a href="#">
                    <i class="fa fa-linkedin  mr-5 fa-2x"> </i>
                  </a>
                  <a href="#">
                  <i className="fa fa-google-plus-square mr-5 fa-2x"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-instagram  mr-5 fa-2x"> </i>
                  </a>
                  <a href="#">
                    <i class="fa fa-pinterest fa-2x"> </i>
                  </a>
             </div>
             <div> 
                 <p><small>&copy;2019<a href="https://www.mobinius.com/"> Mobinius Technologies
                        Pvt.Ltd.</a>All rights reserved.</small></p>
             </div>
        </div>
       
         
          
      
   
     

    )
  }
  export default Footer;
  