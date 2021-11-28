const express = require("express");
const router = express.Router();
router.use(express.json());

const prod = require("../product_data");

router.get("/",(req,res)=> res.send("Product"));

router.post("/addProduct",(req,res)=> {
    const prod_data = req.body;

    prod.push(prod_data);
    res.json({data:prod});
});

router.post("/retrieveProduct",(req,res)=> {
    res.json({data:prod});
});

router.post("/updateProduct",(req,res)=> {
    const prod_ctgry = req.body;
    
    prod[3]=prod_ctgry;
    res.json({data:prod});
});
router.post("/deleteProduct",(req,res)=> {
    const prod_data = req.body;

    prod.pop(prod_data);
    res.json({data:prod});
});
