import { Router } from 'express'
import * as ingredientCtrl from "../controllers/ingredients.js"
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/new', ingredientCtrl.new)

export {
  router
}