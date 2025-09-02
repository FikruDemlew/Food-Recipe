import { gql } from '@apollo/client/core'

// Get all recipes
export const GET_RECIPES = gql`
  query GetRecipes {
    recipes {
      id
      title
      description
      image
      prep_time_minutes
      created_at
      category {
        id
        name
      }
      instruction {
        id
        steps
      }
    }
  }
`

// Get single recipe by ID
export const GET_RECIPE_BY_ID = gql`
  query GetRecipeById($id: uuid!) {
    recipes_by_pk(id: $id) {
      id
      title
      description
      image
      prep_time_minutes
      created_at
      category {
        id
        name
      }
      instruction {
        id
        steps
      }
    }
  }
`

// Insert recipe
export const INSERT_RECIPE = gql`
  mutation InsertRecipe($object: recipes_insert_input!) {
    insert_recipes_one(object: $object) {
      id
      title
    }
  }
`

// Update recipe
export const UPDATE_RECIPE = gql`
  mutation UpdateRecipe($id: uuid!, $changes: recipes_set_input!) {
    update_recipes_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
      title
    }
  }
`

// Delete recipe
export const DELETE_RECIPE = gql`
  mutation DeleteRecipe($id: uuid!) {
    delete_recipes_by_pk(id: $id) {
      id
    }
  }
`
