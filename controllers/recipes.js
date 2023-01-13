import { Recipe } from "../models/recipe.js"

function newMovie(req,res){
  res.render("recipes/new", {
    title: "Add Recipe"
  })
}

export {
  newMovie as new
}