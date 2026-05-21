 const express=require("express");
 const cors=require("cors");
 require("dotenv").config();
const { createtodo, updateTodo } = require("./type");
const {todo}=require("./db"); 
 
 const app=express();
 app.use(express.json());
 app.use(cors({
    origin:"http://localhost:5173"
 }));
 app.post("/todo", async function(req,res){
    const createPayload=req.body;
    const parsedPayload=createtodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(400).json({
            msg:"you sent the wrong inputs"
        })
        return;
    }
    //put it in mongodb
     await todo.create({
        title: createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg:"todo created"
    })
    
    

 })
app.get("/todos", async function(req,res){
    const todos = await todo.find({});
    res.json({
        todos
    });
});
  app.put("/completed", async function(req,res){
    const updatePayload=req.body;
    const parsedPayload=updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs"
        })
        return;
    }
    await todo.update({
        _id:req.body.id
    },{
    completed:true
    }

)
res.json({
    msg:"Todo marked as completed"
})
    
 });
 app.delete("/todo/:id", async function (req, res) {
  await todo.findByIdAndDelete(req.params.id);

  res.json({
    msg: "Todo deleted successfully",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});


 