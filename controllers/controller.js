const models=require('../models/models')

exports.food_postsoup = async  (req,res) =>{
    try{
        let data= await req.body
        console.log(data)
        await models.post_soup_data(data)
        res.send("success")
        // console.log(result)        
    }catch(e){
        console.log(e)
        res.status(500).json({msg:"databaseeror"})
    }

}

exports.food_getsoup = async (req,res)=>{
    try{
        let result = await models.get_soup_data()
        res.send(result)
    }
    catch(e){
        console.log(e)
        res.status(500).json({msg:"getting database error"})
    }


}

exports.food_postroti =async (req,res)=>{
    try{
        let dataroti = await req.body
        await models.post_roti_data(dataroti)
        res.send("Roti successfull")
    }
    catch(e){
        console.log(e)
        res.status(500).json({msg:"posting data error"})
    }
}

exports.food_getroti = async (req,res)=>{
    try{
        let result = await models.get_roti_data()
        res.send(result)
    }
    catch(e){
        console.log(e)
        res.status(500).json({msg:"getting database error"})
    }


}
exports.food_postrice =async (req,res)=>{
    try{
        let datarice = await req.body
        await models.post_rice_data(datarice)
        res.send("Rice successfull")
    }
    catch(e){
        console.log(e)
        res.status(500).json({msg:"posting data error"})
    }
}
exports.food_getrice =async (req,res)=>{
    try{
        let result  = await models.get_rice_data()
        res.send(result)
    }
    catch(e){
        console.log(e)
        res.status(500).json({msg:"posting data error"})
    }
}
exports.food_poststarter =async (req,res)=>{
    try{
        let datastarter = await req.body
        await models.post_starter_data(datastarter)
        res.send("starter successfull")
    }
    catch(e){
        console.log(e)
        res.status(500).json({msg:"posting data error"})
    }
}
exports.food_getstarter =async (req,res)=>{
    try{
        let result  = await models.get_starter_data()
        res.send(result)
    }
    catch(e){
        console.log(e)
        res.status(500).json({msg:"posting data error"})
    }
}


exports.food_postdessert =async (req,res)=>{
    try{
        let datadessert = await req.body
        await models.post_dessert_data(datadessert)
        res.send("dessert successfull")
    }
    catch(e){
        console.log(e)
        res.status(500).json({msg:"posting data error"})
    }
}
exports.food_getdessert =async (req,res)=>{
    try{
        let result  = await models.get_dessert_data()
        res.send(result)
    }
    catch(e){
        console.log(e)
        res.status(500).json({msg:"posting data error"})
    }
}

exports.food_postjuice = async (req,res) =>{
    try{

        let data_juice= await req.body
        await models.post_juice_data(data_juice)
        res.send("successfull")
    }
    catch(e){
        console.log(e)
        res.staus(404).send({msg:"error"})
    }

}

exports.food_getjuice =async (req,res) =>{
    try{
        let result_getjuice= await models.get_juice_data()
        res.send(result_getjuice)
    }
    catch(e){

        console.log(e)
        res.status(404).send({msg:"data not found"})
        }
}

exports.food_posticecream = async (req,res) =>{
    try{

        let data_icecream= await req.body
        await models.post_icecream_data(data_icecream)
        res.send("icecream successfull")
    }
    catch(e){
        console.log(e)
        res.staus(404).send({msg:"error"})
    }

}

exports.food_geticecream =async (req,res) =>{
    try{
        let result_geticecream= await models.get_icecream_data()
        res.send(result_geticecream)
    }
    catch(e){

        console.log(e)
        res.status(404).send({msg:"data not found"})
    }
}


exports.food_postmaincourse = async (req,res) =>{
    try{

        let data_maincourse= await req.body
        await models.post_maincourse_data(data_maincourse)
        res.send("maincourse successfull")
    }
    catch(e){
        console.log(e)
        res.staus(404).send({msg:"error"})
    }

}


exports.food_getmaincourse =async (req,res) =>{
    try{
        let get_maincourse= await models.get_maincourse_data()
        res.send(get_maincourse)
    }
    catch(e){
        console.log(e)
        res.status(404).send({msg:"database error"})
    }
}


exports.food_register = async (req,res)=>{
    try{
        let post_register= await req.body
        await models.post_register(post_register)
        res.send("sucessfull registered")
    
    }
    catch(e){
        console.log(e)
        res.stauts(404).send({msg:"database error"})
    }
}

exports.food_login =async (req,res)=>{
    try{
        let login_data=await req.body
        // console.log(login_data)
        let user = await models.post_login(login_data)
        if(user){
            req.session.user = user 
            console.log(user); 
        }
        else{

            // req.flash("status","failure!!")
            // return res.redirect("/")
            // console.log("error");
            res.sendStatus(400).json();
        }    
    } 
    catch (e){
        console.log(e)
    }
}


