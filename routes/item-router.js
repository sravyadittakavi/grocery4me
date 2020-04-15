const express = require('express');
const router = express.Router();

const itemRouter = function() {
    let result = 'hello item';
    
    router.use('/', function(req, res, next) {
        result = result+' USE';
        next();
    });
   
    router.get('/', function(req, res) {
        res.send(result + ' GET');
    });

    router.post('/:id?', function(req, res) {
        res.send(result + ' POST '+req.params.id);
    });

    router.delete('/:id', function(req,res){
        res.send(result+ ' DELETE '+req.params.id);            
    });

    return router;
}

module.exports = itemRouter;