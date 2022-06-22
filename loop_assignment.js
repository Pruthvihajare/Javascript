
console.warn("============find vowles===============")
function string(givenString){
for (let index = 0; index <givenString.length; index++) {
    let char=givenString.charAt(index);
    if(char=="A" || char=="E"||char=="I"||char=="O"||char=="U" ||char=="a" || char=="e"||char=="i"||char=="o"||char=="u")
    console.log(char)
}
}
string("I love JavaScript")
console.warn("==========addition of number 1 to 10==============")
let sum=0;
for (let i = 0; i <=10; i++) {
    sum=sum+i;
}
console.log(sum)


console.warn("============Five table=================")

function table()
{
for (let index = 5; index <=50; index=index+5){
    console.log(index)

}

}
table()
console.warn("===========seven table========")
function sevenTable(){
    var a=7;
    while (a<=70) {
        console.log(a)
        a=a+7
      
    }
}
sevenTable()



console.warn("===========square of 1to 5 and sum the number========")
function squareNumber(){
var som=1;
let square=0
for (let i =1; i <=5; i++) {
    
 som=i*i;
 square=som+square;
 
}
console.log(square)
}
squareNumber();

console.warn("find even  char from string")
var string="I love JavaScript";
var removeSpace=string.split(" ").join("")
console.log(removeSpace)
 for (let i= 0; i<=removeSpace.length; i++) {
 var char=removeSpace.charAt(i)
    if(i%2==0){
        console.log(char)
    }
    // else(i%2!==0)
    // console.log(char)
 }


 console.warn("find  odd char from string")
var string="I love JavaScript";
var removeSpace=string.split(" ").join("")
console.log(removeSpace)
 for (let i= 0; i<=removeSpace.length; i++) {
 var char=removeSpace.charAt(i)
    if(i%2!==0){
        console.log(char)
    }
    
 }
