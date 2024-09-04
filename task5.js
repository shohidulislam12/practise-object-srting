// output
// key: name | type:  string
// key: age | type:  number
// key: city | type:  string
// key: isStudent | type:  boolean
let myObject = {
name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};
const keys=Object.keys(myObject);
//console.log(keys);
for(const key of keys){
    console.log(key,':',myObject[key], '| type :',typeof(myObject[key]) );
}

