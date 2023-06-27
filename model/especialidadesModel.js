const sequelize  = require('sequelize');
const connection = require('../database/database');
const medicos = require('./medicosModel');


const especialidades = connection.define(
    'tbl_especialidade',{
        nome_especialidade:{
            type:sequelize.STRING(50),
            allowNull:false
        }

})
//especialidades.sync({force:true})
module.exports = especialidades