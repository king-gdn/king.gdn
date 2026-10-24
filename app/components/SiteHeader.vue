<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components'
import type { OnClickOutsideHandler } from '@vueuse/core'

const dropdown = ref(false)
const dropdownHandler: OnClickOutsideHandler = (_event) => {
  dropdown.value = false
}
interface LinkType {
  display: string
  url: string
}

const links: LinkType[] = [
  { display: 'projects', url: '/projects' },
  { display: 'updates', url: '/updates' },
  { display: 'contact', url: '/contact' },
]
</script>

<template>
  <div class="sticky top-0 z10 bg-base-200/70 shadow backdrop-blur">
    <div class="px-4 navbar md:mx-auto md:max-w-2xl">
      <div class="navbar-start">
        <NuxtLink to="/" class="text-xl no-underline">
          <span class="text- font-bold text-primary">king</span>
          <span>.gdn</span>
        </NuxtLink>
      </div>
      <div class="navbar-end md:gap-4">
        <ThemeToggle />

        <NuxtLink v-for="link in links" :key="link.url" :to="link.url" class="hidden no-underline md:flex">
          {{ link.display }}
        </NuxtLink>
        <div class="md:hidden">
          <button class="btn btn-ghost" @click.stop="dropdown = !dropdown">
            <svg
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              class="inline-block h-5 w-5 stroke-current"
            >
              <path
                stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <Teleport to="body">
            <div v-if="dropdown">
              <ul
                v-on-click-outside.bubble="(event) => dropdownHandler(event)"
                class="fixed inset-0 z-[999] m-auto max-w-7/8 flex flex-col justify-center gap-8 bg-base-200/95 p-8 shadow" @click="dropdown = false"
              >
                <li v-for=" link in links " :key="link.url">
                  <NuxtLink :to="link.url" class="flex flex-col items-center text-lg btn">
                    {{ link.display }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </Teleport>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* needed in order to let vue control visibility */
.dropdown:is(:not(details)) .dropdown-content {
    visibility: visible;
    opacity: 100;
    transform-origin: top;
}
</style>
