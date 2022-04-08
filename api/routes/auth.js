const router = require("express").Router();// express routing function
const User=require("../models/User");//fetching user model
const CryptoJS=require("crypto-js");
const jwt=require("jsonwebtoken");
//REGISTER
router.post("/register",async(req,res)=>{
    const {username,email,password}=req.body;
    const newUser=new User({
        username:username,
        email:email,
        password:CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC)
            .toString()
    });
    if(!username|| !email || !password){
      return res.status(400).json({
           error:"Please fill all the details carefully"
        })
    }
    try{
        const userExist=await User.findOne({
            username:username
        });
        if(userExist){
            return res.status(422).json({error:"Email already exists"});
        }
        
        const savedUser= await newUser.save();
        res.status(201).json(savedUser);      //successfully added
    }catch(err){
     res.status(500).json(err);       // not added
    }
})

//LOGIN
router.post("/login",async(req,res)=>{
    try{
        const user=await User.findOne({username:req.body.username})  //fetching the user
        !user && res.status(401).json("Wrong credintials!");          //if we don't find that user
        
        const hashedPassword=CryptoJS.AES.decrypt(    //decrypt 
            user.password, //user's password
            process.env.PASS_SEC  
        );
        const originalPassword=hashedPassword.toString(CryptoJS.enc.Utf8);    //convert into string

        originalPassword!=req.body.password &&
        res.status(401).json("wrong credentials!");   //if password not matched
        
        const accessToken=jwt.sign({
           id:user._id,
           isAdmin:user.isAdmin,
         },
        process.env.JWT_SEC,
        {expiresIn:"3d"}
        );
       const {password, ...others}=user._doc;
        res.status(200).json({...others,accessToken});            //login successful
        }catch(err){
        res.status(500).json(err);
    }
})

module.exports=router;