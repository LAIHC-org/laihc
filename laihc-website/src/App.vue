<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
	<header>
		<img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

		<div class="wrapper">
			<Navbar />
		</div>
	</header>

	<RouterView />
</template>
