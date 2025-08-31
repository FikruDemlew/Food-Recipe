<template>
  <div
    :class="[
      `fixed top-0 w-full h-20 z-50 grid grid-cols-1 md:grid-cols-3 items-center transition-colors duration-150`,
      isScrolled ? `bg-white/20 backdrop-blur-md` : `bg-transparent`
    ]"
  >
    <!-- Logo -->
    <div class="flex items-center justify-between px-4 md:px-6">
      <NuxtLink to="/">
      <div class="flex items-center gap-2">
        <img class="h-8" src="/letter-d.png" alt="DishHub Logo" />
        <h1 class="font-bubble text-4xl md:text-5xl text-white">DishHub</h1>
      </div>
      </NuxtLink>

      <!-- Mobile Menu Toggle -->
      <button class="md:hidden text-white focus:outline-none cursor-pointer" @click="isMobileMenuOpen = !isMobileMenuOpen">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"></path>
        </svg>
      </button>
    </div>

    <!-- Nav Links and Search (Mobile Menu) -->
    <div :class="['flex-col md:flex-row md:flex md:items-center md:gap-6 md:justify-center px-4 md:px-0', isMobileMenuOpen ? 'flex' : 'hidden']">
      <!-- Nav Links -->
      <div class="flex flex-col md:flex-row text-white font-quick font-bold gap-4 md:gap-6 py-4 md:py-0">
        <NuxtLink to="/" class="hover:underline">HOME</NuxtLink>
        <NuxtLink to="/recipes" class="hover:underline">RECIPE</NuxtLink>

        <!-- Dropdown for Categories -->
        <ul class="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-6">
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
                class="absolute top-full mt-2 w-48 bg-white text-gray-700 rounded-xl shadow-lg overflow-hidden md:mt-4"
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
      </div>

      <!-- Search Input -->
      <div class="flex items-center md:space-x-4 py-2 md:py-0">
        <div class="flex w-full md:w-auto items-center">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search recipes..."
            class="px-4 py-2 rounded-l-xl bg-white text-gray-700 focus:outline-none w-full md:w-64"
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
    <div class="hidden md:flex items-center justify-end text-white font-quick font-bold gap-4 px-4 md:px-6">
      <NuxtLink to="/Login">
        <button class="cursor-pointer px-4 py-2 bg-transparent border border-white rounded-xl hover:bg-white hover:text-black transition">
          Login
        </button>
      </NuxtLink>
      <NuxtLink to="/Signup">
        <button class="cursor-pointer px-4 py-2 bg-midnight rounded-xl hover:bg-red-700 transition">
          Sign Up
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isOpen = ref(false)
const isMobileMenuOpen = ref(false)
const searchQuery = ref("")

function handleSearch() {
  if (!searchQuery.value.trim()) {
    alert("Please enter a search term")
    return
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