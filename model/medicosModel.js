const sequelize  = require('sequelize');
const connection = require('../database/database');
const especialidades = require('./especialidadesModel');

const medicos = connection.define(
    'tbl_medico',
    {
        nome_medico:{
            type:sequelize.STRING(500),
            allowNull:false
        },
        email_medico:{
            type:sequelize.STRING(100),
            allowNull:false
        },
        telefone_medico:{
            type:sequelize.STRING(10),
            allowNull:false
        },
        celular_medico:{
            type:sequelize.STRING(11),
            allowNull:false
        },
        foto_medico:{
            type:sequelize.STRING(500),
            allowNull:false
        }
    }
)

especialidades.hasMany(medicos);

medicos.belongsTo(especialidades)

//medicos.sync({force:true})

module.exports = medicos;