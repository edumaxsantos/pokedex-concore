export default (word) => {
    if (typeof word === 'undefined')
      return word
    else
      return word[0].toUpperCase() + word.slice(1)
}