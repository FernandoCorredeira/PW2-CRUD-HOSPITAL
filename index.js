const express = require('express');

const app = express();

app.use(express.json());


app.use(express.urlencoded({extended:true}));

const medicosController = require('./controller/medicosController')
app.use('/', medicosController)

const especialidadesController = require('./controller/especialidadesController')
app.use('/', especialidadesController)

app.listen(3000,()=>{
    console.log("Aplicação rodando em localhost3000")
})