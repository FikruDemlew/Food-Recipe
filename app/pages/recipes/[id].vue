<template>
  <div class="max-w-4xl mx-auto p-6">
    <RecipeDetailCard :recipe="recipeDetails"/>
  </div>
  
</template>

<script setup>
import { useRoute } from 'vue-router'
import { GET_RECIPE_BY_ID } from '~/graphql'

const route = useRoute()
const recipeId = String(route.params.id)


const { data, loading, error } = await useAsyncQuery(GET_RECIPE_BY_ID, { id: recipeId })

const recipe = data.value
const recipeDetails = recipe?.recipes_by_pk
const recipeDetailsTitle = recipeDetails?.title


console.log(recipeDetailsTitle)



</script>
