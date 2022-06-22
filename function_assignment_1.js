function name(){
    console.log(`1  Function with no argument and no return value : Rohit Sharma`)
}
name();

function firstName(firstName,lastName){
    console.log("2  function with argument and no return value : my name is", firstName,lastName)
}
firstName("Pruthviraj","Hajare")


function sentence(stringValue){
    
    var a=stringValue.split(" ")
    var b=a.length 
    console.log("3 Total Word in the given string" ,b);
    return b
}
sentence(`"I am learning javascript"`)
sentence("`Soon I am going to be IT champ")
   
function swapUsingThirdVariable(a,b){
    console.log("4. Before swap value: ",a,b);
    var c = a;
    var a = b;
    return a+c;
}
console.log("After swap value: ",swapUsingThirdVariable("Virat","Kohli "));

function swapWithoutUsingThirdVariable(number1,number2){
   console.log("5. Before swap value",number1,number2);
  var  number1 = number1 + number2;
  var  number2 = number1 - number2;
  var  number1 = number1 - number2;
    return "After swap value "+number1+number2;

}
var swapWithoutUsingThirdVariable = swapWithoutUsingThirdVariable(555,444  );
console.log(swapWithoutUsingThirdVariable);