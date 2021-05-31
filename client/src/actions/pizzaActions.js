
import axios from 'axios';

export const getAllPizzas = ()=> async dispatch =>{
     dispatch({
         type:'GET_PIZZAS_REQUEST'
     })
     try {
         const response = await axios.get('/api/pizzas/getAllPizzas')
         dispatch({
            type:'GET_PIZZAS_SUCCESS',
            payload:response.data
        })
     } catch (error) {
        dispatch({
            type:'GET_PIZZAS_FAILED',
            payload:error
        })
     }
}


export const getPizzaById = (id)=> async dispatch =>{
    dispatch({
        type:'GET_PIZZA_BY_ID'
    })
    try {
        const response = await axios.post('/api/pizzas/getPizzaById',{id})
        dispatch({
           type:'GET_PIZZA_BY_ID_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'GET_PIZZA_BY_ID_FAILED',
           payload:error
       })
    }
}
export const addPizza = (pizza)=> async dispatch =>{
    dispatch({
        type:'ADD_PIZZA_REQUEST'
    })
    try {
        const response = await axios.post('/api/pizzas/addPizza',{pizza});
        console.log(response)
        dispatch({
           type:'ADD_PIZZA_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'ADD_PIZZA_FAILED',
           payload:error
       })
    }
}

export const updatePizza = (pizza)=> async dispatch =>{
    dispatch({
        type:'UPDATE_PIZZA_REQUEST'
    })
    try {
        const response = await axios.post('/api/pizzas/updatePizza',{pizza});
        console.log(response)
        dispatch({
           type:'UPDATE_PIZZA_SUCCESS',
           payload:response.data
       })
       window.location.href="/admin/pizzalist"
    } catch (error) {
       dispatch({
           type:'UPDATE_PIZZA_FAILED',
           payload:error
       })
    }
}
export const deletePizza = (id)=> async dispatch =>{
   
    try {
       await axios.post('/api/pizzas/deletePizza',{id});
      alert("pizza deleted");
      window.location.reload()
      
    } catch (error) {
        console.log("llslld");
    }
}

export const filterPizzas = (searchKey,category)=> async dispatch =>{
    dispatch({
        type:'GET_PIZZAS_REQUEST'
    })
    var filterItem ;
    try {
        const response = await axios.get('/api/pizzas/getAllPizzas')
        filterItem = response.data.filter(pizza => pizza.name.toLowerCase().includes(searchKey));
        if(category !== 'all'){
            filterItem = response.data.filter(pizza => pizza.category.toLowerCase() === category);
        }
        dispatch({
           type:'GET_PIZZAS_SUCCESS',
           payload:filterItem
       })
    } catch (error) {
       dispatch({
           type:'GET_PIZZAS_FAILED',
           payload:error
       })
    }
}