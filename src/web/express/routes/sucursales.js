const getSucursales = require("../../../application/usecases/sucursales/getSucursales");

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
};

module.exports = routes;