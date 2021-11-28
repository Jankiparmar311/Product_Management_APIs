const express = require("express");
const router = express.Router();
router.use(express.json());

const sell = require("../seller_data");

router.get("/",(req,res)=> res.send("Seller"));

router.post("/addSeller",(req,res)=> {
    const sell_data = req.body;

    sell.push(sell_data);
    res.json({data:sell});
});

router.post("/retrieveSeller",(req,res)=> {
    res.json({data:sell});
});

router.post("/updateSeller",(req,res)=> {
    const sell_prodid = req.body;
    
    sell[2]=sell_prodid;
    res.json({data:sell});
});
router.post("/deleteSeller",(req,res)=> {
    const sell_data = req.body;
    
    sell.pop(sell_data);
    res.json({data:sell});
});
