
let number = 0;
let result = 1; 

while(number < 10){
    result *= 2
    number += 1  
};


let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);


var content = '';

for (var i = 0; i < 7; i++) {
    content = content + '#';
    console.log(content);
}

let number = 0;
while(number <=100){
    if (number % 5 === 0 && number % 3 === 0) {
        console.log("fizzbuzz")    
    } else if (number % 5 === 0 && number % 3 != 0) {
        console.log("buzz");     
    } else if (number % 3 === 0) {
        console.log("fizz")
    } else {
        number
    }

}

for (i=1; i<=100; i++) {
    if ( !(i%5) && !(i%3) ) {
        console.log('FizzBuzz');
    } else if ( !(i%5) && (i%3)) {
        console.log('Buzz');
    } else if ( !(i%3) ) {
        console.log('Fizz');
    } else {
        console.log(i);
    }
}

let arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(arrays){
    return arrays.reduce((acc, value) => Array.isArray(value) ? acc.concat(flatten(value)) : acc.concat(value), [])
}

function loop(value, testFunc, updateFunc, bodyFunc){
    for(let element = value; testFunc(element); element = updateFunc(element)){
        bodyFunc(element)
    }
}

function loop(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
      body(value);
    }
  }

console.log(flatten(arrays));
loop(3, n => n > 0, n => n - 1, console.log);


let rabbit = {}
speak = (line) => {
    console.log(`I am a rabbit that can ${line}`);
    
}
speak.call(rabbit, "dance")

let rabit = {}
rabit.speak = (line) => {
    console.log(`I am a rabbit that can ${line}`);
    
}
rabit.speak("dance")


// prototype of an empty object
Object.getPrototypeOf({}) == Object.prototype
console.log(Object.getPrototypeOf('') == String.prototype);

let person = {
    persoName(){
        console.log(`my ${this.nameType} is ${this.name}`);
        
    }
}

let newPerson = Object.create(person)
newPerson.nameType = "Middle name"
// newPerson.name = "Judy"
// newPerson.persoName()

console.log(person);






