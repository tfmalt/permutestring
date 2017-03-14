class WordWalker {
  constructor(wordlist) {}

  /**
   * Concatenates a string with an angle bracket and space.
   *
   * @param {array} words list of words
   * @returns {string} concatenated list of words
   */
  toString(words) {
    return words.join(' > ');
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
    return str.substr(0, index) + char + str.substr(index + char.length)
  }

  /**
   * Searches through the list of words looking for a match, changing one
   * letter at a time in the given word, returning the first
   * match it finds.
   *
   * @param {array} list of words
   * @param {string} word to test
   * @returns {integer} index of the matching word in list or -1
   */
  findWord(list, word) {
    for (let i = 0; i < word.length; i = i + 1) {
      for (let char of 'abcdefghijklmnopqrstuvwxyz') {
        let newWord = replaceCharAt(word, i, char);
        let index = list.indexOf(newWord);

        if (index > -1) {
          return index;
        }
      }
    }

    return -1;
  }

  /**
   * Searching a list of words for a match, keeping track of the order it has
   * tried to find matches.
   *
   * @param {array} list of words
   * @param {string} word currently searching for
   * @param {array} currpath the path through the list taken
   * @returns {array} the path found so far.
   */
  searchList(list, word, currpath) {
    currpath.push(word);
    console.log("     list:", toString(list));
    console.log("     path:", toString(currpath));

    let index = this.findWord(list, word);
    if (index > -1) {
      let [newWord] = list.splice(index, 1);
      let newPath = this.searchList(list, newWord, currpath);
      return newPath;
    }

    return currpath;
  }

}

module.exports = WordWalker;
