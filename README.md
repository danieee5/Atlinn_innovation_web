# Sitio web de ATLINN Innovations

Sitio institucional y catálogo de ATLINN Innovations, distribuidor de Balance Products en Guayaquil. Está construido con Next.js y se publica como un sitio estático rápido, sin base de datos ni panel de administración.

## Para el dueño: la forma recomendada de trabajar

Este proyecto debe conservarse como **repositorio GitHub**, no como un ZIP de trabajo. Así quedan guardados el historial, las versiones anteriores y el despliegue automático.

1. Tener acceso de propietario al repositorio en GitHub y al proyecto en Vercel.
2. Clonar el repositorio en su computadora o abrirlo directamente con Codex.
3. Pedirle a Codex cambios concretos en español, por ejemplo: “actualiza el precio y la descripción de Hidralife; revisa que compile; deja un commit listo”.
4. Revisar el cambio y hacer `git push`. Vercel publicará la nueva versión automáticamente.

La guía de traspaso, accesos y publicación está en [ENTREGA.md](./ENTREGA.md).

## Ediciones habituales

| Quiero cambiar… | Archivo principal |
| --- | --- |
| Datos de la empresa, WhatsApp, correo, banco o redes | `src/lib/site-config.ts` |
| Productos, precios, textos e imágenes | `src/lib/products.ts` |
| Artículos del blog | `src/lib/blog.ts` |
| Puntos de venta | `src/lib/pointsOfSale.ts` |
| Segmentos comerciales | `src/lib/segments.ts` |
| Imágenes y video | `public/images/` y `public/` |
| Diseño o estructura de una página | `src/app/` y `src/components/` |

Tras editar, siempre ejecutar:

```bash
npm run lint
npm run build
```

## Arranque local

Requisitos: Node.js 22 LTS y npm. La versión usada para validar la entrega está indicada en `.nvmrc`.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000). No incluir `.env.local` en Git: contiene configuración propia de cada entorno.

## Configuración de producción

Configurar estas variables en Vercel antes del primer despliegue. Son públicas por diseño y se incorporan al sitio durante el build; no sirven para guardar secretos.

| Variable | Uso |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Dominio final, sin `/` al final. Alimenta SEO, sitemap y las tarjetas al compartir enlaces. |
| `NEXT_PUBLIC_GTM_ID` | ID de Google Tag Manager; dejar vacía si no se usa. |
| `NEXT_PUBLIC_META_PIXEL_ID` | ID de Meta Pixel; dejar vacía si no se usa. |

Copiar los nombres desde `.env.example`. Si se cambia cualquiera de estas variables, hay que hacer un nuevo despliegue para que surta efecto.

## Publicación

La opción más sencilla es Vercel:

1. Importar el repositorio GitHub en [Vercel](https://vercel.com/new).
2. Mantener los ajustes detectados: framework **Next.js**, comando de build `npm run build`.
3. Añadir las variables de entorno anteriores para Production, Preview y Development, según corresponda.
4. Conectar el dominio de ATLINN y dejar `NEXT_PUBLIC_SITE_URL` con ese dominio.
5. Cada `push` a la rama `main` actualizará producción; los cambios en otras ramas obtienen una vista previa.

## Notas técnicas

- Next.js 16, React 19, TypeScript y Tailwind CSS 4.
- No hay autenticación, backend, base de datos, API propia ni pagos dentro del sitio.
- Los pedidos se dirigen a WhatsApp.
- Las fuentes (Inter y Poppins) se descargan desde Google Fonts durante el build. El equipo que compile necesita acceso a internet.
