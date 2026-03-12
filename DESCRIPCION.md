# Staylo (Property-Admin) — Descripción ejecutiva

## ¿Qué es?

**Staylo** es una plataforma web para gestión de alojamiento temporal que integra en un solo sistema:

- Exploración de propiedades
- Registro e inicio de sesión de usuarios
- Reservas en línea
- Panel administrativo
- Asistente virtual de soporte (Lia)

Su objetivo es simplificar la operación comercial y administrativa de propiedades, con una experiencia clara para usuario final y administradores.

---

## Capacidades clave

### 1) Experiencia de usuario (Frontend)
- Navegación por vistas: Inicio, Sobre nosotros, Contacto, Pagos y Admin.
- Catálogo de propiedades con tarjetas visuales.
- Filtros por rango de precio.
- Ordenamiento por precio (ascendente/descendente).
- Vista de detalle de propiedad con contenido ampliado y flujo de reserva.

### 2) Gestión de cuenta y reservas
- Registro, login y logout de usuarios.
- Persistencia de sesión.
- Creación de reservas para usuarios autenticados.

### 3) Operación administrativa
- Acceso administrativo separado.
- Visualización y eliminación de reservas.
- Visualización de usuarios registrados.
- Exportación de información:
  - Reservas: CSV y Excel
  - Usuarios: CSV

### 4) Asistencia conversacional
- **Lia**, asistente virtual integrada en launcher flotante.
- Soporte en preguntas frecuentes y orientación de uso.
- Respuesta con escritura progresiva para mejor percepción de interacción.

---

## Arquitectura tecnológica

- **Frontend:** HTML, CSS, JavaScript modular.
- **Backend:** Node.js + Express.
- **Base de datos:** SQLite (`server/database/stylo.sqlite`).
- **Modelo de integración:** API REST interna para propiedades, auth, reservas, admin y asistente.

---

## Estado del proyecto

El sistema se encuentra en **fase avanzada de pruebas funcionales**, con los módulos principales operativos y listos para validación en servidor real de pruebas.

---

## Valor para negocio

- Centraliza procesos de consulta, reserva y control administrativo.
- Reduce carga operativa con exportaciones y panel de gestión.
- Mejora atención inicial al usuario con asistente virtual.
- Base sólida para escalar a entorno productivo con hardening de seguridad y     optimización final.

---

## Próxima etapa recomendada

1. Endurecimiento de seguridad del módulo admin y sesiones.
2. Mejoras de perfil de usuario y gestión de cuenta.
3. Ajustes finales de UX/UI responsive.
4. Preparación de despliegue productivo (monitorización, backups, logs y control de errores).
