import type { IEmailOptions } from '@novu/stateless'

export interface NotificationOptions {
  default: 'email' | 'sms' | 'chat' | string

  email: {
    default: 'emailjs' | 'mailgun' | 'mailjet' | 'mandrill' | 'netcore' | 'nodemailer' | 'postmark' | 'sendgrid' | 'ses' | string

    drivers: {
      sendgrid: {
        key: string
        from: string
        senderName: string
      }

      emailjs: {
        from: string
        host: string
        user: string
        password: string
        port: number
        secure: boolean
      }

      mailgun: {
        key: string
        domain: string
        username: string
        from: string
      }

      mailjet: {
        key: string
        secret: string
        from: string
      }

      mandrill: {
        key: string
        from: string
      }

      netcore: {
        key: string
        from: string
      }

      nodemailer: {
        from: string
        host: string
        user: string
        password: string
        port: number
        secure: boolean
      }

      postmark: {
        key: string
        from: string
      }

      ses: {
        region: string
        key: string
        secret: string
        from: string
      }
    }
  }

  sms: {
    default: 'twilio' | 'nexmo' | 'gupshup' | 'plivo' | 'sms77' | 'sns' | 'telnyx' | 'termii' | string

    drivers: {
      twilio: {
        sid: string
        authToken: string
        from: string
        to: string
      }

      nexmo: {
        key: string
        secret: string
        from: string
      }

      gupshup: {
        user: string
        password: string
      }

      plivo: {
        sid: string
        authToken: string
        from: string
      }

      sms77: {
        key: string
        from: string
      }

      sns: {
        region: string
        key: string
        secret: string
      }

      telnyx: {
        key: string
        messageProfileId: string
        from: string
      }

      termii: {
        key: string
        from: string
      }
    }
  }

  chat: {
    default: 'slack' | 'msTeams' | 'discord' | string

    drivers: {
      slack?: {
        appId: string
        clientId: string
        secret: string
      }

      msTeams?: {
        appId: string
        clientId: string
        secret: string
      }

      discord?: {
        // appId: string
        // clientId: string
        // secret: string
      }
    }
  }
}

export interface FCMPushNotificationOptions {
  eventName: string
  to: {
    subscriberId: string
  }
  payload: {
    deviceTokens: Array<string>
    badge: boolean
    clickAction: string
    color: string
    icon: string
    sound: string
  }
}

export interface ExpoPushNotificationOptions {
  eventName: string
  to: {
    subscriberId: string
  }
  payload: {
    to: string[]
    data: Object
    title: string
    body: string
    ttl: number
    expiration: number
    priority: 'default' | 'normal' | 'high'
    subtitle: string
    sound: 'default' | null
    badge: number
    channelId: string
    categoryId: string
    mutableContent: boolean
  }
}

export type {
  IChatOptions as ChatOptions,
  ISendMessageSuccessResponse as SendMessageSuccessResponse,
  ISmsOptions as SmsOptions,
} from '@novu/stateless'

export type EmailOptions = Omit<IEmailOptions, 'from'> & {
  from: {
    name?: string
    address?: string
  }

  domain?: string

  mailboxes?: {
    'username': string
    'forwardTo': string
  }[]
}
