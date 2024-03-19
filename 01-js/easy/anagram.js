/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let n1 = str1.length;
  let n2 = str2.length;

  if (n1 != n2) {
    return false;
  }

  let str1Array = [];
  let str2Array = [];

  for (let i = 0; i < str1.length; i++) {
    str1Array.push(str1[i].toLowerCase());
  }

  for (let i = 0; i < str2.length; i++) {
    str2Array.push(str2[i].toLowerCase());
  }

  str1Array.sort();
  str2Array.sort();

  for (let i = 0; i < str1Array.length; i++) {
    if (str1Array[i] != str2Array[i]) {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
