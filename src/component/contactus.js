import React from "react";
import {Card,CardText,Label,FormGroup,FormFeedback,FormText,Input,InputGroup,InputGroupAddon,Button,Row,Col} from "reactstrap";
import {Control,Form,Errors} from 'react-redux-form';
import background from "/home/priyanka/react-appl/src/black.jpeg";
import BreadCrumb from "/home/priyanka/react-appl/src/BreadCrumb.js";
import { tsConstructorType } from "@babel/types";
import ErrorWithStack from "jest-util/build/ErrorWithStack";
const required = (val) => val && val.length;
const minLength = (len) => (val) => !(val) || (val.length >= len);
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const mobileLength = (len) => (val) => !(val) || (val.length == len);
const mobileNo = (val) => !isNaN((val));
const emailregex = (val) => /^[A-Za-z0-9._]+@[A-Za-z0-9]+\.[A-Za-z]{2,10}$/i.test(val);
const message={
    height:"85vh",
    border:"1px solid black",
    width:"46%",
    position:"absolute",
    right:"6%",
    marginTop:"5%",
    background:"white",
    borderRadius:"2px"
}
const inp={
    marginBottom:"10%",
    borderRadius:"3px",
    // boxShadow:" 0 0 1px 1px"
}
const con={
    height:"120vh",
    backgroundImage:"url("+background+")",
    backgroundRrepeat:"no-repeat"
}
const sub={
    position:"relative",
    top:"80px",
    borderRadius:"6px",
    paddingLeft:"12px",
    paddingRight:"12px",
    background:"blue",
    color:"white",
    width:"100px",
    // right:"10%"
}
const addr={
    marginTop:"15%",
    position:"absolute",
    left:"10%",
    height:"70vh",
    border:"1px solid black",
    width:"35%",
    marginTop:"3%",
    backgroundColor: "#ffffff",
    opacity: "0.3"

}

class Contactus extends React.Component
{ 
    constructor(props)
    {
      super(props);
      this.handleSubmit=this.handleSubmit.bind(this);

    }
   handleSubmit(values)
   {  
    // event.preventDefault();
    alert("current state is"+JSON.stringify(values));
    this.props.postFeedback(values.FirstName, values.LastName, values.Telephone, values.Email, values.agree, values.contactType, values.Message);
        this.props.resetFeedbackForm();
    
   }

render(){
    
    return(
        <div style={message} >
       <div className="container">
                    <h3>Send us Your Feedback</h3><br />
                        <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>

                            <Row className="form-group">
                                <Label  md={3}>FirstName:</Label>
                                <Col md={7}>
                                    <Control.text model=".FirstName"  name="FirstName" 
                                                  placeholder="Enter First Name" 
                                                  className="form-control"
                                                  validators={{ required, minLength:minLength(3), maxLength: maxLength(10)}} />
                                    
                                    <Errors 
                                        model=".FirstName"
                                        show="touched" 
                                        className="text-danger"
                                        messages={{
                                            required: "First Name is required.",
                                            minLength: "First Name must have 3 chracters or more.",
                                            maxLength: "First Name must have 10 characters or less."
                                        }} />

                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label md={3}>LastName:</Label>
                                <Col md={7}>
                                    <Control.text model=".LastName" name="LastName" 
                                                  placeholder="Enter Last Name" 
                                                  className="form-control"
                                                  validators={{ required, minLength:minLength(3),
                                                   maxLength: maxLength(10)}} />
                                    <Errors
                                        model=".LastName"
                                        show="touched"
                                        className="text-danger"
                                        messages={{
                                            required: "Last Name is required.",
                                            minLength: "Last Name must have 3 characters or more.",
                                            maxLength: "Last BName must have 10 characters or less."
                                        }} />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label md={3}>Tel. No.:</Label>
                                    <Col md={7}>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend"> +91</InputGroupAddon>
                                                <Control.text model=".Telephone" name="Telephone" 
                                                              placeholder="Enter telephone number" 
                                                              className="form-control"
                                                              validators={{required, mobileLength:mobileLength(10), mobileNo}} />
                                           </InputGroup>
                                           <Errors 
                                                    model=".Telephone"
                                                    show="touched"
                                                    className="text-danger"
                                                    messages={{
                                                        required: "Telephone number is required.",
                                                        mobileLength:"Telephone number must be 10 digits only.",
                                                        mobileNo: "  Must be a number"
                                                    }}
                                                />
                                    </Col>
                            </Row>

                            <Row className="form-group">
                                <Label  md={3}>Email:</Label>
                                <Col md={7}>
                                    <Control.text model=".Email" name="Email" 
                                                  placeholder="Enter Email address"  
                                                  className="form-control" 
                                                  validators={{required, emailregex}} />
                                    <Errors 
                                        model=".Email"
                                        show="touched"
                                        className="text-danger"
                                        messages={{
                                            required: "Email address is required.",
                                            emailregex: " Invalid Email address."
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={{size: 4, offset: 3}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree"
                                            className="form-check-input" /> May we contact you?
                                        </Label>
                                    </div>  
                                </Col> 
                                    
                                <Col md={{size:3}}>
                                    <Control.select model=".contactType" name="contactType" className="form-control">
                                        <option>Telephone No.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label  md={3}>Message:</Label>
                                <Col md={7}>
                                    <Control.textarea model=".Message" name="Message" placeholder="Write your feedback here"
                                     className="form-control" />
                                </Col>
                            </Row>
                            
                            <Row className="form-group">
                                 <Col md={{ size: 10, offset: 1}}>
                                     <Button type="submit" color="info"> Send Feedback</Button>
                                 </Col>
                            </Row>
                        </Form>
                </div> 
        </div>
    )
}
}

const Addr=(()=>
{
    return(
        <div style={addr}>
            <h3><strong>Get In touch</strong></h3>
            <p>Need more information about our Resturant??Check our official website</p>
            <div>
   
            <address>121,clear water bay road<br/>
             clear water bay ,cowloon<br/>
             HONKONG <br/>  
             <i class="fa fa-phone"/>:+ 852 1234 5678<br/>  
             <i class="fa fa-fax"/>:+ 852 8765 4321<br/> 
             <i class="fa fa-envelope"/>:confusion@food.net           
                </address>  
                </div> 
                <div >
                            <h3>Map of our Location</h3> 
                                <div className="z-depth-1-half map-container-3">
                                    <iframe src="https://maps.google.com/maps?q=warsaw&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0"  allowFullScreen></iframe>
                                </div>
                </div>
            </div>
    )
})

function Contact(props){
    
      console.log(this.props);
        return(
            <div>
            <div>
                 <BreadCrumb />
            </div>     
      
      <div style={con}> 
      <Contactus postFeedback={props.postFeedback} resetFeedbackForm={props.resetFeedbackForm}/>
      <Addr/>
      </div>
      </div>
      
     

        )
    }
export default Contact;