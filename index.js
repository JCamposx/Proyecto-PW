const express = require('express')

const PORT = 5000
const app = express()

app.get('/', (req, res) => {
	res.send('HOLA, MUNDO')
})

app.listen(PORT, () => {
	console.log(`Se ha inicializado el servidor en el puerto ${PORT}`)
})