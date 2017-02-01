'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _graphql = require('graphql');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//import queries from './queries';

//const roll = () => Math.floor(6 * Math.random()) + 1;

//GraphQLObjectType.prototype.roll = () => Math.floor(6 * Math.random()) + 1;

var Dice = function () {
    function Dice() {
        _classCallCheck(this, Dice);
    }

    _createClass(Dice, [{
        key: 'roll',
        value: function roll() {
            return Math.floor(6 * Math.random()) + 1;
        }
    }]);

    return Dice;
}();

exports.default = new _graphql.GraphQLSchema({
    query: new _graphql.GraphQLObjectType({
        name: 'RootQuery',
        fields: {
            _id: {
                type: new _graphql.GraphQLNonNull(_graphql.GraphQLID),
                resolve: function resolve() {
                    return 1;
                }
            },
            title: {
                type: _graphql.GraphQLString,
                resolve: function resolve() {
                    return 'John Doe';
                }
            },
            description: {
                type: _graphql.GraphQLString,
                resolve: function resolve() {
                    return 'New comment';
                }
            },
            diceRoll: {
                type: new _graphql.GraphQLList(_graphql.GraphQLInt),
                resolve: function resolve() {
                    var d = new Dice();
                    return [d.roll(), d.roll()];
                }
            }
        }
    })
});

/*
{
    "query": "query { _id, title, description  }"
}
*/