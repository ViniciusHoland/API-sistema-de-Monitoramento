import express from 'express';
import dotenv from 'dotenv';
import conn from './database/conn.js';
import router  from './routes/router.js';
import cors from 'cors';

const app = express()
app.use(cors())
dotenv.config()
app.use(express.json())


app.use('/api',router)

const port = process.env.PORT || 5000
app.listen(port, () => {
    
    console.log(`Server running on port ${port}`) 
    conn()
})