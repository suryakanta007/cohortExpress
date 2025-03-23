import CohortExpress from "./cohort.js";

let app = new CohortExpress();
const port = 3000

app.get("/",(req,res)=>{
    res.end("Hello ...")
})

app.post("/login",(req,res)=>{
    console.log(req.chaiBody);
    res.end("Post is also is working..")
})

let options  = {
    port,
    cb:function(){
        console.log("Server is runing on ",port)
    }
}
app.chaiListen(options)