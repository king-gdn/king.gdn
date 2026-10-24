<script setup>

</script>

<template>
  <ContentFolderListing v-slot="{ data }" folder-name="updates">
    <pre>
            {{ data }}
        </pre>
  </ContentFolderListing>
</template>
