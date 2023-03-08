<script setup>
import { useStore } from '@/store/Store'

const store = useStore()
const { urls } = store.dataVideos

const videoId = url => url.split('embed/')[1]

const openModal = url => {
	store.setVideoURL(url)
	store.openModal(true)
}
</script>


<template>
<section>
	<div class="container mx-auto">
		<div class="grid gap-12 sm:grid-cols-3 sm:gap-6">

			<div 
				v-for="(url,i) in urls"
				:key="i"
				class="video"
				@click="openModal(url.video_url)">

				
				<svg class="player" viewBox="0 0 21 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
					<g transform="translate(0.508550, 0.000000)" fill="#FFFFFF" fill-rule="nonzero">
						<path d="M10,0 C4.48065173,0 0,4.48065173 0,10 C0,15.5193483 4.48065173,20 10,20 C15.5193483,20 20,15.5193483 20,10 C20,4.48065173 15.5193483,0 10,0 Z M10,18.3095723 C5.41751527,18.3095723 1.6904277,14.5824847 1.6904277,10 C1.6904277,5.41751527 5.41751527,1.6904277 10,1.6904277 C14.5824847,1.6904277 18.3095723,5.41751527 18.3095723,10 C18.3095723,14.5824847 14.5824847,18.3095723 10,18.3095723 Z"></path>
						<path d="M8.2688391,13.4419879 C8.39101688,13.5030768 8.51319465,13.5233925 8.63536514,13.5233925 C8.77800044,13.5233925 8.94080594,13.4826193 9.06313646,13.3807572 L13.1771894,10.5701302 C13.3809136,10.4274949 13.5030877,10.1831285 13.5030877,9.93880201 C13.5030877,9.69447556 13.38091,9.44996727 13.1568737,9.30747381 L9.04282077,6.57853142 C8.79846523,6.41558045 8.51332557,6.41558045 8.24852342,6.53775822 C8.00416788,6.68039351 7.84122781,6.92475997 7.84122781,7.20985598 L7.84122781,12.7495708 C7.86154313,13.0550116 8.00417879,13.3198356 8.26885365,13.4419988 L8.2688391,13.4419879 Z"></path>
					</g>
				</svg>

				<img 
					:src="`https://i.ytimg.com/vi/${videoId(url.video_url)}/default.jpg`" 
					:alt="videoId(url.video_url)"
					class="w-full h-full object-cover">

			</div>

		</div>
	</div>
</section>
</template>


<style scoped>
.video{
	@apply bg-black border-4 border-white h-56 block place-content-center 
						relative cursor-pointer
						sm:h-40 lg:h-48;
}

.video img{
	@apply relative transition-all opacity-60 hover:opacity-80;
}

.player{
	@apply w-10 right-3 top-3 absolute opacity-70 z-10;
}

section{
	@apply pb-20;
}
</style>