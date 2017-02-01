'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _graphql = require('./graphql');

var _graphql2 = _interopRequireDefault(_graphql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Start the server
var app = (0, _express2.default)(),
    PORT = 3000;

// GraphQL server route
app.use('/graphql', (0, _expressGraphql2.default)(function (req) {
    return {
        schema: _graphql2.default,
        pretty: true,
        graphiql: true
    };
}));

// Connect to mongo database
//mongoose.connect('mongodb://localhost/graphql');
var server = app.listen(PORT, function () {
    console.log('Listining at port ' + PORT);
});