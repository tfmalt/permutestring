

const wordlist = [ 'head', 'help', 'hell', 'hall', 'tall', 'tail'];

initialState = {
  candidate:         'wail',
  answer:            'tail',
  wordlist:          worldlist,
  candidatePosition: 0,
  alphabetPosition:  0,
  foundAnswer:       false
};

findword(initialState);

function findword(state) (
  const letters = 'abcdefghijklmnopqrstuvwxyz';

  if (state.foundAnswer === true || state.candidate === state.answer)
    state.foundAnswer = true;
    return state;
  }

  let newCandidate = replaceCharcterAt({
    candPos: candidatePosition, alphPos: alphabetPostion
  });
  findword(newCandidate, answer, alphabetPostion++)
}
