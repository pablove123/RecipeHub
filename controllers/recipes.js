import { Recipe } from "../models/recipe.js"

function newMovie(req,res){
  res.render("recipes/new", {
    title: "Add Recipe"
  })
}

function create(req,res){
  req.body.tasty = !!req.body.tasty
  Recipe.create(req.body)
  .then(recipe=>{
    res.redirect("/recipes/new")
  })
  .catch(err => {
    console.log(err)
    res.redirect('/recipes/new')
  })
}

function index(req,res){
  Recipe.find({})
  .then(recipes=>{
    res.render("recipes", {
      recipes, 
      title: "All Recipes"
    })
  })
}

export {
  newMovie as new, 
  create, 
  index
}