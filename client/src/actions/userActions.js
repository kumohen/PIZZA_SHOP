
import axios from 'axios';

export const registerUser = (user)=> async dispatch =>{
     dispatch({
         type:'USER_REGISTER_REQUEST'
     })
    
     try {
       const res =  await axios.post("/api/users/register",user);
       console.log(res)
         dispatch({
            type:'USER_REGISTER_SUCCESS'
            
        })
     } catch (error) {
        dispatch({
            type:'USER_REGISTER_FAILED',
            payload:error
        })
     }
}

export const loginUser = (user)=> async dispatch =>{
    dispatch({
        type:'USER_LOGIN_REQUEST'
    })
   
    try {
      const res =  await axios.post("/api/users/login",user);
      
        dispatch({
           type:'USER_LOGIN_SUCCESS',
           payload:res.data
       })
       localStorage.setItem('currentUser',JSON.stringify(res.data));
       window.location.href = "/";
    } catch (error) {
       dispatch({
           type:'USER_LOGIN_FAILED',
           payload:error
       })
    }
}


export const logoutUser = ()=> async dispatch =>{
    
       localStorage.removeItem('currentUser');
       window.location.href = "/login";
   
}

export const getAllUser = ()=> async dispatch =>{
    dispatch({
        type:'GET_USERS_REQUEST'
    })
    try {
        const response = await axios.get('/api/users/allUser')
        dispatch({
           type:'GET_USERS_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'GET_USERS_FAILED',
           payload:error
       })
    }
}

export const deleteUser = (userId)=> async dispatch =>{
   
    try {
       await axios.post('/api/users/deleteUser',{userId});
      alert("pizza deleted");
      window.location.reload()
      
    } catch (error) {
        console.log("llslld");
    }
}
