

const wordlist  = [
  'wall', 'well', 'head', 'wail', 'help', 'hell', 'hall',
  'tall', 'tail', 'jail', 'fail', 'hail', 'foil', 'heat',
  'heal', 'sail'
 ];

const path = [];
const wordsToString = words => words.reduce((a, v) => (a + ' > ' + v), '');


function start(wordlist, path) {
  let [word] = wordlist.splice(0, 1);

  let newPath = searchList(wordlist, word, path);
  console.log('path:', wordsToString(newPath));
}

function searchList(wordlist, word, path) {
  path.push(word);
  // console.log('wordlist:', wordsToString(wordlist));
  // console.log('    path:',wordsToString(path));
  // console.log('');

  let index = findNewWord(wordlist, word);
  if (index > -1) {
    let [newWord] = wordlist.splice(index, 1);
    let newPath   = searchList(wordlist, newWord, path);
    return newPath;
  }
  return path;
}


function findNewWord(wordlist, word) {
  for (let i = 0; i < word.length; i++) {
    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
      let newWord = replaceCharacterAt(word, i, char);
      let index   = wordlist.indexOf(newWord);
      if (index > -1) {
        return index;
      }
    }
  }

  return -1;
}

/**
 * Replaces a character at a given position in a string.
 */
const replaceCharAt = (str, index, char) => (
  str.substr(0, index) + char + str.substr(index + char.length)
);



start(wordlist, path);
