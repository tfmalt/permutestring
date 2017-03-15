const EventEmitter = require('events');

class WordWalker extends EventEmitter {
  /**
   * Constructor calling the super for EventEmitter
   * Inherits from EventEmitter to be able to emit events to notify
   * those interested about what's going on.
   *
   * @param {array} wordlist the list of word
   */
  constructor(wordlist) {
    super();

    this.wordlist = wordlist;
    this.bestpath = [];
  }

  /**
   * Returns the word at index in list and the remaining words without the
   * word at index
   *
   * @param {integer} index to fetch word at.
   * @param {array} list of words
   * @returns {array} a list of the word and the remaining list.
   */
  getWordAndRemainder(index, list) {
    let copy = list.slice(0);
    let word = copy.splice(index, 1)[0];
    return [word, copy];
  }

  /**
   * starting point for searching the list of words
   *
   * @returns {undefined}
   */
  findPath() {
    for (let i = 0; i < this.wordlist.length; i = i + 1) {
      let [word, remainder] = this.getWordAndRemainder(i, this.wordlist);
      this.searchList(remainder, word);
    }
  }

  /**
   * Concatenates a string with an angle bracket and space.
   *
   * @param {array} words list of words
   * @returns {string} concatenated list of words
   */
  static wordsToString(words) {
    return words.join(' ');
  }

  /**
   * Replaces a character at a given position in a string.
   *
   * @param {string} str string to replace character in
   * @param {integer} index which character (from 0) to replace
   * @param {char} char the new character to insert in the string.
   * @returns {string} the string
   */
  replaceCharAt(str, index, char) {
    return str.substr(0, index) + char + str.substr(index + char.length);
  }

  /**
   * Searches through the list of words looking for a match, changing one
   * letter at a time in the given word, returning the first
   * match it finds.
   *
   * @param {array} list of words
   * @param {string} word to test
   * @param {array} path of words walked so far
   * @returns {integer} index of the matching word in list or -1
   */
  findWord(list, word, path) {
    for (let i = 0; i < word.length; i = i + 1) {
      for (let char of 'abcdefghijklmnopqrstuvwxyz') {
        let newWord = this.replaceCharAt(word, i, char);
        let index = list.indexOf(newWord);

        if (index > -1) {
          list.splice(index, 1);
          this.searchList(list, newWord, path.slice(0));
        }
      }
    }

    list.push(word);
    return path;
  }

  /**
   * Searching a list of words for a match, keeping track of the order it has
   * tried to find matches.
   *
   * @param {array} list of words
   * @param {string} word currently searching for
   * @param {array} path the path through the list taken
   * @returns {array} the path found so far.
   */
  searchList(list, word, path = []) {
    path.push(word);

    if (path.length > this.bestpath.length) {
      this.bestpath = path;
    }

    if (list.length === 0) {
      this.emit('solution', {
        message: 'Found a solution to the walk!', path
      });
    }

    this.emit('searchlist', {
      message: 'starting search in list',
      word, path, list
    });


    return this.findWord(list, word, path);
  }
}

module.exports = WordWalker;
