import { Router } from 'express'
import * as ingredientCtrl from "../controllers/ingredients.js"
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', ingredientCtrl.index)
router.get('/new', ingredientCtrl.new)
router.post('/', isLoggedIn,  ingredientCtrl.create)
router.delete('/:id',isLoggedIn, ingredientCtrl.delete)

export {
  router
}