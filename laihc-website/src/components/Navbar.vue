<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<nav class="navbar">
		<ul>
			<li><Router-link to="/">Home</Router-link></li>
			<li><Router-link to="/about">About</Router-link></li>
			<li><Router-link to="/events">Events</Router-link></li>
			<li><Router-link to="/resources">Resources</Router-link></li>
			<li><Router-link to="/contact">Contact</Router-link></li>
		</ul>
	</nav>
</template>
