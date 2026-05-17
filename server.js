const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const locales = {
  es: require('./locales/es'),
  en: require('./locales/en'),
  fr: require('./locales/fr'),
  de: require('./locales/de'),
};

function parseCookies(req) {
  const cookies = {};
  const header = req.headers.cookie;
  if (!header) return cookies;
  header.split(';').forEach(cookie => {
    const parts = cookie.trim().split('=');
    const name = parts.shift().trim();
    cookies[name] = parts.join('=');
  });
  return cookies;
}

function detectLanguage(req) {
  const cookies = parseCookies(req);
  if (cookies.lang && locales[cookies.lang]) {
    return cookies.lang;
  }

  const acceptLanguage = req.headers['accept-language'] || '';
  const langs = acceptLanguage
    .split(',')
    .map(l => l.trim().split(';')[0].toLowerCase().split('-')[0]);

  for (const lang of langs) {
    if (lang === 'es') return 'es';
    if (lang === 'en') return 'en';
    if (lang === 'fr') return 'fr';
    if (lang === 'de') return 'de';
  }

  return 'es';
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Language switch route
app.get('/set-lang/:lang', (req, res) => {
  const lang = req.params.lang;
  if (locales[lang]) {
    res.cookie('lang', lang, { maxAge: 365 * 24 * 60 * 60 * 1000, httpOnly: false });
  }
  const referer = req.headers.referer || '/';
  res.redirect(referer);
});

// Rutas
app.get('/', (req, res) => {
  const t = locales[detectLanguage(req)];
  res.render('index', { t, servicios: t.servicios_data, testimonios: t.testimonios_data, estadisticas: t.estadisticas_data });
});

app.get('/servicios', (req, res) => {
  const t = locales[detectLanguage(req)];
  res.render('servicios', { t, servicios: t.servicios_data });
});

app.get('/sobre-nosotros', (req, res) => {
  const t = locales[detectLanguage(req)];
  res.render('about', { t, contactInfo: t.contactInfo });
});

app.get('/galeria', (req, res) => {
  const t = locales[detectLanguage(req)];
  res.render('galeria', { t });
});

app.get('/citas', (req, res) => {
  const t = locales[detectLanguage(req)];
  res.render('citas', { t, servicios: t.servicios_data });
});

app.get('/contacto', (req, res) => {
  const t = locales[detectLanguage(req)];
  res.render('contacto', { t, contactInfo: t.contactInfo });
});

app.post('/api/cita', (req, res) => {
  const { nombre, email, telefono, fecha, hora, servicio, mascota } = req.body;
  console.log('Nueva cita solicitada:', { nombre, email, telefono, fecha, hora, servicio, mascota });
  const lang = detectLanguage(req);
  res.json({
    success: true,
    mensaje: locales[lang].citas.success_api,
  });
});

app.post('/api/contacto', (req, res) => {
  const { nombre, email, telefono, mensaje } = req.body;
  console.log('Nuevo mensaje de contacto:', { nombre, email, telefono, mensaje });
  const lang = detectLanguage(req);
  res.json({
    success: true,
    mensaje: locales[lang].contacto.success_api,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ CuidAnimals está corriendo en http://localhost:${PORT}`);
});
