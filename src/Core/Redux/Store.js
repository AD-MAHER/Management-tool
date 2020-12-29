import {createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';


//Action
 
export const addPost = (post) => {
    return {
        type: "CREATE_POST",
        payload:post,
    }
}
const postState = {
    posts:[
        {
            token: "1",
            title: "Sample Post two",
            description: "This Post is created for sample data test",
            author:"  John Dao",
            createdTime: "02 Jul 2020, 06:33",
            hashtags: "tag1,sampletag2,reactjs,usecase1",
            //apply any static image and it's path here
            coverImg: '../Images/img1.png' 
         },
        {
            token: "2",
            title: "Sample Post One jhbffgihag aidughepruhfusigrhguiai",
            description: "This Post is created for sample data test",
            author: "John Dao",
            createdTime: "02 Jul 2020, 06:33",
            hashtags: "tag1,sampletag2,reactjs,usecase1",
            //apply any static image and it's path here
            coverImg:'../Images/img1.png'
        },
        {
            token: "3",
            title: "Sample Post One",
            description: "This Post is created for sample data test",
            author: "John Dao",
            createdTime: "02 Jul 2020, 06:33",
            hashtags: "tag1,sampletag2,reactjs,usecase1",
            //apply any static image and it's path here
            coverImg:'../Images/img1.png'
        },
        {
            token: "4",
            title: "Sample Post One",
            description: "This Post is created for sample data test",
            author: "John Dao",
            createdTime: "02 Jul 2020, 06:33",
            hashtags: "tag1,sampletag2,reactjs,usecase1",
            //apply any static image and it's path here
            coverImg:'../Images/img1.png'
        },
        {
            token: "5",
            title: "Sample Post One",
            description: "This Post is created for sample data test",
            author: "John Dao",
            createdTime: "02 Jul 2020, 06:33",
            hashtags: "tag1,sampletag2,reactjs,usecase1",
            //apply any static image and it's path here
            coverImg:'../Images/img1.png'
        },
        {
            token: "6",
            title: "Sample Post One",
            description: "This Post is created for sample data test",
            author: "John Dao",
            createdTime: "02 Jul 2020, 06:33",
            hashtags: "tag1,sampletag2,reactjs,usecase1",
            //apply any static image and it's path here
            coverImg:'../Images/img1.png'
        },
        {
            token: "7",
            title: "Sample Post One",
            description: "This Post is created for sample data test",
            author: "John Dao",
            createdTime: "02 Jul 2020, 06:33",
            hashtags: "tag1,sampletag2,reactjs,usecase1",
            //apply any static image and it's path here
            coverImg:'../Images/img1.png'
        },
        {
            token: "8",
            title: "Sample Post One",
            description: "This Post is created for sample data test",
            author: "John Dao",
            createdTime: "02 Jul 2020, 06:33",
            hashtags: "tag1,sampletag2,reactjs,usecase1",
            //apply any static image and it's path here
            coverImg:'../Images/img1.png'
        },
        {
            token: "9",
            title: "Sample Post One",
            description: "This Post is created for sample data test",
            author: "John Dao",
            createdTime: "02 Jul 2020, 06:33",
            hashtags: "tag1,sampletag2,reactjs,usecase1",
            //apply any static image and it's path here
            coverImg: '../Images/img1.png'
        },
        {
            token: "10",
            title: "Sample Post One",
            description: "This Post is created for sample data test",
            author: "John Dao",
            createdTime: "02 Jul 2020, 06:33",
            hashtags: "tag1,sampletag2,reactjs,usecase1",
            //apply any static image and it's path here
            coverImg:'../Images/img1.png'
        },
        {
            token: "11",
            title: "Sample Post One",
            description: "This Post is created for sample data test",
            author: "John Dao",
            createdTime: "02 Jul 2020, 06:33",
            hashtags: "tag1,sampletag2,reactjs,usecase1",
            //apply any static image and it's path here
            coverImg:'../Images/img1.png'
        },
        {
            token: "12",
            title: "Sample Post One",
            description: "This Post is created for sample data test",
            author: "John Dao",
            createdTime: "02 Jul 2020, 06:33",
            hashtags: "tag1,sampletag2,reactjs,usecase1",
            //apply any static image and it's path here
            coverImg: '../Images/img1.png'
        },
        {
            token: "13",
            title: "Sample Post One",
            description: "This Post is created for sample data test",
            author: "John Dao",
            createdTime: "02 Jul 2020, 06:33",
            hashtags: "tag1,sampletag2,reactjs,usecase1",
            //apply any static image and it's path here
            coverImg:'../Images/img1.png'
        },
        {
            token: "14",
            title: "Sample Post One",
            description: "This Post is created for sample data test",
            author: "John Dao",
            createdTime: "02 Jul 2020, 06:33",
            hashtags: "tag1,sampletag2,reactjs,usecase1",
            //apply any static image and it's path here
            coverImg:'../Images/img1.png'
        },
        {
            token: "15",
            title: "Sample Post One",
            description: "This Post is created for sample data test",
            author: "John Dao",
            createdTime: "02 Jul 2020, 06:33",
            hashtags: "tag1,sampletag2,reactjs,usecase1",
            //apply any static image and it's path here
            coverImg:'../Images/img1.png'
        }
    ]
}; 

//  const menus=[
//     {
//         //unique key
//         key:"users",
//         //tooltip display using this
//         name:"Users",
//         //render icon key
//         iconName:"usersMenu",
//         //apply Link using this variable, 
//         routingPath:"/layout1/"
//     },
//     {
//         key:"userGroups",
//         name:"User Groups",
//         iconName:"groupsMenu",
//         routingPath:"/layout1/groups"
//     },
//     {
//         key:"blog",
//         name:"Blog",
//         iconName:"blogMenu",
//         routingPath:"/layout1/blog"
//     },
//     {
//         key:"chatroom",
//         name:"Chatroom",
//         iconName:"chatroomMenu",
//         routingPath:"/layout1/chatroom"
//     },
//     {
//         key:"taskmanagement",
//         name:"Task Management",
//         iconName:"taskmanagementMenu",
//         routingPath:"/layout1/taskmanagement"
//     },
// ]


// const MenuReducer = (state = menus, action ) => {
//     switch (action.type){
        
//         default :
//         return state.menus ;
//     }
// }

const BlogReducer = (state = postState , action ) => {
    switch(action.type) {
        case "CREATE_POST":
            return {
                posts : [action.payload ,  ...state.posts]
            }
     default: 
     return state ;   
    }
}

const store = createStore(BlogReducer, composeWithDevTools())

export default store;