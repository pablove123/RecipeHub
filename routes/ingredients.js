import { Router } from 'express'
import * as ingredientCtrl from "../controllers/ingredients.js"
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', ingredientCtrl.index)
router.get('/new', ingredientCtrl.new)
router.post('/', ingredientCtrl.create)
router.delete('/:id', ingredientCtrl.delete)

export {
  router
}