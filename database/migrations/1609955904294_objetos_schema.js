'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ObjetosSchema extends Schema {
  up () {
    this.create('objetos', (table) => {
      table.increments()
      table.string('nombre',50)
      table.string('descripcion',250)
      table.integer('cantidad')
      table.timestamps()
    })
  }

  down () {
    this.drop('objetos')
  }
}

module.exports = ObjetosSchema
