const express = require('express');
const app = express()
const PORT = 6969
const userData = require("./MOCK_DATA.json")
const graphql = require('graphql');
const {graphqlHTTP} = require('express-graphql');
const { GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLList,  GraphQLString } = graphql


const userType = new GraphQLObjectType ({
    name: "User",
    fields: () => ({
        id: { type: GraphQLInt },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        email: { type: GraphQLString },
        gender: { type: GraphQLString },
        password: { type: GraphQLString }
    })
})
const RootQuery = new GraphQLObjectType ({
    name: "rootQueryType",
    fields: {
        getAllUserData:{
            type: new GraphQLList(userType),
            args: {id: {type: GraphQLInt}},
            resolve(parent, args){
                return userData
            }
        },
        getUserById: {
            type: userType,
            args: { id: { type: GraphQLInt } },
            resolve(parent, args) {
                return userData.find(user => user.id === args.id)
            }
        }
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createNewUser: {
            type: userType,
            args: {
                first_name: { type: GraphQLString },
                last_name: { type: GraphQLString },
                email: { type: GraphQLString },
                gender: { type: GraphQLString },
                password: { type: GraphQLString },
            },
            resolve(parent, args) {
                const newUser = {
                    id: userData.length + 1,
                    first_name: args.first_name,
                    last_name: args.last_name,
                    email: args.email,
                    gender: args.gender,
                    password: args.password
                };
                userData.push(newUser);
                return newUser;
            }
        },
        updateUser: {
            type: userType,
            args: {
                id: { type: GraphQLInt },
                firstName: { type: GraphQLString },
                lastName: { type: GraphQLString },
                email: { type: GraphQLString },
                gender: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            resolve(parent, args) {
                const user = userData.find(user => user.id === args.id);
                if (user) {
                    user.firstName = args.firstName;
                    user.lastName = args.lastName;
                    user.email = args.email;
                    user.gender = args.gender;
                    user.password = args.password;
                }
                return user;
            }
        },
        deleteUser: {
            type: userType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve(parent, args) {
                const index = userData.findIndex(user => user.id === args.id);
                if (index !== -1) {
                    const deletedUser = userData.splice(index, 1);
                    return deletedUser[0];
                }
                return null;
            }
        }
    }
});


const schema = new GraphQLSchema({ query: RootQuery, mutation : Mutation})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(PORT, ()=>{
    console.log("server is running on:",PORT)
})