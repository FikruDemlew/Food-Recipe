<template>
  <div class="min-h-screen font-quicksand mt-30">
    <!-- Page Header -->
    <header class="bg-white-600 text-white py-8">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bungee text-center">User-Created Recipes</h1>
        <p class="text-lg md:text-xl text-center mt-2">
          Discover delicious recipes shared by our community
        </p>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
      <div v-if="pending">Loading recipes...</div>
      <div v-else-if="error" class="text-red-600">Error loading recipes: {{ error.message }}</div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Loop through recipes -->
        <RecipeDetailCard
          v-for="recipe in recipes"
          :key="recipe.id"
          :recipe="recipe"
        />
      </div>
    </main>
  </div>
</template>

<script setup>
import { GET_RECIPE_BY_USER_ID } from '~/graphql'
import RecipeDetailCard from '~/components/RecipeDetailCard.vue'

const { data, pending, error } = await useAsyncQuery(
  GET_RECIPE_BY_USER_ID,
  { user_id: '5bc66c4c-d5f4-4ea5-8737-4fe50ec27518' }
)

// Now it's recipes, not recipes_by_user
const recipes = computed(() => data.value?.recipes || [])
console.log(recipes)
</script>

