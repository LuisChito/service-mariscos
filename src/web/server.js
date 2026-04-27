'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { sequelize } = require('../infrastructure/db/connection');
const { iniciarSesion } = require('../application/usecases/login');

const app = express();
const port = process.env.APP_PORT || 3001;

const sucursalesRoutes = require('./express/routes/sucursales');

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
