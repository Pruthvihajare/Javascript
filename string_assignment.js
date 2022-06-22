var sentence="  Hey you are doing good, keep it up   ";
console.log("1.",sentence);
console.log("2. length of string=",sentence.length);
var trimComment= sentence.trim();
console.log("3. After removing space string is:",trimComment,"          after removing space length is",trimComment.length);
console.log("4. total no. of extra spaces remove",sentence.length-trimComment.length);
console.log("5. First character is:", trimComment.charAt(0),"Last character is ",trimComment.charAt(33));
var value= trimComment.split(" ");
console.log(value);
console.log("6. total number of words in string:",value.length)
var indexOff=trimComment.indexOf("good");
console.log("7. index of word good is:",indexOff)
var hello=trimComment.substring(22);
console.log("8. substring starting from index 22:",hello);
var ends=trimComment.startsWith("up");
console.log("9. string end with word up:-",ends)
var number="150.356780";
var number1="527.0678945";
var number2=parseFloat(number);
var number3=parseFloat(number1);
console.log("10. Addition of two string no",number2+number3);
