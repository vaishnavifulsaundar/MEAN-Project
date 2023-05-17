

const express = require('express');
const {MongoClient} = require('mongodb');

const URL = "mongodb://127.0.0.1:27017";

eobj = express();
const client = new MongoClient(URL);

port = 5100;


eobj.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin",
    "http://localhost:4200");
    
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-with, Content-Type,Accept")
    next();
});



eobj.listen(port,function(){
    console.log("Server is listening..");
})

eobj.get('/',function(req,res){
    res.send("Server is ON..");
})

async function getConnection()
{
  let result = await client.connect();            
  let db = result.db("Marvellous");               
  return db.collection("Batches");      
}

eobj.get('/getdata',async function(req,res)
{
    let data = await getConnection();
    data = await data.find().toArray();
    console.log("Data frrom Marvellous Databse is : ");
    console.log(data);
    res.json(data);
});