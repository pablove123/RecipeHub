import { Recipe } from "../models/recipe.js"

function newIngredient(req,res){
  res.render("ingredients/new", {
    title: "Add Ingredient"
  })
}

export {
  newIngredient as new 
}