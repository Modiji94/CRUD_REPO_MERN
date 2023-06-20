const mongoose=require("mongoose");

const DB="mongodb+srv://modiji94:modiji94@cluster0.ntb9uey.mongodb.net/mernstack?retryWrites=true&w=majority";

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>console.log("connection start")).catch((error)=>console.log(error.message));