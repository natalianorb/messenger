const graphql = require('graphql')
const {
  GraphQLObjectType, GraphQLString, GraphQLSchema,
  GraphQLList, GraphQLNonNull
} = graphql
const UserType = require('./user-schema')
const User = require('../models/user')

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { email: { type: GraphQLString }, password: { type: GraphQLString} },
      resolve (parent, args) {
        return User.find({$and: [{ email: args.email }, {password: args.password}] })
      }
    },
    users: {
      type: new GraphQLList(UserType),
      args: { name: { type: GraphQLString } },
      resolve (parent, args) {
        return User.find({
          $or: [{ name: { $gte: args.name } }, { username: { $gte: args.name } }]
        })
      }
    }
  }
})

const MutationType = new GraphQLObjectType({
  name: 'MutationType',
  fields: {
    createUser: {
      type: UserType,
      args: {
        username: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve (parent, args) {
        const user = new User({
          username: args.username,
          email: args.email
        })
        return user.save()
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: MutationType
})
