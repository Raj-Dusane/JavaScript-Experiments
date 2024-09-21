// Function to replace characters using standard string methods
function replaceCharacters() {
    let input = document.getElementById('inputString').value;
    const charToReplace = document.getElementById('replaceChar').value;
  
    // Validate if both input and charToReplace are provided
    if (!input || !charToReplace) {
      document.getElementById('result').innerText = `Please enter both a string and a character to replace.`;
      return;
    }
  
    // Perform replacement using standard string methods
    const replacedString = input.replace(new RegExp(charToReplace, 'g'), '@');
    document.getElementById('result').innerText = `Replaced String (Using Methods): ${replacedString}`;
  }
  
  // Function to replace characters without using standard string methods
  function replaceCharactersWithout() {
    let input = document.getElementById('inputString').value;
    const charToReplace = document.getElementById('replaceChar').value;
  
    // Validate if both input and charToReplace are provided
    if (!input || !charToReplace) {
      document.getElementById('result').innerText = `Please enter both a string and a character to replace.`;
      return;
    }
  
    // Perform replacement without standard string methods
    let replacedString = '';
    for (let i = 0; i < input.length; i++) {
      if (input[i] === charToReplace) {
        replacedString += '@';
      } else {
        replacedString += input[i];
      }
    }
  
    document.getElementById('result').innerText = `Replaced String (Without Methods): ${replacedString}`;
  }
  
  // Function to check if a string is a palindrome
  function checkPalindrome() {
    const input = document.getElementById('palindromeString').value;
  
    // Validate if input is provided
    if (!input) {
      document.getElementById('result').innerText = `Please enter a string to check for palindrome.`;
      return;
    }
  
    // Normalize input by removing non-alphanumeric characters and converting to lowercase
    const normalizedInput = input.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  
    // Check for palindrome without using standard string methods
    let isPalindrome = true;
    for (let i = 0, j = normalizedInput.length - 1; i < j; i++, j--) {
      if (normalizedInput[i] !== normalizedInput[j]) {
        isPalindrome = false;
        break;
      }
    }
  
    if (isPalindrome) {
      document.getElementById('result').innerText = `"${input}" is a Palindrome.`;
    } else {
      document.getElementById('result').innerText = `"${input}" is not a Palindrome.`;
    }
  }
  