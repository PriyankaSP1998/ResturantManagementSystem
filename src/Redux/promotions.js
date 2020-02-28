import {PROMOTIONS} from "/home/priyanka/react-appl/src/component/promotions.js";
import * as actionTypes from "/home/priyanka/react-appl/src/Redux/ActionTypes.js";
export const Promotions=(state = {
    isLoading: true,
    errmsg: null,
    promotions: []
}, action) => {
    switch (action.type) {
        case actionTypes.ADD_PROMOS:
           console.log(action.payload);
            return {
                ...state,
                isLoading: false,
                errmsg: null,
                promotions: action.payload
            }

        case actionTypes.PROMOS_LOADING:
            
                return { 
                    ...state,
                     isLoading:true, 
                     errmsg:null,
                      promotions:[] 
                    }
            
        case actionTypes.PROMOS_FAILED:
            
                return { 
                    ...state, 
                    isLoading:false, 
                    errmsg:action.payload, 
                    promotions:[] }
            

        default: return state;
    }
}