const nanoidModule = require('nanoid')
const booksModule = require('../books')

const addBookHandler = (request, h) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading
  } = request.payload

  const id = nanoidModule.nanoid(16)
  const insertedAt = new Date().toISOString()
  const updatedAt = insertedAt
  let finished = false

  /** Check Error for :
   *  * name is empty/null/undefined
   *  * readPage greater than pageCount
   **/

  if (!name) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku'
    })
    response.code(400)
    return response
  }

  if (readPage > pageCount) {
    const response = h.response({
      status: 'fail',
      message:
        'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'
    })
    response.code(400)
    return response
  }

  if (pageCount === readPage) {
    finished = true
  } else {
    finished = false
  }

  const newbook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    finished,
    insertedAt,
    updatedAt
  }

  booksModule.push(newbook)

  const isSuccess = booksModule.filter((book) => book.id === id).length > 0

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id
      }
    })
    response.code(201)
    return response
  } else {
    const response = h.response({
      status: 'error',
      message: 'Buku gagal ditambahkan'
    })
    response.code(500)
    return response
  }
}

module.exports = addBookHandler
