const fs = require('fs').promises
const contactsPath = require('./contactPath')

const writeContacts = async (newContacts) => {
  const contactsStr = JSON.stringify(newContacts)
  await fs.writeFile(contactsPath, contactsStr)
}
module.exports = writeContacts
