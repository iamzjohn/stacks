import { defineBuildConfig } from '@stacksjs/development'

export default defineBuildConfig({
  entries: [
    {
      builder: 'mkdist',
      input: './src/',
      outDir: './dist/',
      format: 'esm',
    },
  ],

  clean: true,
  declaration: true,
})
