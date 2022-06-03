// Cyclically rotate an array by one 

// Input:
// N = 5
// A[] = {1, 2, 3, 4, 5}
// Output:
// 5 1 2 3 4


var n = 5;
let array = [1, 2, 3, 4, 5]

function cyclicarray(a){
    let tem = array[array.length - 1];

    for(let i = a-1; i > 0; i--){
        array[i] = array[i-1];
    }
    array[0] = tem
    console.log(array)
}

cyclicarray(n);