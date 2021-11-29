const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
<<<<<<< HEAD
const db = require('./dao/models')
=======
const route = require('./routes/routes')
>>>>>>> f3b64527964ef5484207cdfd70d225c571205d5e

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
<<<<<<< HEAD

app.set('view engine', 'ejs')

////////////////////////////////////////////////////////////////////////////////////////

app.get('/', (req, res) => {
	res.send('HOLA: MUNDO')
})

////////////////////////////////////////////////////////////////////////////////////////

app.listen(PORT, () => {
	console.log(`Se ha inicializado el servidor en el puerto ${PORT}`)
})
=======
app.use(route)

app.set('view engine', 'ejs')

app.listen(PORT, () => {
	console.log(`Se ha inicializado el servidor en el puerto ${PORT}`)
})


////////////////////////////////////////////////////////////////////////////////////////
/*const URL_BACKEND ="https://www.atletasla.com/wp-content/uploads/2018/07/%C2%A1Los-10-deportes-mas-practicados-en-todo-el-mundo.jpg"

const promiseOK = (response) =>{
	response.json().then((data)=>{
		console.log(data[0].url)
	}).catch((error)=>{
		console.error(error)
	})
}

const main = () => {
	fetch(URL_BACKEND)
		.then(promiseOK)
		.catch((error)=>{
			console.error(error)
		})
	console.log(`Linea 11`)
}
window.addEventListener("load",main)
*/
>>>>>>> f3b64527964ef5484207cdfd70d225c571205d5e
