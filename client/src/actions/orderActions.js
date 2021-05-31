import axios from 'axios'
export const orderAction = (token,amount)=> async (dispatch,getState) =>{
   

    dispatch({
        type:"PLACE_ORDER_REQREST",
        
    })


    //cartReducer,userReducer,userLoginReducer
   const currentUser = getState().userLoginReducer.currentUser ;
    const cartItems = getState().cartReducer.cartItems
   
    try {
        const response = await axios.post('/api/orders/placeorder',{token,amount,currentUser,cartItems})
        console.log(response)
        dispatch({
           type:'PLACE_ORDER_SUCCESS',
          
       })
    } catch (error) {
       dispatch({
           type:'PLACE_ORDER_FAILED',
           payload:error
       })
    }
}

export const getUsersOrder = ()=> async (dispatch,getState) =>{
    dispatch({
        type:'GET_ORDERS_REQUEST'
    })
    const currentUser = getState().userLoginReducer.currentUser ;
    try {
        const response = await axios.post('/api/orders/getUsersOrder',{userId:currentUser._id})
        console.log(response)
        dispatch({
           type:'GET_ORDERS_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'GET_ORDERS_FAILED',
           payload:error
       })
    }
}

export const getAllOrder = ()=> async (dispatch,getState) =>{
    dispatch({
        type:'GET_ALL_ORDERS_REQUEST'
    })
 
    try {
        const response = await axios.get('/api/orders/allOrder')
        console.log(response)
        dispatch({
           type:'GET_ALL_ORDERS_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'GET_ALL_ORDERS_FAILED',
           payload:error
       })
    }
}

export const deliverOrder = (id)=> async (dispatch,getState) =>{
  
 
    try {
        const response = await axios.post('/api/orders/deliver',{id})
        console.log(response)
        const result = await axios.get('/api/orders/allOrder')
        dispatch({
            type:'GET_ALL_ORDERS_SUCCESS',
            payload:result.data
        })
    } catch (error) {
       console.log(error)
    }
}

