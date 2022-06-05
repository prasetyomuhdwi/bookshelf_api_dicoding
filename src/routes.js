const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler
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
    handler: editBookByIdHandler
  },

  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler
  }
]

module.exports = routes
