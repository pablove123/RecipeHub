import { Router } from 'express'
import * as recipeCtrl from "../controllers/recipes.js"

const router = Router()

router.get('/', recipeCtrl.index)
router.get('/new', recipeCtrl.new)
router.post("/", recipeCtrl.create)

export {
  router
}