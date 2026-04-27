const getSucursales = require("../../../application/usecases/sucursales/getSucursales");
const putStatus = require("../../../application/usecases/sucursales/putStatus");

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
};


module.exports = routes;