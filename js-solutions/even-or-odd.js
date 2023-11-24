/* Even or Odd
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. */
function even_or_odd(number) {
    //I use a ternary to check if the number is even or odd and return the string accordingly
    return number % 2 == 0 ? 'Even' : 'Odd'
  }