import React,{useEffect,useState} from 'react';
import {useDispatch} from 'react-redux'
import {loginUser} from "../actions/userActions";

const Login = () => {
 
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    
    const dispatch = useDispatch();
    useEffect(()=>{
       if( localStorage.getItem('currentUser')){
          window.location.href = "/"
        }
    },[])

    const login = ()=> {
       
            const user = {email,password};
            dispatch(loginUser(user));
        
  
    }

    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 shadow p-3 mb-5 bg-white rounded">
                    <h2>Login</h2>
                    <div>
                    
                        <input required type="text" placeholder="email" className="form-control" value={email} onChange={(e)=> setEmail(e.target.value)}  />
                        <input required type="text" placeholder="password" className="form-control" value={password} onChange={(e)=> setPassword(e.target.value)}  />
                       
                        <button onClick={login} className="btn mt-3">Login</button>
                        <br />
                        <a href="/register">Go to register page</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;