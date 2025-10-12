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

        <div>
          <label class="block text-gray-700 font-medium mb-2">Food Description</label>
          <input
            v-model="form.description"
            type="text"
            placeholder="Enter food description"
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
import { onMounted,onUnmounted, ref } from "vue"
import { useMutation } from "@vue/apollo-composable"
import { ADD_RECIPE } from "@/graphql/recipes.gql"
import { INSERT_INSTRUCTION } from "~/graphql/ instructions.gql"
import { INSERT_INGREDIENT } from "~/graphql"

const form = reactive({
  name: "",
  description: "",
  ingredients: "",
  time: "",
  steps: "",
  category_id: 10,
  image: null,
  imagePreview: null,
})
const loggedInId = ref(null)
const { mutate: addRecipe } = useMutation(ADD_RECIPE)
const { mutate: insertInstruction } = useMutation(INSERT_INSTRUCTION)
const { mutate: insertIngredient } = useMutation(INSERT_INGREDIENT)


function handleImageUpload(event) {
  const file = event.target.files[0]
  if (file) {
    form.image = file
    form.imagePreview = URL.createObjectURL(file)
  }
}
console.log("User ID before submit:", loggedInId.value)

onMounted(() => {
  const userId = localStorage.getItem('userId')
  loggedInId.value = userId || "c6f1a0e5-1234-4a8f-9d20-babc1234abcd"
  if (!userId) {
    alert('You must be logged in to create a recipe.')
  } 
   else {
    console.log('User is logged in with token:', userId)
  }

  if (loggedInId.value) {
    console.log('Component mounted', loggedInId.value)
  } else {
    console.warn('No user ID found in localStorage')
  }
})
const catNumber = 10
const errorCatch = ref(null)
console.log('Component mounted', loggedInId.value)

async function handleSubmit() {
  try {
    
    // Convert steps into array
    const stepsArray = form.steps
      .split("\n")
      .map(s => s.trim())
      .filter(s => s !== "")

    // 1️⃣ Insert instructions first
    const { data: instructionsData } = await insertInstruction({
      steps: stepsArray,
    })

    const instructionId = instructionsData.insert_instructions_one.id
    console.log("Inserted instructions with ID:", instructionId)

    // 2️⃣ Build recipe variables
    const variables = {
      user_id: loggedInId.value,
      title: form.name,
      description: form.description,
      prep_time_minutes: form.time,
      image: form.image ? form.image.name : null,
      category_id: form.category_id,
      instruction_id: instructionId,   // ✅ fixed here
    }

    console.log("Submitting recipe:", variables)

    // 3️⃣ Insert recipe
    const { data: recipeData } = await addRecipe(variables)
    alert(`✅ Recipe "${recipeData.insert_recipes_one.title}" added successfully!`)

    const recipeId = recipeData.insert_recipes_one.id
    console.log("Inserted recipe with ID:", recipeId)
    const ingredientInfo = {
      recipe_id: recipeId,
      ingredient_name: String(form.ingredients)
    }

    const { data: ingredientData } = await insertIngredient(ingredientInfo)
    console.log("Inserted ingredients:", ingredientData)
    
  } catch (error) {
    errorCatch.value = error
    console.error("❌ Error adding recipe:", error)
    alert("Failed to add recipe. Check console for details.")
  }
}

</script>
