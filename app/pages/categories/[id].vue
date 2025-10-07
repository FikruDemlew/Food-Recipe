<template>
  <div class="mt-40 mx-30">
    <h1 class="text-white text-5xl font-bubble mb-10">{{ categoryId }} Recipes.</h1>
    <div class="grid grid-cols-8 ml-10 gap-10">
      <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipes="recipe"/>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, computed, watch } from 'vue'
import { GET_RECIPE_BY_CATEGORY } from '~/graphql'

const route = useRoute()
const categoryId = ref(route.params.id)
const storedId = ref(mapCategoryToId(categoryId.value))

function mapCategoryToId(id) {
  if (id === "vegan") return 4
  if (id === "traditional") return 8
  if (id === "homemade") return 9
  if (id === "dessert") return 10
  return null
}

const { data, pending, error, refresh } = await useAsyncQuery(
  GET_RECIPE_BY_CATEGORY,
  computed(() => ({ category_id: storedId.value }))
)

const recipes = computed(() => data.value?.recipes || [])

watch(
  () => route.params.id,
  (newId) => {
    categoryId.value = newId
    storedId.value = mapCategoryToId(newId)
    refresh()
  }
)
</script>