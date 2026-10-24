// @vitest-environment node
import { describe, expect, test } from 'vitest'
import postcss from 'postcss'
import tailwindcss from 'tailwindcss'
import config from '../../tailwind.config'

describe('Tailwind content scanning', () => {
  test('generates classes used only in Markdown (home headshot)', async () => {
    const result = await postcss([tailwindcss(config as never)]).process(
      '@tailwind components; @tailwind utilities;',
      { from: undefined },
    )
    expect(result.css).toContain('.mask-squircle')
    expect(result.css).toContain('.w-24')
  })
})
