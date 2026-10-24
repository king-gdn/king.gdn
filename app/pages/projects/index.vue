<template>
  <div class="">
    <div class="prose">
      <h1>projects</h1>
    </div>
    <p class="pb4">
      Below are some project pages that get updated as the efforts do. 📈
    </p>
    <div class="grid auto-rows-fr md:grid-cols-2 w-full gap-3 md:gap-6">
      <ContentFolderListing v-slot="{ data }" folder-name="projects">
        <ProjectCard
          v-for="link of data" :key="link.path" :path="link.path" :title="link.title"
          :published-at="link.publishedAt" :poster-image="link.posterImage"
        />
      </ContentFolderListing>
    </div>
  </div>
</template>

<style scoped>
.card {
    /* @apply rounded-0 */
}
</style>
