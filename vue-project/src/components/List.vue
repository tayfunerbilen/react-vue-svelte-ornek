<template>
  <section>
    <Input v-model:query="query" @input="$emit('update:query', $event.target.value)" />
    {{ query }}
    <h3>Selected Categories</h3>
    <nav>
      <Badge v-for="category in selectedCategories" :category="category" :toggleSelected="toggleSelected" :key="category.id"/>
    </nav>
  </section>

  <section>
    <h3>Categories</h3>
    <nav>
      <button @click="toggleSelected(category)" :class="{active: selected.includes(category.id)}" v-for="category in categories" :key="category.id">
        {{ category.title }}
      </button>
    </nav>
  </section>
</template>

<script setup>
import {computed} from "vue";
import Badge from "./Badge.vue"
import Input from "./Input.vue"

const props = defineProps({
  categories: Object,
  selected: Object,
  query: String
})

const selectedCategories = computed(() => {
  return props.selected.map(catId => props.categories.find(c => c.id === catId))
})

const toggleSelected = category => {
  if (props.selected.includes(category.id)) {
    const index = props.selected.findIndex(catId => catId === category.id)
    props.selected.splice(index, 1)
  } else {
    props.selected.push(category.id)
  }
}
</script>

<style scoped>
button.active {
  background: orangered;
  color: #fff;
}
</style>