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
    // Vite: importar como texto bruto
    const module = await import(
      `../content/contact/contact.${locale.value}.html?raw`
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
