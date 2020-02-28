import * as ActionType from "/home/priyanka/react-appl/src/Redux/ActionTypes.js";
export const Feedback=(state={
    errMsg:null,
    feedback:[]
},action)=>
{
    switch(action.type)
    {
        case ActionType.ADD_FEEDBACK:
            console.log(action.payload);
             return {
                 ...state,
                 isLoading: false,
                 errmsg: null,
                 feedback: action.payload
             }
        case ActionType.COMMENTS_FAILED:
            
            return { 
                    ...state, 
                    isLoading:false, 
                    errmsg:action.payload, 
                    feedback:[]
                 }     
             
        // case ActionType.ADD_COMMENTS:
            
        //     var comment=action.payload;
        //     comment.id=state.length;
        //     return  {...state,comments:state.comments.concat(comment)};

        default:
            return state;
    }
}