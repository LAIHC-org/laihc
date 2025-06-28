<!-- src/components/LanguageSelector.vue -->
<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'
import { localizedPaths } from '@/router/localizedPaths'

const { locale } = useI18n()
const router = useRouter()
const route = useRoute()

function changeLanguage(ev) {
	const newLoc = ev.target.value
	// Actualiza i18n y guarda en localStorage
	locale.value = newLoc
	localStorage.setItem('locale', newLoc)

	// Obtén la "key" de la página actual (home, about, events…)
	const key = route.meta.key || 'home'
	// Busca el slug correcto para el nuevo idioma
	const slug = localizedPaths[key][newLoc]
	// Construye la ruta: '/en/about' o '/pt' si slug == ''
	const newPath = slug ? `/${newLoc}/${slug}` : `/${newLoc}`

	router.push(newPath)
}
</script>

<template>
	<div class="language-selector">
		<i class="fa-solid fa-language icon"></i>
		<select class="form-select" :value="locale" @change="changeLanguage">
			<option value="es">Español</option>
			<option value="en">English</option>
			<option value="pt">Português</option>
		</select>
	</div>
</template>

<style scoped>
.language-selector {
	display: flex;
	align-items: center;
	/* centra verticalmente */
	gap: 0.5rem;
	/* espacio entre icono y select */
}

.icon {
	font-size: 1.2rem;
	/* aumenta el tamaño del ícono */
	color: #1f2937;
	/* opcional: tono gris oscuro para buena visibilidad */
}

.form-select {
	width: auto;
}
</style>
