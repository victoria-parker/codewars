/* You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

You can not use multiplier "*" operator.

If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character). */

function billboard(name, price = 30){
    //I create an accumulation variable to store the total price according to the amount of characters
    let totalPrice=0
    
    //I create an iteration variable 
    let i=0
    
    //I use the iteration variable, the accumulation variable and the while loop to sum the price for every character in name 
    while(i<name.length){
      totalPrice+=price
      i++
    }
    
    //I return the total price calculated
    return totalPrice
  } 