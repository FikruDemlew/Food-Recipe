<template>
  <div class="mt-40 mx-30">
    <h1 class="text-white text-4xl md:text-5xl font-bubble mb-10">What's happening in the locker room.</h1>
    <div class="flex flex-row flex-wrap justify-start items-start mx-3 gap-10">
      <RecipeCard :recipes="recipes[0]"/>
      <RecipeCard :recipes="recipes[0]"/>
      <RecipeCard :recipes="recipes[0]"/>
      <RecipeCard :recipes="recipes[0]"/>
      <RecipeCard :recipes="recipes[0]"/>

    </div>
  </div>
</template>

<script setup>
const recipes = [
  {
    id: 'chocolate-chip-cookies',
    title: 'Chocolate Chip Cookies',
    author: 'Jane Doe',
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
    time: '25 minutes',
    price: '$20',
    comments: 20,
    likes: 40,
    rating: 4.0,
  }

]
</script>
