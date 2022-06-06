const booksModule = require('../books')

const getAllBooksHandler = () => ({
  status: 'success',
  data: { books: booksSimple() }
})

const booksSimple = () => {
  const data = []
  for (const x of booksModule.keys()) {
    data[x] = {
      id: booksModule[x].id,
      name: booksModule[x].name,
      publisher: booksModule[x].publisher
    }
  }
  return data
}

module.exports = getAllBooksHandler
