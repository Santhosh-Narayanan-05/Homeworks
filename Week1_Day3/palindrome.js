function reverseString(string) { 

    let chars = string.split("");
    let reversed = "";
    for (let i = chars.length - 1; i >= 0; i--) {
        reversed += chars[i];
    }
    
    return reversed;
}

function isPalindrome(string) {
    let reversed = reverseString(string);
}
// Test the function with various strings and print the results
let testStrings = [
    "racecar",
    "hello",
    "madam",
    "javascript",
    "level"
];
console.log("--- Palindrome Checker Tests ---\n");
testStrings.forEach(testStrings => {
    console.log(`Testing string: "${testStrings}"`);
    const reversedString = reverseString(testStrings);
    console.log(`Reversed string: "${reversedString}"`);
    
    const result = isPalindrome(testStrings);
    console.log(`Is "${testStrings}" a palindrome? ${result}\n`);
});