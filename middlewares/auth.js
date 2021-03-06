const tokenService = require('../services/token');

module.exports = {
    verificarUsuario: async(req, res, next) => {
        if (!req.headers.token){
            return res.status(404).send({
                message: 'token perdido'
            });
        }else{
            const response = await tokenService.decode(req.headers.token);
            if (response.rol == 'Administrador' || response.rol == 'Vendedor' || response.rol == 'Almacenero'){
                next();
            }else{
                return res.status(403).send({
                    message: 'No autorizado'
                });
            }
        }
    },
}



   /*  verificarVendedor: async(req, res, next) => {
        if (!req.headers.token){
            return res.status(404).send({
                message: 'token perdido'
            });
        }else{
            const response = await tokenService.decode(req.headers.token);
            if (response.rol === "Administrador" || response.rol === "Vendedor"){
                next();
            }else{
                return res.status(403).send({
                    message: 'No autorizado'
                });
            }
        }
    },
} */