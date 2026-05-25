const createContacto = require('../../../application/usecases/contacto/createContacto');

const routes = (app) => {
  app.post('/contacto', async (req, res) => {
    try {
        const { nombre, motivo, mensaje } = req.body;
        const contacto = await createContacto(nombre, motivo, mensaje);
        res.json(contacto);
    } 
    catch {
       console.error('Error :', Error);
       res.status(500).json({message: 'Error del servidor'})
    }
  });
};

module.exports = routes;