import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ingredientSchema = new Schema({
  name: String, 
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true
})

const Ingredient = mongoose.model('Ingredient', ingredientSchema)

export {
  Ingredient
}