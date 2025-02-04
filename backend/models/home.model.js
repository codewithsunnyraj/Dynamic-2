import mongoose from "mongoose"

const heroSchema = new mongoose.Schema({
    subtitle:{
        type:String,
        require:true
    },
    heading:{
        type:String,
        require:true
    },
    description:{
      type:String,
      require:true
    },
    buttonText:{
        type:Array
    }
})