const graphql = require('graphql');
const {
  GraphQLObjectType, GraphQLString,
  GraphQLID, GraphQLList,
} = graphql;

const MessageType = new GraphQLObjectType({
  name: 'MessageType',
  fields: () => ({
    id: { type: GraphQLID },
    author: { type: GraphQLID },
    chat: { type: GraphQLID },
    content: {
      type: GraphQLString
    }
  })
})

const ChatType = new GraphQLObjectType({
  name: 'ChatType',
  fields: () => ({
    id: { type: GraphQLID },
    members: {
      type: new GraphQLList(GraphQLID)
    }
  })
})

module.exports = {
  MessageType,
  ChatType
}