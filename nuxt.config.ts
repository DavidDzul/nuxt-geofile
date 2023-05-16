// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //   alias: {
  //     "@": "/<rootDir>/public",
  //   },

  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          //   href: "@/css/style.css",
          href: "/css/style.css",
        },

        {
          rel: "shortcut icon",
          href: "/img/icon.png",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@mdi/font@7.2.96/css/materialdesignicons.min.css",
        },
      ],
    },
  },
});
