/* eslint-disable no-unused-vars */



 Array.prototype.maap = function(funcMap) {
    let newArr = []
    this.forEach(elem => {
       newArr.push(funcMap(elem)) 
    })
    return newArr
}



 Array.prototype.fiilter = function(funcFilt) {
     let newArr = []
     this.forEach(elem => {
      if(funcFilt(elem)) newArr.push(elem)  
     })
     return newArr
 }
 
 
 
 Array.prototype.reeduce = function(accum, total) {
     this.forEach(elem => {
         total = accum(total, elem) // ???????
     })
     return total
 }
 
