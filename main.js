const str = `
  010-1234-5678
  theabcd@gmail.com
  https://www.omdbapi.com/?apikey=7035c60c&s=frozen
  The quick brown fox jumps over the lazy dog.
  abbcccdddd
`

//const regexp = new RegExp('the', 'gi');
const regexp = /the/g
// console.log(regexp.test(str))
// console.log(str.match(regexp))

// console.log(str.replace(regexp, 'AAA'))
// console.log(str)
// let str2 = str.replace(regexp, 'AAA')
// console.log(str2)

// console.log(str.match(regexp))

console.log(str.match(/fox|dog/g))