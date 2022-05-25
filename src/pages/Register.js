import React , {useState, useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import {useHistory, Link} from"react-router-dom"
import { registerInitiate } from "../redux/action";
import "./Register.css"
const Register = () => {
    const [state,setState] = useState({
        email:"",
        password:"",
        displayName:"",
        passwordConfirm :""
    })
    const {email,password,displayName,passwordConfirm} = state;
    const {currentUser} = useSelector((state)=> state.user)
    const history = useHistory();
    useEffect(()=>{
        if(currentUser){
            history.push("/");
        }
    },[currentUser,history]);
    const dispatch = useDispatch();
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(password !== passwordConfirm){
            return;
        }
        dispatch(registerInitiate(email,password,displayName));
        setState(
            {
                email:"",
                displayName:"",
                password:"",
                passwordConfirm:""
            }
        )
    }

    const handleChange = (e)=>{
        let {name, value} = e.target;
        setState({...state,[name]:value});
    }
    
    return(
        <div>
            <div id="register-form">
                <form className="form-signup" onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 font-weight-normal" style={{textAlign:"center"}}>
                    Sign in
                </h1>
                <input 
                type="text"
                id="displayName"
                className="form-control"
                placeholder="Full Name"
                name="displayName"
                onChange={handleChange}
                value={displayName}
                required/>
                <br/>
                <input 
                type="email"
                id="inputEmail"
                className="form-control"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={email}
                required/>
                <br/>
                <input 
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={password }
                required/>
                <br/>
                <input 
                type="password"
                id="inputRePassword"
                className="form-control"
                placeholder="Repeat password"
                name="passwordConfirm"
                onChange={handleChange}
                value={passwordConfirm}
                required/>
                <br/>
                <button className="btn btn-primary btn-block">
                    <i className="fas fa-user-plus"></i> Sign Up
                </button>
                <hr />
                <p>Don't have an account</p>
                <Link to="/login">
               <i className="fas fa-angle-left"></i> Back
                </Link>
                </form>
            </div>
        </div>
    )
}

export default Register