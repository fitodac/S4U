<script setup>
import { useStore } from '@/store/Store'

const store = useStore()
const modal_active = computed(() => store.video.modal_active )
const url = computed(() => store.video.url )

const closeModal = () => {
	store.openModal(false)
	store.setVideoURL(null)
}
</script>

<template>
<Transition>
	<div 
		id="modalWrapper" 
		v-if="modal_active && url"
		@click="closeModal">

		<div class="player-container">
			<div 
				class="plyr__video-embed relative" 
				id="player">

				<iframe 
					:src="url" 
					class="aspect-video"
					frameborder="0" 
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
					allowfullscreen
					allowtransparency>
				</iframe>
			</div>

			<span class="close">&times;</span>
		</div>

		<div 
			class="w-8 h-8 rounded-full animate-spin border-4 
							border-solid border-gray-500 border-t-transparent
							left-1/2 absolute z-10">
		</div>

	</div>
</Transition>
</template>


<style scoped>
#modalWrapper{
	@apply bg-black bg-opacity-90 p-7 inset-0 fixed z-30 
						flex items-center cursor-pointer
						md:p-20;
}
.player-container{
	width: 100%;
	position: relative;
	z-index: 20;
}

@media (min-width: 768px){
	.player-container{
		max-width: 80vw;
		margin: 0 auto;
	}
}

@media (min-width: 1200px){
	.player-container{ max-width: 50vw; }
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.close{
	@apply text-gray-400 text-5xl font-light leading-none 
						-right-14 -top-4 absolute transition-all 
						hover:text-white;
}
</style>