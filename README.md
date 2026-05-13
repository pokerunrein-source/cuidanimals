# 🐾 CuidAnimals - Página Web Oficial

Página web profesional para CuidAnimals, empresa de cuidado de mascotas en Pego, Alicante.

## ✨ Características

- 🏠 **Página de Inicio** - Presentación hermosa con servicios destacados
- 🐾 **Servicios** - Detalles de visitas a domicilio, guardería y paseos
- 📸 **Galería** - Espacio para fotos de mascotas
- 📅 **Sistema de Citas** - Reserva citas online fácilmente
- 📞 **Contacto** - Formulario de contacto y ubicación en mapa
- ⭐ **Testimonios** - Reseñas de clientes satisfechos
- 📱 **Responsive** - Se adapta a cualquier dispositivo
- 🎨 **Diseño Profesional** - Colores blanco y lila

## 🚀 Cómo Empezar

### Requisitos
- Node.js (v14 o superior)
- npm (viene con Node.js)

### Instalación

1. Abre PowerShell o Terminal en la carpeta del proyecto
2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor:

```bash
npm start
```

4. Abre tu navegador y ve a:
```
http://localhost:3000
```

## 📁 Estructura del Proyecto

```
CuidAnimals/
├── server.js           # Servidor Express
├── package.json        # Dependencias
├── public/
│   ├── styles.css      # Estilos (blanco y lila)
│   └── script.js       # JavaScript interactivo
├── views/
│   ├── index.ejs       # Página principal
│   ├── servicios.ejs   # Página de servicios
│   ├── about.ejs       # Sobre nosotros
│   ├── galeria.ejs     # Galería
│   ├── citas.ejs       # Reservar citas
│   └── contacto.ejs    # Contacto
└── README.md           # Este archivo
```

## 🎨 Colores

- **Primario (Lila)**: #9D4EDD
- **Secundario (Lila Claro)**: #E0AAFF
- **Fondo Claro**: #F8F7FF
- **Blanco**: #FFFFFF
- **Texto Oscuro**: #2D1B4E

## 📝 Información de Contacto

- **Teléfono**: +34 622 35 80 09
- **Ubicación**: Carrer Sant Jaume, 25, 03780 Pego, Alicante
- **Horarios**: Lunes-Viernes 9am-7pm, Sábados 10am-4pm
- **Instagram**: @cuidanimals.esp

## 🔧 Personalización

### Cambiar información de contacto
Edita `server.js` en la sección de `const contactInfo`

### Agregar servicios
En `server.js`, actualiza el array `const servicios`

### Cambiar colores
En `public/styles.css`, modifica las variables CSS en `:root`

### Agregar fotos a la galería
Reemplaza los emojis en `views/galeria.ejs` con etiquetas `<img>`

## 🚢 Despliegue

Para desplegar la página web en línea, puedes usar:
- **Heroku** (gratuito)
- **Vercel**
- **Netlify**
- **Tu propio servidor**

## 📞 Soporte

Para preguntas o cambios, contacta a CuidAnimals:
- Teléfono: +34 622 35 80 09
- Instagram: @cuidanimals.esp

---

**CuidAnimals** - Cuidado profesional de mascotas ✅ 🐾
