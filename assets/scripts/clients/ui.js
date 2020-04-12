'use strict'

// const store = require('./../store')
const showClientsTemplate = require('../templates/client-listing.handlebars')

const onCreateClientSuccess = function () {
  // $('#message').text(response.user.email + ' successfully created a client!')
  $('#client').trigger('reset')
  $('#message').removeClass()
  $('#message').addClass('success-message')
  $('#message').text('Climb created')
}
// $('#update-modal').modal('show')
// const onCreateClimbFailure

const onUpdateClientSuccess = function () {
  $('#clientUpdate').trigger('reset')
  $('#message').removeClass()
  $('#message').addClass('success-message')
}

const getClientsSuccess = (data) => {
  // console.log(data)
  $('.content').html('')
  const showClientsHtml = showClientsTemplate({ clients: data.clients })
  $('.content').append(showClientsHtml)
  $('#message').text('you have created a client')
  setTimeout(() => {
    $('#message').fadeOut()
  }, 1000)
}

const clearClients = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  onCreateClientSuccess,
  failure,
  clearClients,
  getClientsSuccess,
  onUpdateClientSuccess
}
