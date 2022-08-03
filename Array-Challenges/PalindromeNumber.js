// Palindrome Number Challenge

// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.


var palindrome = (x) => {

    var num = x.toString()
    var reverseNum = ""

    for(let i=num.length - 1; i >= 0; i++){
        reverseNum += num[i];
    }

    return(reverseNum === num)
}