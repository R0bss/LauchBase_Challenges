const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const artigos = require("./data")
server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true
})

server.get("/", function (req, res) {
  return res.render("index")
})

server.get("/content", function (req, res) {
  return res.render("content", {items : artigos})
})

server.get("/about", function (req, res) {
  const about = {
    image: "https://avatars1.githubusercontent.com/u/61212477?s=460&u=6df565f83f29844af7cc0f317ae2468a2a5c637e&v=4",
    name: "Rocketseat",
    description: 'Empresa que orienta desenvolvedores a serem incriveis!',
    links: [
      {name: "Comunidade", url: "https://discordapp.com/invite/gCRAFhc"},
      {name: "Email", url: "mailto:oi@rocketseat.com.br"},
      {name: "Telefone", url: "tel:+5547992078767"},
      {name: "Sobre", url: "/about"},
      {name: "Conteudo", url: "/content"}
    ],
    skill: [
      {name: "JavaScript"},
      {name: "CSS"},
      {name: "Html"}
    ],
    linksfooter: [
      {name: "Github", url: "https://github.com/Rocketseat"},
      {name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/"},
      {name: "Facebook", url: "https://web.facebook.com/rocketseat/"}
    ]
  }

  return res.render("about", {about})
})

server.get("/courses/:id", function(req, res) {
  const id = req.params.id
  //return res.send(`O id fornecido na rota é: ${id}`)

  const artigo = artigos.find(function(artigo) {
      return artigo.id == id
  })

  if (!artigo) {
    return res.send("Artigo not found!")
  }
  //return res.send(`O id fornecido na rota é: ${id}`)
  return res.render("courses", {item : artigo})
})

server.use(function(req, res) {
  res.status(404).render("not-found")
})

server.listen(5000, function () {
  console.log('server is running')
})