<script setup>
import { defineEmits } from 'vue';
import { ref } from "vue";
//const props = defineProps(["onNewItem"]);
const text = ref("");
const emits = defineEmits(["onNewItem"]);

function handleKeyDown(evt) {
  if (evt.key === "Enter") {
    emits("onNewItem", text);
    text.value = "";
  }
}
</script>

<template><input v-model="text" @keydown="handleKeyDown" />{{ text }}</template>

<style scoped></style>
