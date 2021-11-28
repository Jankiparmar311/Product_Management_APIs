const express = require("express");
const router = express.Router();
router.use(express.json());

const comp = require("../company_data");

router.get("/",(req,res)=> res.send("Company"));

router.post("/addCompany",(req,res)=> {
    const comp_data = req.body;

    comp.push(comp_data);
    res.json({data:comp});
});

router.post("/retrieveCompany",(req,res)=> {
    res.json({data:comp});
});

router.post("/updateCompany",(req,res)=> {
    const comp_prodid = req.body;

    comp[2]=comp_prodid;
    res.json({data:comp});
});
router.post("/deleteCompany",(req,res)=> {
    const comp_data = req.body;
    
    comp.pop(comp_data);
    res.json({data:comp});
});
