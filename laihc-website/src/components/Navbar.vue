<script setup>
import { RouterLink } from "vue-router";
import LanguageSelector from "./LanguageSelector.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
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
                        <Router-link class="nav-link" to="/">{{
                            t("navbar.home")
                        }}</Router-link>
                    </li>
                    <li class="nav-item">
                        <Router-link class="nav-link" to="/about">{{
                            t("navbar.about")
                        }}</Router-link>
                    </li>
                    <li class="nav-item">
                        <Router-link class="nav-link" to="/events">{{
                            t("navbar.events")
                        }}</Router-link>
                    </li>
                    <li class="nav-item">
                        <Router-link class="nav-link" to="/resources">{{
                            t("navbar.resources")
                        }}</Router-link>
                    </li>
                    <li class="nav-item">
                        <Router-link class="nav-link" to="/contact">{{
                            t("navbar.contact")
                        }}</Router-link>
                    </li>
                </ul>
                <div class="ms-auto">
                    <!-- Subcomponente del selector de idioma -->
                    <LanguageSelector />
                </div>
            </div>
        </div>
    </nav>
</template>
