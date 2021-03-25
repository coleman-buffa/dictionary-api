const mongoost = require("mongoose");

const Schema = mongoose.Schema;

const DictionarySchema = new Schema({
  word: {
    type: String,
    required: "Enter a word"
  },
  meaning: {
    type: String,
    required: "Enter a definition"
  }
});

const Dictionary = mongoose.model("Dictionary", DictionarySchema);

module.exports = Dictionary;