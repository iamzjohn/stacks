/**
 * First letter uppercase, other lowercase
 * @category string
 * @example
 * ```
 * capitalize('hello world') => 'Hello world'
 * ```
 */
export function capitalize(str: string): string {
  return str[0] ? str[0].toUpperCase() + str.slice(1).toLowerCase() : ''
}

export {
  camelCase,
  capitalCase,
  constantCase,
  dotCase,
  noCase,
  kebabCase,
  kebabCase as paramCase,
  pascalCase,
  pathCase,
  sentenceCase,
  snakeCase,
} from 'change-case'
export { titleCase } from 'title-case'
