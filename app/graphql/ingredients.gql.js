import gql from "graphql-tag";

export const GET_INSTRUCTIONS = gql`
  query GetInstructions {
    instructions {
      id
      steps
    }
  }
`;

export const INSERT_INGREDIENT = gql`
  mutation InsertIngredient(
    $recipe_id: uuid!
    $ingredient_name: String!
    ) {
    insert_recipe_ingredients_one(object: {recipe_id: $recipe_id, ingredient_name: $ingredient_name}) {
      recipe_id
      ingredient_name
    }
  }
`;
