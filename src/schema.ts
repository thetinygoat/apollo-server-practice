import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    user: String!
    places: [String]!
  }
`;

export default typeDefs;
