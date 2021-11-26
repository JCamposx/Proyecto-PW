const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const db = require('./dao/models')

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

app.set('view engine', 'ejs')

////////////////////////////////////////////////////////////////////////////////////////

app.get('/', (req, res) => {
	res.send('HOLA: MUNDO')
})

////////////////////////////////////////////////////////////////////////////////////////

app.listen(PORT, () => {
	console.log(`Se ha inicializado el servidor en el puerto ${PORT}`)
})


////////////////////////////////////////////////////////////////////////////////////////
//*Tabla principal de juegos, con opciones de editar,eliminar, crear nueo juego
app.get('/juegos', async (req, res)=> {
    
		const juegos = await db.Juego.findAll();
        res.render('juegos', {
            juegos : juegos
        })
    }

)
////////////////////////////////////////////////////////////////////////////////////////
//*Nuevo juego
app.get('/juegos/new', (req, res) => {
	
    res.render('juegos_new')
})

app.post('/juegos/new', async (req, res) => {
    const juegoNombre = req.body.juego_nombre
    
	
    await db.Juego.create({
        nombre : juegoNombre,
        
    })

    res.redirect('/juegos')
})
////////////////////////////////////////////////////////////////////////////////////////
//* Modificar-UPDATE juego
app.get('/juegos/modificar/:codigo', async (req, res) => {
    const idJuego = req.params.codigo

    const juego = await db.Juego.findOne({
        where : {
            id : idJuego
        }
    })

    res.render('juegos_update', {
        juego : juego
    })
})

app.post('/juegos/modificar', async (req, res) => {
    const idJuego = req.body.juego_id
    const nombre =req.body.juego_nombre


    const juego = await db.Juego.findOne({
        where : {
            id : idJuego
        }
    })
    
    juego.nombre_jue = nombre


    await juego.save()

    res.redirect('/juegos')

})
////////////////////////////////////////////////////////////////////////////////////////
//* Eliminar Juego
app.get('/juegos/eliminar/:codigo', async (req, res) => {
    const idJuego = req.params.codigo
    await db.Juego.destroy({
        where : {
            id : idJuego
        }
    })

    res.redirect('/juegos')
})
////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////
