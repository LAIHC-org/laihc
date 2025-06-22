<template>
	<div v-if="htmlContent" v-html="htmlContent"></div>
	<div v-else class="text-center py-5">
		<!-- opcional: un spinner o mensaje de carga -->
		Cargando contenido…
	</div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const htmlContent = ref('')

async function loadHtml() {
	try {
		const mod = await import(`../content/clihc/clihc.${locale.value}.html?raw`)
		htmlContent.value = mod.default
	} catch (e) {
		console.error(e)
		htmlContent.value = '<p>Error loading content.</p>'
	}
}

onMounted(loadHtml)
watch(locale, loadHtml)
</script>
