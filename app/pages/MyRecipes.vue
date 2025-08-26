<template>
  <div class="min-h-screen font-quicksand mt-30">
    <!-- Page Header -->
    <header class="bg-white-600 text-white py-8">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bungee text-center">User-Created Recipes</h1>
        <p class="text-lg md:text-xl text-center mt-2">Discover delicious recipes shared by our community</p>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Recipe Card 1 -->
       <RecipeDetailCard :recipes="recipes[0]" />
       <RecipeDetailCard :recipes="recipes[1]" />
       <RecipeDetailCard :recipes="recipes[2]" />

      </div>
    </main>
  </div>
</template>

<script setup>
const recipes = [
  {
    id: 'chocolate-chip-cookies',
    title: 'Chocolate Chip Cookies',
    author: 'Jane Doe',
    ingredients: [
      '2 1/4 cups all-purpose flour',
      '1 cup unsalted butter',
      '2 cups chocolate chips',
      '3/4 cup granulated sugar',
      '3/4 cup brown sugar',
      '2 large eggs',
      '1 tsp vanilla extract',
      '1 tsp baking soda',
      '1 tsp salt'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C).',
      'Mix dry and wet ingredients separately.',
      'Combine and stir in chocolate chips.',
      'Bake for 9-11 minutes.'
    ]
  },
  {
    id: 'spaghetti-carbonara',
    title: 'Spaghetti Carbonara',
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
  },
  {
    id: 'banana-bread',
    title: 'Banana Bread',
    author: 'Sarah Lee',
    ingredients: [
      '3 ripe bananas',
      '1 1/2 cups flour',
      '1/2 cup melted butter',
      '3/4 cup sugar',
      '2 eggs'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C).',
      'Mash bananas and mix with butter.',
      'Add dry ingredients and eggs.',
      'Bake for 60 minutes.'
    ]
  }
];
</script>

<style scoped>
</style>