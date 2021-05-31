


export const addTocart = (pizza,quantity,varient)=> async (dispatch,getState) =>{
    var cartItem ={
        name:pizza.name,
        _id:pizza._id ,
        image:pizza.image ,
        quantity:Number(quantity),
        varient:varient,
        prices:pizza.prices,
        price:pizza.prices[0][varient]*quantity 
    }
    if(cartItem.quantity > 10){
        alert("ou can't add more than 10 items")
    } else {
        if(cartItem.quantity === 0){
            dispatch({
                type:"DELETE_FROM_CART",
                payload:pizza
            })
        }else {
            dispatch({
                type:"ADD_TO_CART",
                payload:cartItem
            })
        }
        
    }
   
    const cartItems = getState().cartReducer.cartItems ;
     localStorage.setItem('cartItems',JSON.stringify(cartItems));
    
}

export const deleteFromcart = (pizza)=> async (dispatch,getState) =>{
   

    dispatch({
        type:"DELETE_FROM_CART",
        payload:pizza
    })
   
    const cartItems = getState().cartReducer.cartItems ;
    localStorage.setItem('cartItems',JSON.stringify(cartItems));
}