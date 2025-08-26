<template>
<div
    class="min-h-screen flex justify-center p-6 bg-[url(/assets/img/background3.jpg)] bg-cover bg-bottom"
  >
      <div class=" mt-30 w-full max-w-2xl bg-white p-8 rounded-2xl shadow-lg">
      <h1 class="text-2xl font-bold text-gray-800 mb-6">Add a New Recipe</h1>

      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Food Name -->
        <div>
          <label class="block text-gray-700 font-medium mb-2">Food Name</label>
          <input
            v-model="form.name"
            type="text"
            placeholder="Enter food name"
            class="w-full p-3 border rounded-xl focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <!-- Ingredients -->
        <div>
          <label class="block text-gray-700 font-medium mb-2">Ingredients</label>
          <textarea
            v-model="form.ingredients"
            rows="4"
            placeholder="List ingredients here..."
            class="w-full p-3 border rounded-xl focus:ring focus:ring-blue-300"
            required
          ></textarea>
        </div>

        <!-- Cooking Time -->
        <div>
          <label class="block text-gray-700 font-medium mb-2">Cooking Time (minutes)</label>
          <input
            v-model="form.time"
            type="number"
            placeholder="e.g. 45"
            class="w-full p-3 border rounded-xl focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <!-- Steps -->
        <div>
          <label class="block text-gray-700 font-medium mb-2">Step by Step Process</label>
          <textarea
            v-model="form.steps"
            rows="5"
            placeholder="Write the cooking steps..."
            class="w-full p-3 border rounded-xl focus:ring focus:ring-blue-300"
            required
          ></textarea>
        </div>

        <!-- Image Upload -->
        <div>
          <label class="block text-gray-700 font-medium mb-2">Food Image</label>
          <input
            type="file"
            accept="image/*"
            @change="handleImageUpload"
            class="w-full p-2 border rounded-xl"
          />
          <div v-if="form.imagePreview" class="mt-3">
            <img :src="form.imagePreview" alt="Preview" class="rounded-xl max-h-48 object-cover" />
          </div>
        </div>

        <!-- Submit -->
        <button
          type="submit"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  ingredients: '',
  time: '',
  steps: '',
  image: null,
  imagePreview: null,
})

function handleImageUpload(event) {
  const file = event.target.files[0]
  if (file) {
    form.image = file
    form.imagePreview = URL.createObjectURL(file)
  }
}

function handleSubmit() {
  console.log('Recipe submitted:', form)
  alert('Recipe submitted! Check console for data.')
}
</script>
