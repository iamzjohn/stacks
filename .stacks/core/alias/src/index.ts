/**
 * The following configuration references local aliases.
 */

import { path as p } from '@stacksjs/path'

export const alias: Record<string, string> = {
  '~/*': p.projectPath('*'),
  '@stacksjs/ai': p.aiPath('src/index.ts'),
  '@stacksjs/ai/*': p.aiPath('src/*'),
  '@stacksjs/actions': p.actionsPath('src/index.ts'),
  '@stacksjs/actions/*': p.actionsPath('src/*'),
  '@stacksjs/alias': p.aliasPath(),
  '@stacksjs/arrays': p.arraysPath('src/index.ts'),
  '@stacksjs/arrays/*': p.arraysPath('src/*'),
  '@stacksjs/auth': p.authPath('src/index.ts'),
  '@stacksjs/auth/*': p.authPath('src/*'),
  '@stacksjs/build': p.buildPath('src/index.ts'),
  '@stacksjs/build/*': p.buildPath('src/*'),
  '@stacksjs/cache': p.cachePath('src/index.ts'),
  '@stacksjs/cache/*': p.cachePath('src/*'),
  '@stacksjs/chat': p.chatPath('src/index.ts'),
  '@stacksjs/chat/*': p.chatPath('src/*'),
  '@stacksjs/cli': p.cliPath('src/index.ts'),
  '@stacksjs/cli/*': p.cliPath('src/*'),
  '@stacksjs/cloud': p.cloudPath('src/index.ts'),
  '@stacksjs/cloud/*': p.cloudPath('src/*'),
  '@stacksjs/collections': p.collectionsPath('src/index.ts'),
  '@stacksjs/collections/*': p.collectionsPath('src/*'),
  '@stacksjs/config': p.configPath('src/index.ts'),
  '@stacksjs/config/*': p.configPath('src/*'),
  '@stacksjs/dashboard': p.dashboardPath('src/index.ts'),
  '@stacksjs/dashboard/*': p.dashboardPath('src/*'),
  '@stacksjs/database': p.databasePath('src/index.ts'),
  '@stacksjs/database/*': p.databasePath('src/*'),
  '@stacksjs/development': p.developmentPath('src/index.ts'),
  '@stacksjs/development/*': p.developmentPath('src/*'),
  // '@stacksjs/desktop': p.desktopPath('src/index.ts'),
  // '@stacksjs/desktop/*': p.desktopPath('src/*'),
  '@stacksjs/dns': p.dnsPath('src/index.ts'),
  '@stacksjs/dns/*': p.dnsPath('src/*'),
  '@stacksjs/docs': p.docsPath('src/index.ts'),
  '@stacksjs/docs/*': p.docsPath('src/*'),
  '@stacksjs/email': p.emailPath('src/index.ts'),
  '@stacksjs/email/*': p.emailPath('src/*'),
  '@stacksjs/error-handling': p.errorHandlingPath('src/index.ts'),
  '@stacksjs/error-handling/*': p.errorHandlingPath('src/*'),
  '@stacksjs/events': p.eventsPath('src/index.ts'),
  '@stacksjs/events/*': p.eventsPath('src/*'),
  '@stacksjs/faker': p.fakerPath('src/index.ts'),
  '@stacksjs/faker/*': p.fakerPath('src/*'),
  '@stacksjs/git': p.gitPath('src/index.ts'),
  '@stacksjs/git/*': p.gitPath('src/*'),
  '@stacksjs/lint': p.lintPath('src/index.ts'),
  '@stacksjs/lint/*': p.lintPath('src/*'),
  '@stacksjs/logging': p.loggingPath('src/index.ts'),
  '@stacksjs/logging/*': p.loggingPath('src/*'),
  '@stacksjs/modules/*': p.modulesPath('src/*'),
  '@stacksjs/notifications': p.notificationsPath('src/index.ts'),
  '@stacksjs/notifications/*': p.notificationsPath('src/*'),
  '@stacksjs/objects': p.objectsPath('src/index.ts'),
  '@stacksjs/objects/*': p.objectsPath('src/*'),
  '@stacksjs/orm': p.ormPath('src/index.ts'),
  '@stacksjs/orm/*': p.ormPath('src/*'),
  '@stacksjs/path': p.pathPath('src/index.ts'), // 🤦🏼‍♂️
  '@stacksjs/path/*': p.pathPath('src/*'),
  '@stacksjs/push': p.pushPath('src/index.ts'),
  '@stacksjs/push/*': p.pushPath('src/*'),
  '@stacksjs/query-builder': p.queryBuilderPath('src/index.ts'),
  '@stacksjs/query-builder/*': p.queryBuilderPath('src/*'),
  '@stacksjs/repl': p.replPath('src/index.ts'),
  '@stacksjs/repl/*': p.replPath('src/*'),
  '@stacksjs/router': p.routerPath('src/index.ts'),
  '@stacksjs/router/*': p.routerPath('src/*'),
  '@stacksjs/search-engine': p.searchEnginePath('src/index.ts'),
  '@stacksjs/search-engine/*': p.searchEnginePath('src/*'),
  '@stacksjs/security': p.securityPath('src/index.ts'),
  '@stacksjs/security/*': p.securityPath('src/*'),
  '@stacksjs/server': p.serverPath('src/index.ts'),
  '@stacksjs/server/*': p.serverPath('src/*'),
  '@stacksjs/sms': p.smsPath('src/index.ts'),
  '@stacksjs/sms/*': p.smsPath('src/*'),
  '@stacksjs/scheduler': p.schedulerPath('src/index.ts'),
  '@stacksjs/scheduler/*': p.schedulerPath('src/*'),
  '@stacksjs/signals': p.signalsPath('src/index.ts'),
  '@stacksjs/signals/*': p.signalsPath('src/*'),
  '@stacksjs/storage': p.storagePath('src/index.ts'),
  '@stacksjs/storage/*': p.storagePath('src/*'),
  '@stacksjs/strings': p.stringsPath('src/index.ts'),
  '@stacksjs/strings/*': p.stringsPath('src/*'),
  '@stacksjs/testing/*': p.testingPath('*'),
  '@stacksjs/tinker': p.tinkerPath('src/index.ts'),
  '@stacksjs/tinker/*': p.tinkerPath('src/*'),
  '@stacksjs/types': p.typesPath('src/index.ts'),
  '@stacksjs/types/*': p.typesPath('src/*'),
  '@stacksjs/ui': p.uiPath('src/index.ts'),
  '@stacksjs/ui/*': p.uiPath('src/*'),
  '@stacksjs/utils': p.utilsPath('src/index.ts'),
  '@stacksjs/utils/*': p.utilsPath('src/*'),
  '@stacksjs/validation': p.validationPath('src/index.ts'),
  '@stacksjs/validation/*': p.validationPath('src/*'),
  '@stacksjs/x-ray': p.xRayPath('src/index.ts'),
  '@stacksjs/x-ray/*': p.xRayPath('src/*'),
  'framework/*': p.frameworkPath('*'),
  'stacks': p.frameworkPath('src/index.ts'),
  'stacks/*': p.frameworkPath('src/*'),
  'app/*': p.appPath('*'),
  'config/*': p.projectConfigPath('*'),
  'components/*': p.componentsPath('*'),
  'functions/*': p.functionsPath('*'),
  'pages/*': p.pagesPath('*'),
}
