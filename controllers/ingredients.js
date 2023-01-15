import { Ingredient } from "../models/ingredient.js"

function newIngredient(req,res){
  res.render("ingredients/new", {
    title: "Add Ingredient"
  })
}
function create(req,res){
  Ingredient.create(req.body)
  .then(ingredient =>{
    res.render("ingredients/new", {
      ingredient:ingredient, 
      title: "Add Ingredient"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/recipes')
  })
}

export {
  newIngredient as new, 
  create
}