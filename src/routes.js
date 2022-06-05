const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler
} = require('./handler')

const routes = [
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler
  },
  {
    method: 'GET',
    path: '/hello/{name?}',
    handler: (request, h) => {
      const { name = 'stranger' } = request.params
      const { lang } = request.query

      if (lang === 'id') {
        return `Hai, ${name}!`
      }
      return `Hello, ${name}!`
    }
  },

  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler
  },

  {
    method: 'POST',
    path: '/login',
    handler: (request, h) => {
      const { username, password } = request.payload
      return `Welcome ${username} pass ${password}!`
    }
  },

  {
    method: 'PUT',
    path: '/books/{id}',
    handler: (request, h) => {
      const { id } = request.params
      return `book put ${id}`
    }
  },

  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: (request, h) => {
      const { id } = request.params
      return `book delete ${id}`
    }
  }
]

module.exports = routes
