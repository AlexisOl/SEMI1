const express = require('express')
const app = express()

const port = 3001
app.use(express.json())


app.get('/' , (req, res) =>{
    res.json({"mensaje": "aca"})
})


app.listen(port, (valor) => {
    console.log(`aca en el puerto ${port}`);
    
})