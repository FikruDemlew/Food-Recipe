<template>
  <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <div class="w-full h-48 bg-gray-300 flex items-center justify-center">
            <span class="text-gray-600 font-bubblegum text-lg">{{ recipes.title }}</span>
          </div>
          <div class="p-6">
            <h2 class="text-2xl font-bungee text-green-600 mb-2">{{ recipes.title }}</h2>
            <p class="text-gray-600 text-sm mb-4">{{ recipes.author  }}</p>
            <h3 class="text-lg font-semibold text-gray-700 mb-2">Ingredients</h3>
            <ul class="list-disc list-inside text-gray-600 text-sm mb-4" v-for="ingredient in recipes.ingredients" :key="ingredient">
              <li>{{ ingredient }}</li>
            </ul>
            <h3 class="text-lg font-semibold text-gray-700 mb-2">Instructions</h3>
            <ol class="list-decimal list-inside text-gray-600 text-sm" v-for="instruction in recipes.instructions" :key="instruction">
              <li>{{ instruction }}</li>
            </ol>
            <NuxtLink to="/recipe/chocolate-chip-cookies" class="text-green-600 hover:underline text-sm mt-4 inline-block">View Full Recipe</NuxtLink>
          </div>
        </div>
</template>

<script setup>
defineProps({
  recipes: {
    type: Object,
    required: true
  }
})

</script>

