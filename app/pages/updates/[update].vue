<script setup lang="ts">
const path = useRoute().path

const { data: doc } = await useAsyncData(path, () => queryCollection('updates').path(path).first())
if (!doc.value)
  throw createError({ statusCode: 404, statusMessage: 'Update not found', fatal: true })

defineOgImageComponent('Default', {
  title: doc.value.title,
  description: doc.value.description,
  posterImage: doc.value.posterImage ? `/${doc.value.posterImage}` : undefined,
  publishedAt: doc.value.publishedAt,
})
</script>

<template>
  <main class="mx-auto prose">
    <template v-if="doc">
      <h1 class="mb-0">
        {{ doc.title }}
      </h1>
      <NuxtTime
        class="text-right text-sm opacity-80" :datetime="doc.publishedAt" day="numeric" month="long"
        year="numeric"
      />
      <ContentRenderer :value="doc" />
    </template>
    <NuxtLink to="/updates" class="text-xs text-secondary prose">
      back to updates
    </NuxtLink>
  </main>
</template>
