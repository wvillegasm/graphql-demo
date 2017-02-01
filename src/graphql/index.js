import {
    GraphQLObjectType,
    GraphQLSchema, GraphQLNonNull, GraphQLID, GraphQLString, GraphQLInt, GraphQLList
} from 'graphql';
//import queries from './queries';

class Dice {
    roll(){
        return Math.floor(6 * Math.random()) + 1;
    }
}

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQuery',
        fields: {
            _id: {
                type: new GraphQLNonNull(GraphQLID),
                resolve(){
                    return 1;
                }
            },
            title: {
                type: GraphQLString,
                resolve(){
                    return 'John Doe';
                }
            },
            description: {
                type: GraphQLString,
                resolve(){
                    return 'New comment';
                }
            },
            diceRoll : {
                type: new GraphQLList(GraphQLInt),
                resolve(){
                    let d = new Dice();
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
