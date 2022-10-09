import { resolve } from 'pathe'
import type { WebTypesBuilderConfig } from 'vue-docgen-web-types/types/config'
import { version } from '../vue-components/package.json'
import { componentsPath, frameworkPath } from './helpers'
import { libraryName } from './config'

const config: WebTypesBuilderConfig = {
  cwd: process.cwd(),
  componentsRoot: componentsPath(),
  components: resolve(componentsPath(), '**\/[a-zA-Z]*.vue'),
  outFile: resolve(frameworkPath(), 'web-types.json'),
  packageName: libraryName,
  packageVersion: version,
  watch: false,
}

export default config

