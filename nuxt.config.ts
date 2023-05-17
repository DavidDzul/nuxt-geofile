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
      script: [
        {
          children: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '953496749122012');
          fbq('track', 'PageView');
          `,
        },
      ],
    },
  },
  ssr: true,
});
