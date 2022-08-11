const express = require("express");
const path = require("path");
const port = 80;
const app = express();

//EXPRESS SPECIFIC CONFIG
app.use('/static', express.static("static"));
app.use('/images', express.static("images"));

//PUG CONFIG
app.set("view engine", 'pug');
app.set('views', path.join(__dirname,'views'));

//ENDPOINTS
app.get('/',(req, res)=>{
    res.status(200).render('index.pug');
})

//TO LISTEN IF APP IS STARTED
app.listen(port, ()=>{
    console.log(`App Started successfully and listen on port ${port}`);
})