export const placeOrderReducer = (state={},action)=>{
    switch(action.type){
        case 'PLACE_ORDER_REQREST':
            return {
                loading:true
            }
        case 'PLACE_ORDER_SUCCESS':
            return {loading:false,success:true}
        case 'PLACE_ORDER_FAILED':          
            return {loading:false,error:action.payload}
       
        default:
            return state         
    }
}

export const getUsersOrdersReducer = (state={orders:[]},action)=>{
    switch(action.type){
        case 'GET_ORDERS_REQUEST':
            return {...state,loading:true}
        case 'GET_ORDERS_SUCCESS':
            return {
                orders:action.payload,loading:false
            }    
        case 'GET_ORDERS_FAILED':
            return {error:action.payload,loading:false}
        default:
            return state         
    }
}

export const getALLsOrdersReducer = (state={orders:[]},action)=>{
    switch(action.type){
        case 'GET_ALL_ORDERS_REQUEST':
            return {...state,loading:true}
        case 'GET_ALL_ORDERS_SUCCESS':
            return {
                orders:action.payload,loading:false
            }    
        case 'GET_ALL_ORDERS_FAILED':
            return {error:action.payload,loading:false}
        default:
            return state         
    }
}