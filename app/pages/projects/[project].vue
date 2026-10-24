<script setup lang="ts">
const path = useRoute().path

const { data } = await useAsyncData(path, () => queryCollection('projects').path(path).first())
if (!data.value)
  throw createError({ statusCode: 404, statusMessage: 'Project not found', fatal: true })

defineOgImageComponent('Default', {
  title: data.value.title,
  description: data.value.description,
  posterImage: data.value.posterImage ? `/${data.value.posterImage}` : undefined,
  publishedAt: data.value.publishedAt,
})
</script>

<template>
  <article class="mx-auto prose">
    <h1>{{ data!.title }}</h1>
    <ContentRenderer :value="data!" />
    <NuxtLink to="/projects" class="text-xs prose">
      back to projects
    </NuxtLink>
  </article>
</template>
