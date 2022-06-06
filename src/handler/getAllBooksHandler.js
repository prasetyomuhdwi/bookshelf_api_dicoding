const booksModule = require('../books')

const getAllBooksHandler = (request, h) => {
  const { name, reading, finished } = request.query
  const response = h.response({
    status: 'success',
    data: { books: booksSimple(name, reading, finished) }
  })
  response.code(200)
  return response
}

const booksSimple = (name, reading, finished) => {
  let data = []

  if (name) {
    if (booksModule.length !== 0) {
      const pattern = new RegExp(name.replace(/"/g, ''), 'gim')
      for (const x of booksModule.keys()) {
        if (booksModule[x].name.search(pattern) > -1) {
          data[x] = {
            id: booksModule[x].id,
            name: booksModule[x].name,
            publisher: booksModule[x].publisher
          }
        }
      }
    } else {
      data = [null]
    }
  }

  if (reading) {
    if (booksModule.length !== 0) {
      for (const x of booksModule.keys()) {
        if (booksModule[x].reading === true) {
          if (parseInt(reading) === 1) {
            data[x] = {
              id: booksModule[x].id,
              name: booksModule[x].name,
              publisher: booksModule[x].publisher
            }
          }
        } else {
          if (parseInt(reading) === 0) {
            data[x] = {
              id: booksModule[x].id,
              name: booksModule[x].name,
              publisher: booksModule[x].publisher
            }
          }
        }
      }
    } else {
      data = [null]
    }
  }

  if (finished) {
    if (booksModule.length !== 0) {
      for (const x of booksModule.keys()) {
        if (booksModule[x].finished === true) {
          if (parseInt(finished) === 1) {
            data[x] = {
              id: booksModule[x].id,
              name: booksModule[x].name,
              publisher: booksModule[x].publisher
            }
          }
        } else {
          if (parseInt(finished) === 0) {
            data[x] = {
              id: booksModule[x].id,
              name: booksModule[x].name,
              publisher: booksModule[x].publisher
            }
          }
        }
      }
    } else {
      data = [null]
    }
  }

  if (!name && !reading && !finished) {
    if (booksModule.length !== 0) {
      for (const x of booksModule.keys()) {
        data[x] = {
          id: booksModule[x].id,
          name: booksModule[x].name,
          publisher: booksModule[x].publisher
        }
      }
    } else {
      data = [null]
    }
  }

  return data
}

module.exports = getAllBooksHandler
