<script setup>
const config = useRuntimeConfig()

const { imageId } = defineProps({
	imageId: Number
})

const loading = ref(true)
const data = reactive({})

fetch(`${config.wp_api_uri}/media/${imageId}`)
	.then(resp => resp.json())
	.then(resp => {
		Object.assign(data, resp)
		loading.value = false
	})
	.catch(error => console.log(`Error ${error}`))
</script>


<template>
<div class="h-full">
	<div class="loader" v-if="loading">
		<div 
			class="w-8 h-8 rounded-full animate-spin border-4 
							border-solid border-red-900 border-t-transparent">
		</div>
	</div>
	
	<div class="image" v-else>
		<img :src="data.source_url" :alt="`imagen-${imageId}`" />
	</div>
</div>
</template>


<style scoped>
.loader{
	@apply bg-white bg-opacity-60 h-full grid place-content-center;
}

.image{
	@apply border-8 border-white;
}

img{
	@apply w-full h-full object-cover;
}
</style>