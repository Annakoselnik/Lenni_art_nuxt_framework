// https://nuxt.com/docs/api/configuration/nuxt-config

import { createLogger } from 'vite';
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ["@/styles/styles.less"],
  devtools: { enabled: true },

  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `
            @import "@/styles/variables.less";
            @import "@/styles/mixins.less";
          `,
        },
      },
    },
    plugins: [svgLoader()],
    customLogger: (() => {
      const logger = createLogger('info');
      return {
        ...logger,
        warn(msg, options) {
          if (msg.includes('statuscode') || msg.includes('statusmessage')) {
            return;
          }
          logger.warn(msg, options);
        }
      };
    })(),
    server: {
      fs: {
        strict: false   // убираем предупреждение о квадратных скобках
      }
    }
  },

  modules: ['@pinia/nuxt'],

  app: {
    head: {
      title: 'Мероприятия | Мой сайт', // <-- добавлено
      htmlAttrs: {
        lang: 'ru'
      },
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ]
    }
  }
});


