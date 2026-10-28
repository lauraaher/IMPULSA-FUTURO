# Verificación del MVP

Se probó la versión local en el navegador integrado mediante HTTP sobre `127.0.0.1`, sin conexión a servicios de la Fundación.

## Comprobaciones realizadas

- Sintaxis JavaScript: `node --check app.js` y `node --check data.js`.
- Navegación de las 43 secciones de los cuatro portales, con título principal presente y sin desbordamiento horizontal de página en la revisión de escritorio.
- Detalles de los cuatro programas, impacto, tres artículos documentales, Nosotros, privacidad, términos y transparencia.
- Portada, programas, Únete, Donar, Login, dashboard y blog administrativo en 360, 390, 768, 1024, 1440 y 1920 px. Se corrigió un desbordamiento de la trayectoria decorativa a 768 y 1024 px.
- Dashboards de voluntario, miembro y aliado a 360 px, sin desbordamiento horizontal de página.
- Menú público móvil y drawer del portal.
- Solicitud por pasos con datos ficticios y aprobación local en coordinación.
- Selección de monto, confirmación de donación simulada y actualización del portal de aliados.
- Registro demo con correo y contraseña ficticios, entrada por rol y cierre de sesión.
- Creación de artículo, previsualización, guardado de borrador, envío a revisión, aprobación y publicación local.
- Recarga del navegador con conservación del estado publicado.
- Creación de taller y registro de metadatos de video con previsualización y envío a revisión.
- Inscripción demo, filtro de oportunidades y estado sin actividades.
- Recurso guardado y marcado como completado en el portal de miembros.
- Gestión de nota de programa y creación de actividad en coordinación.
- Buscador de blog con estado sin resultados.
- Consola del navegador sin errores o advertencias en los recorridos comprobados.
- Recursos gráficos de las vistas comprobadas sin imágenes rotas.

## Límites de la verificación

El navegador automatizado rechaza el protocolo `file://`. Se comprobó la implementación sin dependencias de servidor, pero no se pudo ejecutar una prueba automatizada abriendo directamente `index.html`. Para esa comprobación final, abrir el archivo en un navegador de escritorio moderno.

La revisión responsive combina medidas del DOM y capturas de vistas representativas. No constituye una prueba visual exhaustiva de cada sección en cada dispositivo, ni una auditoría formal WCAG, de seguridad o de todos los navegadores.

No se probaron transacciones, correos, autenticación o publicación externas porque no existen esas integraciones. Los datos de prueba se restablecieron para la entrega.
