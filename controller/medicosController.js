const express = require('express')
const medicosModel = require("../model/medicosModel")
const upload = require('../helps/upload/upload')
const router = express.Router();

router.post('/medicos/insert', upload.array('foto_medico', 1), (req,res)=>{
    let {nome_medico, 
        email_medico, 
        telefone_medico, 
        celular_medico,
        tblEspecialidadeId} = req.body

        let foto_medico = req.files[0].path;
    

    medicosModel.create({
        nome_medico,
        email_medico, 
        telefone_medico, 
        celular_medico, 
        foto_medico,
        tblEspecialidadeId}
    ).then(()=>{
        return res.status(201).json({
            errorStatus: false,
            mensagenStatus:'Medico inserido!'
        })
    }
    ).catch((error)=>{
        return res.status(500).json({
            errosStatus:true,
            mensagenStatus:error
        })
    }
    )

})

router.get('/medicos/select', (req,res)=>{


    medicosModel.findAll().then(
        (medicos)=>{
            res.json(medicos);
        }
    ).catch((error)=>{
        return res.status(500).json({
            errosStatus:true,
            mensagenStatus:error
        })
    }
    )

})

router.get('/medicos/select:id', (req,res)=>{
    let {id} = req.params
    medicosModel.findByPK({id}).then(
        (medico)=>{
            res.json(medico);
        }).catch((error)=>{
        return res.status(500).json({
            errosStatus:true,
            mensagenStatus:error
        })
    }
    )

})

router.put('/medicos/alter', (req,res)=>{
    let {nome_medico, 
        email_medico, 
        telefone_medico, 
        celular_medico, 
        foto_medico,
        tblEspecialidadeId, 
        id} = req.body


    medicosModel.update({
        nome_medico,
        email_medico, 
        telefone_medico, 
        celular_medico, 
        foto_medico,
        tblEspecialidadeId},
    {where:{id}}
    ).then(()=>{
        return res.status(201).json({
            errorStatus: false,
            mensagenStatus:'Medico alterado!'
        })
    }
    ).catch((error)=>{
        return res.status(500).json({
            errosStatus:true,
            mensagenStatus:error
        })
    }
    )

})

router.delete('/medicos/delete/:id', (req,res)=>{
    let{id} = req.params


    medicosModel.destroy({
        where:{id}}
    ).then(()=>{
        return res.status(200).json({
            errorStatus: false,
            mensagenStatus:'Medico excluido!'
        })
    }
    ).catch((error)=>{
        return res.status(500).json({
            errosStatus:true,
            mensagenStatus:error
        })
    }
    )

})


module.exports = router;