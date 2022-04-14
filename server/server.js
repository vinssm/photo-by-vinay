import { ApolloServer} from "apollo-server"
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


// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
