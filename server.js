import colors from "colors";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./graphql/typeDefs.js";
import { resolvers } from "./graphql/resolvers.js";
import mongoDBconnection from "./config/monogDB.js";

// init
dotenv.config();

// envirolment vars
const PORT = process.env.PORT || 9090;

// init server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// listen server
const listenServer = async () => {
  await startStandaloneServer(server, {
    listen: {
      port: PORT,
    },
  });
  mongoDBconnection();
  console.log(`server is ranning ${PORT}`.bgCyan);
};

//server listen
listenServer();
