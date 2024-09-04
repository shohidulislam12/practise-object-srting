//Count how many times a string has the letter 

const finds="Count how mAny times A string has the letter a .You going to school on next monday "
const find=finds.toLowerCase();
console.log(find);
let count_a=0;
for(let i=0;i<=find.length;i++){
   
  if(find[i]==='a'  )
    count_a = count_a + 1;

}
console.log(count_a);