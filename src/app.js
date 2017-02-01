'use strict';

import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';


import schema from './graphql';


// Start the server
const app = express(),
    PORT = 3000;

// GraphQL server route
app.use('/graphql', graphqlHTTP(req => ({
    schema,
    pretty: true,
    graphiql: true
})));

// Connect to mongo database
//mongoose.connect('mongodb://localhost/graphql');
const server = app.listen(PORT, () => {
    console.log(`Listining at port ${PORT}`);
});
