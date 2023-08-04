// Write a function that takes in an array of numbers. 
// The function should return True if any two numbers in list sum to 0, 
// and false otherwise.

function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr.includes(-arr[i])) {
        return true;
      }
    }
    return false;
}

// Runtime: O(n^2)
// Space complexity: O(1)

console.log('Sum Zero')
console.log(sumZero([]))
console.log(sumZero([1]))
console.log(sumZero([1,2,3]))
console.log(sumZero([1,2,3,-2]))


// Write a function that takes in a single word, as a string. 
// It should return True if that word contains only unique characters. 
// Return False otherwise.

function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
}


// Runtime: O(n)
// Space complexity: O(n)
console.log('Unique Chars')
console.log(hasUniqueChars('Monday'))
console.log(hasUniqueChars('Moonday'))


// A pangram is a sentence that contains all the letters of the English alphabet 
// at least once, like “The quick brown fox jumps over the lazy dog.”
// Write a function to check a sentence to see if it is a pangram or not.

function isPangram(sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lower = sentence.toLowerCase();
  
    for (let i = 0; i < alphabet.length; i++) {
      if (!lower.includes(alphabet[i])) {
        return false;
      }
    }
  
    return true;
}

// Runtime: O(n)
// Space complexity: O(1) 

console.log('Pangram')
console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
console.log(isPangram("I like cats, but not mice"))


// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

function longestWord(words) {
    let longestWordLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWordLength) {
        longestWordLength = words[i].length;
      }
    }
  
    return longestWordLength;
}

// Runtime: O(n)
// Space complexity: O(1)


console.log('Longest Word')
console.log(longestWord(['hi', 'hello']))
console.log(longestWord(['tea', 'top']))
console.log(longestWord(['play', 'waterfall']))
