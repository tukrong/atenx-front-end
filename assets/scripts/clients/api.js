'use strict'
const store = require('./../store')
const config = require('./../config')

const createClient = function (data) {
  return $.ajax({
    url: config.apiUrl + '/clients',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const updateClient = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/clients/' + data.client.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const getClients = function () {
  return $.ajax({
    url: config.apiUrl + '/clients',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'GET'
  })
}

const removeClients = function (id) {
  return $.ajax({
    url: `${config.apiUrl}/clients/${id}`,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'DELETE'
  })
}

module.exports = {
  createClient,
  updateClient,
  getClients,
  removeClients

}
