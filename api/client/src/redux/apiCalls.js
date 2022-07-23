import { publicRequest } from "../requestMethod";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login=async(dispatch,user)=>{
    dispatch(loginStart());
    console.log(user);
    
    try{
            const res=await publicRequest.post("/auth/login",user);
             dispatch(loginSuccess(res.data));
        }catch(err){
            console.log("hiiiii");
        dispatch(loginFailure());
    }
}