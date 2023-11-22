const { readdirSync } = require('node:fs')
const { resolve } = require('node:path')
const { kebabCase } = require('change-case')
const git = require('./config/git.ts')

const toDelete = ['readme-md']

const components = readdirSync(resolve(__dirname, './resources/components'))
  .map(item => kebabCase(item.replace(/.vue/g, '')))
  .filter(item => !toDelete.includes(item))

const functions = readdirSync(resolve(__dirname, './resources/functions'))
  .map(item => kebabCase(item.replace(/.ts/g, '')))
  .filter(item => !toDelete.includes(item))

const scopes = [...git.default.scopes, ...components, ...functions]
const uniqueScopes = [...new Set(scopes)]

/** @type {import('cz-git').UserConfig} */
module.exports = {
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
    'scope-enum': [
      2,
      'always',
      uniqueScopes,
    ],
  },
  prompt: {
    messages: git.default.messages,
    types: git.default.types,
    useEmoji: false,
    themeColorCode: '',
    scopes: uniqueScopes,
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: 'bottom',
    customScopesAlias: 'custom',
    emptyScopesAlias: 'empty',
    upperCaseSubject: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: '|',
    skipQuestions: [],
    issuePrefixes: [{ value: 'closed', name: 'closed:   ISSUES has been processed' }],
    customIssuePrefixesAlign: 'top',
    emptyIssuePrefixesAlias: 'skip',
    customIssuePrefixesAlias: 'custom',
    allowCustomIssuePrefixes: true,
    allowEmptyIssuePrefixes: true,
    confirmColorize: true,
    maxHeaderLength: Number.POSITIVE_INFINITY,
    maxSubjectLength: Number.POSITIVE_INFINITY,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: '',
    defaultIssues: '',
    defaultScope: '',
    defaultSubject: '',
  },
}
