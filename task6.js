//Count how many times a string has the letter a or A
const sentence= "This methoAd a counts only A the  a enumearable A propaerties of the objeact and doaes not include propertaies from the Apraototype chAin."


let A=0;
let a=0;
for(let i=0;i<sentence.length;i++){
 if(sentence[i]==="A"){
    A=A+1;
 }
 else if(sentence[i]==="a"){
    a=a+1;
 }


}
console.log("number of A is:" + A);
console.log("number of a is:" + a);