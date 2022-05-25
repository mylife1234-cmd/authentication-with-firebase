import React , {useState, useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import {useHistory, Link} from"react-router-dom"
import { facebookSignInInitiate, githubSignInInitiate, googleSignInInitiate, loginInitiate, microsoftSignInInitiate } from "../redux/action";
import "./Login.css"
const Login = () => {
    const [state,setState] = useState({
        email:"",
        password:""
    })
    const {email,password} = state;
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
        if(!email || !password){
            return;
        }
        dispatch(loginInitiate(email,password));
        setState({email:"",password:""});
    }
    const handleGoogleSignIn = ()=>{
        dispatch(googleSignInInitiate());

    }
    const handleFacebookSignIn = ()=>{
        dispatch(facebookSignInInitiate());  
    }
    const handleChange = (e)=>{
        let {name, value} = e.target;
        setState({...state,[name]:value});
    }
    const handleMicrosoftSignIn = ()=>{
        dispatch(microsoftSignInInitiate());
    }
    const handleGithubSignIn = ()=>{
        dispatch(githubSignInInitiate());
    }
    return(
        <div>
            <div id="logreg-forms">
                <form className="form-signin" onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 font-weight-normal" style={{textAlign:"center"}}>
                    Sign in
                </h1>
                <div className="social-login">
                    <button className="btn google-btn social-btn" type="button" onClick={handleGoogleSignIn}>
                        <span>
                            <i className="fab fa-google"></i>&ensp;Sign in with Google
                        </span>
                    </button>
                    <button className="btn facebook-btn social-btn" type="button" onClick={handleFacebookSignIn}>
                        <span>
                            <i className="fab fa-facebook-f"></i>&ensp;Sign in with Facebook
                        </span>
                    </button>
                    <button className="btn microsoft-btn social-btn" type="button" onClick={handleMicrosoftSignIn}>
                        <span>
                            <i className="fab fa-windows"></i>&ensp;Sign in with Microsoft
                        </span>
                    </button>
                    <button className="btn github-btn social-btn" type="button" onClick={handleGithubSignIn}>
                        <span>
                            <i className="fab fa-github"></i>&ensp;Sign in with Github
                        </span>
                    </button>
                </div>
                <p style={{textAlign:"center"}}>OR</p>
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
                <button className="btn btn-secondary btn-block">
                    <i className="fas fa-sign-in-alt"></i> Sign In
                </button>
                <hr />
                <p>Don't have an account</p>
                <Link to="/register">
                <button className="btn btn-secondary btn-block" type="button" id="btn-signup">
                    <i className="fas fa-user-plus"> </i> Sign up new account 
                </button>
                </Link>
                </form>
            </div>
        </div>
    )
}

export default Login