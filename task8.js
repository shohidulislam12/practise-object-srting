///If a given string has either x, replace x by y. if the given string has X, replace it by Y.

//Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.
let sentence="You should be able to check whether x or X exists. After that, search online how to replace a character in a string";
//var change=sentence.replace(/x/g,'y').replace(/X/g,'Y');
var change=sentence.replace('x','y').replace('X','Y');
console.log(change);