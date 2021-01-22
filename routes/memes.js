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

router.get("/addmeme", (req, res) => {
  res.render("addMeme", {})
})

router.post("/addmeme", (req, res) => {
  let url = req.body.url
  let name = req.body.name
  let category_id = req.body.cats
  console.log(req.body.cats)

  console.log(url, name, category_id)
  db.addMeme(url, name, category_id)
  .then(() => {
    if(category_id == 1){
      res.redirect('/dank')
    } else if(category_id == 2){
      res.redirect('/edgy')
    } else {
      res.redirect('/r18')
    }
  })
})

router.get("/:id", (req, res) => {
  let id = req.params.id
  db.getMeme(id)
    .then(meme => {
      db.getComments(id)
        .then(comments => {
          console.log(comments)
          let viewData = {
            meme : meme,
            comments : comments
          }
          res.render('viewMeme', viewData)
        })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post("/:id", (req, res) => {
  let meme_id = req.params.id
  let submitted_by = req.body.name
  let comment = req.body.comment
  let rating = req.body.rating
  db.addComment(meme_id, submitted_by, comment, rating)
    .then(() => {
      res.redirect(`/${meme_id}`)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})




module.exports = router
