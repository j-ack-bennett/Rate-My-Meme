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
  db.getCertainMemes('dank')
    .then(dankMemes => {
      //console.log("dank memes", dankMemes)
      res.render("dank", {dankMemes : dankMemes})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get("/edgy", (req, res) => {
  db.getCertainMemes('edgy')
    .then(edgyMemes => {
      //console.log("edgy memes", edgyMemes)
      res.render("edgy", {edgyMemes : edgyMemes})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get("/r18", (req, res) => {
  db.getCertainMemes('r18')
  .then(r18Memes => {
    //console.log("r18", r18Memes)
    res.render('rrated', {r18Memes: r18Memes})
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

router.get("/:id", (req, res) => {
  res.render("viewMeme", {})
})


module.exports = router
