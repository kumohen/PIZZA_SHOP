const router = require("express").Router();
const User = require("../modals/user");

router.post("/register",async(req,res)=>{
     const {name,email,password} = req.body ;
    console.log(name);
    console.log(email);
    console.log(password);
    const newUser = new User({name,email,password})
    console.log(newUser)
    try {
       await newUser.save();
        res.send("new user create successfully")
    } catch (error) {
        return res.status(400).json({message:error})
    }
})

router.get("/allUser",async(req,res)=>{
   
   try {
       const users = await User.find({});
       res.send(users);
   } catch (error) {
       return res.status(400).json({message:error})
   }
})

router.post("/deleteUser",async(req,res)=>{
   const {userId} = req.body ;
    try {
        const users = await User.findOneAndDelete({_id:userId});
        res.send("user deleted sucessfully");
    } catch (error) {
        return res.status(400).json({message:error})
    }
 })

router.post("/login", async(req, res) => {

    const {email , password} = req.body

    try {
        
        const user = await User.find({email , password})

        if(user.length > 0)
        {
            const currentUser = {
                name : user[0].name , 
                email : user[0].email, 
                isAdmin : user[0].isAdmin, 
                _id : user[0]._id
            }
            res.send(currentUser);
        }
        else{
            return res.status(400).json({ message: 'User Login Failed' });
        }

    } catch (error) {
           return res.status(400).json({ message: 'Something went weong' });
    }
  
});

module.exports = router ;