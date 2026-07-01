import express from "express";
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("<h1>Home</h1><hr><a href='/contact/'>Contact</a><br><a href='/about/'>About</a>");
});

app.get("/contact",(req,res)=>{
    res.send("<h1>Contact Me!</h1><hr><a href='/../'>Home</a><br><a href='/../about/'>About</a>");
});

app.get("/about",(req,res)=>{
    res.send("<h1>About Me</h1><hr><a href='/../'>Home</a><br><a href='/../contact/'>Contact</a>");
});

app.listen(port, ()=> {
    console.log(`Server running at port ${port}`);
});