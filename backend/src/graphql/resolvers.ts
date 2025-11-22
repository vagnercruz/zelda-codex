import { prisma } from "../db/prisma";

export const resolvers = {
  Query: {
    hello: () => "Olá do GraphQL!",
    games: async () => prisma.game.findMany(),
  },
};
