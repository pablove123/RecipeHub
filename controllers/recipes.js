import { Recipe } from "../models/recipe.js"

function newMovie(req,res){
  res.render("recipes/new", {
    title: "Add Recipe"
  })
}

function create(req,res){
  req.body.tasty = !!req.body.tasty
  Recipe.create(req.body)
  .then(recipe =>{
    res.redirect("/recipes")
  })
  .catch(err => {
    console.log(err)
    res.redirect('/recipes')
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
  .catch(err => {
    console.log(err)
    res.redirect('/recipes/new')
  })
}

function show(req,res){
  Recipe.findById(req.params.id)
  .then(recipe=>{
    res.render("recipes/show",{ 
    recipe, 
    title: "Recipe Details"
  })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/recipes/new')
  })
}

function edit(req,res){
  Recipe.findById(req.params.id)
  .then(recipe=>{
    res.render(`recipes/edit`, {
      recipe,
      title: "Edit Movie"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/recipes/new')
  })
}

function update(req,res){
  req.body.tasty = !!req.body.tasty
  Recipe.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(recipe =>{
    res.redirect(`/recipes/${recipe._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/recipes/new')
  })
}

function deleteRecipe(req,res){
  Recipe.findByIdAndDelete(req.params.id)
  .then(recipe =>{
    res.redirect("/recipes")
  })
  .catch(err => {
    console.log(err)
    res.redirect('/recipes')
  })
}

function createComment(req,res){
  Recipe.findById(req.params.id)
  .then(recipe =>{
    recipe.comments.push(req.body)
    recipe.save()
    .then(()=>{
      res.redirect(`/recipes/${recipe._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/recipes')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/recipes')
  })
}

export {
  newMovie as new, 
  create, 
  index, 
  show, 
  edit, 
  update, 
  deleteRecipe as delete,
  createComment
}