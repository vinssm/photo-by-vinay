import { ApolloServer} from "apollo-server-express";
import {ApolloServerPluginLandingPageGraphQLPlayground,ApolloServerPluginDrainHttpServer,
    ApolloServerPluginLandingPageDisabled} from "apollo-server-core";
import typeDefs from './schemas/typeDefs.js';
import jwt from 'jsonwebtoken';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import path from 'path';


const port = process.env.PORT || 4000;
const app = express();
const httpServer = http.createServer(app);
if(process.env.NODE_ENV !=="production"){
    dotenv.config()
}


// import { JWT_SECRET, MONGO_URI } from "./config/connection.js"

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on("connected",()=>{
    console.log("connected to mongodb")
})

mongoose.connection.on("error",(err)=>{
    console.log("error connecting",err)
})

//import or register models  here
import './models/Comments.js'
import './models/User.js'

import resolvers from './schemas/resolvers.js'

const context = ({req})=>{
    const { authorization } = req.headers
    if(authorization){
        console.log(authorization)
     const {userId}  = jwt.verify(authorization,proess.env.JWT_SECRET)
     return {userId}
    }
}
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    plugins:[
        ApolloServerPluginDrainHttpServer({httpServer}),
        process.env.NODE_ENV !=="production" ? ApolloServerPluginLandingPageGraphQLPlayground() :
        ApolloServerPluginLandingPageDisabled()
    ]
})

if(process.env.NODE_ENV=="production"){
    app.use(express.static('client/build'))
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

await server.start();
server.applyMiddleware({
    app,
    path:'graphql'
});



// The `listen` method launches a web server.
httpServer.listen({port},()=>{
    console.log(`🚀  Server ready at ${server.graphqlPath}`);
} )

