import axios from "axios";
export const Login_Verification=(data)=> async (dispatch) =>{
   await axios.post(`/login`,data).then(
    res =>{
       localStorage.setItem("status", JSON.stringify(res.data.status));
        if (JSON.parse(localStorage.getItem("status"))===true) {
            window.location.assign('/zeronsec/users');
        }
    })
    .catch(
        err=>{
         localStorage.setItem('status', JSON.stringify(err.data.status));   
         console.log(err);
        window.location.assign('/logins');
    }
   )
}
