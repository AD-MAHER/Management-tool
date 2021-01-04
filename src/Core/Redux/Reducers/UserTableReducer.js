import {DELETE_USER} from "../Const";

const userState = {
    tableData:[{
        firstName: "Ajay",
        lastName: "Last",
        designation: "Developer",
        lastLogin: "02 Aug 2020, 06:33",
        email: "first.last@gmail.com",
        token: "1"
      },
      {
        firstName: "Milan",
        lastName: "Last",
        designation: "Developer",
        lastLogin: "02 Aug 2020, 06:33",
        email: "first.last@gmail.com",
        token: "2"
    
      },
      {
        firstName: "First",
        lastName: "Last",
        designation: "Developer",
        lastLogin: "02 Aug 2020, 06:33",
        email: "first.last@gmail.com",
        token: "3"
      },
      {
        firstName: "First",
        lastName: "Last",
        designation: "Developer",
        lastLogin: "02 Aug 2020, 06:33",
        email: "first.last@gmail.com",
        token: "4"
    
      },
      {
        firstName: "First",
        lastName: "Last",
        designation: "Developer",
        lastLogin: "02 Aug 2020, 06:33",
        email: "first.last@gmail.com",
        token: "5"
      },
      {
        firstName: "First",
        lastName: "Last",
        designation: "Developer",
        lastLogin: "02 Aug 2020, 06:33",
        email: "first.last@gmail.com",
        token: "6"
    
      },
      {
        firstName: "First",
        lastName: "Last",
        designation: "Developer",
        lastLogin: "02 Aug 2020, 06:33",
        email: "first.last@gmail.com",
        token: "7"
      },
      {
        firstName: "First",
        lastName: "Last",
        designation: "Developer",
        lastLogin: "02 Aug 2020, 06:33",
        email: "first.last@gmail.com",
        token: "8"
    
      },
      {
        firstName: "First",
        lastName: "Last",
        designation: "Developer",
        lastLogin: "02 Aug 2020, 06:33",
        email: "first.last@gmail.com",
        token: "9"
      },
      {
        firstName: "First",
        lastName: "Last",
        designation: "Developer",
        lastLogin: "02 Aug 2020, 06:33",
        email: "first.last@gmail.com",
        token: "10"
    
      },
      {
        firstName: "First",
        lastName: "Last",
        designation: "Developer",
        lastLogin: "02 Aug 2020, 06:33",
        email: "first.last@gmail.com",
        token: "11"
      },
      {
        firstName: "First",
        lastName: "Last",
        designation: "Developer",
        lastLogin: "02 Aug 2020, 06:33",
        email: "first.last@gmail.com",
        token: "12"
    
      },
      {
        firstName: "First",
        lastName: "Last",
        designation: "Developer",
        lastLogin: "02 Aug 2020, 06:33",
        email: "first.last@gmail.com",
        token: "13"
      },
      {
        firstName: "First",
        lastName: "Last",
        designation: "Developer",
        lastLogin: "02 Aug 2020, 06:33",
        email: "first.last@gmail.com",
        token: "14"
    
      },
      {
        firstName: "First",
        lastName: "Last",
        designation: "Developer",
        lastLogin: "02 Aug 2020, 06:33",
        email: "first.last@gmail.com",
        token: "15"
      },
      {
        firstName: "First",
        lastName: "Last",
        designation: "Developer",
        lastLogin: "02 Aug 2020, 06:33",
        email: "first.last@gmail.com",
        token: "16"
    
      },
      {
        firstName: "First",
        lastName: "Last",
        designation: "Developer",
        lastLogin: "02 Aug 2020, 06:33",
        email: "first.last@gmail.com",
        token: "17"
      },
      {
        firstName: "First",
        lastName: "Last",
        designation: "Developer",
        lastLogin: "02 Aug 2020, 06:33",
        email: "first.last@gmail.com",
        token: "18"
    
      },
      {
        firstName: "First",
        lastName: "Last",
        designation: "Developer",
        lastLogin: "02 Aug 2020, 06:33",
        email: "first.last@gmail.com",
        token: "19"
      },
      {
        firstName: "First",
        lastName: "Last",
        designation: "Developer",
        lastLogin: "02 Aug 2020, 06:33",
        email: "first.last@gmail.com",
        token: "20"
    
      },
      {
        firstName: "First",
        lastName: "Last",
        designation: "Developer",
        lastLogin: "02 Aug 2020, 06:33",
        email: "first.last@gmail.com",
        token: "21"
      },
      {
        firstName: "First",
        lastName: "Last",
        designation: "Developer",
        lastLogin: "02 Aug 2020, 06:33",
        email: "first.last@gmail.com",
        token: "22"
    
      },]
  
    };



    export const UserReducer = (state = userState , action ) => {
        switch(action.type) {
          case DELETE_USER :
            return{
              ...state,
              tableData : state.tableData.filter((users) => users.token !== action.payload),
            };
        
             
         default: 
         return state ;   
        }
    }