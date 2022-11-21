/* eslint-disable no-unused-vars */


function vowelsCount (str) {
    str = str.toLowerCase()
    let vowels = "aeiou"
return str.split('').reduce((accum, idx) => {
    if (vowels.includes(idx)) {
        accum[idx]++
        accum.total++
    }
    return accum
}
 ,{a: 0, e: 0, i: 0, o: 0, u: 0, total: 0}
)
}