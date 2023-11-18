const repeatString = function(word, amount) {
    let resultString = '';
    if (!amount || amount <= 0){
        return ''
    }

    for (let i = 0; i < amount; i++){
        resultString += word;
    }
    return resultString


};

// Do not edit below this line
module.exports = repeatString;
