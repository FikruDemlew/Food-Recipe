<template>
<div class="mt-40 mx-30">
    <h1 class="text-white text-5xl font-bubble mb-10">{{ categoryId }} Recipes.</h1>
    <div class="grid grid-cols-8 ml-10 gap-10"  v-for="recipe in recipes"
          :key="recipe.id"
          ">
      <RecipeCard :recipes="recipe"/>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, computed, watch } from 'vue';
import { GET_RECIPE_BY_CATEGORY } from '~/graphql';

const route = useRoute();
const categoryId = route.params.id;
const storedId = ref(null);

if(categoryId == "vegan"){
    storedId.value = 4
} else if(categoryId == "traditional"){
    storedId.value = 8
} else if(categoryId == "homemade"){
    storedId.value = 9
} else if(categoryId == "dessert"){
    storedId.value = 10
}

// Only run query when storedId has a value
const { data, pending, error, refresh } = await useAsyncQuery(
  GET_RECIPE_BY_CATEGORY,
  computed(() => ({ category_id: storedId.value })),
  { immediate: !!storedId.value } // optional
)

const recipes = computed(() => data.value?.recipes || [])
</script>


