<script setup lang="ts">
import type { PickedChildDoc } from '~/composables/contentFolder'
import { useContentFolderListing } from '~/composables/contentFolder'

const props = defineProps<{
  folderName: 'projects' | 'updates'
}>()

defineSlots<{
  default: (props: { data: PickedChildDoc }) => unknown
}>()

const listing = useContentFolderListing(props.folderName)
const { data } = await listing.getListing()
</script>

<template>
  <slot :data="data!" />
</template>
