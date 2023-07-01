import type { CliOptions } from '@stacksjs/types/cli'

/**
 * **Deploy Options**
 *
 * This configuration defines all of your deployment options. Because Stacks is fully-typed,
 * you may hover any of the options below and the definitions will be provided. In case
 * you have any questions, feel free to reach out via Discord or GitHub Discussions.
 */
export interface DeployOptions extends CliOptions {
  domains: boolean
}
