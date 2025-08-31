<template>
  <footer class="bg-midnight text-white py-8">
    <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- About -->
      <div>
        <h2 class="text-lg font-bold mb-3">🍲 DishHub</h2>
        <p class="text-sm text-red-100">
          Discover, share, and enjoy delicious recipes from around the world.
        </p>
      </div>

      <!-- Links -->
      <div>
        <h2 class="text-lg font-bold mb-3">Quick Links</h2>
        <ul class="space-y-2 text-sm">
          <li><NuxtLink to="/" class="hover:underline">Home</NuxtLink></li>
          <li><NuxtLink to="recipes" class="hover:underline">Browse Recipes</NuxtLink></li>
          <li><NuxtLink to="createRecipe" class="hover:underline">Add Recipe</NuxtLink></li>
          <li><NuxtLink to="createRecipe" class="hover:underline">Favorite Recipe</NuxtLink></li>
        </ul>
      </div>

      <!-- Social Media -->
      <div>
        <h2 class="text-lg font-bold mb-3">Follow Us</h2>
        <div class="flex space-x-4">
          <a href="#" class="hover:text-red-200">🌐</a>
          <a href="#" class="hover:text-red-200">📘</a>
          <a href="#" class="hover:text-red-200">📸</a>
          <a href="#" class="hover:text-red-200">🐦</a>
        </div>
      </div>
    </div>

    <!-- Bottom -->
    <div class="mt-8 border-t border-red-500 pt-4 text-center text-sm text-red-200">
      © 2025 RecipeHub. All rights reserved.
    </div>
  </footer>
</template>
