<template>
  <div
    class="min-h-screen flex justify-center p-6 bg-[url(/assets/img/background2.jpg)] bg-cover bg-bottom"
  >
    <div class="max-w-3xl w-full bg-white rounded-2xl shadow-lg overflow-hidden mt-30">
      <!-- Food Image -->

      <div class="h-90 overflow-hidden">
        <img
          :src="recipe.image"
          alt="Food Image"
          class="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
        />
      </div>

      <!-- Recipe Info -->
      <div class="p-8">
        <!-- Food Name -->
        <h1 class="text-3xl font-bold text-black mb-4">{{ recipe.name }}</h1>

        <!-- Cooking Time -->
        <p class="text-gray-600 mb-6">
          ⏱️ <span class="font-medium text-black">{{ recipe.time }} minutes</span> to cook
        </p>

        <!-- Ingredients -->
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-2">Ingredients</h2>
          <p class="text-gray-700 whitespace-pre-line">{{ recipe.ingredients }}</p>
        </div>

        <!-- Steps -->
        <div>
          <h2 class="text-xl font-semibold mb-2">Step by Step Process</h2>
          <p class="text-gray-700 whitespace-pre-line leading-relaxed">
            {{ recipe.steps }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// For now we’ll use dummy recipe data (you can later fetch from API or store)
const recipe = {
  name: 'Spaghetti Carbonara',
  ingredients: `- 200g spaghetti
- 100g pancetta
- 2 eggs
- 50g Parmesan
- Salt & Pepper`,
  time: 30,
  steps: `1. Boil the spaghetti in salted water.
2. Fry the pancetta until crispy.
3. Beat eggs and mix with Parmesan cheese.
4. Drain spaghetti, add pancetta, then remove from heat.
5. Stir in the egg-cheese mixture quickly.
6. Serve immediately with extra Parmesan.`,
  image: 'https://theplanetd.com/images/Ethiopian-food-Tibs.jpg', // placeholder
}
</script>
