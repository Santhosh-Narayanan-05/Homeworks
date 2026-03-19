
// Example 1 & 2: Length of Last Word
function lengthOfLastWord(s) {
    // 1. Trim the String to remove leading and trailing spaces
    let trimmedStr = s.trim();
    
    // 2. Split the String into Words   
    let wordsArray = trimmedStr.split(" ");
    
    // 3. Identify the Last Word
    let lastWord = wordsArray[wordsArray.length - 1];

}

console.log("Example 1:", lengthOfLastWord("Hello World")); 
// Output: 5

console.log("Example 2:", lengthOfLastWord("   fly me   to   the moon  ")); 
// Output: 4
// Example 3: Check if two strings are anagrams
function isAnagram(str1, str2) {
    // 1. Remove spaces and convert all letters to the same case 
    // (/s+/g replaces all spaces)
    let cleanStr1 = str1.replace(/\s+/g, '').toLowerCase();
    let cleanStr2 = str2.replace(/\s+/g, '').toLowerCase();
       
    // 2. Sort the Characters
    let sortedStr1 = cleanStr1.split('').sort().join('');
    let sortedStr2 = cleanStr2.split('').sort().join('');
    
    // 3 & 4. Compare Sorted Strings and Return the Result
    return sortedStr1 === sortedStr2;
}

console.log("Example 3 (listen, silent):", isAnagram('listen', 'silent')); 
// Output: true

console.log("Example 3 (hello, world):", isAnagram('hello', 'world')); 
// Output: false



