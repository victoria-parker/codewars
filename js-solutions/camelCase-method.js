/* CamelCase Method
DESCRIPTION:
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
*/

String.prototype.camelCase=function(){ 
   return this == '' ? '' : this.trim().split(' ').map(e=>e[0].toUpperCase().concat(e.slice(1))).join('')
}

console.log("".camelCase())