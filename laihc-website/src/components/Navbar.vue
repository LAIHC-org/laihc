<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import LanguageSelector from './LanguageSelector.vue'

const { t, locale } = useI18n()
const currentLocale = computed(() => locale.value)

// Claves deben coincidir con las de localizedPaths.js
const menuItems = ['home','about', 'events','contact']
</script>

<template>
  <nav class="container navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <!-- Logo → home del idioma actual -->
      <RouterLink
        class="navbar-brand"
        :to="{ name: `home-${currentLocale}` }"
      >
        <img
          src="@/assets/laihc-azul.svg"
          alt="LAIHC"
          style="height:64px; top:-5px; position:relative;"
        />
      </RouterLink>

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
        <ul class="navbar-nav me-auto">
          <li
            v-for="key in menuItems"
            :key="key"
            class="nav-item"
          >
            <RouterLink
              class="nav-link"
              :to="{ name: `${key}-${currentLocale}` }"
            >
              <span v-html="t(`navbar.${key}`)"></span>
            </RouterLink>
          </li>
        </ul>
        <div class="d-flex">
          <LanguageSelector />
        </div>
      </div>
    </div>
  </nav>
</template>
