import { describe, expect, test } from 'vitest'
import { $fetch, setup } from '@nuxt/test-utils/e2e'

describe('Content pages', async () => {
  await setup({
    server: true,
  })

  test('home page renders the home content', async () => {
    const html = await $fetch<string>('/')
    expect(html).toContain('Tim King here')
  })

  test('projects listing links to each project', async () => {
    const html = await $fetch<string>('/projects')
    for (const slug of ['crsn', 'king-cottage-cam', 'lake-gauge', 'sneaky-gift'])
      expect(html).toContain(`href="/projects/${slug}"`)
  })

  test('updates listing links to each update without the numeric prefix', async () => {
    const html = await $fetch<string>('/updates')
    for (const slug of ['initial-update', 'development-as-a-hobby', 'hosting-on-the-edge'])
      expect(html).toContain(`href="/updates/${slug}"`)
  })

  test('an update page renders its title and body', async () => {
    const html = await $fetch<string>('/updates/initial-update')
    expect(html).toContain('First Post')
    expect(html).toContain('central spot')
  })
})
