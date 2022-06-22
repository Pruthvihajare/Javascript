console.warn("print the 10 to 1 number")
for (let index = 10; index >0; index=index-1) {
    console.log(index)
    
}

console.warn("first 15 odd number")
for (let index = 1; index <31; index++) {
   if(index%2===1) {
        console.log(index)
        
}
}

console.warn("prime number from 1 to 50")
for (let index = 2; index <50; index++) {
    for(j=2;j<=index;j++){
        if(index%j==0){
            break;
        }
    }

   if(index==j){
       console.log(index)
   }
    
  }

  console.warn("number from 30 to 20")
  for (let index=30; index>19 ; index--) {
    console.log(index)
    
  }