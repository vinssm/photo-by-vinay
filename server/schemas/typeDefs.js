const { gql } = require('apollo-server-express');


const typeDefs = gql`
type Query{
   users: [User]
   user(_id:ID!):User
   comments:[Comment]
   icomment(by:ID!):[Comment]
   myprofile:User
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

type Auth {
    token: ID
    user: User
  }

type Mutation{
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
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
`;

module.exports = typeDefs;