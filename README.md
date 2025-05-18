# 🌎 LAIHC Website

Este repositorio contiene el código fuente del sitio web oficial de la **Comunidad Latinoamericana de Interacción Humano-Computadora (LAIHC)**. La aplicación está desarrollada en [Vue.js](https://vuejs.org/) utilizando [Vite](https://vite.dev/) como herramienta de construcción moderna para aplicaciones frontend.

El objetivo del sitio es ofrecer una presencia digital institucional moderna, accesible y mantenible para la comunidad académica de IHC en América Latina.

---

## 📁 Estructura del Repositorio

### Raíz del Repositorio

* `README.md`: Esta documentación.
* `LICENSE`: Licencia del proyecto.
* `laihc-website/`: Contiene el código fuente de la aplicación web.

### Directorio `laihc-website/`

Contiene la aplicación Vue 3 con la siguiente estructura:

* `src/`: Componentes, vistas, rutas y recursos de la aplicación.
* `public/`: Archivos estáticos y `index.html` base.
* `package.json`: Dependencias y scripts del proyecto.
* `vite.config.js`: Configuración de Vite.
* `node_modules/`: Dependencias (excluidas del repositorio).

---

## 🧪 Requisitos y Entorno de Desarrollo

### Requisitos previos

* [Node.js](https://nodejs.org/) 18 o superior
* [npm](https://www.npmjs.com/)

### Instalación de dependencias

```bash
cd laihc-website
npm install
```

### Ejecutar en modo desarrollo

```bash
npm run dev
```

Luego abre el navegador en la URL que indique la consola (por defecto `http://localhost:5173`).

> Usa `npm run dev -- --host` si deseas exponer el servidor en tu red local.

---

## 🧰 Scripts disponibles

| Comando             | Descripción                                      |
| ------------------- | ------------------------------------------------ |
| `npm run dev`       | Compila y recarga en caliente para desarrollo    |
| `npm run build`     | Compila y minifica para producción               |
| `npm run preview`   | Previsualiza la versión de producción localmente |
| `npm run lint`      | Aplica correcciones automáticas con ESLint       |
| `npm run format`    | Formatea archivos con Prettier                   |
| `npm run test:unit` | Ejecuta pruebas unitarias con Vitest             |

---

## 🚀 Despliegue en GitHub Pages

El sitio se publica automáticamente mediante la rama `gh-pages`.

### 📦 Compilar y desplegar

1. Asegúrate de estar en el directorio raíz del proyecto:

   ```bash
   cd laihc-website
   ```

2. Ejecuta el siguiente comando:

   ```bash
   npm run deploy
   ```

   Esto:

   * Compila el sitio (`npm run build`)
   * Publica el contenido de `dist/` en la rama `gh-pages` usando [gh-pages](https://www.npmjs.com/package/gh-pages)

3. Una vez desplegado, el sitio estará disponible en:

   📍 [https://laihc-org.github.io/laihc/](https://laihc-org.github.io/laihc/)

> Asegúrate de que en la configuración del repositorio, en **Settings > Pages**, esté seleccionada la rama `gh-pages` como fuente del sitio.

---

## 🧑‍💼 Recomendaciones para Desarrollo

Se recomienda utilizar [Visual Studio Code](https://code.visualstudio.com/) con la extensión [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (deshabilitando Vetur para evitar conflictos).

---

## 🪪 Licencia

Este proyecto está licenciado bajo los términos de la licencia MIT. Consulta el archivo [`LICENSE`](./LICENSE) para más detalles.

---

## 🤝 Contribuciones

Las contribuciones académicas, técnicas o de contenido son bienvenidas. Por favor abre un [issue](https://github.com/LAIHC-org/laihc/issues) o envía un *pull request* siguiendo las buenas prácticas de desarrollo colaborativo.
