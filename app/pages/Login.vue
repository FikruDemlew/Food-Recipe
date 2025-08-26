<template>
  <div class="min-h-screen flex items-center justify-center p-6">
    <div class="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
      <h1 class="text-2xl font-bold text-gray-800 mb-6">Login</h1>

      <form @submit.prevent="handleLogin" class="space-y-5">
        <!-- Email -->
        <div>
          <label class="block text-gray-700 mb-2">Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            class="w-full p-3 border rounded-xl focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <!-- Password -->
        <div>
          <label class="block text-gray-700 mb-2">Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="Enter your password"
            class="w-full p-3 border rounded-xl focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <!-- Submit -->
        <button
          type="submit"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
        >
          Login
        </button>
      </form>

      <p class="text-sm text-gray-600 mt-6 text-center">
        Don’t have an account?
        <NuxtLink to="/signup" class="text-blue-600 hover:underline">
          Sign up
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");

function handleLogin() {
  console.log("Login with:", email.value, password.value);
  alert("Login submitted!");
}
</script>
