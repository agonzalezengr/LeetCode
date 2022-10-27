/**
 * @param {string} s
 * @return {number}
 * Given a string s, find the length of the longest substring without repeating characters.
 */
 var lengthOfLongestSubstring = function(s) {
  // iterate through the string s
  // store every substring before any of char repeats
  // compare length sizes and return the largest one
//debugger;
  var obj = {};
  var string = [];
  var start = 0;
debugger;
  for (let i = 0; i < s.length; i++) {
    if (!obj.hasOwnProperty(s[i])) {
      obj[s[i]] = 1;
    } else {
      string.push(s.slice(start, i));
      start = i;
      obj = {};
    }
  }

  string.sort((a,b) => a.length - b.length);
  return string[string.length - 1];


};

// tests
var s = "abcabcbb"
console.log(lengthOfLongestSubstring(s)); // "abc"