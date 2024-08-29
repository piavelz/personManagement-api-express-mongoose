const personSchema = require('../models/persons') //para acceder al modelo :P


//1-Listar todas las personas
const getItems = async (req,res) => {
    try{
        const persons = await personSchema.find()
        res
        .status(200)
        .send({data:persons})
    }catch(error){
        res
        .status(500)
        .send({message:'Error',error})
    }
}

//2-Obtener una persona especifica por id
const getItem = async (req,res) => {
    try{
        const person = await personSchema.findById(req.params.id)
        res
        .status(200)
        .send({data:person})
    }catch(error){
        res
        .status(500)
        .send({message:'Error al buscar persona por id', error})
    }

}

//3-Crear una nueva persona
const createItem = async (req,res) => {
    try{
        const person = new personSchema(req.body)
        await person.save()
        res.status(201)
        .send({message:'Persona ingresada correctamente',data:person})
    }catch (error){
        res.status(500)
        .send({message:'Error al crear persona', error})
    }

}


//4-actualizar una persona existente
const updateItem = async (req,res)=> {
    try{
        const id = req.params.id
        const {name, lastName, works, nationality, year} = req.body
        const person = await personSchema.updateOne({_id:id}, {$set:{name, lastName, works, nationality, year}})
        res.status(200)
        .send({message:'Se ha modificado con exito', data:person})
    }catch(error){
        res.status(500)
        .send({message:'Error al actualizar', error})
    }
}


//5-eliminar a una persona
const deleteItem = async (req,res) => {
    try{
        const id = req.params.id
        const person = await personSchema.deleteOne({ _id:id })
        res.status(200)
        .send({message:'Persona eliminada correctamente'})
    }catch(error){
        res.status(500)
        .send({message:'Error al eliminar'})
    }

}

//6-Listar todos los trabajos de una persona
const getWorks = async (req,res) => { 
    try{
        const id = req.params.id
        const result = await personSchema.find({_id:id},{_id:0,works:1})
        const works = result.length>0 && result[0].works.length> 0 ? result[0].works: null
        res.status(200)
        .send({message:'Trabajos encontrados:',data:works})
    }catch(error){
        res.status(500)
        .send({message:'Error al buscar trabajos',error})
    }
}



//7-agregar un nuevo trabajo a una persona
const addWork = async (req,res) => { 
    try{
        const id = req.params.id
        const newWork = {
            company: req.body.company,
            initContract: req.body.initContract,
            finishContract: req.body.finishContract,
            position: req.body.position
        }
        await personSchema.findByIdAndUpdate(id, {$push: {works:newWork}}, {new:true})
        res.status(201)
        .send({message:'Nuevo trabajo ingresado correctamente', data:newWork})
    }catch(error){
        res.status(500)
        .send({message:'Error al ingresar un nuevo trabajo',error})
    }
}



//8-Actualizar un trabajo especifico
const updateWork = async (req,res) => { 
    try{
        const person = await personSchema.findById(req.params.id)
        const work = person.works.id(req.params.workId)

        //verifica los datos del array que deberian actualizarce y cuales no
        if(req.body.company !== undefined){ work.company = req.body.company }
        if(req.body.initContract !== undefined){ work.initContract = req.body.initContract }
        if(req.body.finishContract !== undefined){ work.finishContract= req.body.finishContract }
        if(req.body.position !== undefined){ work.position= req.body.position }
        await person.save()

        res.status(200)
        .send({message:'Trabajo actualizado correctamente', data:work})
    }catch(error){
        res.status(500)
        .send({message:'Error al actualizar trabajo', error})
    }
}


//9-Eliminar un trabajo especifico
const deleteWork = async (req,res) => { 
    try{
        const person = await personSchema.findById(req.params.id)
        person.works.pull(req.params.workId)
        person.save()
        res.status(200)
        .send({message:'Trabajo eliminado correctamente', data:person})
    }catch(error){
        res.status(500)
        .send({message:'Error al eliminar trabajo',error})
    }
}




module.exports = {getItem, getItems, createItem, updateItem, deleteItem, getWorks, addWork, updateWork, deleteWork}