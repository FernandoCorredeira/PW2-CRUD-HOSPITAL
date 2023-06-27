const express = require('express')
const especialidadesModel = require("../model/especialidadesModel")

const router = express.Router();

router.post('/especialidades/insert', (req,res)=>{
    let {nome_especialidade} = req.body

    especialidadesModel.create({
        nome_especialidade}
    ).then(()=>{
        return res.status(201).json({
            errorStatus: false,
            mensagenStatus:'Especialidade inserida!'
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

router.get('/especialidades/select', (req,res)=>{


    especialidadesModel.findAll().then((especialidades)=>{
        res.json(especialidades);
    }
    ).catch((error)=>{
        return res.status(500).json({
            errosStatus:true,
            mensagenStatus:error
        })
    }
    )

})

router.get('/especialidades/select:id', (req,res)=>{
    let {id} = req.params
    especialidadesModel.findByPK(id).then((especialidades)=>{
        res.json(especialidades)
    }).catch((error)=>{
        return res.status(500).json({
            errosStatus:true,
            mensagenStatus:error
        })
    }
    )

})

router.put('/especialidades/alter', (req,res)=>{
    let {nome_especialidade, id} = req.body


    especialidadesModel.update({
        nome_especialidade 
        },
    {where:{id}}
    ).then(()=>{
        return res.status(201).json({
            errorStatus: false,
            mensagenStatus:'Especialidade alterada!'
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

router.delete('/especialidades/delete/:id', (req,res)=>{
    let{id} = req.params


    especialidadesModel.destroy({
        where:{id}}
    ).then(()=>{
        return res.status(201).json({
            errorStatus: false,
            mensagenStatus:'Especialidade excluida!'
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

module.exports = router