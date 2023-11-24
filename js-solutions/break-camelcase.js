/* Break camelCase
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function solution(string) {
    let comparable=string.toLowerCase()
    
    let acc=[]
    
    for(let i=0; i<string.length; i++ ){
      string[i] == comparable[i] ? acc.push(string[i]) : acc.push(' ',string[i])
    }
  
    return acc.join('')
}
