'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
Route.get('/objetos', 'ObjetoController.index')
Route.get('/objetos/:id', 'ObjetoController.mostrar').middleware(['buscar'])
Route.post('/objetos', 'ObjetoController.guardar')
Route.post('/objetos/:id', 'ObjetoController.actualizar').middleware(['buscar'])
Route.delete('/objetos/:id','ObjetoController.borrar').middleware(['buscar'])