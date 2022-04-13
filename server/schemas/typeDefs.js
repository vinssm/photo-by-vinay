import {gql} from "apollo-server"


const typeDefs = gql`
type Query{
   users: [User]
   user(_id:ID!):User
   comments:[Comment]
   icomment(by:ID!):[Comment]
}

type User{
    _id:ID!
    firstName:String!
    lastName:String!
    email:String!
    password:String!
    comments:[Comment]
}
type Comment{
    name:String!
    by:ID!
}

type Token{
    token:String!
}

type Mutation{
    signupUser(userNew:UserInput!):User
    signinUser(userSignin:UserSigninInput!):Token
    createComment(name:String!):String
}

input UserInput{
    firstName:String!
    lastName:String!
    email:String!
    password:String!
}
input UserSigninInput{
    email:String!
    password:String!
}
`

export default typeDefs