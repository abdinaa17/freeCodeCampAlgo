function findLongestWordLength(str) {
  const strArr = str.split(' ')

const longestWord = strArr.reduce((current, longest) => {

if(current.length > longest.length) {
  return current
} else return longest


  }, '')


  return longestWord.length
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
