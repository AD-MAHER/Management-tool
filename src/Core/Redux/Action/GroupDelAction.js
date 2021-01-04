import {DELETE_GROUP} from "../Const";

export const DeleteGroups = (token) => ({
    type:DELETE_GROUP,
    payload:token
})
