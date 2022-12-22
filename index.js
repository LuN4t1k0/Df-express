const express = require("express");
const fs = require("fs")
const bodyParser = require("body-parser")
const app = express();
const PORT = 3000;

app.use(express.json())
app.use(bodyParser.json())



app.listen(PORT, console.log("servidor Funcionando"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.get("/canciones", (req, res) => {
  const canciones = JSON.parse(fs.readFileSync("repertorio.json", "utf8"))
  res.json(canciones)
})

app.post("/canciones", (req, res) => {
  const cancion = req.body;
  const canciones = JSON.parse(fs.readFileSync("repertorio.json", "utf8"))
  fs.writeFileSync("repertorio.json", JSON.stringify([...canciones,cancion]))
  res.send("Cancion Agregada")
})

app.put("/canciones/:id", (req, res) => {
  const {id} = req.params
  const canciones = JSON.parse(fs.readFileSync("repertorio.json", "utf8"))
  const index = canciones.findIndex((cancion) => cancion.id === id) 

})

