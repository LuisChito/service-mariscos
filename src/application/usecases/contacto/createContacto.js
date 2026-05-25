const { Contacto } = require('../../../infrastructure/db/models');

async function createContacto(nombre, motivo, mensaje) {
  try {
    if (!nombre || !motivo || !mensaje) {
      const err = new Error('Faltan campos requeridos: nombre, motivo y mensaje');
      err.status = 400;
      throw err;
    }

    const contacto = await Contacto.create({ nombre, motivo, mensaje });
    return contacto;
  } catch (error) {
    console.error('Error creando contacto:', error);
    throw error;
  }
}

module.exports = createContacto;