/* Sentences should start with capital letters.
DESCRIPTION:
In English, all words at the begining of a sentence should begin with a capital letter.

You will be given a paragraph that does not use capital letters. Your job is to capitalise the first letter of the first word of each sentence.

For example,

input:

"hello. my name is inigo montoya. you killed my father. prepare to die."

output:

"Hello. My name is inigo montoya. You killed my father. Prepare to die."

You may assume:

there will be no punctuation besides full stops and spaces

all but the last full stop will be followed by a space and at least one word

STRINGS FUNDAMENTALS
*/

function fix(paragraph){
  
    if(paragraph == ""){
      return ""
    }
    
    let sentences=paragraph.split(". ")
    
    
    let capSentences=sentences.map(sentence=>sentence[0].toUpperCase()+sentence.slice(1))
    
    return capSentences.join(". ")

}

