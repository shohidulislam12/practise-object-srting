//Capitalize Every first Letter of each word in a String

var sentence= "This methoAd a counts only A the  a enumearable A propaerties of the objeact and doaes not include propertaies from the Apraototype chAin.";
//var sentence = "This methoAd a counts only A the  a enumearable A propaerties of the objeact and doaes not include propertaies from the Apraototype chAin.";
var words = sentence.split(' '); // Split the sentence into words
var capitalizedWords = words.map(word => {
    if (word.length > 0) {
        return word[0].toUpperCase() + word.slice(1); // Capitalize the first letter and keep the rest of the word as is
    }
    return word; // Return the word as is if it’s empty
});
var capitalizedSentence = capitalizedWords.join(' '); // Join the words back into a sentence

console.log(capitalizedSentence);

  
