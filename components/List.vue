<script setup>
import { useStore } from '@/store/Store'

const store = useStore()
const {
	list_header,
	list,
	images
} = store.dataList
</script>


<template>
<section class="pt-16 pb-10">
	<div class="container mx-auto">

		<h3>{{ list_header }}</h3>

		<div class="grid gap-10 mt-14 lg:grid-cols-2">

			<div class="lg:order-2">
				<div class="grid grid-cols-3 md:gap-x-4 lg:grid-cols-1 lg:gap-y-10">
					<div v-for="(id, i) in images" :key="i">
						<Image :imageId="id" />
					</div>
				</div>
			</div>
			
			<div>
				<div 
					v-for="(item, idx) in list" 
					:key="idx" 
					class="block">
					<h4 v-html="item.title"/>
					<div v-html="item.content" class="list" />
				</div>
			</div>

		</div>

	</div>
</section>
</template>



<style scoped>
h3{
	border-color: var(--yellow);
	@apply border-y text-2xl font-medium leading-none uppercase py-3 
					lg:text-3xl lg:leading-none lg:py-4;
}

h4{
	color: var(--yellow);
	@apply text-2xl font-bold leading-none;
}

.block + .block{
	@apply mt-14;
}

.list{
	@apply mt-4;
}
</style>


<style>
.list li{
	@apply leading-tight pl-6 mt-4 block relative;
}

.list li::before{
	content: '•';
	@apply text-2xl left-0 -top-1 absolute;
}
</style>