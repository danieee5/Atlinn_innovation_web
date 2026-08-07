# Entrega y operación — ATLINN Innovations

## Estado verificado

Fecha de auditoría: 6 de agosto de 2026.

- La rama `main` está limpia: no había cambios locales pendientes.
- `npm run lint` finaliza correctamente.
- `npm run build` finaliza correctamente y genera todas las rutas estáticas del sitio.
- Las variables de configuración están documentadas en `.env.example`; no se encontraron archivos `.env` ni secretos versionados.
- El sitio no depende de una base de datos ni de servicios de backend.

La compilación descarga Inter y Poppins de Google Fonts. Por ello, un build necesita conexión a internet.

## Traspaso de propiedad (imprescindible)

El remoto actual está en una cuenta personal de GitHub. Para una entrega real, el dueño debe controlar estos activos:

1. **Repositorio GitHub:** transferir el repositorio a la cuenta u organización de Dimitrakis, o crear allí un repositorio nuevo y subir este historial. Él debe quedar como *Owner*.
2. **Vercel:** crear o transferir el proyecto al equipo/cuenta del dueño, conectado con su repositorio. Él debe quedar como *Owner*.
3. **Dominio/DNS:** confirmar que Dimitrakis controla el registrador del dominio y el DNS. Conectar el dominio desde Vercel siguiendo sus registros DNS.
4. **Analítica:** transferir o conceder administración de Google Tag Manager, Google Analytics y Meta Business/Pixel si se usan.
5. **Cuentas de negocio:** mantener bajo control del dueño el correo, Instagram, WhatsApp Business y la cuenta bancaria mostrada en el sitio.

No basta con dar acceso de editor: al finalizar, comprueba que el dueño pueda entrar sin tu cuenta a GitHub, Vercel, dominio/DNS y analítica.

## Cómo entregarlo sin perder control ni historial

1. Hacer el traspaso del repositorio en GitHub o darle propiedad mediante una organización de Dimitrakis.
2. Vincular ese repositorio a un proyecto de Vercel que pertenezca a Dimitrakis.
3. Configurar las variables de producción desde `.env.example` y publicar una vez.
4. Pedirle que haga una edición pequeña con Codex y un `push`; verificar que Vercel la publique.
5. Solo como respaldo, generar un ZIP **sin** `node_modules`, `.next`, `.git` ni `.env.local`.

El ZIP no debe ser el canal principal: no contiene el vínculo de despliegue ni facilita regresar a una versión anterior. Es útil como copia de emergencia o si más adelante quiere entregárselo a otro desarrollador.

## Uso con Codex

Al abrir el repositorio en Codex, Dimitrakis puede pedir cambios como:

> “En `src/lib/products.ts`, actualiza el precio de Maximum a X. Mantén el formato, ejecuta lint y build, y explícame los archivos modificados.”

Antes de publicar, debe revisar el resumen de cambios de Codex y ejecutar o pedir:

```bash
npm run lint
npm run build
git status
git add <archivos revisados>
git commit -m "Actualiza catálogo"
git push origin main
```

Nunca debe pegar contraseñas, accesos bancarios, tokens privados ni llaves API en un chat o en archivos del repositorio. Las variables que empiezan con `NEXT_PUBLIC_` son visibles para cualquier visitante del sitio.

## Recuperación

Cada cambio confirmado con Git puede revertirse desde GitHub o con Codex. Antes de una edición amplia, crear una rama o confirmar el estado actual con un commit. El despliegue anterior seguirá disponible en Vercel para volver atrás si hace falta.

## Checklist de aceptación para Dimitrakis

- [ ] Tiene propiedad del repositorio GitHub.
- [ ] Tiene propiedad del proyecto Vercel.
- [ ] Tiene control del dominio y DNS.
- [ ] Las variables de Vercel están configuradas y el dominio aparece correctamente en `NEXT_PUBLIC_SITE_URL`.
- [ ] Puede editar el repositorio con Codex en su propia computadora.
- [ ] Hizo una prueba de cambio, `push` y despliegue exitoso.
- [ ] Tiene una copia ZIP de respaldo, si la desea.
