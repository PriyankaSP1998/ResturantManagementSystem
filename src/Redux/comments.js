
// import {COMMENTS} from "/home/priyanka/react-appl/src/component/comments.js";
import * as ActionType from "/home/priyanka/react-appl/src/Redux/ActionTypes.js";
export const Comments=(state={
    errMsg:null,
    comments:[]
},action)=>
{
    switch(action.type)
    {
        case ActionType.ADD_COMMENT:
            console.log(action.payload);
             return {
                 ...state,
                 isLoading: false,
                 errmsg: null,
                 comments: action.payload
             }
        case ActionType.COMMENTS_FAILED:
            
            return { 
                    ...state, 
                    isLoading:false, 
                    errmsg:action.payload, 
                    comments:[]
                 }     
             
        case ActionType.ADD_COMMENTS:
            
            var comment=action.payload;
            comment.id=state.length;
            return  {...state,comments:state.comments.concat(comment)};

        default:
            return state;
    }
}
