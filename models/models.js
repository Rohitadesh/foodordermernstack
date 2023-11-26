const { db }=require('../config/config') 

async function post_soup_data(data){
    let food = db.collection('menus')
    let result= await food.insertMany(data)
    // console.log(data);
    return result
}
async function get_soup_data(){
    let food=db.collection('menus')
    let result= await food.find({soup_image:{$regex:/data/}})
    return result.toArray()

}

async function post_roti_data(roti_data){
    let food=db.collection('menus')
    let result_roti= await food.insertMany(roti_data)
    return result_roti
}

async function get_roti_data(){
    let food=db.collection('menus')
    let result_roti= await food.find({roti_images:{$regex:/data/}})
    return result_roti.toArray()

}

async function post_rice_data(rice_data){
    let food=db.collection('menus')
    let result_rice=await food.insertMany(rice_data)
    return result_rice
}

async function get_rice_data(){
    let food=db.collection('menus')
    let result_rice= await food.find({rice_image:{$regex:/data/}})
    return result_rice.toArray()

}
async function post_starter_data(starter_data){
    let food=db.collection('menus')
    let result_starter=await food.insertMany(starter_data)
    return result_starter
}
async function get_starter_data(){
    let food=db.collection('menus')
    let result_starter= await food.find({starter_image:{$regex:/data/}})
    return result_starter.toArray()

}
async function post_dessert_data(dessert_data){
    let food=db.collection('menus')
    let result_dessert=await food.insertMany(dessert_data)
    return result_dessert
}
async function get_dessert_data(){
    let food=db.collection('menus')
    let result= await food.find({dessert_image:{$regex:/data/}})
    return result.toArray()

}

async function post_juice_data(juice_data){
    let food=db.collection('menus')
    let result_juice= await food.insertMany(juice_data)
    return result_juice 
}


async function get_juice_data (){
    let food=db.collection('menus')
    let get_result_juice = await food.find({juice_image:{$regex:/data/}})
    return get_result_juice.toArray()
}


async function post_icecream_data(icecream_data){
    let food=db.collection('menus')
    let result_icecream= await food.insertMany(icecream_data)
    return result_icecream 
}


async function get_icecream_data (){
    let food=db.collection('menus')
    let get_result_icecream =await food.find({icecream_image:{$regex:/data/}})
    return get_result_icecream.toArray()
}

async function post_maincourse_data(maincourse_data){
    let food=db.collection('menus')
    let result_maincourse= await food.insertMany(maincourse_data)
    return result_maincourse
}


async function get_maincourse_data (){
    let food=db.collection('menus')
    let get_result_maincourse =await food.find({main_image:{$regex:/data/}})

    return get_result_maincourse.toArray()
}
async function post_register(register_data){
    let register =db.collection('register')
    let register_result= await register.insertOne(register_data)
    return register_result

}

async function post_login(input_data){
    // console.log(input_data.email)
    let login=db.collection('register')
    let authentication = await login.findOne({email:input_data.email,password:input_data.password})
    console.log(authentication)
    return authentication
}




module.exports={get_starter_data,post_starter_data,get_rice_data,post_soup_data,get_soup_data,post_roti_data,get_roti_data,post_rice_data,
post_maincourse_data,get_maincourse_data,post_icecream_data,get_icecream_data,get_dessert_data,post_dessert_data,post_juice_data,get_juice_data
,post_register,post_login}