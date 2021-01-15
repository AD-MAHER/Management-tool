

import {DELETE_USER , LIST_USERS} from "../Const";

import axios from "axios";




export const List_Users = ()=>async  dispatch =>{
        
    const res= await axios.get('http://10.1.1.144:8081/user/listAll');
    dispatch({
        type:LIST_USERS,
        payload:res.data.data,
    })
}
export const DeleteUsers = (token) => ({
    type:DELETE_USER,
    payload:token
})

