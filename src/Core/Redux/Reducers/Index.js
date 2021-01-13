import {BlogReducer} from "./BlogReducer";
import {UserReducer} from "./UserTableReducer";
import {GroupReducer} from "./GroupTableReducer";
import {combineReducers } from "redux";

export default combineReducers  (

    {
        blogpost: BlogReducer,
        usertable: UserReducer,
        grouptable : GroupReducer,
        
      
    }
)