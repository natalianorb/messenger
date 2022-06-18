const graphql = require('graphql');

const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
} = graphql;

const LoginInputType = new GraphQLInputObjectType({
  name: 'LoginInputType',
  description: 'Input payload for loggin in',
  fields: () => ({
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
});

module.exports = LoginInputType;
