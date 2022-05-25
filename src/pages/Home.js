import React from "react"
import { useDispatch,useSelector } from "react-redux";
import { logoutInitiate } from "../redux/action";
import {}  from "./Login"
import {} from "./Register"
const Home = () => {
    const {currentUser} = useSelector((state)=> state.user);
    const dispatch = useDispatch();
    const handleAuth = () => {
        if(currentUser){
            dispatch(logoutInitiate());
        }
    }
    return(
        <div>
            <h2>Welcome to Demo Lab site</h2>
            <br/>
            <h2>{currentUser.email}</h2>
            <button className="btn btn-danger" onClick={handleAuth}>Logout</button>
        </div>
    )
}

export default Home