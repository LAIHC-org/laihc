// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import i18n from '@/i18n'
import { supportedLocales, localizedPaths } from './localizedPaths'

// Pone la primera en mayúscula para importar la vista
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// Genera rutas top-level '/es', '/es/acerca', etc.
function generateLocalizedRoutes() {
  return supportedLocales.flatMap(lang =>
    Object.entries(localizedPaths).map(([key, paths]) => {
      const slug = paths[lang]
      // si slug=='' → '/es', si no → '/es/acerca'
      const path = slug ? `/${lang}/${slug}` : `/${lang}`
      return {
        path,
        name: `${key}-${lang}`,
        component: () =>
          import(
            /* webpackChunkName: "[request]" */ `../views/${capitalize(key)}View.vue`
          ),
        meta: { key, lang }
      }
    })
  )
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 1) / → '/es' (o el locale salvado)
    {
      path: '/',
      redirect: () => {
        // aquí leo el .value
        const loc = i18n.global.locale.value
        return `/${loc}`
      }
    },

    // 2) tus rutas '/es', '/es/acerca', '/en/about', etc.
    ...generateLocalizedRoutes(),

    // 3) catch-all (usa el patrón oficial, con la `*` final)
    {
      path: '/:pathMatch(.*)*',
      redirect: () => {
        // idem, fallbackLocale es también un ref
        const loc = i18n.global.fallbackLocale.value
        return `/${loc}`
      }
    }
  ]
})

// Antes de cada navegación, sincroniza i18n
router.beforeEach((to, from, next) => {
  const lang = to.meta.lang
  if (supportedLocales.includes(lang)) {
    i18n.global.locale.value = lang
    next()
  } else {
    next(`/${i18n.global.fallbackLocale.value}`)
  }
})

export default router
