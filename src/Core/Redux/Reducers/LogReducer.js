import {LOGIN_VERIFICATION , FORGOT_PASS , VERIFY_OTP ,CHANGE_PASS } from '../Const';
const initState ={
    auth:[],
}
export const LogReducer =(state=initState , action)=>{
        switch (action.type) {
            case LOGIN_VERIFICATION :
                return{
                    ...state,
                    data: action.payload,
                }
                case FORGOT_PASS :
                    return state={
                              ...state,
                              data: action.payload,
                          }
              case VERIFY_OTP:
                  return state={
                      ...state,
                      data: action.payload,
                  }    
              case CHANGE_PASS:
                  return state={
                      ...state,
                      data: action.payload,
                  }  
            default:
                break;
        }
}