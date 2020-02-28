import React from "react";
import {Modal,ModalHeader,ModalFooter,ModalBody,Button,FormGroup,InputGroup,Label,Input,Form} from "reactstrap";
import Example from './component/navbar'
class Login extends React.Component{
    
     render()
     {        
         return(
             <div>
               <Modal isOpen={this.props.modal} toggle={this.props.nnn}>
                <ModalHeader toggle={this.props.nnn} style={{textAlign:"center"}}>Login</ModalHeader>
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
            <Button color="secondary" onClick={Example.handleLogin2}>Cancel</Button>
          </ModalFooter>
          </Form>
            </Modal>
            </div>
         )
     }
}

export default Login;