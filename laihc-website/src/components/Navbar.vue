<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<nav class="container navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">LAIHC</a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item">
						<Router-link class="nav-link" to="/">Home</Router-link>
					</li>
					<li class="nav-item">
						<Router-link class="nav-link" to="/about">About</Router-link>
					</li>
					<li class="nav-item">
						<Router-link class="nav-link" to="/events">Events</Router-link>
					</li>
					<li class="nav-item">
						<Router-link class="nav-link" to="/resources">Resources</Router-link>
					</li>
					<li class="nav-item">
						<Router-link class="nav-link" to="/contact">Contact</Router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>
