const login = require('../../../application/usecases/login');

async function iniciarSesion(req, res) {
    const { usuario, password } = req.body;
    try {
        const resultado = await login.iniciarSesion(usuario, password);
        if (!resultado) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }
        res.json(resultado);
    } catch (error) {
        console.error('Error en iniciarSesion:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}

module.exports = {
    iniciarSesion,
};