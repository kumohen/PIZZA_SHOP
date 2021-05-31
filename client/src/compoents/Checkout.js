import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {orderAction} from "../actions/orderActions";
import {useDispatch,useSelector} from 'react-redux'
import Loading from "../compoents/Loading"
import Success from "../compoents/Success"
import Error from "../compoents/Error"

const Checkout = ({amount}) => {
    const dispatch = useDispatch();

   const orderState = useSelector(state => state.placeOrderReducer)
    const {error,success,loading} = orderState ;

   const  onToken = (token) => {
       dispatch(orderAction(token,amount));
      }
    return (
        <div>
              {loading && <Loading />}
                  {success && <Success success="Your order succesfully placed" />}
                  {error && <Error error="somthing is worng" />}
            <StripeCheckout 
             amount={amount*100}
             shippingAddress
             billingAddress
             token={onToken}
             stripeKey='pk_test_zKpriPTZuuvkW0Lmv32D4kIW00Hpmdac2h'
             currency="INR"
             >
                <button>PAY NOW</button>
             </StripeCheckout>   
        </div>
    );
};

export default Checkout;