const express = require('express');
const router = express.Router();

const categoryRouter = function(){
    let result = 'hello categories';
    router.get('/', function(req,res){
        res.send(result + ' GET');
    });

    return router;
}

module.exports = categoryRouter;