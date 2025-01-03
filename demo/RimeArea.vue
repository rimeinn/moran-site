<script setup lang="ts">
 import { onMounted } from 'vue';

 defineProps<{
   placeholder: string;
 }>()

 onMounted(async () => {
   const { loadZip } = await import('fcitx5-rime');
   loadZip("./rime.zip");
 })
</script>

<template>
    <br>
    <textarea :placeholder="placeholder" />
    <br>
</template>

<style scoped>
 textarea {
     width: 100%;
     height: 300px;
     padding: 10px;
     border: 1px solid #ccc;
     border-radius: 4px;
     box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
     font-family: Arial, sans-serif;
     font-size: 16px;
     resize: vertical;
     transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
 }

 textarea:focus {
     border-color: #66afe9;
     box-shadow: 0 0 5px rgba(102, 175, 233, 0.5);
     outline: none;
 }

 textarea.dark {
     background-color: #2e2e2e;
     color: #f5f5f5;
     border: 1px solid #555;
 }

 textarea.dark:focus {
     border-color: #4a90e2;
 }
</style>
