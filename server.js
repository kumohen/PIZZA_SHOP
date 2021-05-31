const express = require("express")

const app = express();
const path = require('path')
const pizzaRoute = require("./routes/PizzasRoute");
const userRoute = require("./routes/userRoutes");
const orderRoute = require("./routes/orderRoute")

const db = require("./db");

app.use(express.json());

app.use('/api/pizzas/',pizzaRoute)
app.use('/api/users/',userRoute)
app.use('/api/orders/',orderRoute)

if(process.env.NODE_ENV ==='production')
{
    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

        res.sendFile(path.resolve(__dirname  , 'client/build/index.html'))

    })
}


const port = process.env.PORT || 5000 ;

app.listen(port,()=> console.log("everything is  okk"));