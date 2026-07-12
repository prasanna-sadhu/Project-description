const express = require("express");

const router = express.Router();

const Product = require("../models/Product");

const verifyToken = require("../middleware/authMiddleware");

router.post("/",verifyToken,async(req,res)=>{

try{

const product = await Product.create({

userId:req.user.id,

...req.body

});


res.status(201).json({

message:"Product created successfully",

product

});


}
catch(error){

res.status(500).json({

message:error.message

});

}

});

router.get("/",verifyToken,async(req,res)=>{

try{


const products = await Product.find({

userId:req.user.id

})
.sort({
createdAt:-1
});


res.json(products);

}
catch(error){

res.status(500).json({

message:error.message

});

}

});

router.get("/search/query",verifyToken,async(req,res)=>{

try{


const q=req.query.q || "";


const products = await Product.find({

userId:req.user.id,


$or:[

{
name:{
$regex:q,
$options:"i"
}
},

{
category:{
$regex:q,
$options:"i"
}
},

{
keywords:{
$regex:q,
$options:"i"
}
},

{
tone:{
$regex:q,
$options:"i"
}

}

]


});

res.json({

count:products.length,

products

});


}
catch(error){

res.status(500).json({

message:error.message

});

}

});

router.post("/generate",verifyToken,async(req,res)=>{


try{


const {
name,
category,
keywords,
tone
}=req.body;

if(!name || !category || !keywords || !tone){

return res.status(400).json({

message:"All fields required"

});

}

const description = `

${name} is a premium-quality ${category} product designed for customers who prefer a ${tone} experience.

It is prepared using high-quality ingredients such as ${keywords}, ensuring freshness, quality, and reliability.

This product provides excellent value and is suitable for daily usage.

The ${name} delivers a perfect combination of taste, quality, and customer satisfaction.

`;


const product = await Product.create({

userId:req.user.id,

name,

category,

keywords,

tone,

description

});
res.json({

message:"Generated Successfully",

description,

product

});
}
catch(error){

res.status(500).json({

message:error.message

});

}

});

router.get("/:id",verifyToken,async(req,res)=>{
try{

const product = await Product.findOne({

_id:req.params.id,

userId:req.user.id

});

if(!product){

return res.status(404).json({

message:"Product not found"

});

}

res.json(product);

}
catch(error){

res.status(500).json({

message:error.message

});

}

});

router.put("/:id",verifyToken,async(req,res)=>{


try{


const product = await Product.findOneAndUpdate(

{

_id:req.params.id,

userId:req.user.id

},

req.body,

{
new:true
}

);

res.json(product);

}
catch(error){

res.status(500).json({

message:error.message

});

}

});

router.delete("/:id",verifyToken,async(req,res)=>{


try{

await Product.findOneAndDelete({

_id:req.params.id,

userId:req.user.id

});

res.json({

message:"Deleted Successfully"

});

}
catch(error){

res.status(500).json({

message:error.message

});

}

});
module.exports=router;