// Palindrome Challenge

var stack = [];
var word = "pop"
var reword = "";

for(let i=0; i<word.length; i++){
    stack.push(word[i]);
}

for(let i=0; i<word.length; i++){
    reword += stack.pop(word[i]);
}

if( word === reword){
    console.log(word + " is palindrome");
} else {
    console.log(word + " is not palindrome");
}