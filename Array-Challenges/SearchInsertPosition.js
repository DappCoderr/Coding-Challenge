// Search Insert Position in an array

// Given a sorted array of distinct integers and a target value, 
// return the index if the target is found. If not, 
// return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [1,3,5,6,7], target = 4
// Output: 2

// We are using Binary Search Algo for such kind of problem


var searchInsert = (nums, target) => {
    let low = 0                 
    let high = nums.length - 1

    while (low <= high) {
        const mid = Math.floor((low+high)/2)

        if(nums[mid] === target){
            return mid
        } else if (nums[mid] < target){
            low = low + 1
        } else {
            high = high - 1
        }
    }
    return low
}

// nums = [1,3,5,6], target = 5

// low = 1 / 0
// high = 6 / 3

// mid = 0+3/2 = 3 / 1

// 3 < 5 { low = 1 , high = 2}
// mid = 3/2 = 1.5 = 1
// 3 < 5 { low = 2, high = 1}