import express, { request, response } from"express";
import dotenv from "dotenv";
import cors from "cors";
import fs from "fs"

const app=express();
dotenv.config();
const PORT=9909

app.use(cors())
app.use(express.json());

app.listen(PORT,()=>console.log("server started"))

app.get("/",(request,response)=>{
    response.send("Hello from Express JS")
})

app.post("/",(request,response)=>{

    var currentdate = new Date(); 
    var datetime = currentdate.getDate() + "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + "."  
                + currentdate.getMinutes() + "." 
                + currentdate.getSeconds();

    fs.appendFile(`./TemplateFolder/${datetime}.txt`,datetime, function (err) {
        if (err) {
            console.log(err)
            console.log('Not Saved!');
            response.send("not success")
        }
        else{
            console.log('Saved!');
            response.send("success")
        }
      });
   
})