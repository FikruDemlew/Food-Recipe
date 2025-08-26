<template>
  <div
    :class="[
      `fixed top-0 grid grid-cols-3 h-25 w-screen justify-items-start place-content-center transition-colors delay-125 z-50`,
      isScrolled ? `bg-white/30 backdrop-blur-md` : `bg-transparent`
    ]"
  >
    <!-- Logo -->
    <div class="flex flex-row text-white items-center gap-2 ml-10">
      <img class="h-8" src="/letter-d.png" />
      <h1 class="font-bubble text-5xl">DishHub</h1>
    </div>

    <!-- Nav Links -->
    <div class="flex flex-row text-white font-quick font-bold gap-6 items-center relative">
      <NuxtLink to="/">HOME</NuxtLink>
      <NuxtLink to="/RecipesListing">RECIPE</NuxtLink>

      <!-- Dropdown for Categories -->
      <ul class="flex items-center space-x-6">
      <li class="relative" @mouseenter="isOpen = true" @mouseleave="isOpen = false">
          <button class="flex items-center space-x-1 hover:underline">
            <span>Categories</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <!-- Dropdown Menu -->
          <transition name="fade">
            <ul
              v-if="isOpen"
              class="absolute top-full mt-2 w-48 bg-white text-gray-700 rounded-xl shadow-lg overflow-hidden"
            >
              <li>
                <NuxtLink
                  to="/categories/vegan"
                  class="block px-4 py-2 hover:bg-red-100"
                >Vegan Recipes</NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/categories/traditional"
                  class="block px-4 py-2 hover:bg-red-100"
                >Traditional Recipes</NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/categories/homemade"
                  class="block px-4 py-2 hover:bg-red-100"
                >Homemade Recipes</NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/categories/desserts"
                  class="block px-4 py-2 hover:bg-red-100"
                >Desserts</NuxtLink>
              </li>
            </ul>
          </transition>
        </li>
      </ul>

      <!-- Search Input -->
     <div class="flex items-center space-x-4">
        <!-- Search Bar -->
        <div class="hidden md:flex items-center">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search recipes..."
            class="px-4 py-2 rounded-l-xl bg-white text-gray-700 focus:outline-none w-48 md:w-64"
          />
          <button
            @click="handleSearch"
            class="bg-white text-red-600 px-3 py-2 rounded-r-xl hover:bg-gray-100"
          >
            🔍
          </button>
        </div>
        </div>
    </div>

    <!-- Auth Buttons -->
    <div class="flex flex-row items-center text-white font-quick font-bold ml-100 gap-4">
      <NuxtLink to="/Login" >
        <button class="cursor-pointer px-4 py-2 bg-transparent border border-white rounded-xl hover:bg-white hover:text-black transition">
          Login
        </button>
      </NuxtLink>
      <NuxtLink to="/Signup" >
        <button class="cursor-pointer px-4 py-2 bg-red-500 rounded-xl hover:bg-red-600 transition">
          Sign Up
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isOpen = ref(false);
const searchQuery = ref("");

function handleSearch() {
  if (!searchQuery.value.trim()) {
    alert("Please enter a search term");
    return;
  }
}
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
<style scoped>
/* Smooth dropdown fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>