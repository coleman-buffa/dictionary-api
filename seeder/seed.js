const mongoose = require("mongoose");
const Dictionary = require("../models/dictionary.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dictionaryDB", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let dictionarySeed = [
  {
    word: "adronitis",
    meaning: "frustration with how long it takes to get to know someone—spending the first few weeks chatting in their psychological entryway, with each subsequent conversation like entering a different anteroom, "
  },
  {
    word: "kenopsia",
    meaning: "the eerie, forlorn atmosphere of a place that’s usually bustling with people but is now abandoned and quiet—a school hallway in the evening, an unlit office on a weekend, vacant fairgrounds—an emotional."
  },
  {
    word: "dead reckoning",
    meaning: "to find yourself bothered by someone’s death more than you would have expected, as if you assumed they would always be part of the landscape, like a lighthouse you could pass by for years until the night ."
  },
  {
    word: "midsummer",
    meaning: "a feast celebrated on the day of your 26th birthday, which marks the point at which your youth finally expires as a valid excuse—when you must begin harvesting your crops, even if they’ve barely taken root—."
  },
  {
    word: "ambedo",
    meaning: "a kind of melancholic trance in which you become completely absorbed in vivid sensory details—raindrops skittering down a window, tall trees leaning in the wind, clouds of cream swirling in your coffee—which"
  },
  {
    word: "adomania",
    meaning: "the sense that the future is arriving ahead of schedule, that all those years with fantastical names like ‘2013’ are bursting from their hypothetical cages into the arena of the present, furiously bucking the grip of your expectations while you lean and "
  },
  {
    word: "semaphorism",
    meaning: "a conversational hint that you have something personal to say on the subject but don’t go any further—an emphatic nod, a half-told anecdote, an enigmatic ‘I know the feeling'—which you place into conversations like those little flags that warn"
  }
];

Dictionary.deleteMany({})
  .then(() => Dictionary.collection.insertMany(dictionarySeed))
  .then(data => {
    console.log(data.result.n + " record inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });