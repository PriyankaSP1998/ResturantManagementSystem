import * as ActionType from "/home/priyanka/react-appl/src/Redux/ActionTypes.js";
import {baseUrl} from "/home/priyanka/react-appl/src/baseUrl.js";

export const addComment = ( comment) =>
    ({
        type: ActionType.ADD_COMMENTS,
        payload:comment
    });
export const postComment=(dishId,rating,author,comment)=>(dispatch)=>
{
    const newComment=
    {
        dishId:dishId,
        rating:rating,
        author:author,
        comment:comment
    }
    newComment.date=new Date().toISOString();
    return fetch(baseUrl+'comments',{
        method:'POST',
        body:JSON.stringify(newComment),
        headers:{
            'Content-Type':'application/json'
        },
        credentials:'same-origin'
    })
    .then(response=>{
        if(response.ok)
        {
            return response;
        }
        else{
            const error=new Error('Error'+response.status+': ' +response.statusText);
            error.response=response;
            throw error;
        }
    },
    error=>{
     const   errmsg=new Error(error.message);
        throw errmsg;
    })
    .then(response=>response.json())
    .then(response=>dispatch(addComment(response)))
    .catch(error=>{
        console.log("post error"+error.message)
        alert("your comment cannot be posted \n Error"+error.message);
    })
}

 export const featchDishes=()=>(dispatch)=>
 {
     dispatch(dishLoading(false));
    return fetch(baseUrl+'dishes')
    .then(response=>{
        if(response.ok)
        {
            return response;
        }
        else{
            const error=new Error('Error'+response.status+': ' +response.statusText);
            error.response=response;
            throw error;
        }
    },
    error=>{
     const   errmsg=new Error(error.message);
        throw errmsg;
    }
    )
    .then(response=>response.json())
    .then(dishes=>dispatch(addDishes(dishes)))
    .catch(error=>{dispatch(dishesFailed(error.message))})
 }
 
 export const dishLoading=()=>({
     type:ActionType.DISHES_LOADING
 });
 export const dishesFailed=(errmsg)=>({
        type:ActionType.DISHES_FAILED,
        payload:errmsg
 });
 export const addDishes=(dishes)=>(
     {
        
         type:ActionType.ADD_DISHES,
         payload:dishes
     }
 )
 export const featchComments=()=>(dispatch)=>
 {
    return fetch(baseUrl+'comments')
    .then(response=>{
        if(response.ok)
        {
            return response;
        }
        else{
            const error=new Error('Error'+response.status+': ' +response.statusText);
            error.response=response;
            throw error;
        }
    },
    error=>{
       const  errmsg=new Error(error.message);
        throw errmsg;
    }
    )
    .then(response=>response.json())
    .then(comments=>dispatch(addComments(comments)))
    .catch(error=>{dispatch(commentsFailed(error.message))})
 }

 export const commentsFailed=(errmsg)=>({
    type:ActionType.COMMENTS_FAILED,
    payload:errmsg
});
export const addComments=(comments)=>(
 {
    
     type:ActionType.ADD_COMMENT,
     payload:comments
 }
)

export const featchPromos=()=>(dispatch)=>
 {
     dispatch(promosLoading(false));
    return fetch(baseUrl+'promotions')
    .then(response=>{
        if(response.ok)
        {
            return response;
        }
        else{
            const error=new Error('Error'+response.status+': ' +response.statusText);
            error.response=response;
            throw error;
        }
    },
    error=>{
      const  errmsg=new Error(error.message);
        throw errmsg;
    }
    )
    .then(response=>response.json())
    .then(promotions=>dispatch(addPromos(promotions)))
    .catch(error=>{dispatch(promosFailed(error.message))})
 }
 
 export const promosLoading=()=>({
     type:ActionType.PROMOS_LOADING
 });
 export const promosFailed=(errmsg)=>({
        type:ActionType.PROMOS_FAILED,
        payload:errmsg
 });
 export const addPromos=(promotions)=>(
     {
        
         type:ActionType.ADD_PROMOS,
         payload:promotions
     }
 )

 export const postFeedback=(FirstName, LastName, Telephone, Email, agree, contactType, Message) => (dispatch) =>
{
    const newFeedback={
        FirstName:FirstName,
        LastName:LastName,
        Telephone:Telephone,
        Email: Email, 
        agree:agree,
        contactType:contactType,
        Message:Message
    }
    newFeedback.date=new Date().toDateString();
    // newFeedback.time=new Date(). toLocaleTimeString();
    return fetch(baseUrl+'feedback',{
        method :'POST',
        body:JSON.stringify(newFeedback),
        headers:
        {
            'Content-Type':'application/json'
        },
        credentials:'same-origin'
    })
    .then(response=>
        {
            if(response.ok)
            {
                return response;
            }
            else{
                var error=new Error('Error'+response.status+":"+response.statusText)
                error.response=response;
                throw error;  
            }
        },
        error=>
        {
            var errmess=new Error(error.message);
            throw errmess;
            
        })
        .then(response=>response.json())
        .catch(error=>{
            alert('Error'+error)
        }
        )
    }
