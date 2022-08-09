
const { json } = require("body-parser");
const Usertypeddata = require("../database_data/User_data");
const getalltask =async (req,res)=>{
    try{
    //const task = await Usertypeddata.find({});
  //  const sendid = req.body.googleid;
    const task = await Usertypeddata.find({}).populate("user").sort({createdtime:"desc"}).lean();
    //console.log(task);
      res.render("data",{datavalue:task});
   // res.status(200).json({task});
    //res.redirect("/on_signin_pages/storiesPage/");
    }
    catch(err){
        res.status(500).json({msg:err})
    }
}
const gettask =async (req,res)=>{
    try{
        console.log(req.params)
        const sendid = req.params;
    const task = await Usertypeddata.find({googleid2:sendid});
    res.status(200).json({task});
    //res.redirect("/on_signin_pages/storiesPage/");
    }
    catch(err){
        res.status(500).json({msg:err})
    }
}

const posttask =async (req,res)=>{
    const newdata = {
        title:req.body.title,
        message:req.body.message,
        user:req.user._id
    }
    console.log(req.user);
    try{
         await Usertypeddata.create(newdata);
         
         //await Usertypeddata.create(req.body);
       //  const sendid = req.body.googleid;
   // const task = await Usertypeddata.find({googleid2:sendid});
         res.redirect("/on_signin_pages/storiesPage/user_typed_data")
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {getalltask,posttask,gettask}