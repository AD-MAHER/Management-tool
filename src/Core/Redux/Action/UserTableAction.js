

import {DELETE_USER , LIST_USERS , CREATE_USER} from "../Const";
import {message} from 'antd'
import axios from "axios";



export const List_Users = ()=>async  dispatch =>{
        
    const res= await axios.get('http://10.1.1.144:8081/user/listAll');
    dispatch({
        type:LIST_USERS,
        payload:res.data.data,
    })
}
export const Delete = (token) => ({
    type:DELETE_USER,
    payload:token
})

export const DeleteUsers = (token)=> {
    return (dispatch)=>{
        return axios.delete(`http://10.1.1.144:8081/user/delete/${token}`).then(
            (res)=>{
                console.log('res',res);
                if (res.data.status===true) {
                    
                    message.success(res.data.message,10);
                    dispatch(Delete(token));
                }
                else{
                    message.error(res.data.message)
                }
            }
        )
        .catch(
            (err)=>{
                alert(err);
            }
        )
    }
}

export const Create_User = (data)=>async dispatch=>{

    await axios.post(`http://10.1.1.144:8081/user/create`,data).then(
        (res)=>{
            if (res.data.status===true) {
                console.log(res.data.data)

                  
                message.success(res.data.message,10);
               
                setTimeout(() => {
                    
                    // window.location.assign('/layout/users');
                    
                }, 1000);
                
           
            }
            else{
                message.error(res.data.message);
            }
        }
    )
    .catch(
        (err)=>{
            alert(err);
        }
    )
}
export const Update_User = (token, values) => {
    return (dispatch) => {
        return axios.put(`http://10.1.1.144:8081/user/update/${token}` ,values).then(
            (res) => {
                console.log('res', res);
                if (res.data.status === true) {

                    message.success(res.data.message, 10);
                    
                }
                else {
                    message.error(res.data.message)
                }
            }
        )
            .catch(
                (err) => {
                    alert(err);
                }
            )
    }
}