const express= require('express');
const cors=require('cors');
const axios=require('axios');

const app=express();
const port= process.env.PORT|| 8000;

const corsOptions = {
    // origin: '*', // Change this to your frontend domain
    origin: ['https://ezgamingworld.com', 'https://ezgamingworld-a552d.web.app/', 'https://ezgamingworld-a552d.firebaseapp.com/'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));


app.get('/',(req,res)=>res.json({status:true}));


app.get('/api/news/:category',async(req,res)=>{
    const {category}=req.params;
    const apiKey = '20a3f51978f349079e4a0e24844fc998';
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`;

try{
    const response=await axios.get(url);
    res.json(response.data);
}
catch(err){
res.status(500).json({error:'Internal  API Server Error '});
}
});


app.listen(port,()=>console.log('server is running on port',port));