const getRange = (start, end, step) => {
    arr = []
    if(!step){step = 1}
    for(var i = start; start <= end ? i <= end : i >=  end; i+=step){
        arr.push(i)
    }
    return arr
}

// console.log(getRange(1, 10, 2));

function sum(arry) {
    reducer = (acc, currentValue) => acc + currentValue 
    return arry.reduce(reducer)
}

// console.log(sum(getRange(1, 10, 2)));

function reverseArray(arr){
    let newArray = []
    for(var i = arr.length-1; i >= 0; i--){
        newArray.push(arr[i])

    }
    return newArray
}

function reverseArray(arr) {
    var newArray = [];
    for (var i = arr.length - 1; i >= 0; i--) {
      newArray.push(arr[i]);
    }
    return newArray;
  }
let testArray = [1, 2, 3, 4, 5]

// console.log(reverseArray(testArray));

let arr = [ [ 994, 1008 ], [ 11392, 11508 ], [ 11513, 11520 ] ]

function flattenDeep(arr){
    return arr.reduce((acc, val) => Array.isArray(val)? acc.concat(flattenDeep(val)) : acc.concat(val), [])
}
console.log(flattenDeep(arr));



