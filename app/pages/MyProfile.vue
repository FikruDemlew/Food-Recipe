<template>
  <div>
    <div class="mt-40 mx-30">
    <h1 class="text-white text-4xl md:text-5xl font-bubble mb-10">Your Recipes.</h1>
    <div class="flex flex-row flex-wrap justify-start items-start mx-3 gap-10">
      <div v-for="recipesResult in recipesResults" :key="recipesResult.id">
        <RecipeCard :recipes="recipesResult"/>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { RecipeCard } from '#components';
import { GET_RECIPE_BY_USER_ID } from '~/graphql';
const userId = String(localStorage.getItem("userId"));

console.log("User ID:", userId);
const { data, pending, error, refresh } = await useAsyncQuery(GET_RECIPE_BY_USER_ID, { user_id: userId });
const recipesResults = computed(() => data.value?.recipes ?? [])

console.log("Query Data:", data.value);
</script>

<style>

</style>