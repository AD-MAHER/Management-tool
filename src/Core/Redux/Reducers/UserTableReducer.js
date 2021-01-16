import {DELETE_USER , LIST_USERS , CREATE_USER , UPDATE_USER} from "../Const";

const initState = {
    tableData:[] , 
    updateData: null,};



    export const UserReducer = (state = initState ,{ action  , payload , type}) => {
        switch(type) {
          case LIST_USERS :
            return{
              ...state,
            tableData : payload
            };
            case CREATE_USER :
              return{
                ...state,
              tableData : payload
              };
          case DELETE_USER :
            return{
              ...state,
              tableData : state.tableData.filter((users) => users.token !== payload),
            };
            case UPDATE_USER :
              return{
                ...state,
                updateData : state.tableData.filter((users) => users.token !== payload),
               
                
              
              };
        
             
         default: 
         return state ;   
        }
    }