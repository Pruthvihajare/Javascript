function numberSquare(number){
let number1=number*number;
return number1
}
console.log("1.  Square of given number:5 is",numberSquare(5));
console.log("1.  square of given number :6 is",numberSquare(6));
console.log("1.  Square of given number:25 is",numberSquare(25));
console.log("1.  Square of given number:100 is",numberSquare(100));
console.log("2.  Type of function is:",typeof numberSquare);
 
function areaOfTraingle(base,hight){
    let multi=base*hight
    var area =multi/2
    return area;
}
console.log("3.  Area of traingle for base=45,hight=34 is :",areaOfTraingle(45,34)) 

function checkNumber(a) {
    console.log("4. ", a==0? `${a} is zero` : a>0 ? `${a} is positive number` : `${a} is negative number`);
}
checkNumber(-56)
checkNumber(0.567)
checkNumber(890)
checkNumber(00)
function checkLeapYear(y){
    console.log("7. ", y%4==0 ? `${y} This is leap year` : `${y} This is not leap year` )
}
checkLeapYear(2020)
checkLeapYear(1999)
checkLeapYear(2022)