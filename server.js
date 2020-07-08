//deklarasi variabel
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000 || process.env.port;
const router = require("./routes/router")

//inisialisasi
app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/",router)
//server 
app.listen((PORT),(req,res)=>{
    console.log("Server telah berjalan dengan port : " + PORT)
})


