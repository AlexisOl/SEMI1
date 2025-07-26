
const saludo = async(req, res) => {
    res.json({
        "mensaje": "saludossss",
        "instancia": "instancia 1"
    })
} 
const general = async(req, res) => {
    res.json({
        "informacion": "En instancia 1 correctamente ",

    })
} 



module.exports = {
    saludo: saludo,
    general: general
}