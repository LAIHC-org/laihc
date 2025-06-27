<template>
	<div class="container py-5">
		<!-- Banner Principal -->
		<section class="hero text-center mb-5">
			<div class="py-5 bg-light rounded shadow-sm pattern-bg">
				<h1 class="display-4 fw-bold" v-html="$t('welcome')"></h1>
				<p class="lead fw-bold text-light" v-html="$t('about')"></p>
				<div class="d-flex justify-content-center">
					<RouterLink class="btn btn-primary btn-shadow btn-lg me-2"
						:to="{ name: `events-${locale}`, hash: '' }">
						<span v-html="t('cta')"></span>
					</RouterLink>
				</div>
			</div>
		</section>

		<div v-if="htmlContent" v-html="htmlContent"></div>
		<div v-else class="text-center py-5">
			<!-- opcional: un spinner o mensaje de carga -->
			Cargando contenido…
		</div>
	</div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { RouterLink } from 'vue-router'     // usado en el template
import { useI18n } from 'vue-i18n'

/* i18n ---------------------------------------------------------- */
const { t, locale } = useI18n()             // t() y locale (ref)

/* HTML externo -------------------------------------------------- */
const htmlContent = ref('')

async function loadHtml() {
	try {
		// Vite: importar el archivo como texto plano
		const mod = await import(`../content/home/home.${locale.value}.html?raw`)
		htmlContent.value = mod.default
	} catch (err) {
		console.error('Error cargando HTML:', err)
		htmlContent.value = '<p>Error al cargar contenido.</p>'
	}
}

/* ciclo de vida ------------------------------------------------- */
onMounted(loadHtml)          // 1. primera carga
watch(locale, loadHtml)      // 2. recargar si cambia el idioma
</script>

<style scoped>
/* si quieres, añade estilos específicos para la sección */
</style>
