const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://Suriya:rsn1@mycluster.mkm1t.mongodb.net/Authenticate?retryWrites=true&w=majority&appName=MyCluster").then
    (() => { console.log(" DB is Connected") }).catch(() => { console.log("  DB Not connected") })
   
   

const dbData = mongoose.model("dbData", { name: String, email: String, pass: String }, "user")
const taskData = mongoose.model("taskData", {task:String,time:String,date:Date }, "task")



app.post("/login", async (req, res) => {
    const { email, pass } = req.body


    try {
        const user = await dbData.findOne({ email })

        if (!user) {
            res.status(401).json({ message: "invalidemail" })
        }
        if (user.pass == pass) {
            res.send(true)
        } else {
            res.send(false)
        }
    }
    catch (error) {
        console.log("server error")

    }


})


app.post("/signup", function (req, res) {

    const newUser = new dbData(
        {
            name: req.body.name,
            email: req.body.newEmail,
            pass: req.body.newPass

        })
    newUser.save().then(() => {
        console.log('saved')
        res.send(true)
    }).catch(() => { console.log('Notsave') })

})


taskData.find().then(function(data){
    app.get("/retdata",function(req,res){
          res.send(data)
      })
})

app.post("/addtask", function (req, res) {
      
    const newTask = new taskData(
        {
            task: req.body.newtask,
            time: req.body.time,
            date: req.body.date

        })
    newTask.save().then(() => {
        console.log('task saved')
        res.send(true)
    }).catch(() => { console.log('Notsave') })

})

app.post("/send-id", async (req,res)=>{
    const {id}=req.body
    
    try {
        const task = await taskData.findByIdAndDelete(id);
        if (!task) {
          return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({ message: "Task deleted successfully", task });
      } catch (err) {
        res.status(500).json({ message: "Error deleting task", error: err });
      }
})



app.listen("5000", function () {
    console.log("Server Strated...")
})