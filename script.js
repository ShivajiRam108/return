
  //Q -1

  function sumOfTwoNumbers(r,s ){
    return `The sum of ${r} and ${s} is ${r+s}`
  }
  console.log(sumOfTwoNumbers(20,40))
 // Q -2

 function string(a){
    return a.toUpperCase();
}
 console.log(string('rajamouli'));

  //3. In JavaScript, what happens if you pass an undefined value as an argument to a function that expects a parameter?

      // Q -3
    
function parameter(x){
    return x;

}
console.log(parameter(undefined));

//4. Suppose you have a function that takes an array as a parameter. How would you check inside the function if the array is empty?
 
   // Q -4 

function takenArray(arr){
   if (arr.length == 0){
    return "Array is empty"
   }
   else if (arr%2==0){
     return "Array is  Divided into  2, then value is 0, so array is Empty "
   }
   else{
   return "Array  is not Divided into 2, then value is 1, so array has some content"
   }
}
console.log(takenArray([]));

//5. write a function that takes two numbers as parameters and returns their difference.
  

  // Q - 5

function differenceOfTwoNumbers(x,y){
    console.log( `Diffarence of ${x} and ${y} is ${x-y}`)

}
differenceOfTwoNumbers(20,90);

//6. Define a function that accepts a name and age as parameters, and returns a string with a greeting like "Hello, [name]! You are [age] years old."

   //  Q - 6

function accepts(name,age){
    return `Hello ${name}! You Are ${age} years old. `;
}
console.log(accepts('Ram','23'));

// 7. Write a function that takes a number as a parameter and returns true if the number is a even number, otherwise false. 

   // Q - 7

function numbers(number){
    if(number %2 == 0){
        console.log( ` The ${number} is Even. it's ture`)
    }
    else{
       console.log( `The ${number} is Odd.  it's flase`)
    }
}
numbers(51);
  
  
