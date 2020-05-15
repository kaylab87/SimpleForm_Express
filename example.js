let express = require("express");
let ourApp = express();
ourApp.use(express.urlencoded({extended: false}))

ourApp.get('/',function(req,res) {
    res.send(`
    <form action="/answer" method="POST">
    <p>Who is the manufacturer of Q8 ?</p>
    <input name="brandName" autocomplete="off">
    <button>Submit answer</button>
    </form>
    `)
}) 

ourApp.post('/answer',function(req,res){
    if (req.body.brandName.toUpperCase() == "AUDI"){
        res.send(`
        <p>You are totally correct.</p>
        <a href="/">Back to the home page</a>
        `)
    } else {
        res.send(`
        <p>Sorry, that's incorrect.</p>
        <a href="/">Back to the home page</a>
        `)
    }
})
ourApp.listen(3000)
