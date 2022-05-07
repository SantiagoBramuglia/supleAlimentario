'use strict'

const express = require('express')
const pool = require ('../database') // Conecxion a la db
const {isLoggedIn} = require('../lib/auth')
const router = express.Router()

router.get('/',isLoggedIn, (req,res)=>{
    res.render('Yougurt/MenuPpal')
})


module.exports = router