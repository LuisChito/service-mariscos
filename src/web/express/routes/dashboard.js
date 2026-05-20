const dashboardPath = require('../../../application/usecases/dashboard/getDashboard');

const routes = (app) => {
    app.get('/dashboard', async (_req, res) =>{
        try{
            const dashboard =  await dashboardPath()
            res.json(dashboard)
        }
        catch{
            console.log('Error', Error)
            res.status(500).json({message: 'Error del servidor'})
        }
    })
}

module.exports = routes;