import { Router } from 'express'
import * as recipeCtrl from "../controllers/recipes.js"
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', recipeCtrl.index)
router.get('/log', recipeCtrl.log)
router.get('/new',isLoggedIn, recipeCtrl.new)
router.get('/:id', recipeCtrl.show)
router.get('/:id/edit', isLoggedIn, recipeCtrl.edit)
router.post("/", recipeCtrl.create)
router.post("/:id/comments", isLoggedIn, recipeCtrl.createComment)
router.post("/:id/steps",isLoggedIn, recipeCtrl.addStep)
router.post("/:id/ingredients", isLoggedIn, recipeCtrl.addIngredient)
router.put("/:id", isLoggedIn, recipeCtrl.update)
router.delete("/:id",isLoggedIn, recipeCtrl.delete)
router.delete("/:recipeId/ingredients/:ingredientId", isLoggedIn, recipeCtrl.deleteIngredient)

export {
  router
}