'use strict'

/*
Aca se muestran los datos a actualizar 
*/
const express = require('express')
const pool = require ('../database') // Conecxion a la db
const {isLoggedIn} = require('../lib/auth')
const router = express.Router()

router.get('/Nombre',isLoggedIn ,async (req,res)=>{
    const resultados = await pool.query('SELECT * FROM resultados')
    res.render('Yougurt/Nombre', {resultados})
})

router.get('/Nombre/:Nombre',isLoggedIn,async (req,res)=>{
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
    const Nombre = await pool.query('SELECT * FROM resultados WHERE Nombre = ?',[req.params.Nombre])
    res.render('Yougurt/update', {resultadosNombre: Nombre[0]})
})

router.get('/Nombre/:Nombre',isLoggedIn,async (req,res)=>{
    const newActa = {

            altura,
            peso,
            edad,
            FechaNacimiento,
            Cintura,
            CantYougurt
    }    
    

        await pool.query('UPDATE INTO resultados set ? WHERE Nombre = ', [newActa] ,[req.params.Nombre] )  
        req.flash('exitoso','Datos Ingresados correctamente');
        res.redirect('/resultados')
    
})
module.exports = router