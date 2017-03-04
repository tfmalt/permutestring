

const wordlist  = [
  'wall', 'well', 'head', 'wail', 'help', 'hell', 'hall', 'tall', 'tail',
  'jail', 'fail', 'hail', 'foil'
 ];
const hits      = {};
const hitstring = {
  0: '^   ',
  1: ' ^  ',
  2: '  ^ ',
  3: '   ^'
};

initialState = {
  candidate:         'wall',
  wordlist:          wordlist,
  candidatePosition: 0,
  alphabetPosition:  0,
  foundAnswer:       false
};

const solution = findword('sail');

console.log("got solution:", solution);

function findword(candidate, current = '', position = 0, charPos = 0) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';

  let newCandidate = '';
  let newPosition  = 0;
  let newCharPos   = 0;

  if(position > 3) {
    return true;
  }

  if (charPos >= letters.length) {
    console.log('End of alphabet: ', charPos);
    return false;
  }

  if (wordlist.includes(candidate) && candidate !== current) {
    newPosition = position + 1;
    newCharPos  = 0;

    console.log(' hit:', candidate, current, position)
    hits[position] = candidate;
    return findword(candidate, candidate, newPosition, newCharPos);
  }

  newCandidate = replaceCharacterAt(candidate, position, letters.charAt(charPos));
  newCharPos   = charPos + 1;

  if (findword(newCandidate, current, position, newCharPos)) {
    console.log('got true from candidate');
  } else {
    newCharPos  = 0;
    newPosition = position + 1;
    findword(candidate, current, newPosition, newCharPos);
  }
}

function replaceCharacterAt(string, index, character) {
    return (
      string.substr(0, index) +
      character +
      string.substr(index + character.length)
    );
}
