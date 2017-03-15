#!/usr/bin/env node

const Walker = require('./lib/word-walker');
const args   = require('args');

// A list of default words to use if no other words are given.
let words = [
  'wall', 'well', 'head', 'wail', 'hell', 'hall', 'tall', 'tail',
  'jail', 'fail', 'hail', 'foil', 'heat', 'heal', 'tell', 'sell'
];

args
  .option(
    'words',
    'A quoted and comma separated list of even letter words you want to ' +
    'test for traversal.'
  )
  .option(
    'verbose', 'verbose output'
  );

const options = args.parse(process.argv);

console.log(options);

const errorExit = () => {
  console.log(
    'Argument must be a quoted list of comma separated four letter words.'
  );
  process.exit(1);
}

if (options.words) {
  if (typeof options.words !== 'string') {
    errorExit();
  }

  words = options.words.split(/ *, */);
  if (words.length < 2) {
    errorExit();
  }
}

console.log("Starting iterating over words:");
console.log("Word list:", Walker.wordsToString(words));
console.log('');

let ww = new Walker(words);

ww.on('solution', (data) => {
  console.log('Found solution:');
  console.log(' !! ', Walker.wordsToString(data.path));
  process.exit(0);
})

ww.on('searchlist', (data) => {
  console.log(
    '    ', Walker.wordsToString(data.path),
    '    ', Walker.wordsToString(data.list)
  );
});

ww.findPath();

console.log("");
console.log('best path:', Walker.wordsToString(ww.bestpath));
