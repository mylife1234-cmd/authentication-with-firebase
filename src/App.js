import React,{useEffect} from 'react';
import './App.css';
import {BrowserRouter, Switch,Route} from "react-router-dom"
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import UserRoute from './components/userRoute';
import { useDispatch } from "react-redux";
import { auth } from './firebase';
import { setUser } from './redux/action';
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(setUser(authUser))
      }
      else{
        dispatch(setUser(null))
      }
    })
  },[dispatch])
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <UserRoute exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
