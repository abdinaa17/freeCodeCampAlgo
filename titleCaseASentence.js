unction titleCase(str) {
  // We turn the str into an arr to use the map method.
  const strArr = str.toLowerCase().split(' ')

  const strUpperCased = strArr.map((word)=> {
    return word[0].toUpperCase() + word.slice(1)
  }).join(' ')




  return strUpperCased

}

console.log(titleCase("I'm a little tea pot"));
