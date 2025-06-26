const express= require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const connectdb = require('./config/db')
const dotenv = require("dotenv").config()
const authRoute = require('./routes/authRoute')
const reviewRoute = require('./routes/reviewRoute')
const colors = require('colors')

app.use(express.json());
app.use(cors());

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
