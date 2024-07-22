function countVowels(word) {
    // Define the vowels
    const vowels = 'aeiou';
    // Initialize count
    let count = 0;


    // Iterate through each character in the word //
    for (let char of word) {
        // Check if the character is a vowel //
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}


const word = 'strawberry';
const vowelCount = countVowels(word);
console.log(`The number of vowels in '${word}' is ${vowelCount}.`);
