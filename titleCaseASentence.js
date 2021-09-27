/* Title Case a SentencePassed

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of. */




function titleCase(str) {
  // We turn the str into an arr to use the map method.
  const strArr = str.toLowerCase().split(' ')

  const strUpperCased = strArr.map((word)=> {
    return word[0].toUpperCase() + word.slice(1)
  }).join(' ')




  return strUpperCased

}

console.log(titleCase("I'm a little tea pot"));
