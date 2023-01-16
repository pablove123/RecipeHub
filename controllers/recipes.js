import { Recipe } from "../models/recipe.js"

function newRecipe(req,res){
  res.render("recipes/new", {
    title: "Add Recipe"
  })
}

function create(req,res){
  req.body.owner = req.user.profile._id
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
  .populate("owner")
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
function update(req, res) {
  Recipe.findById(req.params.id)
  .then(recipe => {
    if (recipe.owner.equals(req.user.profile._id)) {
      req.body.tasty = !!req.body.tasty
      recipe.updateOne(req.body)
      .then(()=> {
        res.redirect(`/recipe/${recipe._id}`)
      })
    } else {
      res.redirect("/recipes")
    }
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
  newRecipe as new, 
  create, 
  index, 
  show, 
  edit, 
  update, 
  deleteRecipe as delete,
  createComment
}