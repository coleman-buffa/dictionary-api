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
    res.json(data)
  });
});

//Retrieve meaning of a given word
router.get("/api/words/:word", (req, res) => {
  Dictionary.findOne({
    word: req.params.word
  })
  .select("meaning")
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.json(data)
  });
});

//List all the words starting with a given letter

module.exports = router;