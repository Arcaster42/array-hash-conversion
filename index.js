function arrayToHash(keyArray, valueArray, incStart = 0) {
    let obj = {}
    if (!valueArray || keyArray.length === valueArray.length) {
        for (let i = 0; i < keyArray.length; i++) {
            if (valueArray) {
                obj[keyArray[i]] = valueArray[i]
            } else {
                obj[keyArray[i]] = incStart + i
            }
        }
    }
    if (valueArray && valueArray.length < keyArray.length) {
        let j = 0
        for (let i = 0; i < keyArray.length; i++) {
            if (valueArray[j]) {
                obj[keyArray[i]] = valueArray[j]
                j++
            }
            else {
                j = 0
                obj[keyArray[i]] = valueArray[j]
                j++
            }
        }
    }
    return obj
}

module.exports = arrayToHash