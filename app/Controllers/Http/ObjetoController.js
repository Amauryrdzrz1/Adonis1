'use strict'
const objeto = use('App/Models/objeto')
const { validate } = use('Validator')

class ObjetoController{
    async index ({ response }){
        const cosa = await objeto.all()
        response.json({
            message: 'Estos son los objetos registrados',
            data: cosa 
        })
    }
 
    async guardar({request, response, session, params: {id}}){
        
        const validation = await validate(request.all(), {
            nombre: 'required',
            descripcion: 'required',
            cantidad: 'required'
        })

        if (validation.fails()) {
            session
            return validation.messages()
    
        }
      
        const cosa = new objeto()
        const { nombre, descripcion, cantidad} = request.post()
        cosa.nombre = nombre
        cosa.descripcion = descripcion
        cosa.cantidad = cantidad
        
        await cosa.save()

        response.json({
            message: 'Se ha agregado un nuevo objeto',
            data: cosa 
        })
    }
    //https://www.youtube.com/watch?v=C3T_TWpZFaY&list=PLoCq0WM_wHG-rFQEsShMQkgGcTO1Hmnvx&index=6
    async mostrar({request, response, params : {id}}){
        const cosa = request.post().cosa
        response.status(201).json({
            message: 'Este es el objeto que buscas',
            data: cosa
        })
    }

    async actualizar({request, response, session, params: {id}}){
        const validation = await validate(request.all(), {
            nombre: 'required',
            descripcion: 'required',
            cantidad: 'required'
        })

        if (validation.fails()) {
            session
            return validation.messages()
    
        }
        const cosa = request.post().cosa
        const {nombre, descripcion, cantidad} = request.post()
            
        cosa.nombre = nombre
        cosa.descripcion = descripcion
        cosa.cantidad = cantidad
            
        await cosa.save()

        response.status(201).json({
            message: 'Se ha actualizado el objeto con exito',
            data: cosa
        })
    }

    async borrar({response, params: {id}}){
        const cosa = request.post().cosa
        await cosa.delete()

        response.status(201).json({
            message: 'El objeto ha sido eliminado',
            id
        })
    }
}

module.exports = ObjetoController
