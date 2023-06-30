// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // we deactivate the Server Side Rendering
  ssr: false,

  // Add nuxt-vuefire module
  modules: [
    'nuxt-vuefire',
  ],

  vuefire: {

    auth: true, // enable Firebase Authentication

    config: {

      // replace with your own credentials from the Firebase console
      apiKey: '...',
      authDomain: '...',
      projectId: '...',
      appId: '...',
    },
  },

})
