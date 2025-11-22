import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";

async function start() {
  const app = express();

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  server.applyMiddleware({ app, path: "/graphql" });

  app.listen(4000, () => {
    console.log("Backend rodando: http://localhost:4000/graphql");
  });
}

start();
