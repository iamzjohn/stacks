import type { AiConfig } from '@stacksjs/types'

/**
 * **AI Configuration**
 *
 * This configuration defines all of your AI options. Because Stacks is fully-typed, you
 * may hover any of the options below and the definitions will be provided. In case you
 * have any questions, feel free to reach out via Discord or GitHub Discussions.
 */
export default {
  default: 'meta.llama2-70b-chat-v1',

  models: [
    // 'amazon.titan-embed-text-v1',
    // 'amazon.titan-text-express-v1',
    // 'amazon.titan-embed-image-v1',
    // 'amazon.titan-image-generator-v1',
    // 'anthropic.claude-v1',
    // 'anthropic.claude-v2',
    // 'anthropic.claude-v2:1',
    // 'anthropic.claude-instant-v1',
    // 'meta.llama2-13b-chat-v1',
    'meta.llama2-70b-chat-v1',
  ],
} satisfies AiConfig
