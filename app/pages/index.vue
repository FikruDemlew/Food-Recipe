<template>
  <div class="mb-260 md:mb-200">
    <div class="pt-20 pb-20 max-h-screen bg-[url('/background.jpg')] bg-cover min-h-screen">
      <div
        class="mx-auto mt-65 w-90 md:w-200 text-center font-bubble text-amber text-white text-4xl sm:text-7xl md:text-8xl"
      >
        Cook, taste, and share your creations
        <div class="mt-20 rounded-full transition delay-150 ease-in-out hover:scale-105 no-underline">
          <NuxtLink to="recipes" class="text-white font-quick text-xl bg-midnight p-2 md:p-5 w-50 md:w-80 rounded-4xl cursor-pointer ">
              Today's Recipe ⟶
          </NuxtLink>
        </div>
      </div>
      <div
        :class="[
          `flex flex-col lg:flex-row gap-10 justify-end items-center mt-10 mr-10 opacity-0 translate-y-10 transition-all duration-700 ease-out`,
          isScrolled ? 'opacity-100 translate-y-0' : '',
        ]"
      >
        <div class="w-90 sm:w-180 flex flex-col text-start items-center">
          <h1 class="sm:text-end text-4xl sm:text-6xl font-bubble text-white">
            Today’s Traditional Recipes
          </h1>
          <p class="text-xl sm:w-160 font-quick text-white">
            Ethiopian cuisine is a celebration of rich flavors, unique spices, and communal dining.
            At the heart of every meal is injera, a soft, spongy flatbread made from teff flour that
            serves as both plate and utensil. Traditional stews, known as wot, are layered with
            spices like berbere and slow-cooked to perfection—whether it’s the spicy doro wot
            (chicken stew) or the hearty misir wot (red lentils). Meals are often shared from a
            single platter, symbolizing togetherness and hospitality. From aromatic coffee
            ceremonies to vegetarian delights like atkilt wot (cabbage and potatoes), Ethiopian food
            offers not just nourishment, but a cultural experience you’ll never forget.
          </p>
        </div>
        <div class="rounded-3xl mb-10">
          <img
            class="object-none lg:object-bottom w-140 lg:h-150 lg:w-200 rounded-3xl"
            src="../assets/img/Ethiopian-food-Doro-Wot.jpg"
          />
        </div>
      </div>
      <div class=" text-white py-12 md:py-16 px-4 md:px-8 w-full">
    <div class="max-w-4xl mx-auto text-center mt-20">
      <!-- Heading -->
      <h2 class="text-3xl md:text-4xl font-bold font-sans mb-4 md:mb-6">
        Discover and Share Your Culinary Creations
      </h2>
      <!-- Description -->
      <p class="text-base md:text-lg text-gray-200 mb-6 md:mb-8">
        Explore a world of flavors or add your own recipe to inspire others. Join our community of food lovers today!
      </p>
      <!-- Button -->
      <NuxtLink to="/Login">
        <button class="cursor-pointer px-6 py-3  bg-transparent border border-white rounded-xl hover:bg-white hover:text-black transition">
          Create Your Recipe
        </button>
      </NuxtLink>
    </div>
  </div>
    </div>

  </div>

</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Scroll effect
const isScrolled = ref(false)
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}
onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))



</script>
