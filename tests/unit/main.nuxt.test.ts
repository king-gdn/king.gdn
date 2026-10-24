// @vitest-environment nuxt
import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import SiteHeader from '~/components/SiteHeader.vue'
import SiteFooter from '~/components/SiteFooter.vue'

describe('site chrome', () => {
  it('header links to the home page and the main sections', async () => {
    const header = await mountSuspended(SiteHeader)
    const hrefs = header.findAll('a').map(a => a.attributes('href'))
    expect(hrefs).toEqual(expect.arrayContaining(['/', '/projects', '/updates', '/contact']))
    expect(header.text()).toContain('king')
  })

  it('footer links to the social profiles', async () => {
    const footer = await mountSuspended(SiteFooter)
    const hrefs = footer.findAll('a').map(a => a.attributes('href'))
    expect(hrefs).toContain('https://github.com/kingtimm')
  })
})
