'use strict'

const express = require('express')
const pool = require ('../database') // Conecxion a la db
const {isLoggedIn} = require('../lib/auth')
const router = express.Router()

router.get('/add',isLoggedIn,(req,res)=>{
    res.render('Yougurt/add')
})

router.post('/add',isLoggedIn,async (req,res)=>{
    
    const { Comedor,
            Nombre,
            altura,
            peso,
            edad,
            FechaNacimiento,
            Cintura,
            CantYougurt
           }  = req.body

    const newActa = {
            
            Comedor,
            Nombre,
            altura,
            peso,
            edad,
            FechaNacimiento,
            Cintura,
            CantYougurt
    }    
    
        await pool.query('INSERT INTO resultados set ?', [newActa] )  
        req.flash('exitoso','Datos Ingresados correctamente');
        res.redirect('/resultados')
    
})


module.exports = router