const booksModule = require('../books')

const getBookByIdHandler = (request, h) => {
  const { id } = request.params

  const book = booksModule.filter((book) => book.id === id)[0]

  if (book) {
    return {
      status: 'success',
      data: {
        book
      }
    }
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan'
  })
  response.code(404)
  return response
}

module.exports = getBookByIdHandler
