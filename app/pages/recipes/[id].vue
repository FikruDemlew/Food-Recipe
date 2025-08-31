<template>
  <div class="max-w-4xl mx-auto p-6">
    <RecipeDetailCard :recipes="recipe"/>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const recipeId = route.params.id

// Temporary static data (replace with Hasura query later)
const recipe = {
id: recipeId,
title: recipeId,
author: 'John Smith',
ingredients: [
    '200g spaghetti',
    '100g pancetta',
    '2 large eggs',
    '50g pecorino cheese',
    'Black pepper'
    ],
instructions: [
    'Cook spaghetti in salted water.',
    'Fry pancetta until crispy.',
    'Mix eggs with cheese for sauce.',
    'Toss with hot pasta.'
    ]
  }

</script>
