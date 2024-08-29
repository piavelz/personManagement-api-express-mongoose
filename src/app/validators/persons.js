const mongoose = require('mongoose')
const personSchema = require('../models/persons')

//Valida el Id de person
const validatePersonId = async(req,res,next)=>{
    const id =req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id) ){
        return res
        .status(400)
        .send({message:'formato de ID persona no valido'})
    }

    const person = await personSchema.findById(id)
    if(!person){
        return res
        .status(404)
        .send({message:'No existen registros para personas con el ID indicado'})
    }

    next()
}



//valida el ID de work
const validateWorkId = async (req,res,next)=>{
    const workId =req.params.workId;
    if(!mongoose.Types.ObjectId.isValid(workId)){
        return res
        .status(400)
        .send({message:'formato de ID work no valido'})
    }

    const person = await personSchema.findById(req.params.id)
    const work = person.works.id(workId)
    if(!work){
        return res
        .status(404)
        .send({message:'La persona no registra trabajo con el ID indicado'})
    }
    
    next()
}



//Validara datos de entrada para crear un nuevo work

const validateNewWork = (req,res,next)=>{

    const {company, initContract,finishContract,position} = req.body

    if(!company || typeof company !== 'string'){
        return res
        .status(400)
        .send({message:'Compañia es requerida y debe ser tipo string'})
    }
    else if(!initContract || isNaN(Date.parse(initContract))){
        return res
        .status(400)
        .send({message:'inicio de contrato es requerido y debe ser tipo date'})
    }
    else if(!finishContract || isNaN(Date.parse(finishContract))){
        return res
        .status(400)
        .send({message:'Termino de contrato es requerido y debe ser tipo date'})
    }
    else if(!position || typeof company !== 'string'){
        return res
        .status(400)
        .send({message:'Posicion es requerida  y debe ser tipo string'})
    }
    
    next()
}


//Validara la actualizacion de personas
const validateUpdatePerson = (req,res,next)=>{
    
    const {name, lastName,works,nationality,year}= req.body
    if(name && typeof name !== 'string'){
        return res
        .status(400)
        .send({message:'El nombre debe ser tipo string'})
    }
    else if(lastName && typeof lastName !== 'string'){
        return res
        .status(400)
        .send({message:'El apellido debe ser tipo string'})
    }
    else if(works && !Array.isArray(works)){
        return res
        .status(400)
        .send({message:'Work debe ser tipo array'})
    }
    else if(nationality && typeof nationality !== 'string'){
        return res
        .status(400)
        .send({message:'La nacionaliodad debe ser tipo string'})
    }
    else if(year && (isNaN(Number(year)))|| typeof Number(year) !== 'number'){
        return res
        .status(400)
        .send({message:'El año debe ser tipo numerico'})
    }
    next()
}



//Valida Actualizar un trabajo

const validateUpdateWork = (req,res,next)=>{
    const {company, initContract,finishContract,position} = req.body

    if(company && typeof company !== 'string'){
        return res.status(400).send({message:'La compañia debe ser tipo string'})
    }
    else if(initContract && isNaN(Date.parse(initContract))){
        return res
        .status(400)
        .send({message:'inicio de contrato debe ser tipo date'})
    }
    else if(finishContract && isNaN(Date.parse(finishContract))){
        return res
        .status(400)
        .send({message:'Termino de contrato debe ser tipo date'})
    }
    else if(position && typeof position !== 'string'){
        return res
        .status(400)
        .send({message:'Posicion debe ser tipo string'})
    }

    next()
}


//Validara datos para crear nueva persona
const validateNewPerson = (req,res,next)=>{

    const {name, lastName,works,nationality,year}= req.body

    if(!name || typeof name !== 'string'){
        return res
        .status(400)
        .send({message:'El nombre es requerido y debe ser tipo string'})

    } else if(!lastName || typeof lastName !== 'string'){
        return res
        .status(400)
        .send({message:'El apellido es requerido y debe ser tipo string'})

    }else if(!nationality || typeof nationality !== 'string'){
        return res
        .status(400)
        .send({message:'La nacionaliodad es requerida y debe ser tipo string'})

    }else if(!year || typeof Number(year) !== 'number'){
        return res
        .status(400)
        .send({message:'El año es requerido y debe ser tipo numerico'})
    }



//*******************Validar works *******************/
    if(!Array.isArray(works)){
        return res
        .status(400)
        .send({message:'Works es un campo requerido y debe ser un array'})
    }

    works.forEach(work => {
        if(!work.company || typeof work.company !== 'string'){
            return res
            .status(400)
            .send({message:'Compañia es requerida y debe ser tipo string'})
        }
        else if(!work.initContract || isNaN(Date.parse(work.initContract))){
            return res
            .status(400)
            .send({message:'inicio de contrato es requerido y debe ser tipo date'})
        }
        else if(!work.finishContract || isNaN(Date.parse(work.finishContract))){
            return res
            .status(400)
            .send({message:'Termino de contrato es requerido y debe ser tipo date'})
        }
        else if(!work.position || typeof work.company !== 'string'){
            return res
            .status(400)
            .send({message:'Posicion es requerida  y debe ser tipo string'})
        }
    });

    next()
}






module.exports={validatePersonId, validateWorkId ,validateNewWork,validateNewPerson,validateUpdatePerson,validateUpdateWork}