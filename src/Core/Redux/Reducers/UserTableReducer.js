import {DELETE_USER , LIST_USERS} from "../Const";

const initState = {
    tableData:[]  };



    export const UserReducer = (state = initState ,{ action  , payload , type}) => {
        switch(type) {
          case LIST_USERS :
            return{
              ...state,
            tableData : payload
            };
          case DELETE_USER :
            return{
              ...state,
              tableData : state.tableData.filter((users) => users.token !== payload),
            };
        
             
         default: 
         return state ;   
        }
    }