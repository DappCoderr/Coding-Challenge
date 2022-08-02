//Stack Problem

// Palindrome challenge
// word  = racecar
// reword = racecar


var letter  = [];
var word = "racecar";
var reword = "";

for(let i=0; i<word.length; i++){
    letter.push(word[i]);
}

for(let i=0; i<word.length; i++){
    reword += letter.pop();
}

if( word === reword){
    console.log(word + " is a palindrome.")
} else {
    console.log(word + " is not a palindrome.")
}