const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const route = require('./routes/routes')

const PORT = 5000
const app = express()

app.use(express.static('assets'))
app.use(session({
	secret: 'pw-123',
	resave: false,
	saveUninitialized: false
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))
app.use(route)

app.set('view engine', 'ejs')

app.listen(PORT, () => {
	console.log(`Se ha inicializado el servidor en el puerto ${PORT}`)
})


////////////////////////////////////////////////////////////////////////////////////////
