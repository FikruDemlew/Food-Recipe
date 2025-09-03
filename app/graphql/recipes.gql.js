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
      user{
        username
        id
      }
      category {
        id
        name
      }
      recipe_ingredients{
      ingredient_name
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
      user{
        username
        id
      }
      category {
        id
        name
      }
      recipe_ingredients{
      ingredient_name
    }
      instruction {
        id
        steps
      }
    }
  }
`


export const GET_RECIPE_BY_USER_ID = gql`
  query GetRecipeByUserId($user_id: uuid!) {
  recipes(where: { user_id: { _eq: $user_id } }) {
    id
    title
    description
    image
    prep_time_minutes
    created_at
    user {
      username
      id
    }
    category {
      id
      name
    }
    recipe_ingredients {
      ingredient_name
    }
    instruction {
      id
      steps
    }
  }
}

  `;


export const GET_RECIPE_BY_CATEGORY = gql`
  query GetRecipeByUserId($category_id: Int!) {
  recipes(where: { category_id: { _eq: $category_id } }) {
    id
    title
    description
    image
    prep_time_minutes
    created_at
    user {
      username
      id
    }
    category {
      id
      name
    }
    recipe_ingredients {
      ingredient_name
    }
    instruction {
      id
      steps
    }
  }
}

  `;
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

export const ADD_RECIPE = gql`
  mutation AddRecipe(
  $title: String
  $prep_time_minutes: Int
  $image: String
  $category_id: uuid!
  $user_id: uuid!
  $ingredients: [ingredients_insert_input!]
  $instructions: [instructions_insert_input!]
) {
  insert_recipes_one(object: {
    title: $title
    prep_time_minutes: $prep_time_minutes
    image: $image
    category_id: $category_id
    user_id: $user_id
    ingredients: { data: $ingredients }
    instructions: { data: $instructions }
  }) {
    id
    title
  }
}


`;