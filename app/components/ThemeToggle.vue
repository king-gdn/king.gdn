<script setup lang="ts">
import { useCycleList } from '@vueuse/core'

const colorMode = useColorMode()
const themes = [
  'light',
  'dark',
  'black',
]
const { state, next } = useCycleList(themes)

// match the state in the cycle
state.value = colorMode.value
if (colorMode.preference === 'system')
  colorMode.preference = colorMode.value

function nextTheme() {
  next()
  colorMode.preference = state.value
}
</script>

<template>
  <button class="btn btn-ghost" @click="nextTheme()">
    <Icon v-show="state === 'light'" name="i-carbon-sun" class="inline-block align-middle" />
    <Icon v-show="state === 'dark'" name="i-carbon-moon" class="inline-block align-middle" />
    <Icon v-show="state === 'black'" name="i-carbon-contrast" class="inline-block align-middle" />
  </button>
</template>
