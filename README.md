<p align="center"><img src=".github/art/social.png" alt="Social Card of Stacks"></p>

[![npm version][npm-version-src]][npm-version-href]
[![GitHub Actions][github-actions-src]][github-actions-href]
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
<!-- [![npm downloads][npm-downloads-src]][npm-downloads-href] -->
<!-- [![Codecov][codecov-src]][codecov-href] -->

# The Atomic UI/FX Engine

The goal of the Stacks framework is to _help you_ create & maintain UIs (pages & components) & function libraries. In other words, it shouldn't be a chore creating or maintaining them. Stacks allows you to easily build highly-composable & scalable libraries—in beginner & expert-friendly ways—embodying [Composability-First Design](/composability-first-design.md) principles.

> _The clever way to build & share component & function libraries._

![Atomic UI & FX Design](./apps/site/docs/images/diagram.png)

**🤖 Zero-config, by design**

The Stacks framework automagically bundles & builds your code. A Web Component library, Vue 2 & 3 libraries, a composable functions library, plus all of its relating type declarations. Out of plain HTML & minimal JavaScript. _The best of the Vite & unbuild engines in a zero-config way._

**🎨 Style with ease**

Create your own style guide using conventions you are familiar with. Our UnoCSS atomic engine allows for just that—in a blazing-fast, on-demand way—Tailwind CSS, Windi CSS, Bootstrap, Tachyons, Heroicons, Material Design Icons, and more available.

**✨ Next-gen Developer Experience _(DX)_**

Whether it is the simplistic artisan setup & maintenance, the toolkit of accessible APIs, modern git commit conventions, simple CI, automated npm package releases & semver versioning, pretty changelog generations, automated PR dependency updates, built-in spell-checking, integrated documentation tooling, or the pre-configured playground & examples... _Stacks has it all._

**💡 First-class VS Code integration**

IDE Capabilities, such as type hints, code completion, code formatting, and more—all natively built-into Stacks. _And without the need of Prettier._

**🧙🏼‍♀️ Extremely beginner & expert-friendly**

No matter whether you are a beginner or an expert, the approachable Stacks design allows you to learn at your own pace.

Develop beautiful, reactive, composable UIs & functions without learning a new set of languages. HTML, CSS, and minimal JavaScript—that's all you need to dive in now! _(Or TypeScript ✌🏼)_

## Get Started

It's incredibly easy to get started with this framework. Simply run the following command in your terminal:

```bash
npx artisan setup
```

> **Note**
> Node.js v16.10 or higher required. _Stacks is `fnm` & `nvm` friendly._

## 🤖 Usage

The following list is of some of the most common ways to interact with the Stacks API. Meet the Artisan Toolkit:

```bash
# local workflow, to be released with 0.24.0
npx artisan install # installs all dependencies
npx artisan dev # starts one of the dev servers (components, functions, pages, or docs)
npx artisan commit # follow CLI prompts for committing changes
npx artisan release # creates the releases for the stack & consequently, publishes them to npm

npx artisan make:component HelloWorld # bootstraps a HelloWorld component
npx artisan make:function HelloWorld # bootstraps a HelloWorld function
npx artisan make:page hello-world # bootstraps a HelloWorld page (https://127.0.0.1/hello-world)

npx artisan help
```

<details>
<summary>View the complete Stacks Artisan Toolkit</summary>

```bash
npx artisan install # or `pnpm i`
npx artisan fresh # fresh reinstall of all deps

npx artisan dev # starts one of the dev servers (components, functions, pages, or docs)
npx artisan dev:components # starts local playground dev server
npx artisan dev:functions # stubs the functions
npx artisan dev:pages # starts local pages dev server
npx artisan dev:docs # starts local docs dev server

npx artisan make:component HelloWorld
npx artisan make:function hello-world
npx artisan make:page hello-world
npx artisan make:stack hello-world

npx artisan stub # stubs all the libraries
npx artisan stub:components # stubs the component library
npx artisan stub:functions # stubs the function library
npx artisan stub:pages # stubs the pages

npx artisan lint # runs linter
npx artisan lint:fix # runs linter and fixes issues

npx artisan commit # follow CLI prompts for committing staged changes
npx artisan release # creates the releases for the stack & triggers the Release Action (workflow)
npx artisan changelog # generates CHANGELOG.md

# building for production
npx artisan build # select a specific build (follow CLI prompts)
npx artisan build:all # builds all libraries automagically
npx artisan build:elements # builds the Web Component (Custom Element) library
npx artisan build:vue # builds the Vue 2 & 3 libraries
npx artisan build:components # builds the component libraries
npx artisan build:functions # builds the function library
npx artisan build:pages # builds the pages
npx artisan build:types # builds all types

# when deploying to Vercel, Netlify, or GitHub Pages
npx artisan build:playground 
npx artisan build:docs

npx artisan example # select the example to run (follow CLI prompts)

# test your stack
npx artisan test # runs test suite
npx artisan test:unit # runs unit tests
npx artisan test:e2e # runs e2e tests
```

</details>

Read more here about the Stacks CLI in the documentation.

## 📚 Utilizing the Built Libraries

Because we optimize toward the development of easily reusable & composable component & function libraries, our primary intention is to always _keep it simple, yet configurable._

By default, Stacks realizes whether your Stack includes components, functions, and/or pages. Based on that determination, Stacks builds your outputs.

The UI libraries that automatically get built are a Web Component (Custom Elements) & Vue Component library.

<details>
<summary>Custom Element usage</summary>

```bash
npm install my-awesome-library
```

After you installed your Stacks generated library, you can use a "Custom Element" (Web Component) in the following way:

```html
<html>
  <body>
    <hello-world name="Jane Doe"></hello-world>
    <script src="my-awesome-library.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>Vue 2 & 3 usage</summary>

```bash
npm install my-awesome-library
```

After you installed your Stacks generated library, you can use your Vue Components in the following way:

```vue
<script setup lang="ts">
import HelloWorld from 'my-awesome-library'
</script>

<template>
  <HelloWorld name="J Doe" />
</template>
```
</details>

_A function library may also be automatically generated._

<details>
<summary>Functions usage</summary>

```bash
npm install hello-world-library
```

After you installed your Stacks generated library, you can use your functions in the following way:

```ts
import { count, increment } from 'hello-world-library'

console.log('count is', count)

increment()

console.log('increased count is', count)
```
</details>

You may view this framework as an incredibly "useful set of frames" to assist in efficiently bootstrapping, designing, and managing component & function libraries—using industry best-practices, to reach one of the broadest user bases possible.

## 🧪 Testing

```bash
pnpm test
```

## 📈 Changelog

Please see our [releases](https://github.com/openwebstacks/stacks-framework/releases) page for more information on what has changed recently.

## 💪🏼 Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## 🏝 Community

For help, discussion about best practices, or any other conversation that would benefit from being searchable:

[Discussions on GitHub](https://github.com/openwebstacks/stacks-framework/discussions)

For casual chit-chat with others using this package:

[Join the Open Web Discord Server](https://discord.ow3.org)

## 📄 License

The MIT License (MIT). Please see [LICENSE](LICENSE.md) for more information.

Made with ❤️

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@ow3/hello-world-vue?style=flat-square
[npm-version-href]: https://npmjs.com/package/@ow3/hello-world-vue

[npm-downloads-src]: https://img.shields.io/npm/dm/@ow3/hello-world-vue?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@ow3/hello-world-vue

[github-actions-src]: https://img.shields.io/github/workflow/status/openwebstacks/stacks-framework/CI/main?style=flat-square
[github-actions-href]: https://github.com/openwebstacks/stacks-framework/actions?query=workflow%3Aci

<!-- [codecov-src]: https://img.shields.io/codecov/c/gh/openwebstacks/stacks-framework/main?style=flat-square
[codecov-href]: https://codecov.io/gh/openwebstacks/stacks-framework -->
