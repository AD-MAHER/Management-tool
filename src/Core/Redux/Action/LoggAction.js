import { message } from "antd";
import axios from "axios";



export const Login_Verification = (data ) => async dispatch => {
 
  await axios
  .post(`/login`, data)
  .then(res => {
    if (res.data.status === true) {
      localStorage.setItem("status", JSON.stringify(res.data.status));
      localStorage.setItem("authenticated", JSON.stringify(res.data.status));
    
      if (JSON.parse(localStorage.getItem("status")) === true) {
        window.location.assign("/layout/users/");
        localStorage.setItem("users",  res.data.data.username);
        message.success(res.data.message);
      }
    } else {
      localStorage.setItem("status", JSON.stringify(res.data.status));
      message.error(res.data.message);
    }
  })

  .catch((err) => {
  
     localStorage.setItem("proxy",err.message)
    console.log(localStorage.getItem("proxy"))
    if (localStorage.getItem("proxy") ==="Request failed with status code 500") {
      message.error("server did not response ");
    }else{
       message.error(err);
    }
  });
};
