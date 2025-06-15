<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const currentLocale = computed(() => locale.value)

// Claves deben coincidir con las de localizedPaths.js
const menuItems = ['home','events','about','contact']
</script>

<template>
<footer class="bg-dark border-top text-light py-4 mt-5">
  <div class="container d-flex flex-column flex-md-row justify-content-between gap-4">
    <div>
      <h5 class="fw-bold">
		<RouterLink
			class="navbar-brand"
			:to="{ name: `home-${currentLocale}` }"
		>
			<img
			src="@/assets/laihc-white.svg"
			alt="LAIHC"
			style="height:32px; top:-5px; position:relative;"
			/>
		</RouterLink>
	  </h5>
      <p class="mb-0">Driving human–computer interaction in Latin America.</p>
    </div>

    <div>
      <h6 class="fw-semibold mb-2">Navigation</h6>
      <ul class="list-unstyled mb-0">
        <li
            v-for="key in menuItems"
            :key="key"
            class="nav-item"
          >
            <RouterLink
              class="footer-link"
              :to="{ name: `${key}-${currentLocale}` }"
            >
              <span v-html="t(`navbar.${key}`)"></span>
            </RouterLink>
          </li>
      </ul>
    </div>

    <div>
		<h6 class="fw-semibold mb-2">Follow us</h6>
		<ul class="list-unstyled mb-0">
			<li>
			<a
				href="https://web.facebook.com/clihc"
				target="_blank"
				rel="noopener"
				class="footer-link"
			>
				<i class="fab fa-facebook me-2"></i>CLIHIC Facebook
			</a>
			</li>
			<li>
			<a
				href="https://web.facebook.com/sigchilaihc"
				target="_blank"
				rel="noopener"
				class="footer-link"
			>
				<i class="fab fa-facebook me-2"></i>LAIHC Facebook
			</a>
			</li>
			<li>
			<a
				href="https://x.com/clihc2023"
				target="_blank"
				rel="noopener"
				class="footer-link"
			>
				<i class="fab fa-x-twitter me-2"></i>CLIHIC on X
			</a>
			</li>
			<li>
			<a
				href="https://x.com/acmlaihc"
				target="_blank"
				rel="noopener"
				class="footer-link"
			>
				<i class="fab fa-x-twitter me-2"></i>LAIHC on X
			</a>
			</li>
		</ul>
	</div>
  </div>
  <div class="text-center mt-4 small">
    © 2025 LAIHC — All rights reserved · <a href="https://www.laihc.org">www.laihc.org</a>
  </div>
</footer>

</template>
