<script setup>
defineProps({ loading: true })
</script>



<template>
<Transition>
	<div id="loader" v-if="loading">
		<div class="text-white text-sm leading-none text-center">
			<Logo :onlyIso="true" class="h-28" />
			<div class="mt-1">cargando</div>
		</div>
	</div>
</Transition>
</template>



<style scoped>
#loader{
	background: #A01915;
	@apply grid place-content-center inset-0 fixed transition-all 
					duration-500 z-50;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>