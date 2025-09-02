<template>
  <div class="bg-gray-900 h-fit w-80 md:w-120 rounded-3xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
    <NuxtLink :to="`/recipes/${(recipes.id)}`" class="block">
      <!-- Image Section -->
      <div class="overflow-hidden rounded-t-3xl">
        <img
          class="w-full h-60 object-cover transition-transform duration-500 hover:scale-110"
          src="/assets/img/seafood.jpg"
          alt="Recipe image"
        />
      </div>
    </NuxtLink>
    <!-- Content Section -->
    <div class="p-4 text-white">
      <!-- Title and Price -->
      <div class="grid grid-flow-col gap-4 items-center">
        <h1 class="text-2xl font-bold font-sans truncate">{{ recipes.title }}</h1>
        <span class="bg-midnight text-sm font-medium px-3 py-1 rounded-full justify-self-end">100</span>
      </div>
      <!-- Metadata -->
      <div class="mt-4 text-gray-300 text-sm">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-2">
            <img class="h-4 w-4" src="/clock.png" alt="Time icon" />
            <span>{{ recipes.prep_time_minutes }}</span>
          </div>
          <span class="italic">{{recipes.description }}</span>
        </div>
      </div>
      <!-- Engagement Metrics -->
      <div class="mt-4 flex justify-between items-center text-sm">
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-1">
            <img class="h-4 w-4" src="/chat.png" alt="Comments icon" />
            <span>35</span>
          </div>
          <div class="flex items-center gap-1">
            <img class="h-4 w-4" src="/like.png" alt="Likes icon" />
            <span>45</span>
          </div>
        </div>
        <img class="h-6" src="/rating.png" alt="Rating" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  recipes: {
    type: Object,
    required: true
  },
  
  
})

</script>
