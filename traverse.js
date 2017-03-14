

const walker = require('./lib/word-walker');

const wordlist  = [
  'wall', 'well', 'head', 'wail', 'help', 'hell', 'hall',
  'tall', 'tail', 'jail', 'fail', 'hail', 'foil', 'heat',
  'heal', 'sail', 'tell', 'sell'
];

const path = [];

const start = (list, currpath) => {
  console.log("Starting iterating over words:");
  console.log("Word list:", toString(list));
  let [word] = list.splice(0, 1);

  let newPath = searchList(list, word, currpath);
  console.log('best path:', toString(newPath));
};

start(wordlist, path);
