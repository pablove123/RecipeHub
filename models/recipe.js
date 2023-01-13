import mongoose from 'mongoose'

const Schema = mongoose.Schema

const recipeSchema = new Schema({
  name: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  Difficulty: String,
  Time: String, 
  Cuisine: String,
  Tasty: Boolean,
  Ingredients: [{type: Schema.Types.ObjectId, ref: "Profile"}], 
  // comments: [commentSchema]
}, {
  timestamps: true
})

const Recipe = mongoose.model('Recipe', recipeSchema)

export {
  Recipe
}