export const getAllPizzasReducer = (state={pizzas:[]},action)=>{
    switch(action.type){
        case 'GET_PIZZAS_REQUEST':
            return {...state,loading:true}
        case 'GET_PIZZAS_SUCCESS':
            return {
                pizzas:action.payload,loading:false
            }    
        case 'GET_PIZZAS_FAILED':
            return {error:action.payload,loading:false}
        default:
            return state         
    }
}

export const getPizzaById = (state={},action)=>{
    switch(action.type){
        case 'GET_PIZZA_BY_ID':
            return {...state,loading:true}
        case 'GET_PIZZA_BY_ID_SUCCESS':
            return {
                pizza:action.payload,loading:false
            }    
        case 'GET_PIZZA_BY_ID_FAILED':
            return {error:action.payload,loading:false}
        default:
            return state         
    }
}


export const addPizzaReducer = (state={},action)=>{
    switch(action.type){
        case 'ADD_PIZZA_REQUEST':
            return {...state,loading:true}
        case 'ADD_PIZZA_SUCCESS':
            return {
                loading:false,success:true 
            }    
        case 'ADD_PIZZA_FAILED':
            return {error:action.payload,loading:false}
        default:
            return state         
    }
}


export const editPizzaReducer = (state={},action)=>{
    switch(action.type){
        case 'UPDATE_PIZZA_REQUEST':
            return {...state,editloading:true}
        case 'UPDATE_PIZZA_SUCCESS':
            return {
                editloading:false,editsuccess:true 
            }    
        case 'UPDATE_PIZZA_FAILED':
            return {editerror:action.payload,editloading:false}
        default:
            return state         
    }
}