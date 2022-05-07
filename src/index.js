'use strict'

const express = require ('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const path = require('path')
const flash = require('connect-flash')
const session = require('express-session')
const mysqlStore = require('express-mysql-session')
const {database} = require('../src/keys')
const passport = require('passport')
const validator = require('express-validator');

//Inicializadores
const app = express()
require('./lib/passport')

//Setting
app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views' ))
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}))
app.set('view engine', '.hbs')


//Middlewares
app.use(session({
    secret: 'PruebaConceptoRecuento',
    resave: false,
    saveUninitialized: false,
    store: new mysqlStore(database)
}))
app.use(flash())
app.use(morgan('dev'))
app.use(express.urlencoded({extends: false}))
app.use(express.json())
app.use(passport.initialize())
app.use(passport.session())


//Variables Globales
app.use((req,res, next)=>{
    app.locals.exitoso =  req.flash('exitoso')
    app.locals.message =  req.flash('message')
    app.locals.user = req.user
    next()
})

//Routes
app.use(require('./routes'))
app.use('/Ingreso', require('./routes/Yougurt'))
app.use('/Resultados', require('./routes/resultados'))
app.use('/MenuPpal', require('./routes/MenuPpal'))

app.use('/resultado', require('./routes/Nombres'))
app.use('/Update', require('./routes/Nombres'))

app.use(require('./routes/authentication'))




//Archivos Publicos
app.use(express.static(path.join(__dirname, 'public')))

//Starting server

app.listen(app.get('port'), () => {
    console.log('Servidor en puerto', app.get('port'))
})