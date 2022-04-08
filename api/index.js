//express
const express=require("express");
const app=express();
//mongodb
const mongoose=require("mongoose");
//dotenv
const dotenv=require("dotenv");
dotenv.config();

const productRoute=require("./routes/product");
const userRoute=require("./routes/user");
const authRoute=require("./routes/auth");
const cartRoute=require("./routes/cart");
const orderRoute=require("./routes/order");
const stripeRoute=require("./routes/stripe");
const cors=require("cors");

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB connection successfull"))
.catch((err)=>{
    console.log(err);
});

app.use(express.json());   //becoz of this express is able to take json object
app.use("/api/products",productRoute);
app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/orders",orderRoute);
app.use("/api/carts",cartRoute);
app.use(cors());   ///payment method

app.listen(process.env.PORT || 5000,()=>{
    console.log("Backend server is running");
})
