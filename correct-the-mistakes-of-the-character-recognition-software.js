/* Correct the mistakes of the character recognition software
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.

FUNDAMENTALSSTRINGS
*/

function correct(string)
{
  let acc=string
  
  if(acc.includes(5)){
    acc=acc.replace(/5/g,'S')
  }
  if(acc.includes(0)){
    acc=acc.replace(/0/g,'O')
  }
  if(acc.includes(1)){
    acc=acc.replace(/1/g,'I')
  }
  
  return acc
}