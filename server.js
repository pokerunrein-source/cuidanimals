const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Datos de contacto
const contactInfo = {
  direccion: 'Carrer Sant Jaume, 25, 03780 Pego, Alicante, España',
  telefono: '+34 622 35 80 09',
  email: 'info@cuidanimals.es',
  horario: {
    lunes_viernes: '9:00 AM - 7:00 PM',
    sabados: '10:00 AM - 4:00 PM',
    domingos: 'Cerrado'
  }
};

// Datos de servicios
const servicios = [
  {
    id: 1,
    nombre: 'Visitas a Domicilio',
    descripcion: 'Visitamos tu hogar para cuidar a tu mascota. Paseos, alimentación y juegos.',
    precio: 'desde €15',
    icono: '🏠'
  },
  {
    id: 2,
    nombre: 'Guardería Familiar',
    descripcion: 'Tu mascota se queda con nosotros en un hogar acogedor mientras tú trabajas.',
    precio: 'desde €20/día',
    icono: '🏡'
  },
  {
    id: 3,
    nombre: 'Paseos de Perros',
    descripcion: 'Paseos diarios para que tu perro ejercite y socialice con otros perros.',
    precio: 'desde €10',
    icono: '🚶'
  }
];

// Testimonios
const testimonios = [
  {
    nombre: 'Juanma Lopez',
    texto: 'Le he dejado a mi gatito de 4 meses durante 12 días.',
    rating: 5
  },
  {
    nombre: 'María Argüello',
    texto: 'Estoy encantada con ellos. Profesionales y muy cuidadosos.',
    rating: 5
  },
  {
    nombre: 'Marjolijn Kleinbergen',
    texto: 'She is a true cat whisperer 😍 ¡Estamos encantados con Evi!',
    rating: 5
  }
];

// Rutas
app.get('/', (req, res) => {
  res.render('index', { servicios, testimonios });
});

app.get('/servicios', (req, res) => {
  res.render('servicios', { servicios });
});

app.get('/sobre-nosotros', (req, res) => {
  res.render('about', { contactInfo });
});

app.get('/galeria', (req, res) => {
  res.render('galeria');
});

app.get('/citas', (req, res) => {
  res.render('citas', { servicios });
});

app.get('/contacto', (req, res) => {
  res.render('contacto', { contactInfo });
});

app.post('/api/cita', (req, res) => {
  const { nombre, email, telefono, fecha, hora, servicio, mascota } = req.body;
  console.log('Nueva cita solicitada:', { nombre, email, telefono, fecha, hora, servicio, mascota });
  res.json({
    success: true,
    mensaje: 'Tu solicitud de cita ha sido recibida. Nos pondremos en contacto pronto.'
  });
});

app.post('/api/contacto', (req, res) => {
  const { nombre, email, telefono, mensaje } = req.body;
  console.log('Nuevo mensaje de contacto:', { nombre, email, telefono, mensaje });
  res.json({
    success: true,
    mensaje: 'Tu mensaje ha sido enviado. Nos pondremos en contacto pronto.'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ CuidAnimals está corriendo en http://localhost:${PORT}`);
});
