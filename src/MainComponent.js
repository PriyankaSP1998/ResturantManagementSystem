import React, { Component } from "react";
import "./App.css";
import Header from "./component/Header";
import Footer from "/home/priyanka/react-appl/src/component/Footer.js";
import Menu from "/home/priyanka/react-appl/src/component/Menu.js";
import { withRouter,Switch,Route,Redirect} from "react-router-dom";
import Home from "/home/priyanka/react-appl/src/Home.js";
import About from "/home/priyanka/react-appl/src/about.js";
import Contact from "/home/priyanka/react-appl/src/component/contactus.js";
import DishDetails from "/home/priyanka/react-appl/src/component/dishdetails.js";
import Login from "/home/priyanka/react-appl/src/login.js";
import {connect} from "react-redux";
import {actions} from 'react-redux-form';
import {postComment,featchDishes,featchComments,featchPromos,postFeedback} from "/home/priyanka/react-appl/src/Redux/ActionCreator.js";
console.log(postFeedback);
// import { dispatch } from "rxjs/internal/observable/range";
const mapStateToProps=(state)=>{
  console.log(state);
  return{
    dishes:state.dishes,
    comments:state.comments,
    promotions:state.promotions,
    leaders:state.leaders
  }
}
const mapDispatchToProps=(dispatch)=>({
  postComment:(dishId,author,ratings,comment)=>dispatch(postComment(dishId,author,ratings,comment)),
  featchDishes:()=>{dispatch(featchDishes())},
  featchComments:()=>{dispatch(featchComments())},
  featchPromos:()=>{dispatch(featchPromos())},
  resetFeedbackForm: () => {dispatch(actions.reset('feedback'))},
  postFeedback:(FirstName, LastName, Telephone, Email, agree, contactType, Message) =>{
         dispatch(postFeedback(FirstName, LastName, Telephone, Email, agree, contactType, Message))}
})
const Contactus=(()=><Contact postFeedback={this.props.postFeedback} resetFeedbackForm={this.props.resetFeedbackForm}/>);

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {selecteddish:null };
  }
  componentDidMount()
  {
    this.props.featchDishes();
    this.props.featchPromos();
    this.props.featchComments();
    this.props.postFeedback();
  }
  // ondishselect(dish)
  // {
  //   this.setState({selecteddish:dish});
  // }
  
  render() {
    const DishWithId=({match})=>
  {
    const dish=this.props.dishes.dishes.filter((dish)=>dish.id==match.params.dishId)[0];
    const comment=this.props.comments.comments.filter((comment)=>comment.dishId==match.params.dishId);
    if(dish && comment)
    {
    return(
      <DishDetails dish={dish} comment={comment} name={match.params.dishname} postComment={this.props.postComment} isLoading={this.props.dishes.isLoading}
      errMsg={this.props.dishes.errmsg}/>
    )
    }
    else{
      return(
        <div></div>
      )
    }
  }
    return (
      <div className="App">
        <Header />
        <Switch>
        <Route path="/Home" component={()=><Home 
                   isLoading={this.props.dishes.isLoading}
                   errMsg={this.props.dishes.errmsg} 
                   dishes={this.props.dishes.dishes} 
                   promotion={this.props.promotions.promotions} 
                   leaders={this.props.leaders} 
                   />}/>
        <Route path="/Login" component={Login}/>
        <Route exact path="/About" component={()=><About leaders={this.props.leaders}/>}/>
        <Route exact path="/Contactus" component={Contactus}/>
        <Route exact path="/Menu" component={()=>
           <Menu dishes={this.props.dishes.dishes} isLoading={this.props.dishes.isLoading}
           errMsg={this.props.dishes.errmsg}  />
        } /> 
       {/* <Route path='/DishDetails/:dishId/:dishname' component={()=>{return(<DishDetails dishes={this.props.dishes} comments={this.props.comments}/>)}} /> */}
        <Route path='/DishDetails/:dishId/:dishname' component={DishWithId} />
        <Redirect to="/Home"></Redirect>
        </Switch>
        <Footer/>
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MainComponent));

