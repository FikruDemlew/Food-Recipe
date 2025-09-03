import gql from "graphql-tag";

export const GET_INSTRUCTIONS = gql`
  query GetInstructions {
    instructions {
      id
      steps
    }
  }
`;

export const ADD_INSTRUCTION = gql`
  mutation AddInstruction($steps: [String!]!) {
    insert_instructions_one(object: {steps: $steps}) {
      id
      steps
    }
  }
`;
