import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {registerUser} from "../actions/userActions";
import Error from '../compoents/Error';
import Loading from '../compoents/Loading';
import Success from '../compoents/Success';

const Register = () => {
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[cpassword,setcPassword] = useState("");
    
    const registerState = useSelector(state => state.userReducer);
    const {error,loading ,success} = registerState ;

    const dispatch = useDispatch();

    const register = ()=> {
        if(password !== cpassword){
            alert("password does not matched")
        } else {
            const user = {name,email,password};
            dispatch(registerUser(user));
        }
  
    }

    return (
        <div>
            <div className="row justify-content-center mt-5">
                  {loading && <Loading />}
                  {success && <Success success="You successfully registered" />}
                  {error && <Error error="somthing is worng" />}
                <div className="col-md-5 mt-5 shadow p-3 mb-5 bg-white rounded">
                    <h2>Register</h2>
                    <div>
                        <input required type="text" placeholder="name" className="form-control" value={name} onChange={(e)=> setName(e.target.value)} />
                        <input required type="text" placeholder="email" className="form-control" value={email} onChange={(e)=> setEmail(e.target.value)}  />
                        <input required type="text" placeholder="password" className="form-control" value={password} onChange={(e)=> setPassword(e.target.value)}  />
                        <input required type="text" placeholder="confirmpassword" className="form-control" value={cpassword}  onChange={(e)=> setcPassword(e.target.value)} />
                        <button onClick={register} className="btn mt-3">Register</button>
                        <br />
                        <a href="/login">Go to login page</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;