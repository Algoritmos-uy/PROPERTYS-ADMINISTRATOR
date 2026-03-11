# Descripción funcional de la aplicación

## 1. Resumen general

**Staylo (Airbnb Clone)** es una aplicación web para publicación y gestión de propiedades de alojamiento temporal.  
Permite a usuarios explorar inmuebles, registrarse, iniciar sesión y realizar reservas.  
Además, incluye un panel administrativo para gestionar reservas y usuarios, junto con un asistente conversacional (Lia) para apoyo en consultas.

---

## 2. Objetivo del sistema

Centralizar en una sola plataforma:

- Visualización de propiedades disponibles.
- Proceso de reserva por parte del usuario.
- Gestión administrativa de datos y operaciones.
- Canal de ayuda rápida mediante asistente virtual.

---

## 3. Funciones principales

## 3.1 Navegación por vistas

La app está organizada por vistas internas (SPA ligera), permitiendo cambiar entre:

- **Inicio** (listado de propiedades)
- **Sobre nosotros**
- **Contacto**
- **Pagos**
- **Admin** (solo acceso administrativo)

---

## 3.2 Módulo de propiedades (Inicio)

En la vista principal se muestran tarjetas de propiedades con:

- Imagen
- Título
- Ubicación
- Precio por noche
- Enlace a detalle de propiedad

### Funcionalidades del listado

- Render dinámico desde backend.
- Filtro por rango de precio:
  - precio mínimo
  - precio máximo
- Ordenamiento configurable:
  - predeterminado (ID ascendente)
  - precio ascendente
  - precio descendente

---

## 3.3 Detalle de propiedad

Cada propiedad posee una página de detalle (`property.html`) donde se visualiza información ampliada del inmueble y se habilita el flujo de reserva.

---

## 3.4 Autenticación de usuarios

El sistema incluye:

- Registro de usuario
- Inicio de sesión
- Cierre de sesión

Con persistencia de sesión en cliente para mantener estado autenticado durante la navegación.

---

## 3.5 Reservas

Usuarios autenticados pueden crear reservas sobre propiedades disponibles.  
El sistema gestiona almacenamiento y consulta de reservas para su administración posterior.

---

## 3.6 Panel administrativo

Módulo exclusivo para administradores con autenticación separada:

- Login admin
- Logout admin
- Visualización de reservas registradas
- Eliminación de reservas
- Visualización de usuarios registrados
- Exportación de información:
  - Reservas en CSV y Excel
  - Usuarios en CSV

### Comportamiento responsive del admin

El acceso admin se restringe visualmente en ciertos breakpoints para priorizar uso en escritorio.

---

## 3.7 Asistente virtual Lia

Asistente conversacional integrado en interfaz mediante launcher flotante:

- Atiende preguntas frecuentes.
- Da soporte orientado a propiedades y reservas.
- Muestra respuestas con efecto de escritura progresiva.
- Mantiene identidad de marca (Lia) en textos y firma.

---

## 4. Servicios de backend

La API backend expone endpoints para:

- Consulta de propiedades
- Gestión de autenticación de usuario
- Gestión de reservas
- Gestión administrativa
- Soporte a respuestas del asistente virtual

El backend está desarrollado con **Node.js + Express** y persiste datos en **SQLite**.

---

## 5. Persistencia de datos

Base de datos local en archivo:

- `server/database/stylo.sqlite`

Contiene información de:

- propiedades
- usuarios
- reservas

---

## 6. Estructura técnica resumida

### Frontend

- HTML, CSS, JavaScript modular
- Render dinámico por vistas
- Componentes visuales reutilizables

### Backend

- Node.js + Express
- Rutas y controladores por dominio funcional
- Validaciones y middleware para rutas protegidas

---

## 7. Enfoque de experiencia de usuario

La aplicación prioriza:

- Interfaz clara y directa.
- Navegación rápida entre módulos.
- Acciones administrativas simples.
- Soporte conversacional para reducir fricción del usuario.

---

## 8. Estado actual del proyecto

El proyecto se encuentra en fase avanzada de prueba funcional, con los módulos principales operativos y en proceso de ajustes finales para despliegue en entorno real de pruebas.

---

## 9. Próximas mejoras previstas

- Endurecimiento de seguridad del módulo admin.
- Mejoras de robustez en autenticación y manejo de sesión.
- Extensión de funcionalidades de perfil de usuario.
- Refinamiento del asistente virtual en tono y contexto conversacional.
- Optimización final para despliegue productivo.