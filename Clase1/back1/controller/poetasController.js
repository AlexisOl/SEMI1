const Poeta = require ('../models/poeta.js');
const Nacionalidad = require ('../models/Nacionalidad.js');




const listar = async(req,res) => {
try {
        const  poetas = await Poeta.findAll(
            {
                include: {
                    model: Nacionalidad,
                    atributes: ['tipo']
                }
            }
        );

        res.json(poetas)
} catch (error) {
    res.status(500).json({ error: error.message });
}
}


module.exports = {
    listar
}