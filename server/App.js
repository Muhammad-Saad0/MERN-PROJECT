import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"

import postRoutes from "./routes/posts.js"

const app = express()

/*first parameter just means that all the routes in
posts.js are going to start with posts means you will reach
by typing /posts(every route starts with posts) not just /*/

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use("/posts", postRoutes)

mongoose.set('strictQuery', true);

const CONNECTION_URL = `mongodb://Muhammad-Saad:${encodeURIComponent("saad123456#")}
@ac-fs71rjh-shard-00-00.zp4cab0.mongodb.net:27017,ac-fs71rjh-shard-00-01.zp4cab0.mongodb.net:27017
,ac-fs71rjh-shard-00-02.zp4cab0.mongodb.net:27017/?ssl=true&replicaSet=atlas-bsdh9p-shard-0
&authSource=admin&retryWrites=true&w=majority`

const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
    })
     .then(() => app.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`)
     }))
     .catch((error) => {
        console.log(error)
    }) 
