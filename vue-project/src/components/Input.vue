<template>
  <input type="text" :value="query" @input="$emit('update:query', $event.target.value)">
</template>

<script setup>
defineProps({
  query: String
})
</script>

<style scoped>

</style>