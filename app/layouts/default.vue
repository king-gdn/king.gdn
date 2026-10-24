<template>
  <div class="min-h-screen flex flex-col">
    <SiteHeader />
    <div class="my-8 md:max-w-xl w-full mx-auto px-2 max-w-sm">
      <slot />
    </div>
    <SiteFooter />
    <div class="flex-1" />
  </div>
</template>
