/* A cinema
Problem
b boys and g girls went to the cinema and bought tickets for consecutive seats in the same row. Write a function that will tell you how to sit down for boys and girls, so that at least one girl sits next to each boy, and at least one boy sits next to each girl.

picture

The format of the input data
The input contains two numbers: b and g (both numbers are natural).

Output format
The function should return any string that contains exactly b characters 'B' (denoting boys) and g characters 'G' (denoting girls), satisfying the condition of the problem. You do not need to print spaces between characters. If it is not possible to seat boys and girls according to the task conditions, the function should return null, None, etc. depending on programming language.

Examples
cinema(1,1) === "BG" (the result like "GB" is also valid)
cinema(5,5) === "BGBGBGBGBG" (the result like "GBGBGBGBGB" is also valid)
cinema(5,3) === "BGBGBBGB" (the results like "BGBBGBBG" or "BGBBGBGB" and so on are also valid)
cinema(3,3) === "BGBGBG" (the result like "GBGBGB" is also valid)
cinema(100,3) === null
*/

function cinema(boys,girls) {
  
    if(Math.min(boys,girls) / Math.max(boys,girls) < 0.5){
      return null
    }
    

    let totalLength=boys+girls

    let counterB=boys
    let counterG=girls
    let acc=[]
    
    if(counterB >= counterG){
        counterB--
      acc.push('B')
    }else{
        counterG--
      acc.push('G')
    }

    for(let i=1;i < totalLength;i++){

      if(acc[i-1] == 'B' & counterG > 0){
        counterG--
        acc.push('G')

      }else if(acc[i-1] == 'G' & counterB > 0){
        counterB--
        acc.push('B')

      }else if(acc[i-1] == 'B' & counterG == 0){ 
        
        let indextoInt=acc.findIndex((val,index,acc)=>{
          return index != 0 & acc[index-1] == 'G' & val=='B' 
        })

        counterB--
        acc.splice(indextoInt,0,'B')
        
      }else if(acc[i-1] == 'G' & counterB == 0){

        let indextoInt=acc.findIndex((val,index,acc)=>{
            return index != 0 & acc[index-1] == 'B' & val=='G' & acc[index+1] == 'B'
          })
          console.log('index to splice:',indextoInt)
          counterG--
        acc.splice(indextoInt,0,'G')
        
      }
    
    }
    
    return acc.join('')
    
}


console.log(cinema(3,6))