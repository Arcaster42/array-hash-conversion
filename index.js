function arrayToHash(keyArray, valueArray, incStart) {
    let obj = {}
    for (let i = 0; i < keyArray.length; i++) {
        if (valueArray) {
            obj[keyArray[i]] = valueArray[i]
        } else {
            obj[keyArray[i]] = incStart + i
        }
    }
    return obj
}

module.exports = arrayToHash