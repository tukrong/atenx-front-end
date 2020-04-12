'use strict'
const authEvents = require('./auth/events')
const clientEvents = require('./clients/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#client').on('submit', clientEvents.onCreateClient)
  $('#clientUpdate').on('submit', clientEvents.onUpdateClient)
  $('#change-password').hide()
  $('#client').hide()
  $('#clientUpdate').hide()
  $('#clientsButtonHide').hide()
  $('#sign-out').hide()
  // $('#climb-form').on('submit', clientEvents.onUpdateClient)
  // $('#update-modal').hide()
  // $('#updateClimb').on('submit', clientEvents.onUpdateClient)
  clientEvents.addHandlers()
})
