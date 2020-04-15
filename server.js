
const express = require('express');
const app = express();
var bodyParser = require("body-parser");
const port = 3000;
var itemRouterHandler = require('./routes/item-router');
var categoryRouterHandler = require('./routes/category-router');

const itemRouter = itemRouterHandler();
app.use("/item", itemRouter);

const categoryRouter = categoryRouterHandler();
app.use("/category", categoryRouter);

app.get('/', (req,res) => res.send('Hello World!'));
app.listen(port, ()=>{
    console.log(`App listening on port: ${port}!`);
});

