const mongoose=require("mongoose");
//mongodb+srv://Farahid:DQjcqDPncArzGCIq@cluster0.sxrebn5.mongodb.net/todos
mongoose.connect("mongodb+srv://Farahid:DQjcqDPncArzGCIq@cluster0.sxrebn5.mongodb.net/todos")
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo=mongoose.model('todos',todoSchema);  
module.exports={
    todo
} 
