/* eslint-disable no-unused-vars */

function accessor(obj) {
    return (property, value) => {
        if (value === undefined) return obj[property]
        else obj[property] = value
    }
}
