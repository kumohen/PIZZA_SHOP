const router = require("express").Router();
const { v4: uuidv4 } = require('uuid');

const stripe = require("stripe")("sk_test_QV3Rpkc2E26D82xL2gYFnJhO00xkvOMvro")
const Order = require("../modals/order");

router.post("/placeorder",async(req,res)=>{
    const {token,amount,currentUser,cartItems} = req.body ;
     try {
     const customer = await   stripe.customers.create({
            email: token.email,
            source:token.id
          })
          const payment = await   stripe.charges.create({
             amount:amount*100 ,
             currency:'inr',
             customer:customer.id,
             receipt_email:token.email
          },{
            idempotencyKey:uuidv4()
          })
         if(payment){
         
           const newOrder = new Order({
             name:currentUser.name ,
             email:currentUser.email ,
             userId:currentUser._id ,
             orderItems:cartItems,
             shippingAddress:{
               street:token.card.address_line1,
               city:token.card.address_city ,
               country:token.card.address_country,
               pincode:  token.card.address_zip
             },
             orderAmount:amount,
          
             transactionId:payment.source.id
           })
          // console.log(newOrder)
           newOrder.save();
             res.send("payment done")
         } else {
             res.send("payment fail")
         }

     } catch (error) {
        return res.status(400).json({message:error})
     }
})

router.post("/getUsersOrder",async(req,res)=>{
  const {userId} = req.body ;
   try {
   const orders =  await Order.find({userId}).sort({_id:-1});
   res.send(orders);

   } catch (error) {
      return res.status(400).json({message:error})
   }
})

router.get("/allOrder",async(req,res)=>{
  
   try {
   const orders =  await Order.find({}).sort({_id:-1});
   res.send(orders);

   } catch (error) {
      return res.status(400).json({message:error})
   }
})


router.post("/deliver",async(req,res)=>{
  const id = req.body.id ;
  try {
  const order = await Order.findOne({_id:id});
  order.isDelivered = true ;
  await order.save();
  res.send("order successfully delivered");

  } catch (error) {
     return res.status(400).json({message:error})
  }
})


module.exports = router ;