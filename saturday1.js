//The FizzBuzz problem is a classic test given in coding interviews.
//The task is simple: Print integers 1 to N, but print "Fizz" if an integer is divisible by 3,
//"Buzz" if an integer is divisible by 5, and "FizzBuzz" if an integer is divisible by both 3 and 5.

// let fizzBuzz = (num) => {
//   for (let i = 1; i <= num; i++) {
//     if (i % 15 == 0) {
//       console.log("FizzBuzz")
//     } else if (i % 3 == 0) {
//       console.log("Fizz")
//     } else if (i % 5 == 0) {
//       console.log("Buzz")
//     } else console.log(i)
//   }
// }

//  fizzBuzz(100)

// let fizzBuzz = (num) => {
//   let result = []
//   for (let i = 1; i <= num; i++) {
//     if (i % 15 == 0) {
//       result.push("FizzBuzz")
//     } else if (i % 3 == 0) {
//       result.push("Fizz")
//     } else if (i % 5 == 0) {
//       result.push("Buzz")
//     } else result.push(i)
//   }
//   return result
// }

// let fizzBuzzResults = fizzBuzz(15)
// for (let i = 0; i < fizzBuzzResults.length; i++) {
//     console.log(fizzBuzzResults[i])
// }

// let list = fizzBuzzResults.join('\n')
// console.log(fizzBuzzResults)


// function reverseStr(str) {
//     let originalArray= str.split("")
//     let jointStr = ''
//     for (let i = originalArray.length - 1; (i >= 0); i--) {
//         jointStr += originalArray[i]
//     }
//     return jointStr
//   }

// reverseStr('The sky is blue')

// console.log(reverseStr('The sky is blue'))
// console.log(reverseStr('This is just a test'))
// console.log(reverseStr('This may also be a string backwards'))
// console.log(reverseStr('hello world'))


const shoppingList = [1,2,3,4,5]
const cart = [2,4]

//loop first array
for (let i = 0; i < shoppingList.length; i++) {
    //grab each element on shoppingList
    let shoppingListItem = shoppingList[i]
    //create a variable that keeps track if we found it in the cart
    let foundInCart = false
    //loop through second array
    for (let j = 0; j < cart.length; j++){
      let cartItem = cart[j]
      //check whether the element on the shoppingList exits in the index of the cart
      if (shoppingListItem === cartItem){
        //if it exists then set the variable foundInCart to true    
        foundInCart = true
      }
    }
    //if it does not exist in any element of the second array then
    //if (foundInCart === false){
    //if (foundInCart != true){
      if (!foundInCart){
      //push it to the final list
      finalList.push(shoppingListItem)
    }
  }
  
  
  console.log(finalList)
  