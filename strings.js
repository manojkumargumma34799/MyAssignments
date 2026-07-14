
// Find the length of the second word in a string
let str = "Hello World";
arr = str.split(" ");
console.log(arr[1].length);

// Find the length of the last word in a string
let s = " fly me to the moon "

console.log(s.trim().split(" ")[4].length)

// Check if two strings are anagrams

function isAnagram(str1, str2) {
    str1  = str1.toLowerCase().split("").sort().join("")
    str2 = str2.toLowerCase().split("").sort().join("")
     return str1 === str2


}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));

