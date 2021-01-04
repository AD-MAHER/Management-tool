

import {DELETE_USER} from "../Const";

export const DeleteUsers = (token) => ({
    type:DELETE_USER,
    payload:token
})

