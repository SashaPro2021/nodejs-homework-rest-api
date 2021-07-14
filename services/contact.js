const { Contact } = require('../models')

const getAll = (query) => {
  const { limit = 10, offset = 2, sortBy, sortByDesc, filter } = query
  const data = Contact.paginate({}, {
    limit,
    offset,
    sort: {
      ...(sortBy ? { [`${sortBy}`]: 1 } : {}),
      ...(sortByDesc ? { [`${sortByDesc}`]: -1 } : {})
    },
    select: filter ? filter.split('|').join(' ') : '',
  })
  // const { docs: contacts, totalDocs: total } = data
  // return { contacts, total, limit: Number(limit), offset: Number(offset) }
  return data
}

const getOne = (filter) => {
  return Contact.findOne(filter)
}

const add = (newContact) => {
  return Contact.create(newContact)
}

const del = (id) => {
  return Contact.findByIdAndDelete(id)
}

const update = (id, body) => {
  return Contact.findByIdAndUpdate(id, body)
}

const updateFavorite = (id, favorite) => {
  return Contact.findByIdAndUpdate(id, { favorite })
}

module.exports = {
  getAll,
  getOne,
  add,
  del,
  update,
  updateFavorite
}
/*
http://localhost:3000/api/contacts/?limit=2&offset=3
http://localhost:3000/api/contacts/?sortByDesc*name
http://localhost:3000/api/contacts/?select*favorite=true
offset = limit * кол-во страниц
sortBy - сортировка по возрастанию
sortByDesc - сортировка по убыванию
*/
