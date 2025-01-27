<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const changeLanguage = (lang) => {
    locale.value = lang; // Cambia el idioma actual
};
</script>

<template>
    <div class="language-selector">
        <select @change="changeLanguage($event.target.value)" class="form-select">
            <option value="es">Español</option>
            <option value="en">English</option>
            <option value="pt">Português</option>
        </select>
    </div>
</template>

<style scoped>
.language-selector {
    min-width: 120px;
}
</style>
