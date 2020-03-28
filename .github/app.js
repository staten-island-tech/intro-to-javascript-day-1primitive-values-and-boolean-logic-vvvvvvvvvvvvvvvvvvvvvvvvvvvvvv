//strings
/* let string = "string" //can be re-declared
const val = "Val" //can't be changed
let sentence = "Hi " + "Bao Bao";
let sentence2 = "and Jiayu and Sun and Aarthi"
let combine = sentence + sentence2; //don't use this
combine = `${sentence}${sentence2}`; //template literal
let bestAnimal = "Pandas";
let redPanda = "also cute";
let MrWhalen = "wrong";
let message = "Thank you";
let company = "TedTalk";
let longSentence = `${bestAnimal} are the cutest animals, although red pandas are ${redPanda}, 
meaning Mr. Whalen is ${MrWhalen}. ${message} for coming to my ${company}.`;
console.log(longSentence); */
 //numbers and integers
 /* let year = 2020; //can do lots of operations
 let nextYear = 2020 + 1;
 let past = year/2;
 let lastYear = year - 1;
 let future = year * 2;  */
 //mdn Mathematical Operators for more info
//booleans, null, undefined
/* let trueStatement = true;
let falseStatement = false;

let undefinedVar; //do this a lot- declared but not defined

console.log(nonExistent); //never declared */

/* let student = "Valerie";
let age = 16;
console.log(student === "Valerie"); //true triple equals is stricter
console.log(student === "valerie"); //false
console.log(student == "valerie"); //false
console.log(age === "16"); //false
console.log(age == "16"); //true */

/* let age = 16;
let name = "Sun";
console.log(age < 17); //t
console.log(age <= 17); //t
console.log(age > 17); //f
console.log(age >= 17); //f
console.log(age == 16 || age == 17); //t double bar=or
console.log(age == 16 && age == 17); //f double&&=and
console.log(age == 16 && name === "Sun"); //t
console.log(age !== 16); //f !=not */

//if statements
/* let age=17;
if (age > 18) {
    console.log("You are a child");
}else if (age >= 18) {
    console.log("You can legally vote");
} */
/* let school = "middle";
if(school === "elementary"){
    console.log("you are in elementary school");
} else if (school === "middle"){
    console.log("you are in middle school");
} else {
    console.log("you are in high school");
} */


//stop light
/* let lightColor = "red";
if(lightColor == "green"){
    console.log("go");
} else if(lightColor == "yellow"){
    console.log("caution");
} else if(lightColor == "red"){
    console.log("stop");
} */

//lactose intolerance
/* let KristyIsLactoseIntolerant = false;
let BaoBaoIsLactoseIntolerant = false;
if (KristyIsLactoseIntolerant == true && BaoBaoIsLactoseIntolerant == true){
    console.log("Get almond milk");
}
else if (KristyIsLactoseIntolerant == false && BaoBaoIsLactoseIntolerant == false){
    console.log("Get normal milk");
}
else if (KristyIsLactoseIntolerant == true || BaoBaoIsLactoseIntolerant == true){
    console.log("Get both normal and almond milk");
} */
//this one works, but is this good coding practice
/* let KristyIsLactoseIntolerant = false;
let BaoBaoIsLactoseIntolerant = false;
let coffeeOrder = `Kristy is getting ${
    (() => {
        if(KristyIsLactoseIntolerant === false) {
            return `regular milk`;
        } else {
            return `almond milk`;
        }
    })()} in her coffee, and Bao Bao is getting ${ (() => {
        if(BaoBaoIsLactoseIntolerant === false) {
            return `regular milk`;
        } else {
            return `almond milk`;
        }
    })()} in hers`;
console.log(coffeeOrder); */

//cupcake tempuratures
/* let thermostatTemp = 77;
if (thermostatTemp < 68) {
    console.log("too cold");
}
else if (thermostatTemp >= 68 && thermostatTemp <= 72) {
    console.log("perfect");
}
else if (thermostatTemp >= 73 && thermostatTemp <= 76) {
    console.log("warm");
}
else if (thermostatTemp > 76) {
    console.log("too hot");
}*/
//this what I'm unsure about
let thermostatTemp = 65;
let tempSentence = `If the thermostat says ${thermostatTemp} degrees, the temperature is ${ 
    (() => {
        if(thermostatTemp < 68) {
            return `too cold`;
        } else if(thermostatTemp >= 68 && thermostatTemp <= 72){
            return `perfect`;
        } else if(thermostatTemp >= 73 && thermostatTemp <= 76){
            return `warm`;
        } else if(thermostatTemp > 76){
            return `too hot`;
        }
    })()
}.`;
console.log(tempSentence);
 