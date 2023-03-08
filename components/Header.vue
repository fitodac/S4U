<script setup>
import { useStore } from '@/store/Store'

const store = useStore()
const {
	title,
	info_title,
	secondary_title,
	intro,
	cta,
	image_id,
	image_url
} = store.dataHeader
</script>


<template>
<section>
	<div class="container mx-auto">

		<div class="grid gap-8 md:gap-14 md:grid-cols-2 lg:gap-20">

			<div>
				<Logo class="w-20 md:w-32" />
				<h2>{{ title }}</h2>
				<h3>{{ info_title }}</h3>
				<h4>{{ secondary_title }}</h4>
				<div class="intro" v-html="intro"/>

				<div class="grid gap-6 grid-cols-2 place-content-center mt-10">
					<div v-for="(btn, idx) in cta" :key="idx">
						<nuxt-link :to="btn.link" class="btn">{{ btn.text }}</nuxt-link>
					</div>
				</div>
			</div>


			<div class="flex items-end">
				<!-- 
				<Image 
					:imageId="image_id" 
					class="w-full max-w-sm mx-auto md:h-[330px] lg:max-w-2xl lg:h-[500px]" /> 
					-->

					<img 
						:src="image_url" 
						:alt="`imagen-${image_id}`"
						class="border-8 border-white w-full max-w-sm mx-auto 
										md:h-[330px] lg:max-w-2xl lg:h-[500px]">
			</div>

		</div>

	</div>
</section>
</template>


<style scoped>
h2{
	color: var(--yellow);
	@apply text-3xl font-extrabold uppercase mt-5 
						sm:text-5xl md:text-7xl
						lg:text-8xl;
}

h3{
	@apply text-lg font-bold mt-2 
						md:text-xl md:mt-5
						lg:text-2xl;
}

h4{
	@apply text-xl uppercase leading-tight mt-2 
					sm:text-2xl sm:leading-tight 
					md:mt-4
					lg:text-3xl;
}

.intro{
	@apply text-sm leading-tight mt-4 
					sm:text-base sm:leading-tight 
					md:mt-5;
}

.btn{
	background: var(--yellow);
	@apply text-center font-semibold leading-none whitespace-nowrap w-full px-8 py-3 block rounded-xl select-none;
}
</style>