const express = require("express")
const app = express()
const port = 3500

app.get("/", (req,res)=>{
    res.json({mensaje:"Aplicacion funcionando correctemente"})
})

app.listen(port,()=>{
    console.log(`Aplicacion corriendo en puerto ${port}`) 
})