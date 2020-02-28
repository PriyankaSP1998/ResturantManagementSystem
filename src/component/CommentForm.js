import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter,Row,Col,Label} from 'reactstrap';
import {Control,LocalForm,Errors} from 'react-redux-form';

const required=(val)=>val && val.length;
const reqlength = (min,max) => (val) => !(val) || (val.length >= min && val.length <=max);
class CommentForm extends Component{
    constructor(props)
    {
        super(props);
            this.state={modal: false};
            this.toggle=this.toggle.bind(this);
            this.handleSubmit=this.handleSubmit.bind(this);
            
    }

    toggle() {
        this.setState({isOpen: !this.state.isOpen});
        this.setState(prevState => ({
            modal : !prevState.modal
        }));
      }
    handleSubmit(values)
    {
        // alert("entered values"+JSON.stringify(values));
        this.toggle();
        this.props.postComment(this.props.dishId,values.ratings,values.author,values.comments);
    }
      RenderComments = () =>
        {
            return(
                <div>
                    <Button color="primary" onClick={() => this.toggle()}>submit comment</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle} ><p style={{left:"18%",position:"relative"}}>Please Share your experience with us</p></ModalHeader>
                        <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                             <ModalBody>
                                 <Row className="form-group">
                                     <Label md={3} htmlFor="author" >Author: </Label>
                                     <Col md={8}>
                                          <Control.text 
                                            model=".author" 
                                             name="author" 
                                             placeholder="Name" className="form-control"  validators={{required,minLength:reqlength(3,10)}} />
                                     <Errors model=".author" 
                                             show="touched"
                                             className="text-danger" 
                                             messages={{required:"Name is required",
                                                        minLength:"minium 3 and max 10"
                                                    }}></Errors>
                                            
                                  
                                     </Col>
                                 </Row>
                                 <Row className="form-group">
                                     <Label htmlFor="ratings"  md={3}>Ratings:</Label>
                                     <Col md={8}>
                                        <Control.select  defaultValue="1" model=".ratings" name="ratings" className="form-control" validators={{required}} >
                                         <option>1</option>
                                         <option>2</option>
                                         <option>3</option>
                                         <option>4</option>
                                         <option>5</option>
                                       </Control.select>
                                     </Col>
                                 </Row>
                                 <Row className="form-group">
                                     <Label md={3} htmlFor="comment">Comment</Label>
                                     <Col md={8}>
                                         <Control.textarea rows="6" model=".comments" name="comments" placeholder="comment" className="form-control">

                                         </Control.textarea>
                                     </Col>
                                 </Row>
                             </ModalBody>
                             <ModalFooter >
                        
                                    
                                      <Button  style={{marginRight:"35%"}} color="success" >Submit</Button>
                                 
                               
                             </ModalFooter>
                        </LocalForm>
                    </Modal>
                </div>
            );
        }

    render()
    { 
         
        return(
             <div> {this.RenderComments()} </div>
        )
    }
}
export default CommentForm;

