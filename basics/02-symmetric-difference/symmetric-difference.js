// the difference function is pre-declared so it is recognized by the test specs.
// The last spec in symmetricDiff checks to see that difference is called.

// If difference is defined using an assignment expression (with let or const)
// it is not accessible on the "window" object which is where the jasmine `spyOn` function
// checks for the `difference` function.

// Feel free to change the names of the parameters, but if you want your specs to
// pass keep the function// declaration syntax.

/* eslint-disable no-unused-vars */

function difference(arrayA, arrayB) {
    return arrayA.filter((value) => {
        if (!arrayB.includes(value))
        return value
    })
}
//     let newArr = []
//     for (let i = 0; i < arrayA.length; i++) {
//         if (!arrayB.includes(arrayA[i]))
//         newArr.push(arrayA[i])
//     }
//     return newArr
// }


function symmetricDiff (array1, array2) {
    let newArr = []
    let difFirstarr = difference(array1, array2)
    let diffSecArr = difference(array2, array1)
    return [...difFirstarr,...diffSecArr]
}