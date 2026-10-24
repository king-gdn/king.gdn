<script setup lang="ts">
defineProps<{
  title: string
  publishedAt: string
  posterImage: string
  path: string
}>()
</script>

<template>
  <NuxtLink :to="path" class="flex flex-1 flex-col bg-base-200 no-underline card card-compact">
    <figure><img :src="posterImage" class="h-32 w-full object-cover object-top"></figure>
    <div class="justify-between rounded card-body">
      <h2 class="text-xl card-title">
        {{ title }}
      </h2>
      <NuxtTime
        class="text-right text-sm text-secondary opacity-80" :datetime="publishedAt" day="numeric" month="long"
        year="numeric"
      />
    </div>
  </NuxtLink>
</template>
