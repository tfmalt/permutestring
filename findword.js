

const wordlist  = [
  'wall', 'well', 'head', 'wail', 'help', 'hell', 'hall',
  'tall', 'tail', 'jail', 'fail', 'hail', 'foil', 'heat',
  'heal', 'sail'
];

const path = [];

/**
 * Concatenates a string with an angle bracket and space.
 *
 * @param {array} words list of words
 * @returns {string} concatenated list of words
 */
const toString = words => words.join(' > ');

/**
 * Replaces a character at a given position in a string.
 *
 * @param {string} str string to replace character in
 * @param {integer} index which character (from 0) to replace
 * @param {char} char the new character to insert in the string.
 * @returns {string} the string
 */
const replaceCharAt = (str, index, char) => (
  str.substr(0, index) + char + str.substr(index + char.length)
);

/**
 * Searches through the list of words looking for a match, changing one
 * letter at a time in the given word, returning the first
 * match it finds.
 *
 * @param {array} list of words
 * @param {string} word to test
 * @returns {integer} index of the matching word in list or -1
 */
const findWord = (list, word) => {
  for (let i = 0; i < word.length; i + 1) {
    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
      let newWord = replaceCharAt(word, i, char);
      let index   = list.indexOf(newWord);

      if (index > -1) {
        return index;
      }
    }
  }

  return -1;
};

/**
 * Searching a list of words for a match, keeping track of the order it has
 * tried to find matches.
 *
 * @param {array} list of words
 * @param {string} word currently searching for
 * @param {array} currpath the path through the list taken
 * @returns {array} the path found so far.
 */
const searchList = (list, word, currpath) => {
  currpath.push(word);

  let index = findWord(wordlist, word);
  if (index > -1) {
    let [newWord] = wordlist.splice(index, 1);
    let newPath   = searchList(wordlist, newWord, path);
    return newPath;
  }

  return path;
};

const start = (list, currpath) => {
  console.log("Starting iterating over words:");
  let [word] = list.splice(0, 1);

  let newPath = searchList(list, word, currpath);
  console.log('path:', toString(newPath));
};

start(wordlist, path);
