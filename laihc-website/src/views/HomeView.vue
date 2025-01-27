<script>
export default {
    data() {
        return {
            locale: this.$i18n.locale,
        };
    },
    methods: {
        changeLanguage() {
            this.$i18n.locale = this.locale;
        },
    },
};

</script>
<template>
    <div class="container py-5">
        <!-- Banner Principal -->
        <section class="hero text-center mb-5">
            <div class="py-5 bg-light rounded shadow-sm">
				<h1 class="display-4 fw-bold" v-html="$t('welcome')"></h1>
                <p class="lead">
                    Impulsando la interacción humano-computadora en América Latina.
                </p>
                <div class="d-flex justify-content-center">
                    <button class="btn btn-primary btn-lg me-2">Conoce CLIHC</button>
                </div>
            </div>
        </section>

        <!-- Sobre LAIHC -->
        <section class="about text-center mb-5">
            <h2 class="fw-bold">¿Qué es LAIHC?</h2>
            <p class="lead">
                LAIHC es una comunidad que conecta investigadores, profesionales y
                estudiantes para avanzar en la innovación tecnológica centrada en las
                personas. Nuestro objetivo es fortalecer la HCI en América Latina.
            </p>
            <button class="btn btn-primary btn-lg">Más sobre nosotros</button>
        </section>

        <!-- Conferencias destacadas -->
        <section class="conferences mb-5">
            <h2 class="text-center fw-bold mb-4">Conferencias Destacadas</h2>
            <div class="row g-4">
                <div class="col-md-6">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h3 class="card-title">CLIHC 2023</h3>
                            <p class="card-text">
                                La última edición de nuestra conferencia bienal.
                            </p>
                            <button class="btn btn-outline-primary">Ver detalles</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h3 class="card-title">CLIHC 2021</h3>
                            <p class="card-text">
                                Explora las sesiones y recursos de nuestra conferencia
                                online.
                            </p>
                            <button class="btn btn-outline-primary">Ver detalles</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center mt-4">
                <button class="btn btn-primary btn-lg">Ver todas las conferencias</button>
            </div>
        </section>

        <!-- Noticias y Recursos -->
        <section class="news-resources">
            <h2 class="text-center fw-bold mb-4">Novedades y Recursos</h2>
            <div class="row g-4">
                <div class="col-md-6">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h3 class="card-title">Convocatoria CLIHC 2025</h3>
                            <p class="card-text">
                                ¡Participa en la próxima edición de nuestra conferencia!
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h3 class="card-title">Publicaciones Recientes</h3>
                            <p class="card-text">
                                Descubre los últimos artículos y recursos de la comunidad.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center mt-4">
                <button class="btn btn-primary btn-lg">Explorar recursos</button>
            </div>
        </section>
    </div>
</template>
