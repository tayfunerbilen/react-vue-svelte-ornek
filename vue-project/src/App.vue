<script setup>
import {ref} from "vue"
import List from "./components/List.vue";

const categories = ref([
  {
    id: 1,
    title: 'Kategori 1'
  },
  {
    id: 2,
    title: 'Kategori 2'
  },
  {
    id: 3,
    title: 'Kategori 3'
  },
  {
    id: 4,
    title: 'Kategori 4'
  },
  {
    id: 5,
    title: 'Kategori 5'
  }
])
const selected = ref([2, 5])
const query = ref('test')
</script>

<template>
  <List :categories="categories" :selected="selected" v-model:query="query" />
  {{ selected }}
  {{ query }}
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
