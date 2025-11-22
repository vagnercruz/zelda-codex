import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Game {
    id: ID!
    name: String!
    zeldaId: String!
    createdAt: String!
  }

  type Query {
    hello: String!
    games: [Game!]!
  }
`;
