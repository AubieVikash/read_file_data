const express = require('express');
const app = express();
const dotenv = require('dotenv');
const routes = require('./Routes/routes')
const xmlparser = require('express-xml-bodyparser');
const mongoose = require('mongoose')

dotenv.config({path: './Config/config.env'});

const connectDB = (err, res)=> {
    
    const conn = mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log(`database connected successfully to ${conn.connection}`)    
}
connectDB();


//middlewares
app.use(xmlparser())
app.use(express.json())
app.use('',routes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, (req, res)=> {
    console.log(`server is up and running on http://localhost:${PORT}`);
})