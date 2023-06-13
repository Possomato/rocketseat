const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.get("/", function(req, res){
  const items = [
    {title: 'B',
    message: 'Bootstrap'},
    {title: 'O',
    message: 'Organização'},
    {title: 'N',
    message: 'NodeEJS'},
    {title: 'I',
    message: 'Interpolation'},
  ]
  res.render("pages/index",{
    boni: items
  })
})

app.get("/sobre", function(req, res){
  res.render("pages/about")
})

app.listen(8080)