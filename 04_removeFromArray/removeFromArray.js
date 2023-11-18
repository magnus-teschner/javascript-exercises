const removeFromArray = function(arr, ...removeValues) {
    const toRemove = [];

    removeValues.forEach((remove) =>{
        for (let i = 0; i < arr.length; i++){
            if (arr[i] === remove){
                toRemove.push(i);
            }
        }
    })

    

    toRemove.forEach((i) => {
        delete arr[i]
    })

    const new_arr = arr.filter(x => x !== undefined)

    return new_arr


};

// Do not edit below this line
module.exports = removeFromArray;
