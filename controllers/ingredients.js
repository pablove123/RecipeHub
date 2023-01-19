import { Ingredient } from "../models/ingredient.js"

function newIngredient(req,res){
  res.render("ingredients/new", {
    title: "Add Ingredient"
  })
}
function create(req,res){
  req.body.owner = req.user.profile._id
  Ingredient.create(req.body)
  .then(ingredient =>{
    res.render("ingredients/new", {
      title: "Add Ingredient"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/recipes')
  })
}

function index(req,res){
  Ingredient.find({})
  .populate("owner")
  .then(ingredients=>{
    res.render("ingredients", {
      ingredients, 
      title: "All Ingredients"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/ingredients/new')
  })
}

function deleteIngredient(req,res){
  Ingredient.findByIdAndDelete(req.params.id)
  .then(ingredient =>{
    res.redirect("/ingredients")
  })
  .catch(err => {
    console.log(err)
    res.redirect('/ingredients')
  })
}



export {
  newIngredient as new, 
  create, 
  index, 
  deleteIngredient as delete, 
}