import {DELETE_POST} from "../Const";

export const DeletePosts = (token) => ({
    type:DELETE_POST,
    payload:token
})
