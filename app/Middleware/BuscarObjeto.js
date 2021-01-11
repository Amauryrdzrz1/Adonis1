'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Objeto = use('App/Models/Objeto')
class BuscarObjeto {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response, params: {id} }, next) {
    const cosa = await Objeto.find(id)
    if(!cosa){
      return response.status(404).json({
        message: 'No se encontro el objeto',
        id 
      })
    }

    request.body.cosa = cosa
    await next()
  }
}

module.exports = BuscarObjeto
