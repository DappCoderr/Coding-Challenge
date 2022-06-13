// Given an integer array nums, return all the triplets 
// [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k,  
// nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

var threeSum = function(nums){
    const array = [];
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            for(let k=j+1; k<nums.length; k++){
                if( nums[i]+nums[j]+nums[k] == 0){
                    array.push([nums[i],nums[j],nums[k]]);
                }
            }
        }
    }
    return array;
}

threeSum([-1,0,1,2,-1,-4]);