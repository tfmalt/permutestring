

const wordlist = [ 'head', 'help', 'hell', 'hall', 'tall', 'tail'];

initialState = {
  candidate:         'wail',
  answer:            'tail',
  wordlist:          wordlist,
  candidatePosition: 0,
  alphabetPosition:  0,
  foundAnswer:       false
};

const solution = findword(initialState);

console.log("got solution:", solution);

function findword(state) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';

  if (state.foundAnswer === true || state.candidate === state.answer) {
    state.foundAnswer = true;
    console.log("Found answer");
    return state;
  }

  let newCandidate = replaceCharcterAt({
    candPos: candidatePosition, alphPos: alphabetPostion
  });
  findword(newCandidate, answer, alphabetPostion++)
}

function replaceCharacterAt(index, character) {
    return (
      this.substr(0, index) +
      character +
      this.substr(index + character.length);
    );
}
