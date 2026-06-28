const express=require("express");
const router=express.Router();
const { products } = require("./productsData");
router.get("/",(req,res)=>{
    res.status(200).json({
        message:"All products are fetched successfully",
        products});
});
router.post("/generate",(req,res)=>{
    const{name,category,keywords,tone}=req.body;
    if(!name ||!category ||!keywords ||!tone)
    {
        return res.status(400).json({
            message:"All fields are required"
        });
    }
    const description=`${name} is a ${tone.toLowerCase()} ${category.toLowerCase()} product prepared using ${keywords}.`;
    res.status(200).json({
        message:"Product Description generated successfully",
        description
    });
});
router.get("/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const product=products.find(p=>p.id==id);
    if(!product)
    {
        return res.status(404).json({
            message:"product not found"
        });
    }
    res.status(200).json({message:"product fetched successfully",product});
});
router.post("/",(req,res)=>
{
    const{name,category,keywords,tone}=req.body;
    if(!name||!category||!keywords||!tone)
    {
        return res.status(400).json({
            message:"All fields ae required"
        });
    }
    const newProduct={
        id:products.length+1,
        name,
        category,
        keywords,
        tone
    };
    products.push(newProduct);
    res.status(201).json({
        message:"product Added Successfully",
        product:newProduct
    });
});
router.get("/search", (req, res) => {
    const q = req.query.q;

    if (!q) {
        return res.status(400).json({
            message: "Search query"
        });
    }

    const result = products.filter(p =>
        p.name.toLowerCase().includes(q.toLowerCase()) ||
        p.category.toLowerCase().includes(q.toLowerCase()) ||
        p.keywords.toLowerCase().includes(q.toLowerCase()) ||
        p.tone.toLowerCase().includes(q.toLowerCase())
    );

    res.status(200).json({
        message:"search completed successfully",
        count: result.length,
        products: result
    });
});
router.put("/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const product=products.find(p=>p.id==id);
    if(!product)
    {
        return res.status(404).json({
            message:"product not found"
        });
    }
    product.name=req.body.name||product.name;
    product.category=req.body.category|| product.category;
    product.keywords=req.body.keywords||product.keywords;
    product.tone=req.body.tone||product.tone;
    res.status(200).json({
        message:"Product Updated Successfully",
        product
    });
});

router.delete("/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const index=products.findIndex(p=>p.id==id);
    if(index==-1)
    {
        return res.status(404).json({
            message:"product not found"
        });
    }
    const deletedProduct = products[index];
    products.splice(index,1);
    res.status(200).json({
        message:"product deleted successfully",deletedProduct

    });
});

module.exports=router;