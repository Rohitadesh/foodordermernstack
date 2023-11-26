const express =require('express')
const route=express.Router()
const controller=require('../controllers/controller')
// route.use(express.json());
route.post('/soup',controller.food_postsoup)

route.get('/soup',controller.food_getsoup)

route.post('/roti',controller.food_postroti)

route.get('/roti',controller.food_getroti)

route.post('/rice',controller.food_postrice)

route.get('/rice',controller.food_getrice)

route.post('/starter',controller.food_poststarter)

route.get('/starter',controller.food_getstarter)

route.post('/dessert',controller.food_postdessert)

route.get('/dessert',controller.food_getdessert)

route.post('/juice',controller.food_postjuice)

route.get('/juice',controller.food_getjuice)

route.post('/icecream',controller.food_posticecream)

route.get('/icecream',controller.food_geticecream)

route.post('/maincourse',controller.food_postmaincourse)

route.get('/maincourse',controller.food_getmaincourse)

route.post('/register',controller.food_register)

route.post('/login',controller.food_login)

module.exports=route