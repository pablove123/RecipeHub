import { Router } from 'express'
import * as recipeCtrl from "../controllers/recipes.js"

const router = Router()

router.get('/', recipeCtrl.index)
router.get('/new', recipeCtrl.new)
router.get('/:id', recipeCtrl.show)
router.get('/:id/edit', recipeCtrl.edit)
router.post("/", recipeCtrl.create)
router.put("/:id", recipeCtrl.update)
router.delete("/:id", recipeCtrl.delete)

export {
  router
}