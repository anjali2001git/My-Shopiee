const mongoose=require("mongoose");
const ProductSchema=new mongoose.Schema(
{

    desc:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    categories:{
        type:Array
    },
    size:{
        type:Array
    },
    color:{
        type:Array
    },
    price:{
        type:Number,
    },
    inStock:{
        type:Boolean,
        default:true
    }
 },{timestamps: true }
);

module.exports=mongoose.model("Product",ProductSchema);