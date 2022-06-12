const graphql = require('graphql')
const {
  GraphQLObjectType, GraphQLString,
  GraphQLID,
  GraphQLList
} = graphql

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    contacts: {
      type: new GraphQLList(UserType)
    }
  })
})

module.exports = UserType
