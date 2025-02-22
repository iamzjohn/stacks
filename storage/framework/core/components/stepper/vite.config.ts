import { resolve } from 'node:path'
import { alias } from '@stacksjs/alias'
import Vue from '@vitejs/plugin-vue'
import CleanCSS from 'clean-css'
import UnoCSS from 'unocss/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'

function minify(code: string) {
  const cleanCssInstance = new CleanCSS({})
  return cleanCssInstance.minify(code).styles
}

export default defineConfig(({ command, mode }) => {
  const userConfig: UserConfig = {}
  const commonPlugins = [
    Vue({
      include: /\.(stx|vue|md)($|\?)/,
    }),
    UnoCSS(),
    Components({
      extensions: ['stx', 'vue', 'md'],
      include: /\.(stx|vue|md)($|\?)/,
      resolvers: [
        IconsResolver({
          prefix: '',
        }),
      ],
    }),
    Icons(),
  ]
  let cssCodeStr = ''


  if (mode === 'lib') {
    userConfig.build = {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'StacksStepper',
        fileName: 'index',
      },

      outDir: 'dist',
      emptyOutDir: false,
      cssCodeSplit: false,
      sourcemap: true,

      rollupOptions: {
        external: ['vue'],
        output: [
          // {
          //   format: 'cjs',
          //   entryFileNames: `stacks-notification.cjs`,
          // },
          {
            format: 'es',
            entryFileNames: `index.js`,
            preserveModules: false,
          },
        ],
      },
    }

    userConfig.plugins = [
      ...commonPlugins,
      {
        name: 'inline-css',
        transform(code, id) {
          const isCSS = (path: string) => /\.css$/.test(path)
          if (!isCSS(id)) return

          const cssCode = minify(code)
          cssCodeStr = cssCode
          return {
            code: '',
            map: { mappings: '' },
          }
        },

        renderChunk(code, { isEntry }) {
          if (!isEntry) return

          return {
            code: `\
            function __insertCSSStacksStepper(code) {
              if (!code || typeof document == 'undefined') return
              let head = document.head || document.getElementsByTagName('head')[0]
              let style = document.createElement('style')
              style.type = 'text/css'
              head.appendChild(style)
              ;style.styleSheet ? (style.styleSheet.cssText = code) : style.appendChild(document.createTextNode(code))
            }\n
            __insertCSSStacksStepper(${JSON.stringify(cssCodeStr)})
            \n ${code}`,
            map: { mappings: '' },
          }
        },
      },
    ]
  }

  return {
    resolve: {
      alias,
    },

    plugins: [...commonPlugins],
    ...userConfig,
  }
})
