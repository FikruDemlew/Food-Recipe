import { gql } from '@apollo/client/core'

// Get instructions
export const GET_INSTRUCTIONS = gql`
  query GetInstructions {
    instructions {
      id
      steps
    }
  }
`

// Insert instructions
export const INSERT_INSTRUCTION = gql`
  mutation InsertInstruction($steps: [String!]!) {
    insert_instructions_one(object: { steps: $steps }) {
      id
      steps
    }
  }
`

// Update instruction
export const UPDATE_INSTRUCTION = gql`
  mutation UpdateInstruction($id: uuid!, $steps: [String!]!) {
    update_instructions_by_pk(pk_columns: { id: $id }, _set: { steps: $steps }) {
      id
      steps
    }
  }
`

// Delete instruction
export const DELETE_INSTRUCTION = gql`
  mutation DeleteInstruction($id: uuid!) {
    delete_instructions_by_pk(id: $id) {
      id
    }
  }
`
