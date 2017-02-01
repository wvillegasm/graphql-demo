'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

exports.default = new _graphql.GraphQLObjectType({
    name: 'BlogPost',
    fields: {
        _id: {
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
        },
        title: {
            type: _graphql.GraphQLString
        },
        description: {
            type: _graphql.GraphQLString
        }
    }
});