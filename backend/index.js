const express = require('express');

const app = express();

app.get("/",(req,res)=>{
    res.send("Connected");
})

app.listen(5000,()=>{
    console.log("Server listening the port http://localhost:" + 5000);
})