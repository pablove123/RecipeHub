import { Router } from 'express'
import * as recipeCtrl from "../controllers/recipes.js"
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', recipeCtrl.index)
router.get('/log', recipeCtrl.log)
router.get('/new',isLoggedIn, recipeCtrl.new)
router.get('/:id', recipeCtrl.show)
router.get('/:id/edit', recipeCtrl.edit)
router.post("/", recipeCtrl.create)
router.post("/:id/comment", recipeCtrl.createComment)
router.post("/:id/ingredients", recipeCtrl.addIngredient)
router.put("/:id", isLoggedIn, recipeCtrl.update)
router.delete("/:id",recipeCtrl.delete)
router.delete("/:recipeId/ingredients/:ingredientId",recipeCtrl.deleteIngredient)

export {
  router
}