const express = require('express')
const explay = require('express-ejs-layouts')
const peop = require('body-parser')

var exp = express()
exp.use(explay)
exp.set('view engine', 'ejs')
exp.use(peop.urlencoded({
    extended: true
}))

exp.use(express.json())
exp.use(express.static('static'))
exp.use(peop.json())

exp.get('/', (req, res) =>{
    let result = {}
    res.render('index', result)
})

exp.get('/property', (req, res) =>{

    let result = {}
    res.render('property', result)

})

exp.get('/agents', (req, res) =>{
    let result = {}
    res.render('agents', result)
})

exp.get('/about', (req, res) =>{
    let result = {}
    res.render('about', result)
})

exp.get('/contact', (req, res) =>{
    let result = {}
    res.render('contact', result)
})

exp.post('/home', (req, res) =>{
    let result = {}
    let name = req.body.jina
    let locate = req.body.locate
    let heka = req.body.heka
    let sel01 = req.body.sel01
    let sel02 = req.body.sel02
    let phone = req.body.phone
    let email = req.body.email
    let bei = req.body.bei
    let nukta = req.body.nukta
    let blck = req.body.blck
    let plt = req.body.plt

    console.log(name+"\n"+locate);
})

exp.listen(5000, ()=>{
    console.log("Server listen at 5000");

})