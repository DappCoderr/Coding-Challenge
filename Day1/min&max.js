// Find minimum and maximum element in an array

// Input:
// N = 6
// A[] = {3, 2, 1, 56, 10000, 167}
// Output:
// min = 1, max =  10000

let array = [3, 2, 1, 56, 10000, 167]
let n = 6

function maxAndMin() {
    let max = array[0]
    let min = array[0]
    for(let i = 0; i < n; i++){
        if(array[i] > max){
            max = array[i]
        }

        if(array[i] < min){
            min = array[i]
        }
    }
    console.log(max)
    console.log(min)
}

maxAndMin()