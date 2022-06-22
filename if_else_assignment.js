 function isEvenOrOddNumber(n){
    if (n%2==0) {
        console.log(`${n} is even number`);
    } else {
        console.log(`${n} is odd number`);
    }

}
isEvenOrOddNumber(45)
isEvenOrOddNumber(70)
isEvenOrOddNumber(67)
isEvenOrOddNumber(98)

console.log("===========================================================")
function personCheckEligibleForVoteOrNot(p){
    if (p>=18){
        console.log(`age ${p} your are Eligible for Vote`);
    } else {
        console.log(`age ${p} your are not Eligible for Vote`);
    }
   
}
personCheckEligibleForVoteOrNot(18)
personCheckEligibleForVoteOrNot(20)
personCheckEligibleForVoteOrNot(17)
personCheckEligibleForVoteOrNot(40)
console.log("======================================")


function stringContainMoreThan10Character(character){
  var x = character.split("").length;
  if (x>10) {
    console.log(`"${character}" String having more than 10 character`)}
    else{
        console.log(`${character} "string having less than 10 character"`)
    }
    
  }

  stringContainMoreThan10Character("Javascript-ES6")
  stringContainMoreThan10Character("Hii")

var startWith=function(start){
    var result=start.startsWith("Java")
    console.log(result)
}
console.log("String start with Java")
startWith("JavaScript Language");

var isEvenOrOddNumber =function(n){
    if (n%2==0) {
        console.log(`${n} is even number`);
    } else {
        console.log(`${n} is odd number`);
    }

}
isEvenOrOddNumber(2022)
isEvenOrOddNumber(123)