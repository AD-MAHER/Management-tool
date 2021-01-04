import { DELETE_GROUP } from "../Const";

const groupState = {
    groupData:[{
            groupName: "Zeronsec",
            groupType: "Private",
            createdAt: "02 Aug 2020, 06:33",
            token: "1"
        },
        {
            groupName: "Focal",
            groupType: "Private",
            createdAt: "02 Aug 2020, 06:33",
            token: "2"
    
        },
        {
            groupName: "DSTC",
            groupType: "Private",
            createdAt: "02 Aug 2020, 06:33",
            token: "3"
        },
        {
            groupName: "group Name",
            groupType: "Private",
            createdAt: "02 Aug 2020, 06:33",
            token: "4"
    
        },
        {
            groupName: "group Name",
            groupType: "Private",
            createdAt: "02 Aug 2020, 06:33",
            token: "5"
        },
        {
            groupName: "group Name",
            groupType: "Private",
            createdAt: "02 Aug 2020, 06:33",
            token: "6"
    
        },
        {
            groupName: "group Name",
            groupType: "Private",
            createdAt: "02 Aug 2020, 06:33",
            token: "7"
        },
        {
            groupName: "group Name",
            groupType: "Private",
            createdAt: "02 Aug 2020, 06:33",
            token: "8"
    
        },
        {
            groupName: "group Name",
            groupType: "Private",
            createdAt: "02 Aug 2020, 06:33",
            token: "9"
        },
        {
            groupName: "group Name",
            groupType: "Private",
            createdAt: "02 Aug 2020, 06:33",
            token: "10"
    
        },
        {
            groupName: "group Name",
            groupType: "Private",
            createdAt: "02 Aug 2020, 06:33",
            token: "11"
        },
        {
            groupName: "group Name",
            groupType: "Private",
            createdAt: "02 Aug 2020, 06:33",
            token: "12"
    
        },
        {
            groupName: "group Name",
            groupType: "Private",
            createdAt: "02 Aug 2020, 06:33",
            token: "13"
        },
        {
            groupName: "group Name",
            groupType: "Private",
            createdAt: "02 Aug 2020, 06:33",
            token: "14"
    
        },
        {
            groupName: "group Name",
            groupType: "Private",
            createdAt: "02 Aug 2020, 06:33",
            token: "15"
        },
        {
            groupName: "group Name",
            groupType: "Private",
            createdAt: "02 Aug 2020, 06:33",
            token: "16"
    
        },
        {
            groupName: "group Name",
            groupType: "Private",
            createdAt: "02 Aug 2020, 06:33",
            token: "17"
        },
        {
            groupName: "group Name",
            groupType: "Private",
            createdAt: "02 Aug 2020, 06:33",
            token: "18"
    
        },
        {
            groupName: "group Name",
            groupType: "Private",
            createdAt: "02 Aug 2020, 06:33",
            token: "19"
        },
        {
            groupName: "group Name",
            groupType: "Private",
            createdAt: "02 Aug 2020, 06:33",
            token: "20"
    
        },
        {
            groupName: "group Name",
            groupType: "Private",
            createdAt: "02 Aug 2020, 06:33",
            token: "21"
        },
        {
            groupName: "group Name",
            groupType: "Private",
            createdAt: "02 Aug 2020, 06:33",
            token: "22"
    
        },]
    
    };



    export const GroupReducer = (state = groupState , action ) => {
        switch(action.type) {
            case DELETE_GROUP :
            return{
              ...state,
              groupData : state.groupData.filter((groups) => groups.token !== action.payload),
            };
             
         default: 
         return state ;   
        }
    }