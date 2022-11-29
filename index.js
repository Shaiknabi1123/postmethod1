const express=require("express")
const app=express()
const cors=require("cors")
const bodyparser=require("body-parser")
const port=3210
app.use(bodyparser.urlencoded({

}))
app.use(bodyparser.json())
app.use(cors())
app.get("/",(req,res)=>{
	res.send("vibe alone")
})
app.post("/newData",(req,res)=>{
	console.log(req.body)
})
app.post("/newData",(req,res)=>{
	//const name=req.body.name,age=req.body.age
	const{name,age}=req.body;
	console.log(name,age)
	res.send("added sucessfully")
})
app.listen(port,()=>console.log("until you are valued 3210"))
