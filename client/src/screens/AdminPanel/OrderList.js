import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {getAllOrder,deliverOrder} from "../../actions/orderActions"
import Loading from "../../compoents/Loading"
import Error from "../../compoents/Error"

const OrderList = () => {
    const dispatch = useDispatch();
    const orderState = useSelector(state => state.getALLsOrdersReducer)
    const {orders,loading,error} = orderState  ;

   useEffect(()=>{
      dispatch(getAllOrder());
   },[])
    return (
        <div>
            <h2>Order List</h2>
            <div className="row justify-content-center ">
            {loading && <Loading />}
            {error && <Error error="somthing is worng" />}
            <table className="table table-bordered">
                <thead className="thead">
                    <tr>
                        <th>Order Id</th>
                        <th>Email id</th>
                        <th>User Id</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                {orders && orders.map(order => {
                    return (
                        <tr>
                            <td>{order._id}</td>
                            <td>
                               {order.email}
                            </td>
                            <td>{order.userId}</td>
                            <td>
                               {order.orderAmount}
                              
                            </td>
                            <td>{order.createdAt.substring(0,10)}</td>
                            <td>
                                {order.isDelivered ? (<h3>Delivered</h3>) : (
                                    <button className="btn" onClick ={() => dispatch(deliverOrder(order._id))} >Deliver</button>
                                )}
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            
           </div>
        </div>
    );
};

export default OrderList;

