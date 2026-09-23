# PowerHouse Church Peru — Página web

Sitio web de PowerHouse Church Peru (Piura, Perú). Aplicación SPA construida con React 19, Vite, TypeScript y Tailwind CSS v4.

## Stack

- **React 19** + **Vite** + **TypeScript**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Motion** para animaciones
- **i18next / react-i18next** para traducciones (es, en, fr, de, it, pt)
- **qrcode** para generación local de códigos QR (sin servicios externos)
- **Vitest** para pruebas unitarias

## Scripts

| Comando          | Descripción                                  |
| ---------------- | -------------------------------------------- |
| `npm run dev`    | Servidor de desarrollo con HMR                |
| `npm run build`  | Type-check (`tsc -b`) + build de producción   |
| `npm run lint`   | ESLint                                        |
| `npm test`       | Ejecuta las pruebas con Vitest                |
| `npm run preview`| Previsualiza el build de producción           |

## Estructura

```
src/
├── views/              # Páginas (Home, About, Beliefs, Services, GruposDeConexion, Contact, NotFound)
├── components/         # Navbar, Footer, DonationButton, WhatsAppButton, LanguageSelector, QRCode
├── hooks/              # useFocusTrap
├── data/               # Constantes centralizadas (contact.ts) e imágenes de WordPress (images.ts)
├── locales/            # Archivos JSON de traducciones (es.json es el idioma base)
├── routes.ts           # Rutas y mapeo path -> vista
├── i18n.ts             # Configuración de i18next y carga de idiomas
└── main.tsx / App.tsx  # Punto de entrada y enrutado SPA
```

## Rutas

La aplicación es una SPA con rutas propias (sin librería de router). El mapeo vive en `src/routes.ts`:

| Ruta                | Vista                    |
| ------------------- | ------------------------ |
| `/`                 | Home                     |
| `/nosotros`         | About                    |
| `/creencias`        | Beliefs                  |
| `/servicios`        | Services                 |
| `/grupos-de-conexion`| GruposDeConexion        |
| `/contacto`         | Contact                  |
| `/404`              | NotFound (página no encontrada) |

- Rutas desconocidas muestran la vista 404.
- Las URLs con `/` final se normalizan a la ruta canónica.
- SEO por vista: `document.title`, meta `description`, OG/Twitter y `link[rel=canonical]` se actualizan desde las claves `seo.*` de los locales al navegar.

## i18n

- `es` es el idioma por defecto y se incluye en el bundle principal.
- `en`, `fr`, `de`, `it` y `pt` se cargan bajo demanda (dynamic import) en chunks separados.
- La selección de idioma se persiste en `localStorage` bajo la clave `powerhouse:lang`.
- `common.sending` se usa en el botón de envío del formulario de contacto.
- Al añadir claves, deben añadirse en los 6 archivos de `src/locales/` (los tests de `src/locales.test.ts` verifican paridad de estructura).

## Formulario de contacto

El formulario usa el endpoint AJAX de **FormSubmit** (`https://formsubmit.co/ajax/<email>`).

Pasos manuales (no se pueden hacer por código):
1. Activar el servicio en el dashboard de FormSubmit (formsubmit.co) para el correo `PowerHouseChurchperu@gmail.com`.
2. **Captcha:** está desactivado con `_captcha: "false"`. Para activarlo, elimina esa línea de `handleSubmit` en `src/views/Contact/Contact.tsx` y actívalo también en el dashboard. Debe activarse manualmente en FormSubmit antes de desactivar el guard anti-bot.

Protecciones implementadas en el código:
- Campo honeypot `_honey`: si se rellena, el envío se ignora.
- Guard de tiempo mínimo de 3 s para el envío (bloquea bots).
- Estado de carga en el botón (`common.sending`) para evitar dobles envíos.

## Despliegue (Apache)

El proyecto se sirve por Apache (por ejemplo sobre el hosting de WordPress de `perupowerhouse.com`). `public/.htaccess` se copia a `dist/` en el build y ya incluye:

- `ErrorDocument 404 /404` y reescrituras SPA (`RewriteRule ^ /index.html [L]`) para los envíos directos.
- El dominio canónico utilizado es `https://perupowerhouse.com/`.

Pasos:
1. `npm run build`
2. Subir el contenido de `dist/` a la raíz web.
3. Verificar `dist/robots.txt` y `dist/sitemap.xml`.

## CI

`.github/workflows/ci.yml` ejecuta en cada push/PR: `npm ci`, lint, test y build con Node 20.