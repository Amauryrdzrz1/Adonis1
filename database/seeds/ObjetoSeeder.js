'use strict'

/*
|--------------------------------------------------------------------------
| ObjetoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use ('Factory')
const Database = use('Database')

class ObjetoSeeder {
  async run () {
    const objetos = await Factory.model('App/Models/Objeto').createMany(5)
    console.log(objetos)
  }
}

module.exports = ObjetoSeeder
