import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {getUsersOrder} from "../actions/orderActions";
import Error from '../compoents/Error';
import Loading from '../compoents/Loading';


const OrderScreen = () => {

    const dispatch = useDispatch();
    const orderState = useSelector(state => state.getUsersOrdersReducer);
    const {error,orders,loading} = orderState ;

    useEffect(()=>{
       dispatch(getUsersOrder())
    },[])
    return (
        <div>
            <h2>My order</h2>
            <hr />
            <div className="row justify-content-center">
            {loading && <Loading />}
            {error && <Error error="somthing is worng" />}
            {orders && orders.map(order => {
                return (
                    <div className="col-md-8">
                        <div className="flex-container">
                            <div className="text-start w-100 m-1">
                                <h2>Items</h2>
                                <hr />
                                {order.orderItems.map((item,index) => {
                                    return(
                                        <div key={index}>
                                            <p>{item.name}[{item.varient}]*{item.quantity} = {item.price}</p>
                                         </div>
                                    )
                                })}
                            </div>
                            <div className="text-start w-100 m-1">
                                <h2>Address</h2>
                                <hr />
                                <p>street:{order.shippingAddress.street}</p>
                                <p>City:{order.shippingAddress.city}</p>
                                <p>Country:{order.shippingAddress.country}</p>
                                <p>Pizcode:{order.shippingAddress.pincode}</p>
                            </div>
                            <div className="text-start w-100 m-1">
                                <h2>Order Info</h2>
                                <hr />
                                <p>OrderAmount:{order.orderAmount}</p>
                                <p>Date:{order.createdAt.substring(0,10)}</p>
                                <p>TransactionId :{order.transactionId}</p>
                                <p>OrderId:{order._id}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
          
        </div>
    );
};

export default OrderScreen;