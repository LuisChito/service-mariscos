const iniciarSesion = require ("../../../application/usecases/login.js")

const routes = (app) => {
    app.post('/loginAuth', async (req, res) => {
        try{
            const { usuario, password } = req.body;
            const login = await iniciarSesion(usuario, password);
            res.json(login)
        } catch (error) {
            console.error('Error, usuario o contraseñá incorrecto')
            res.status(500).json({message: 'Error del servidor '})
        }
    }
    );
}

module.exports = routes;