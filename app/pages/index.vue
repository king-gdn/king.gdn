<script setup lang="ts">
const { data: page } = await useAsyncData('home', () => queryCollection('home').first())
</script>

<template>
  <main>
    <div class="mx-auto prose">
      <ContentRenderer v-if="page" :value="page" />
    </div>
  </main>
</template>
