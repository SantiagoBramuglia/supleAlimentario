'use strict'
/*
Aca se muestran los resultados
*/
const express = require('express')
const pool = require ('../database') // Conecxion a la db
const {isLoggedIn} = require('../lib/auth')
const router = express.Router()

router.get('/',isLoggedIn ,async (req,res)=>{
    const resultados = await pool.query('SELECT * FROM resultados')
    res.render('Yougurt/Nombre', {resultados})
})

router.get('/Nombre/:Nombre',isLoggedIn ,async (req,res)=>{

    const Nombre = await pool.query('SELECT * FROM resultados WHERE Nombre = ?',[req.params.Nombre])

    let resultadosNombre = { 
        Comedor: 0,
        Nombre: 0,
        altura:0,
        peso: 0,
        edad: 0,
        CantYougurt: 0,
        Cintura: 0,
        FechaNacimiento: 0
    
      }
    res.render('Yougurt/NombresPersonal', {resultadosNombre: Nombre[0]})
})


module.exports = router