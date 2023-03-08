<script setup>
import { useStore } from '@/store/Store'
import mainBG from '@/public/main-bg.webp'
import ignore from 'ignore';

const store = useStore()
const config = useRuntimeConfig()
const loading = ref(true)
const loading_error = ref(false)
const modal_active = computed(() => store.video.modal_active )

fetch(`${config.wp_api_uri}/pages/${config.page_id}`)
	.then(resp => resp.json())
	.then(async data => {

		store.setData(data)

		
		// Carga la imagen del header para evitar 
		// el delay antes de ocultar el preload:

		try {

			await fetch(`${config.wp_api_uri}/media/${data.acf.image}`)
			.then(resp => resp.json())
			.then(async resp => {
				store.setImageHeader(resp.source_url)

				const img = new Image()
				img.setAttribute('src', resp.source_url)
				const getImgHeight = height => {
					if( height > 0 ) return
					console.log(height)
					// getImgHeight(height)
				}

				getImgHeight(img.height)

				// await img.addEventListener('load', () => {
				// 	console.log(img.height)
				// })
				loading.value = false

			})
			.catch(error => console.log(`Error ${error}`))

		} catch(err) {
			loading.value = false
		}
	})
	.catch(error => {
		loading.value = false
		loading_error.value = true
		console.log(`Error ${error}`)
	})
</script>


<template>
<div 
	v-if="loading_error"
	class="text-white text-center min-h-screen grid place-content-center">
	<div class="text-5xl">Ups!</div>
	<div class="mt-2">Parece que hay un error al cargar la web</div>
</div>


<KeepAlive>
<div 
	v-if="!loading && !loading_error"
	id="mainWrapper" 
	class="antialiased"
	:style="{backgroundImage: `url(${mainBG})`}">

	<Transition>
		<div>
			<Header />
			<List />
			<Videos />
			<Footer />
		</div>
	</Transition>

	<Teleport to="body">
		<VideoModal v-if="modal_active" />
	</Teleport>
</div>
</KeepAlive>

<Teleport to="body">
	<Loader :loading="loading" />
</Teleport>
</template>


<style>
:root{
	--yellow: #ff9b00;
	--brand-red: #A01915;
}

body{
	background-color: var(--brand-red);
}

section{
	@apply max-w-7xl pt-8 px-6 mx-auto xl:px-32;
}
</style>

<style scoped>
#mainWrapper{
	background-color: var(--brand-red);
	background-repeat: no-repeat;
	background-position: center top;
	background-size: 100% auto;
	color: #fff;
	font-family: 'Roboto Condensed', sans-serif;
	@apply max-w-[1500px] mx-auto;
}
</style>