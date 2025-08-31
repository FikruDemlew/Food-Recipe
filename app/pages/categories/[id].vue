<template>
<div class="mt-40 mx-30">
    <h1 class="text-white text-5xl font-bubble mb-10">{{ categoryId }} Recipes.</h1>
    <div class="grid grid-cols-8 ml-10 gap-10">
      <RecipeCard :recipes="recipes[0]"/>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const categoryId = route.params.id;
const recipes = [
  {
     id: 'chocolate-chip-cookies',
    title: 'Chocolate Chip Cookies',
    author: 'Jane Doe',
    category:'vegan',
    time: '30min',
    price: '$15',
    comments: 35,
    likes: 55,
    rating: 4.5,
  },
  {
    id: 'spaghetti-carbonara',
    title: 'Spaghetti Carbonara',
    author: 'John Smith',
    category:'vegan',
    time: '25 minutes',
    price: '$20',
    comments: 20,
    likes: 40,
    rating: 4.0,
  }

]
</script>

