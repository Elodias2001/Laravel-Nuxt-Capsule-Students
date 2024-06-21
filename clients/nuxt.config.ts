// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  pinia: {
    storesDirs: ["./stores/**"],
  },
  app: {
    head: {
      title: "NUXT js 3 CRUD APPLICATION",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "NUXT js 3 CRUD APPLICATION META DESCRIPTION",
        },
        { name: "format-detection", content: "telephone-no" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
        {
          rel: "stylesheet",
          href: "/bootstrap/css/bootstrap.min.css",
        },
      ],
      script: [
        {
          src: "/bootstrap/js/bootstrap.bundle.min.js",
          type: "text/javascript",
        },
        {
          src: "/bootstrap/js/jquery.slim.min.js",
          type: "text/javascript",
        },
      ],
    },
  },
});
