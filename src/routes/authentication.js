'use strict'

const express = require('express')
const passport = require('passport')
const {isLoggedIn,isNotLoggedIn} = require('../lib/auth')

const router = express.Router()


router.get('/signup',isNotLoggedIn, (req, res)=>{
    res.render('./auth/signup')
})

router.post('/signup',isNotLoggedIn, passport.authenticate('local.signup',{
    successRedirect: '/MenuPpal',
    failureRedirect: '/signup',
    failureFlash: true 
}))


router.get('/signin',isNotLoggedIn, (req, res)=>{
    res.render('./auth/signin')
})

router.post('/signin',isNotLoggedIn, (req,res,next)=>{ 
    passport.authenticate('local.signin', {
        successRedirect: '/MenuPpal',
        failureRedirect: '/signin',
        failureFlash: true 
    })(req, res, next)         
})

router.get('/MenuPpal',isLoggedIn, (req,res)=>{
    res.render('/MenuPpal')
})

router.get('/logout',isLoggedIn, (req, res)=>{
    req.logOut()
    res.redirect('/signin')
})
module.exports = router