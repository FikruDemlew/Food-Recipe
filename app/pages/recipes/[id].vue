<template>
  <div class="max-w-4xl mx-auto p-6">
    <RecipeDetailCard :recipe="recipeDetails"/>
  </div>
  
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const recipeId = String(route.params.id)


const GET_RECIPE = gql`
  query GetRecipe($id: uuid!) {
    recipes_by_pk(id: $id) {
    title
    category_id
    created_at
    description
    id
    image
    prep_time_minutes
    recipe_ingredients{
      ingredient_name
    }
    user{
      username
    }
    instruction{
      steps
    }
    }
  }
`;
const { data, loading, error } = await useAsyncQuery(GET_RECIPE, { id: recipeId })

const recipe = data.value
const recipeDetails = recipe?.recipes_by_pk
const recipeDetailsTitle = recipeDetails?.title


console.log(recipeDetailsTitle)



</script>
