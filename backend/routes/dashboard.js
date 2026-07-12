const express=require("express");

const router=express.Router();

const Product=require("../models/Product");

const verifyToken=require("../middleware/authMiddleware");

router.get("/",verifyToken,async(req,res)=>{


try{


const products = await Product.find({

userId:req.user.id

})
.sort({

createdAt:-1

});

const totalDescriptions = products.length;

const productsGenerated = products.length;

const now = new Date();

const thisMonth = products.filter((p)=>{


const d = new Date(p.createdAt);


return (

d.getMonth()===now.getMonth()

&&

d.getFullYear()===now.getFullYear()

);

}).length;

let wordsGenerated=0;

products.forEach((p)=>{

if(p.keywords){

wordsGenerated += p.keywords.split(" ").length;

}
});

res.json({

stats:{

totalDescriptions,

productsGenerated,

thisMonth,

wordsGenerated

},

recent:products

});

}
catch(error){

res.status(500).json({

message:error.message

});

}

});

module.exports=router;