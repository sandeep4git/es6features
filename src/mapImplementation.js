var arr = [1, 2, 3, 4, 5];
var myMap = function (arr) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        arr[i] = operation(arr[i]);
        temp.push(arr[i]);
    }
    return temp;
}

function operation(ele) {
    return ele + 1;
}

console.log(myMap(arr));