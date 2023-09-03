import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;

const todos = [];
const todos1 = [];

const heading = new Date().toDateString();
const heading1 = "WORK LIST";

app.use("/", express.static("public"))

app.use(bodyParser.urlencoded({ extended: true }))

//today list routing
app.get("/", (req, res) => {
  res.render("index.ejs", {
    todos: todos,
    head: heading
  })
})

app.post("/", (req, res)=>{
  todos.unshift(req.body);
  //redirect back to main page (refresh page)
  res.redirect("/")
});

//work list routing
app.get("/work", (req, res) => {
  res.render("work.ejs", {
    todos1: todos1,
    head: heading1
  })
})

app.post("/work", (req, res)=>{
  todos1.unshift(req.body);
  //redirect back to main page (refresh page)
  res.redirect("/work")
});

app.listen(port , () =>{
  console.log(`Listening on port ${port}`)
})
