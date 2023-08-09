const express= require('express');
const{blogs}=require(./model/index)
const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/",(req, res)=>{
    res.render("home");
});

app.get("/",(req,res)=>{
    res.render("addBlog");

});

app.post("createBlog", async(req, res)=>{
    await blogs.create({
        title : req.body.title,
        subtitle : req.body.subtitle,
        description :req.body.description
    });
    res.render("/")

})










app.listen(4000, function () {
     console.log("blog page started")
});
