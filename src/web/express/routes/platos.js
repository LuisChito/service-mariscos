const getPlatos = require("../../../application/usecases/platos/getPlatos");

const routes = (app) => {
  app.get('/platos', async (_req, res) => {
    try {
      const platos = await getPlatos();
      res.json(platos);
    } catch (error) {
      console.error('Error al traer platos:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  });
};

module.exports = routes;