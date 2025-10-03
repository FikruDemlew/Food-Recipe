<template>
  <div class="min-h-screen flex items-center justify-center p-6">
    <div class="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
      <h1 class="text-2xl font-bold text-gray-800 mb-6">Sign Up</h1>

      <form @submit.prevent="handleSignup" class="space-y-5">
        <!-- Name -->
        <div>
          <label class="block text-gray-700 mb-2">Full Name</label>
          <input
            v-model="name"
            type="text"
            placeholder="Enter your name"
            class="w-full p-3 border rounded-xl focus:ring focus:ring-green-300"
            required
          />
        </div>

        <!-- Email -->
        <div>
          <label class="block text-gray-700 mb-2">Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            class="w-full p-3 border rounded-xl focus:ring focus:ring-green-300"
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
            class="w-full p-3 border rounded-xl focus:ring focus:ring-green-300"
            required
          />
        </div>

        <!-- Submit -->
        <button
          type="submit"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
        >
          Sign Up
        </button>
      </form>

      <p class="text-sm text-gray-600 mt-6 text-center">
        Already have an account?
        <NuxtLink to="/login" class="text-blue-600 hover:underline">
          Login
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const password = ref("");

async function handleSignup() {
  try {
    const res = await fetch("http://localhost:8081/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: name.value,
        email: email.value,
        password: password.value,
      }),
    }); 

    if (!res.ok) {
      const errorData = await res.json();
      console.error("Signup failed:", errorData);
      alert(
        errorData.message || (errorData.errors && errorData.errors[0].message) || "Signup failed"
      );
      return;
    }

    const data = await res.json();
    console.log("Signup successful:", data);
    alert("Signup successful! Your access token: " + data.accessToken);

    // TODO: You can store JWT in localStorage or redirect to login/dashboard
    // navigate to dashboard page
    window.location.href = "/login";
  } catch (err) {
    console.error("Signup error:", err);
    alert("Something went wrong during signup.");
  }
}
</script>
