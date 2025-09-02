<template>
  <div class="bg-white shadow-lg rounded-lg overflow-hidden mt-30">
          <div class="w-full h-48 bg-gray-300 flex items-center justify-center">
            <span class="text-gray-600 font-bubblegum text-lg">{{ details.title }}</span>
          </div>
          <div class="p-6">
            <h2 class="text-2xl font-bungee text-black mb-2">{{details.description}}</h2>
            <p class="text-gray-600 text-sm mb-4">{{details.user.username}}</p>
            <h3 class="text-lg font-semibold text-gray-700 mb-2">Time it takes to make: <p class=" font-light">{{ details.prep_time_minutes }}min</p></h3>

            <h3 class="text-lg font-semibold text-gray-700 mb-2">Ingredients</h3>
              <li>{{details.recipe_ingredients[0].ingredient_name}}</li>
            <h3 class="text-lg font-semibold text-gray-700 mb-2">Instructions</h3>
            <ol class="list-disc list-inside text-gray-600 text-sm" v-for="instruction in details.instruction.steps" :key="instruction">
              <li>{{ instruction }}</li>
            </ol>
          </div>
        </div>
</template>

<script setup>
const recipeDetails = defineProps({
  recipe: {
    type: Object,
    required: true
  }
})

const details = recipeDetails.recipe
const ingredients = details.recipe_ingredients[0]
console.log("helo",details)

</script>

