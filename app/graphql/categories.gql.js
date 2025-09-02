import { gql } from '@apollo/client/core'

// Get categories
export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      id
      name
    }
  }
`
