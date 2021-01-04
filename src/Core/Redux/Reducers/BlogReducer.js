import { DELETE_POST } from "../Const";

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


export const BlogReducer = (state = postState , action ) => {
    switch(action.type) {
        case DELETE_POST :
            return{
              ...state,
              posts : state.posts.filter((posted) => posted.token !== action.payload),
            };
         
     default: 
     return state ;   
    }
}