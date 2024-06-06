const express = require('express');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const authenticateJWT = require('./middleware/authenticateJWT');
const cors = require('cors');
require('dotenv').config();


const app = express();

const corsOptions = {
    origin: 'http://127.0.0.1:5500', // Sesuaikan dengan URL frontend Anda
    optionsSuccessStatus: 200,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    credentials: true, // Jika Anda menggunakan cookie atau autentikasi berbasis sesi
    allowedHeaders: 'Content-Type,Authorization'
  };

app.use(cors(corsOptions))
app.options('*', cors(corsOptions));
app.use(express.json());
app.use('/auth', authRoutes);

// Halaman utama yang dilindungi
app.get('/main', authenticateJWT, (req, res) => {
  res.json({ message: 'Welcome to the main page', user: req.user });
});

const PORT = process.env.PORT || 3015;

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
``
