<template>
  <div class="mt-40 mx-30">
    <h1 class="text-white text-4xl md:text-5xl font-bubble mb-10">What's happening in the locker room.</h1>
    <div class="flex flex-row flex-wrap justify-start items-start mx-3 gap-10">
      <div v-for="recipesResult in recipesResults" :key="recipesResult.id">
        <RecipeCard :recipes="recipesResult"/>
      </div>
    </div>
  </div>
</template>

<script setup>

import { GET_RECIPES } from '~/graphql'

const { data, pending, error } = await useAsyncQuery(GET_RECIPES)
const recipesResults = computed(() => data.value?.recipes ?? [])
console.log(recipesResults.value)


</script>
 