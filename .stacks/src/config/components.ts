import { resolve } from 'pathe'
import type { BuildOptions as ViteBuildOptions } from 'vite'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import Inspect from 'vite-plugin-inspect'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import { library } from '../core/config'
import type { ViteConfig } from '../core'
import { defineConfig } from '../core'
import alias from '../core/alias'

const config: ViteConfig = {
  root: resolve(__dirname, '../../../components'),

  envPrefix: 'STACKS_',

  server: {
    port: 3333,
    open: true,
  },

  resolve: {
    dedupe: ['vue'],
    alias,
  },

  optimizeDeps: {
    exclude: ['vue', '@vueuse/core'],
  },

  plugins: [
    Inspect(),

    // UiEngine,
    Vue(),

    Unocss({
      configFile: resolve(__dirname, '../core/unocss.ts'),
      mode: 'vue-scoped', // or 'shadow-dom'
    }),

    AutoImport({
      imports: ['vue', 'vue-i18n', '@vueuse/core'],
      dirs: [
        resolve(__dirname, '../../../functions'),
        resolve(__dirname, '../../../components'),
        resolve(__dirname, '../../../config'),
      ],
      dts: resolve(__dirname, '../../auto-imports.d.ts'),
      vueTemplate: true,
    }),

    Components({
      dirs: [resolve(__dirname, '../../../components')],
      extensions: ['vue'],
      dts: '../../components.d.ts',
    }),

    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      globalSFCScope: true,
      include: [resolve(__dirname, '../../../lang/**')],
    }),
  ],

  build: componentsBuildOptions(),
}

export function componentsBuildOptions(): ViteBuildOptions {
  return {
    outDir: resolve(__dirname, '../../dist/components'),

    emptyOutDir: true,

    lib: {
      entry: resolve(__dirname, '../../../config/components.ts'),
      name: library.packageName,
      formats: ['cjs', 'es'],
      fileName: (format: string) => {
        if (format === 'es')
          return 'index.mjs'

        if (format === 'cjs')
          return 'index.cjs'

        // if (format === 'iife')
        //     return `index.iife.js`

        return 'index.?.js'
      },
    },

    rollupOptions: {
      external: ['vue', '@vueuse/core'],
      output: {
        // exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },

    // sourcemap: true,
    // minify: false,
  }
}

export default defineConfig(({ command }) => {
  if (command === 'serve')
    return config

  // command === 'build'
  return config
})
