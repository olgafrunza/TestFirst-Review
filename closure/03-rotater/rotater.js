/* eslint-disable no-unused-vars */
function rotater (str) {
    let rotate = false
    let rotatedStr
    
    return function (num) {
        if (str.length === num) {
            rotate = !rotate
        }
        if (!rotate) {
            rotatedStr = str.slice(num) + str.slice(0, num)
        } else {
            rotatedStr = str.slice(-num) + str.slice(0, str.length -num) 
        }
        return rotatedStr
    }
}



