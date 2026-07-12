const mongoose = require("mongoose");


const productSchema = new mongoose.Schema(

{

userId:{

type:mongoose.Schema.Types.ObjectId,

ref:"User",

required:true

},


name:{

type:String,

required:true,

trim:true

},

category:{

type:String,

required:true,

trim:true

},
keywords:{

type:String,

required:true,

trim:true

},

tone:{

type:String,

required:true,

trim:true

},
description:{

type:String,

default:""

}

},

{

timestamps:true

}

);
module.exports = mongoose.model(
"Product",
productSchema
);