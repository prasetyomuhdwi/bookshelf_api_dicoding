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

const filterData = (arrays, criteria) => {
  return arrays.filter(function (obj) {
    return Object.keys(criteria).every(function (c) {
      return new RegExp(criteria[c]).test(obj[c])
    })
  })
}

const SelectedData = (arrays, criteria, field) => {
  const filtered = filterData(arrays, criteria)

  const dataValues = filtered.map((val) => field.map((values) => val[values]))

  const dataKeys = filtered.map((val) => field.filter((key) => val[key]))

  let i

  let tmp = {}
  const result = []

  for (i = 0; i < dataValues.length; i++) {
    tmp = {
      [dataKeys[i][0]]: dataValues[i][0],
      [dataKeys[i][1]]: dataValues[i][1],
      [dataKeys[i][2]]: dataValues[i][2]
    }
    result.push(tmp)
  }

  return result
}

const booksSimple = (name, reading, finished) => {
  let data = []

  if (name) {
    if (booksModule.length !== 0) {
      const pattern = new RegExp(name.replace(/"/g, ''), 'gim')
      data = SelectedData(booksModule, { name: pattern }, [
        'id',
        'name',
        'publisher'
      ])
    } else {
      data = [null]
    }
  }

  if (reading) {
    if (booksModule.length !== 0) {
      if (parseInt(reading) === 1) {
        data = SelectedData(booksModule, { reading: true }, [
          'id',
          'name',
          'publisher'
        ])
      } else {
        data = SelectedData(booksModule, { reading: false }, [
          'id',
          'name',
          'publisher'
        ])
      }
    } else {
      data = [null]
    }
  }

  if (finished) {
    if (booksModule.length !== 0) {
      if (parseInt(finished) === 1) {
        data = SelectedData(booksModule, { finished: true }, [
          'id',
          'name',
          'publisher'
        ])
      } else {
        data = SelectedData(booksModule, { finished: false }, [
          'id',
          'name',
          'publisher'
        ])
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
