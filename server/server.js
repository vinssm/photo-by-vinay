import { ApolloServer, gql} from "apollo-server"
import {ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core"
import typeDefs from './schemas/typeDefs.js'
import jwt from 'jsonwebtoken'

import mongoose from "mongoose"
import { JWT_SECRET, MONGO_URI } from "./config/connection.js"

mongoose.connect(MONGO_URI,{
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

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:({req})=>{
        const { authorization } = req.headers
        if(authorization){
            console.log(authorization)
         const {userId}  = jwt.verify(authorization,JWT_SECRET)
         return {userId}
        }
    },
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})


// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });