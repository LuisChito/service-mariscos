'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { sequelize } = require('../infrastructure/db/connection');

const app = express();
const port = process.env.APP_PORT || 3001;

const sucursalesRoutes = require('./express/routes/sucursales');
const loginRoutes = require('./express/routes/login');
const dashboardRoutes = require('./express/routes/dashboard');
const platosRoutes =  require('./express/routes/platos');
const contactoRoutes = require('./express/routes/contacto');

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.json());

sucursalesRoutes(app);
loginRoutes(app);
dashboardRoutes(app);
platosRoutes(app);
contactoRoutes(app);

async function start() {
	try {
		app.listen(port, () => {
			console.log(`Servidor corriendo en el puerto ${port}`);
		});
	} catch (error) {
		console.error('Error al iniciar el servidor:', error);
		process.exit(1);
	}
}

start();
