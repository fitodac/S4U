// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	app: {
		head: {
			title: 'S4U',
			meta: [
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
			],
			script: [

			],
			link: [
				{
					rel: 'preconnect',
					href: 'https://fonts.googleapis.com'
				},
				{
					rel: 'preconnect',
					href: 'https://fonts.gstatic.com'
				},
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap'
				}
			],
			noscript: [
        { children: 'Debes habilitar Javascript para ver este sitio web' }
      ]
		}
	},

	css: ["plyr/dist/plyr.css"],

	runtimeConfig: {
		public: {
			// development
			// wp_api_uri: 'http://localhost:10038/wp-json/wp/v2',
			// production
			wp_api_uri: 'https://s4u.cat/wp/wp-json/wp/v2',
			page_id: process.env.PAGE_ID,
		}
  },

	modules: [
		'@nuxtjs/tailwindcss',
		'@pinia/nuxt'
	]
})
