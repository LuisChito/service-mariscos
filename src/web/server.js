'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { sequelize } = require('../infrastructure/db/connection');
const { iniciarSesion } = require('./express/routes/routes');

const app = express();
const port = process.env.APP_PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
	res.json({ status: 'ok' });
});

app.post('/login', iniciarSesion);

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
