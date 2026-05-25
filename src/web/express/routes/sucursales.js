const fs = require('fs');
const path = require('path');
const multer = require('multer');
const getSucursales = require("../../../application/usecases/sucursales/getSucursales");
const putStatus = require("../../../application/usecases/sucursales/putStatus");
const getTodasSuc = require("../../../application/usecases/sucursales/getTodasSuc");
const createSucursal = require("../../../application/usecases/sucursales/createSucursal");
const deleteSucursales = require("../../../application/usecases/sucursales/deleteSucursales");

const uploadDir = path.resolve(__dirname, '../../../../../client-mariscos/public/imgs/layout/sucursales');

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (_req, _file, callback) => {
        callback(null, uploadDir);
    },
    filename: (_req, file, callback) => {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        const extension = path.extname(file.originalname);
        callback(null, `${path.basename(file.originalname, extension)}-${uniqueSuffix}${extension}`);
    }
});

const upload = multer({ storage });

const routes = (app) => {
    app.get('/sucursales', async (_req, res) => {
        try {
            const sucursales = await getSucursales();
            res.json(sucursales);
        } catch (error) {
            console.error('Error al obtener sucursales:', error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    });
    app.post('/sucursales', upload.single('imagen'), async (req, res) => {
        try {
            const { nombre, direccion, mapa } = req.body;
            const imagen = req.file ? `/imgs/layout/sucursales/${req.file.filename}` : null;
            const sucursal = await createSucursal(nombre, imagen, direccion, mapa, true);
            res.status(201).json(sucursal);
        } catch (error) {
            console.error('Error al crear la sucursal:', error);
            res.status(error.status || 500).json({ message: error.message || 'Error interno del servidor' });
        }
    });
    app.put('/sucursales/:nombre', async (req, res) => {
        try {
            const { nombre } = req.params;
            const { status } = req.body;
            const sucursal = await putStatus(nombre, status);
            res.json(sucursal);
        } catch (error) {
            console.error('Error al actualizar el estado de la sucursal:', error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    });
    app.delete('/sucursales/:nombre', async (req, res) => {
        try {
            const { nombre } = req.params;
            const result = await deleteSucursales(nombre);
            res.json(result);
        } catch (error) {
            console.error('Error al eliminar la sucursal:', error);
            res.status(error.status || 500).json({ message: error.message || 'Error interno del servidor' });
        }
    });
    app.get('/todasSuc', async (_req, res) => {
        try {
            const sucursalesTodas = await getTodasSuc();
            res.json(sucursalesTodas);
        } catch (error) {
            console.error('Error al obtener sucursales:', error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    });
};


module.exports = routes;