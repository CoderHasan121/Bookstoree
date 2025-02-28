import express from 'express'
import mongoose from 'mongoose'

// load environment variables from.env file
import dotenv from 'dotenv'
// import routes
import cors from "cors"


import bookRoute from './route/book.route.js'
import userRoute from "./route/user.route.js"


const app = express()

app.use(cors());
app.use(express.json())

dotenv.config()

const PORT=process.env.PORT || 4000
const URI=process.env.MongoDBURI

// connect to maongodDB

try{
   mongoose.connect(URI,{
    usenewUrlParser: true,
    useUnifiedTopology: true,
   });
   console.log("Connected to MongoDB")
}catch(error){
     console.error("Error: ",error); 
}

// define routes
app.use("/book", bookRoute)
app.use("/user", userRoute)

app.listen(PORT, () => {  
  console.log(`Example app listening on port ${PORT}`)
}) 