import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "/home/priyanka/react-appl/src/App.css";
// import {LEADERS} from "/home/priyanka/react-appl/src/package/leaders.js";
import { NavLink as Link } from 'react-router-dom'; 
import Login from "/home/priyanka/react-appl/src/login.js";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Input,InputGroup,Form,FormFeedback,FormGroup,FormText,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,Label,
  DropdownItem,Modal,ModalBody,ModalFooter,ModalHeader,Button
} from "reactstrap";

class Example extends React.Component {
  constructor(props,context) {
    super(props,context);
    this.handleLogin2=this.handleLogin2.bind(this);
    this.toggle = this.toggle.bind(this);
    this.modaltoggle=this.modaltoggle.bind(this);
    this.handleLogin=this.handleLogin.bind(this);
    this.state = {
      Open: false,
      modal:false,
      Lmodal:false,
      clicked:false
    };
  }
  toggle() {
    this.setState({
      Open: !this.state.Open
    });
  }
  modaltoggle()
  {
    this.setState({
      modal:!this.state.modal
    });
  }
  handleLogin(event)
  {
    this.modaltoggle();
    console.log("name");
    alert("The user name is " +this.uname.value +"  "+"password: "+this.password.value) ;
    event.preventDefault();
  
  }
  handleLogin2()
  {
    this.setState({Lmodal:true});
    // event.preventDefault();

    // return <Login modal={this.state.Lmodal} />
   
  }
  render() {
    return (
      <div>
        <Navbar className="nav" light expand="md" style={{position:"fixed"}}> 
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.Open} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/Home" activeStyle={{color:"red"}}>  <i class="fa fa-home mr-5 fa-2x"> </i> </Link>
             </NavItem>
              <NavItem>
                <Link to="/Contactus" activeStyle={{color:"red"}}><i class="fa fa-phone mr-5 fa-2x"> </i>  </Link> 
              </NavItem>
              <NavItem>
                <Link to="/Menu" activeStyle={{color:"red"}}>  <i class="fa fa-cutlery mr-5 fa-2x"> </i> </Link>
              </NavItem>
              <NavItem>
                <Link to={"/About"} activeStyle={{color:"red"}}>  <i class="fa fa-info-circle mr-5 fa-2x"> </i> </Link>
              </NavItem>
              <NavItem>
                <Button onClick={this.handleLogin2}>  <i class="fa fa-sign-in mr-5 fa-2x"> </i> </Button>
              </NavItem>
                {this.state.Lmodal ? <Login modal={this.state.Lmodal} nnn={this.handleLogin2}/> : <div></div>}
                {/* {!this.state.Lmodal &&  <Button  style={{ marginRight:"10px",color:"#007bff",background:"white",border:"none"}}onClick={this.modaltoggle}  ><i class="fa fa-user-plus fa-2x  "/> </Button>} */}
              <NavItem>
              <Button  style={{ marginRight:"10px",color:"#007bff",background:"white",border:"none"}}onClick={this.modaltoggle}  ><i class="fa fa-user-plus fa-2x  "/> </Button>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  More
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 41 </DropdownItem>
                  <DropdownItem>Option 2 </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
       <div>
       <Modal isOpen={this.state.modal} toggle={this.modaltoggle}>
                <ModalHeader toggle={this.modaltoggle} style={{textAlign:"center"}}>Login</ModalHeader>
                <Form onSubmit={this.handleLogin} >
          <ModalBody>
              <FormGroup>
                <InputGroup>
                   <Label>UserName:</Label>
                   <Input type="text" name="username" placeholder="user name" innerRef={name=>this.uname=name}></Input>
                </InputGroup>
              </FormGroup>
              <InputGroup>
                   <Label>Password:</Label>
                   <Input type="password" name="password" placeholder="password" innerRef={psw=>this.password=psw}></Input>
                </InputGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="success" type="submit">Login</Button>
            <Button color="secondary" onClick={this.modaltoggle}>Cancel</Button>
          </ModalFooter>
          </Form>
            </Modal>
       </div>
      </div>
    );
  }
}
export default Example;
