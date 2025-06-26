const express= require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const connectdb = require('./config/db')
const dotenv = require("dotenv").config()
const authRoute = require('./routes/authRoute')
const reviewRoute = require('./routes/reviewRoute')
const colors = require('colors')


app.use(express.urlencoded({extended:true , limit:"50mb"}))
app.use(express.json());
const allowedOrigins = [
    "http://localhost:5000",
    "https://jolly-quokka-ce122c.netlify.app/"
];
app.use(cors({
    origin : function (origin , callback){
    if( !origin || allowedOrigins.includes(origin)){
        callback(null , true);
    }else{
        callback(new Error("Not allowed by CORS"))
    }
},
methods : ["GET" ,"POST" , "PUT","DELETE"],
credentials : true,
}));


connectdb();



app.get('/review' , (req,res)=>{
    res.send('hello world')
})

app.use('/api/v1/auth',authRoute)
app.use('/api/v1/reviews', reviewRoute);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.bgCyan.white);
});
