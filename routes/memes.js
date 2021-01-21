const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  res.render("index", {})
})

router.get("/all", (req, res) => {
  db.getAllMemes()
  .then(memes => {
    res.render('all', {memes: memes})
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

router.get("/dank", (req, res) => {
  res.send("dank memes")
})

router.get("/edgy", (req, res) => {
  res.send("edgy memes")
})

router.get("/r18", (req, res) => {
  res.send("r18 memes")
})

router.get("/:id", (req, res) => {
  res.send("add comment stuff here")
})

module.exports = router
