//Check whether a string contains all the vowels a, e, i, o, u



// if(vowels.every(vowel=>sen3.includes(vowel))){
//     console.log("all vowel present");
// }
// else console.log("all vowel not present");


const sentence = "educationa";

const sen3 = sentence.toLocaleLowerCase();
console.log(sen3);
var i=0;
var vowel=0;
while(i<sentence.length){
switch(sen3[i]){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        vowel++;
}
i++;
}

console.log("given vowels" + vowel);

