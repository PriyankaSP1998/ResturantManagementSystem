import {ADD_DISHES,DISHES_LOADING,DISHES_FAILED} from  "/home/priyanka/react-appl/src/Redux/ActionTypes.js";
export const Dishes = (state = {
    isLoading: true,
    errmsg: null,
    dishes: []
}, action) => {
    switch (action.type) {
        case ADD_DISHES:
           console.log(action.payload);
            return {
                ...state,
                isLoading: false,
                dishes: action.payload
            }

        case DISHES_LOADING:
            
                return { 
                    ...state,
                     isLoading:true, 
                     errmsg:null,
                      dishes:[] 
                    }
            
        case DISHES_FAILED:
            
                return { 
                    ...state, 
                    isLoading:false, 
                    errmsg:action.payload, 
                    dishes:[] }
            
        default: return state;
    }
}