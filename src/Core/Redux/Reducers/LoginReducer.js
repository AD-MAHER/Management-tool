import {LOGIN_VERIFICATION} from '../Const';
const initState ={
    admin:[]
}
export const LoginReducer =(state=initState , action)=>{
        switch (action.type) {
            case LOGIN_VERIFICATION :
                return{
                    ...state,
                    data: action.payload,
                }
            default:
                break;
        }
}