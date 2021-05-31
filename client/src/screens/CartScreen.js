import React from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {addTocart,deleteFromcart} from "../actions/cartAction";
import Checkout from "../compoents/Checkout"
import AOS from 'aos'
import 'aos/dist/aos.css';
const CartScreen = () => {
    const cartState = useSelector(state => state.cartReducer);
    const  cartItems = cartState.cartItems ;

    const total = cartItems.reduce((x,item) => x + item.price , 0);

    AOS.init();
    const dispatch = useDispatch();
    return (
        <div>
           <div className="row justify-content-center"  data-aos="fade-down">
               <div className="col-md-6">
                    <h2>My Cart</h2>
                    {cartItems.map(item => {
                        return (
                            <div className="flex-container">
                            <div className='text-start m-1 w-100'>
                                <h1>{item.name}</h1>
                                <h1>price:{item.quantity}*{item.prices[0][item.varient]} = {item.price}</h1>
                                <h1 style={{display:'inline'}}>quantity</h1>
                                <i className="fa fa-plus"  aria-hidden="true"
                                  onClick={() => dispatch(addTocart(item,item.quantity+1,item.varient))}></i>
                                <b>{item.quantity}</b>
                                <i className="fa fa-minus"  aria-hidden="true"   onClick={() => dispatch(addTocart(item,item.quantity-1,item.varient))}></i>
                                <hr />
                            </div>
                            <div className=" m-1 w-100">
                            <img src={item.image} alt="skkdk" className="img-fluid" style={{height:'80px',width:"80px"}} />
                            </div>
                            <div className=" m-1 w-100">
                            <i className="fa fa-trash"  aria-hidden="true"
                               onClick={() => dispatch(deleteFromcart(item))}
                            ></i>
                            </div>
                        </div>
                        )
                    })}
                  
               </div>
               <div className="col-md-4">
                   <h2 style={{fontSize:'33px'}}>SubTotal {total}</h2>
                    <Checkout amount={total} />
               </div>
           </div>
        </div>
    );
};

export default CartScreen;