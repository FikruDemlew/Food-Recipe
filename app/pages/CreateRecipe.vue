<template>
  <div
    class="min-h-screen flex justify-center p-6 bg-[url(/assets/img/background3.jpg)] bg-cover bg-bottom"
  >
    <div class="mt-30 w-full max-w-2xl bg-white p-8 rounded-2xl shadow-lg">
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
          <label class="block text-gray-700 font-medium mb-2">Ingredients (comma separated)</label>
          <textarea
            v-model="form.ingredients"
            rows="4"
            placeholder="e.g. Chicken, Onion, Spices"
            class="w-full p-3 border rounded-xl focus:ring focus:ring-blue-300"
            required
          ></textarea>
        </div>

        <!-- Cooking Time -->
        <div>
          <label class="block text-gray-700 font-medium mb-2">Cooking Time (minutes)</label>
          <input
            v-model.number="form.time"
            type="number"
            placeholder="e.g. 45"
            class="w-full p-3 border rounded-xl focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <!-- Steps -->
        <div>
          <label class="block text-gray-700 font-medium mb-2">Step by Step Process (one per line)</label>
          <textarea
            v-model="form.steps"
            rows="5"
            placeholder="Write each step on a new line"
            class="w-full p-3 border rounded-xl focus:ring focus:ring-blue-300"
            required
          ></textarea>
        </div>

        <!-- Category -->
        <div>
          <label class="block text-gray-700 font-medium mb-2">Category ID</label>
          <input
            v-model.number="form.category_id"
            type="number"
            placeholder="e.g. 1"
            class="w-full p-3 border rounded-xl focus:ring focus:ring-blue-300"
            required
          />
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
import { reactive } from "vue"
import { useMutation } from "@vue/apollo-composable"
import { ADD_RECIPE } from "@/graphql/recipes.gql"

const form = reactive({
  name: "",
  ingredients: "",
  time: "",
  steps: "",
  category_id: null,
  image: null,
  imagePreview: null,
})

const { mutate: addRecipe } = useMutation(ADD_RECIPE)

function handleImageUpload(event) {
  const file = event.target.files[0]
  if (file) {
    form.image = file
    form.imagePreview = URL.createObjectURL(file)
  }
}

async function handleSubmit() {
  try {
    // Convert comma-separated ingredients into array of objects
    const ingredientsArray = form.ingredients
      .split(",")
      .map(i => i.trim())
      .filter(i => i !== "")
      .map(i => ({ ingredient_name: i }))

    // Convert steps (each line) into array
    const stepsArray = form.steps
      .split("\n")
      .map(s => s.trim())
      .filter(s => s !== "")

    const variables = {
      user_id: "3c348837-f3a7-44f8-892d-f35be74a98fb",
      title: form.name,
      prep_time_minutes: form.time,
      image: form.image ? form.image.name : null, // only storing file name for now
      category_id: 10,
      ingredients: ingredientsArray,
      instructions: [{ steps: stepsArray }],
    }

    console.log("Submitting recipe:", variables)

    const { data } = await addRecipe({ variables })

    alert(`✅ Recipe "${data.insert_recipes_one.title}" added successfully!`)
  } catch (error) {
    console.error("❌ Error adding recipe:", error)
    alert("Failed to add recipe. Check console for details.")
  }
}
</script>
