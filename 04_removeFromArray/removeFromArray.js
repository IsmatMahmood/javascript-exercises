const removeFromArray = function(arr, remove) {
    for (i=0; i< arr.length;i++){
        if (remove.includes(arr[i]))
            console.log("true")
        else
            console.log("false")
    }
   // const result = arr.filter(x => remove.includes(x) != true )
    
   // return result;
};

// Do not edit below this line
module.exports = removeFromArray;
