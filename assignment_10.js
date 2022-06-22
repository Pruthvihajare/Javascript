function checkEligibility(gender,age) {
if(age<18 || age>100 || gender=="other"){
console.log(`you are not are eligible for marriage because of your age ${age}"or invalid input ${gender}`)
}

else{ if(gender=="female"&& age>18 ){
    console.log(`you are eligible for marriage ${gender} ${age}`)
}
else{
    console.log(`you are eligible for marriage ${gender} ${age}`)
}
}

}
checkEligibility("male",17)
checkEligibility("male",25)
checkEligibility("female",28)
checkEligibility("female",16)
checkEligibility("other",35)
checkEligibility("other",41)