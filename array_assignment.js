const fruits=["Banana","Orange","Apple","Mango","water Melon"]
console.log(fruits)
console.warn("log the first element and last element on console")
console.log(`First Element ${fruits[0]}    Last Element ${fruits[4]}`)

console.warn("====add element=======")
fruits.unshift("Papaya")
console.log(fruits)
console.warn("remove Mango")
fruits.splice(4,1)
console.log(fruits);

console.warn("add element at last")
fruits.push("Pineapple")
console.log(fruits)

console.warn("add element before Water malon")

fruits.splice(4,0,"Dragon fruit")
console.log(fruits)

console.warn("replace element orange with kiwi")
fruits.splice(2,1,"kiwi")
console.log(fruits)

console.warn("total element")
console.log(fruits)

console.warn("last three element")
fruits.splice(3)
console.log(fruits)

console.warn("Travels the array using for loop")
for (const element of fruits) {
    console.log(element)
}