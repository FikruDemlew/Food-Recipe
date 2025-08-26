<template>
  <div class="mb-140">
    <div class="pt-20 pb-20 max-h-screen bg-[url('/background.jpg')] bg-cover min-h-screen">
      <div
        class="mx-auto mt-65 w-90 md:w-200 text-center font-bubble text-amber text-white text-4xl sm:text-7xl md:text-8xl"
      >
        Cook, taste, and share your creations
        <div class="mt-20 rounded-full transition delay-150 ease-in-out hover:scale-105 no-underline">
          <NuxtLink to="RecipesListing" class="text-white font-quick text-xl bg-red-700 p-2 md:p-5 w-50 md:w-80 rounded-4xl cursor-pointer ">
          
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
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
