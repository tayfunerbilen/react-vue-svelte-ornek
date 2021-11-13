<template>
  <button @click="toggleSelected(category)">
    {{ category.title }}
  </button>
</template>

<script setup>
defineProps({
  category: Object,
  toggleSelected: Function
})
</script>

<style scoped>

</style>