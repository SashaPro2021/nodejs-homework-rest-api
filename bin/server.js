const app = require('../app')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

const { DB_HOST } = process.env

mongoose.connect(DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true

}).then(() => {
  app.listen(PORT, () => {
    console.log('Database connection successful')
  })
})
