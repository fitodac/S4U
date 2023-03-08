<script setup>
import { useStore } from '@/store/Store'
import footerBG from '@/public/footer-bg.webp'

const store = useStore()
const { 
	blocks,
	big_text 
} = store.dataFooter
</script>


<template>
<div 
	class="footer-top"
	:style="{backgroundImage: `url(${footerBG})`}">
	<div class="max-w-7xl mx-auto xl:px-32">
		<div class="container mx-auto">
			<div class="grid gap-8 sm:grid-cols-2 sm:gap-14">

				<div 
					v-for="(block, i) in  blocks" 
					:key="i">
					<Logo :onlyIso="true" class="h-28" />
					<h4>{{ block.title }}</h4>
					<div class="content" v-html="block.content"/>
					<div class="mt-6">
						<nuxt-link :to="block.btn_link" class="btn">{{ block.btn_text }}</nuxt-link>
					</div>
				</div>

			</div>
		</div>
	</div>
</div>



<div class="footer-mid">
	<div class="max-w-7xl mx-auto xl:px-32">
		<div class="container mx-auto">
			<div v-html="big_text" class="big-text"/>
		</div>
	</div>
</div>



<div id="mainFooter">
	<div class="max-w-7xl mx-auto xl:px-32">
		<div class="container mx-auto">
			<div class="text-sm font-medium">
				&copy; El Collell 
				<span class="px-1">&middot;</span>
				T. 972 57 40 60
				<span class="px-1">&middot;</span>
				<nuxt-link to="mailto:inscripcions@s4u.cat">inscripcions@s4u.cat</nuxt-link>
			</div>
		</div>
	</div>
</div>
</template>


<style scoped>
.footer-top{
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	border-top: solid 3px var(--yellow);
	@apply px-6 py-10;
}

h4{
	@apply text-2xl font-black leading-none uppercase mt-3 md:text-2xl;
}

.content{
	@apply text-sm font-bold leading-tight mt-3 
					md:text-base md:leading-tight md:font-medium;
}

.btn{
	background: #740100;
	@apply text-center font-semibold leading-none whitespace-nowrap px-8 py-3 inline-block rounded-xl select-none;
}

.footer-mid{
	background: var(--brand-red);
	@apply text-center py-5 sm:py-8 md:py-12 lg:py-16;
}

.big-text{
	color: var(--yellow);
	@apply text-2xl font-bold uppercase leading-none
					sm:text-4xl sm:leading-none
					md:text-6xl md:leading-none
					lg:text-7xl lg:leading-none;
}


#mainFooter{
	background: #740100;
	@apply px-6 py-4;
}
</style>