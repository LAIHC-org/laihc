<template>
	<div class="container py-5">
		<!-- Banner Principal -->
		<section class="hero text-center mb-5">
			<div class="py-5 bg-light rounded shadow-sm pattern-bg">
				<h1 class="display-4 fw-bold" v-html="$t('welcome')"></h1>
				<p class="lead" v-html="$t('about')"></p>
				<div class="d-flex justify-content-center">
					<button class="btn btn-primary btn-shadow btn-lg me-2" v-html="$t('cta')"></button>
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
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const htmlContent = ref('')

async function loadHtml() {
  try {
    // Vite: importar como texto bruto
    const module = await import(
      `../content/home/home.${locale.value}.html?raw`
    )
    htmlContent.value = module.default
  } catch (e) {
    console.error('Error cargando HTML:', e)
    htmlContent.value = '<p>Error al cargar contenido.</p>'
  }
}

onMounted(loadHtml)
watch(locale, loadHtml)
</script>

<style scoped>
/* si quieres, añade estilos específicos para la sección */
</style>
