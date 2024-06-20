// khởi tạo state
import { Job } from "../../interface";
const initialJob:Job[] =[
    {
        id:1,
        name:"học redux",
        status:false
    },
    {
        id:2,
        name:"code redux",
        status:false
    },
    {
        id:3,
        name:"thực hành redux",
        status:false
    }
];

// khởi tạo hàm reducer
const jobReducer = (state=initialJob, action:any)=>{
    switch (action.type) {
        case "ADD":
            return [...state]
        case "DELETE":
            return [...state]
        case "UPDATE":
            return [...state]
        default:
            return state;
    }
}
export default jobReducer;