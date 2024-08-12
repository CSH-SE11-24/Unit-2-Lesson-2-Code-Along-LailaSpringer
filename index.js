// IF STATEMENT REVIEW
// Day of the Week: Prompt the user to enter a day of the week (e.g., "Monday") and say whether it's a weekday or the weekend.
// .toLowercase() changes string to be lowerCase 
let user = prompt("Whats the day of the week?")
if (user === "Saturday" || user === "Sunday"){
  console.log( "Its the weekend,yay!!!")
} else{
  console.log("Its a week day,yay school!!!")
}




// Age Group Classifier: Prompt the user to enter their age and categorize them into different age groups (child, teen, adult, senior)
let age = prompt("What is your age")
// returns age as an number
age = parseInt(age)
if (age < 0){
  console.log(" Thats not an age")
  
} else if (age <= 12){
  console.log ("you are a child!")
  
} else if (age <=18){
  console.log(" You are a teen")
  
} else{
  console.log ("RIP you lived a good life")
}



// WHILE LOOPS
// Print 1 to 5
let i = 1
// asigning i to the value of 1 
while(i <=5){
  console.log(i)
i ++
}
  // adds one to i 



// Print from a certain number to 1
let use = prompt("enter a number")
use = paresInt(use)
while (use > 0){
  console.log (use)
  use-- // user -= 1 or user - 1 



// Summing up to 5
let sum = 0
  let counter

  // sum 1+2+3+4+5
  while (counter <=5)
    sum = counter +sum 
  counter++
}
console.log ("sum of 1-5", sum)


// Using prompt
mysteryStudent = "Laila"
  let use2 = promt("Enter a student name")
  console.log(use2)
while (mysteryStudent!== use2){
use2 = prompt ("Try again, guess a different student")
} 
  console.log ("Good Job")
}