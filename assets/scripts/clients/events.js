'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateClient = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.createClient(data)
    .then(ui.onCreateClientSuccess)
    .then(function () {
      onGetClients(event)
    })
    .catch(ui.onCreateClientFailure)
}

const onUpdateClient = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.updateClient(data)
    .then(ui.onUpdateClientSuccess)
    .then(function () {
      onGetClients(event)
    })
    .catch(ui.onUpdateClientFailure)
}

const onGetClients = (event) => {
  event.preventDefault()
  api.getClients()
    .then(ui.getClientsSuccess)
    .catch(ui.getClientsfailure)
}

const onClearClients = (event) => {
  event.preventDefault()
  ui.clearClients()
}
const onRemoveClients = (event) => {
  const id = $(event.target).data('id')
  // console.log($(event.target))
  api.removeClients(id)
    .then(function () {
      onGetClients(event)
    })
    .catch(ui.failure)
}

// const showUpdateForm = (event) => {
//   event.preventDefault()
//   $('#update-modal').modal('show')
// }

const addHandlers = () => {
  $('#getClientsButton').on('click', onGetClients)
  $('#clearClientsButton').on('click', onClearClients)
  $('.content').on('click', '.remove-client', onRemoveClients)
  // $('.content').on('click', '.update-climb', showUpdateForm)
}
module.exports = {
  onCreateClient,
  onUpdateClient,
  addHandlers
}
