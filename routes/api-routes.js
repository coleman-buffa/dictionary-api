const router = require("express").Router();
const Dictionary = require("../models/dictionary.js");

//Retrieve all words
router.get("/api/words", (req, res) => {
  Dictionary.find({})
    .select("word")
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err)
    });
});

//Retrieve meaning of a given word
router.get("/api/word/:word", (req, res) => {
  Dictionary.findOne({
    word: req.params.word
  })
    .select("meaning")
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err)
    });
});

//List all the words starting with a given letter
router.get("/api/words/:letter", (req, res) => {
  Dictionary.find({
    word: { $regex: '^' + req.params.letter, $options: 'i' }
  })
    .select("word")
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err)
    });
});

module.exports = router;