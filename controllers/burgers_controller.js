var express = require('express');
var router = express.Router();

var burger = require('../models/burger');

//Helper functions
getBurgers =(list)=>{
    //function returns array of array where array[0] is of uneaten burgers and array[1] is of eaten burgers
    var devoured = [];
    var burgerList = [];
    for (var i=0; i<list.length; i++){
        if(list[i].devoured){
            devoured.push(list[i]);
        }
        else{
            burgerList.push(list[i]);
        }
    }
    return [burgerList, devoured];
}

//Router controls
router.get('/',(req, res)=>{
    burger.selectAll((data)=>{
        
        var burgerList = getBurgers(data);

        var hbsObject ={
            burgerArray: burgerList[0],
            devouredArray: burgerList[1]
        }
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers",(req, res)=>{
    var newBurger = req.body;
    //console.log(newBurger);
    burger.insertOne(newBurger, (data)=>{
        res.json(true);
    });
});

router.put("/api/burgers/:id", (req, res)=>{
    var updateBurger ={
        devoured: true,
        id:req.params.id
    }
    //console.log(req.params.id);
    burger.updateOne(updateBurger, (data)=>{
        res.json(true);
    });
});

module.exports = router;