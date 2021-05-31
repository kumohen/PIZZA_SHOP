const router = require("express").Router();
const Pizza = require("../modals/Pizza");

router.get("/getAllPizzas",async(req,res)=>{
     try {
         const pizzas = await Pizza.find({});
         res.send(pizzas);
     } catch (error) {
         return res.status(400).json({message:error})
     }
})
router.post("/getPizzaById",async(req,res)=>{
    try {
        const id = req.body.id ;
        const pizzas = await Pizza.findOne({_id:id});
        res.send(pizzas);
    } catch (error) {
        return res.status(400).json({message:error})
    }
})

router.post("/addPizza",async(req,res)=>{
    try {
        const pizza = req.body.pizza ;

        const newPizza = new Pizza({
            name:pizza.name ,
            image:pizza.image,
            description:pizza.description ,
            category:pizza.category ,
            prices:[pizza.price],
            varients:['smaall','medium','large']
        })
       await newPizza.save();
       res.send("New Pizza is Added")
    } catch (error) {
        return res.status(400).json({message:error})
    }
})

router.post("/updatePizza",async(req,res)=>{
    try {
        const editedpizza = req.body.pizza ;

        const pizza = await Pizza.findOne({_id:editedpizza._id})

      
        pizza.name = editedpizza.name ,
        pizza.image= editedpizza.image,
        pizza.  description = editedpizza.description ,
        pizza. category = editedpizza.category ,
        pizza.prices = [editedpizza.price],
          
        await pizza.save();
      
     
       res.send(" Pizza is Updated")
    } catch (error) {
        return res.status(400).json({message:error})
    }
})

router.post("/deletePizza",async(req,res)=>{
    try {
        const id = req.body.id ;
        await Pizza.findOneAndDelete({_id:id});
        res.send("successfully deleted")
    } catch (error) {
        return res.status(400).json({message:error})
    }
})

module.exports = router ;