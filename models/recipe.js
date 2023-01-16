import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
  owner: {type: Schema.Types.ObjectId, ref: "Profile", strictPopulate: false},
  comment: String, 
  rating: Number, 
})

const recipeSchema = new Schema({
  name: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  difficulty: {type: String,
    enum: ["Easy", "Medium", "Hard"]},
  time: Number, 
  cuisine: String,
  tasty: Boolean,
  ingredients: [{type: Schema.Types.ObjectId, ref: "Ingredient"}], 
  comments: [commentSchema]
}, {
  timestamps: true
})

const Recipe = mongoose.model('Recipe', recipeSchema)

export {
  Recipe
}