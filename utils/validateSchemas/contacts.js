const Joi = require('joi')
const contactCreateSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().min(10).max(30).required(),
  phone: Joi.string().min(2).required(),
})
const contactUpdateSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().min(10).max(30).required(),
  phone: Joi.string().min(2).required(),
}).min(1)

module.exports = {
  contactCreateSchema,
  contactUpdateSchema,
}
