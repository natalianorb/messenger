const graphql = require('graphql')
const {
  GraphQLObjectType, GraphQLString,
  GraphQLID,
  GraphQLList
} = graphql
const { ChatType } = require('./chat-schema');

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    name: { type: GraphQLString },
    chats: {
      type: new GraphQLList(ChatType)
    },
    contacts: {
      type: new GraphQLList(UserType)
    }
  })
})

module.exports = UserType
