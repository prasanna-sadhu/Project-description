const express=require("express");
const cors=require("cors");
require("dotenv").config();
const app=express();
app.use(cors());
app.use(express.json());
const PORT=process.env.PORT||5000;
const productRoutes=require("./routes/products");
const dashboardRoutes = require("./routes/dashboard");
app.use("/api/products",productRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.get("/",(req,res)=>{
    res.json({
        message:"AI Product Description"
    });
});
app.use((err,req,res,next)=>{
    res.status(500).json({
        message:"server error"
    });
});
app.listen(PORT,()=>
{
    console.log(`server running on port ${PORT}`);
});