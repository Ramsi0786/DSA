# 07 — Strings

---

## What is a String?

A **String** is a **sequence of characters** stored one after another in memory.

**Simple words:** A string is just a collection of letters, numbers, symbols, or spaces put together. When you type your name, that is a string. When you write a sentence, that is a string.

**Real-world analogy:** A string is like a chain of beads where each bead is one character. The whole chain together forms a word or sentence.

**Examples:**
```js
let name = "Arjun";
let greeting = "Hello, World!";
let number = "12345";      // digits as string
let mixed = "abc@123";     // letters + symbols
let empty = "";            // empty string
```

---

## How Strings are Stored in Memory

A string is stored as an **array of characters** in memory. Each character occupies one memory slot and has an index starting from 0.

```
String:   "H  e  l  l  o"
Index:     0  1  2  3  4
```

- Each character is stored using its **ASCII value** (a number that represents the character)
- Example: 'A' = 65, 'a' = 97, '0' = 48

---

## String Immutability

In many languages like **JavaScript, Java, and Python**, strings are **immutable**.

**Simple words:** Once a string is created, you cannot change individual characters inside it. If you want to modify a string, a new string is created in memory.

```js
let str = "hello";
str[0] = "H";          // this does NOT work in JavaScript
console.log(str);      // still "hello"

// correct way — create a new string
let newStr = "H" + str.slice(1);
console.log(newStr);   // "Hello"
```

---

## String Indexing and Length

```js
let str = "hello";

console.log(str[0]);        // 'h' — first character
console.log(str[4]);        // 'o' — last character
console.log(str.length);    // 5 — number of characters
console.log(str[str.length - 1]); // 'o' — last character using length
```

---

## Basic String Operations

### Create a String
```js
let str1 = "hello";           // using double quotes
let str2 = 'world';           // using single quotes
let str3 = `hello world`;     // using backticks (template literal)
```

### Concatenation — Joining Strings
```js
let first = "Hello";
let second = "World";
let result = first + " " + second;
console.log(result);  // "Hello World"

// using template literal
let result2 = `${first} ${second}`;
console.log(result2); // "Hello World"
```

### Access a Character — O(1)
```js
let str = "hello";
console.log(str[1]);        // 'e'
console.log(str.charAt(1)); // 'e'
```

### Slice — Extract Part of String
```js
let str = "hello world";
console.log(str.slice(0, 5));   // "hello" — index 0 to 4
console.log(str.slice(6));      // "world" — index 6 to end
console.log(str.slice(-5));     // "world" — last 5 characters
```

### Substring
```js
let str = "hello world";
console.log(str.substring(0, 5));  // "hello"
console.log(str.substring(6, 11)); // "world"
```

### Convert Case
```js
let str = "Hello World";
console.log(str.toUpperCase()); // "HELLO WORLD"
console.log(str.toLowerCase()); // "hello world"
```

### Trim — Remove Whitespace
```js
let str = "   hello   ";
console.log(str.trim());        // "hello"
console.log(str.trimStart());   // "hello   "
console.log(str.trimEnd());     // "   hello"
```

### Replace
```js
let str = "hello world";
console.log(str.replace("world", "everyone")); // "hello everyone"
console.log(str.replaceAll("l", "r"));         // "herro worrd"
```

### Split — String to Array
```js
let str = "apple,banana,mango";
let arr = str.split(",");
console.log(arr); // ["apple", "banana", "mango"]

let chars = "hello".split("");
console.log(chars); // ["h", "e", "l", "l", "o"]
```

### Join — Array to String
```js
let arr = ["hello", "world"];
console.log(arr.join(" ")); // "hello world"
console.log(arr.join("-")); // "hello-world"
```

### Search in String
```js
let str = "hello world";
console.log(str.indexOf("world"));    // 6 — index where found
console.log(str.indexOf("xyz"));      // -1 — not found
console.log(str.includes("hello"));   // true
console.log(str.startsWith("hello")); // true
console.log(str.endsWith("world"));   // true
```

### Repeat
```js
let str = "ab";
console.log(str.repeat(3)); // "ababab"
```

### Reverse a String
```js
let str = "hello";
let reversed = str.split("").reverse().join("");
console.log(reversed); // "olleh"
```

---

## String Traversal

### Using for loop
```js
let str = "hello";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}
```

### Using for...of loop
```js
let str = "hello";
for (let char of str) {
  console.log(char);
}
```

---

## Character Codes (ASCII)

Each character has a numeric code called ASCII value.

```js
console.log("A".charCodeAt(0)); // 65
console.log("a".charCodeAt(0)); // 97
console.log("0".charCodeAt(0)); // 48

// Convert code back to character
console.log(String.fromCharCode(65)); // "A"
console.log(String.fromCharCode(97)); // "a"
```

**Important ASCII values to remember:**

| Character | ASCII Value |
|---|---|
| 'A' to 'Z' | 65 to 90 |
| 'a' to 'z' | 97 to 122 |
| '0' to '9' | 48 to 57 |
| Space ' ' | 32 |

**Simple trick:** Difference between uppercase and lowercase = 32
- 'a' - 'A' = 97 - 65 = 32
- To convert 'A' to 'a' → add 32
- To convert 'a' to 'A' → subtract 32

---

## String Comparison

```js
console.log("apple" === "apple");  // true
console.log("apple" === "Apple");  // false — case sensitive
console.log("apple" < "banana");   // true — compared alphabetically
console.log("a".charCodeAt(0) < "b".charCodeAt(0)); // true — 97 < 98
```

---

## Useful Built-in String Methods (JavaScript)

| Method | What it does | Example |
|---|---|---|
| length | Number of characters | str.length |
| charAt(i) | Character at index i | str.charAt(0) |
| charCodeAt(i) | ASCII value at index i | str.charCodeAt(0) |
| indexOf(x) | First index of x | str.indexOf('e') |
| lastIndexOf(x) | Last index of x | str.lastIndexOf('l') |
| includes(x) | Check if x exists | str.includes('hello') |
| startsWith(x) | Starts with x? | str.startsWith('he') |
| endsWith(x) | Ends with x? | str.endsWith('lo') |
| slice(a, b) | Extract from a to b | str.slice(1, 3) |
| substring(a, b) | Extract from a to b | str.substring(1, 3) |
| toUpperCase() | Convert to uppercase | str.toUpperCase() |
| toLowerCase() | Convert to lowercase | str.toLowerCase() |
| trim() | Remove spaces both ends | str.trim() |
| replace(a, b) | Replace a with b | str.replace('l', 'r') |
| replaceAll(a, b) | Replace all a with b | str.replaceAll('l', 'r') |
| split(sep) | Split into array | str.split(',') |
| repeat(n) | Repeat string n times | str.repeat(3) |
| padStart(n, x) | Pad x at start to length n | str.padStart(5, '0') |
| padEnd(n, x) | Pad x at end to length n | str.padEnd(5, '0') |

---

## Time Complexity of String Operations

| Operation | Time Complexity | Reason |
|---|---|---|
| Access character by index | O(1) | Direct index access |
| Find length | O(1) | Length stored separately |
| Search (indexOf, includes) | O(n) | May scan entire string |
| Concatenation | O(n) | New string created each time |
| Slice / Substring | O(n) | New string created |
| Traversal | O(n) | Visit every character |
| Reverse | O(n) | Visit every character |
| Replace | O(n) | Scan entire string |
| Split | O(n) | Scan entire string |
| Compare two strings | O(n) | Compare character by character |

---

## Advantages of Strings

- Easy to use and manipulate
- Rich set of built-in methods available in most languages
- Can represent any text data — names, sentences, codes
- Immutability makes strings safe to share across the program

## Disadvantages of Strings

- **Immutability** means every modification creates a new string — can be memory heavy
- **Concatenation in a loop** is inefficient — use array join instead
- **No direct character modification** — must create a new string

---

## Common String Patterns (Important for Problem Solving)

### Check if Palindrome
```js
function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
```

### Count Vowels
```js
function countVowels(str) {
  let count = 0;
  for (let char of str.toLowerCase()) {
    if ("aeiou".includes(char)) count++;
  }
  return count;
}
console.log(countVowels("Hello World")); // 3
```

### Check Anagram
```js
function isAnagram(str1, str2) {
  let sort1 = str1.toLowerCase().split("").sort().join("");
  let sort2 = str2.toLowerCase().split("").sort().join("");
  return sort1 === sort2;
}
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false
```

### Frequency Count of Characters
```js
function charFrequency(str) {
  let freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}
console.log(charFrequency("hello"));
// { h: 1, e: 1, l: 2, o: 1 }
```

---

## Quick Revision Table

| Term | Simple Meaning |
|---|---|
| String | Sequence of characters stored one after another |
| Immutability | String cannot be changed after creation |
| ASCII | Numeric code representing each character |
| Concatenation | Joining two or more strings together |
| Traversal | Visiting each character one by one |
| Palindrome | String that reads same forward and backward |
| Anagram | Two strings with same characters in different order |
| Split | Breaking a string into an array of parts |
| Slice | Extracting a portion of a string |

---

## Viva Q&A

**Q1. What is a String?**
A String is a sequence of characters stored one after another in memory. It can contain letters, numbers, symbols, and spaces. In most programming languages, strings are enclosed in quotes.

**Q2. How is a String stored in memory?**
A string is stored as an array of characters in memory. Each character occupies one memory slot and is stored using its ASCII value. Each character has an index starting from 0.

**Q3. What is String Immutability?**
String Immutability means that once a string is created, its characters cannot be changed directly. Any modification to a string creates a new string in memory. Languages like JavaScript, Java, and Python have immutable strings.

**Q4. What is ASCII? Why is it important in strings?**
ASCII stands for American Standard Code for Information Interchange. It is a numeric code that represents each character. For example, 'A' is 65, 'a' is 97, and '0' is 48. ASCII values are used to compare characters, convert cases, and perform character-level operations in strings.

**Q5. What is the time complexity of accessing a character in a string?**
O(1), because characters are stored like an array and can be accessed directly using an index.

**Q6. What is the time complexity of string concatenation?**
O(n), because when two strings are concatenated, a new string must be created by copying all characters from both strings into the new one.

**Q7. What is the difference between slice and substring in JavaScript?**
Both extract a portion of a string. slice accepts negative indices to count from the end, while substring does not support negative indices and treats them as 0. For example, str.slice(-5) returns the last 5 characters, but str.substring(-5) is treated as str.substring(0).

**Q8. What is the difference between indexOf and includes?**
indexOf returns the index position where the search value is first found, or -1 if not found. includes returns a boolean true or false indicating whether the search value exists in the string.

**Q9. How do you reverse a string in JavaScript?**
By splitting the string into an array of characters using split, reversing the array using reverse, and joining it back into a string using join. Example: str.split("").reverse().join("").

**Q10. What is a Palindrome string? Give an example.**
A Palindrome is a string that reads the same forward and backward. Examples are "racecar", "madam", and "level". To check palindrome, we compare the string with its reversed version.

**Q11. What is an Anagram? Give an example.**
An Anagram is when two strings contain the same characters but in a different order. For example, "listen" and "silent" are anagrams. To check, we sort both strings and compare them.

**Q12. What is the split method in strings?**
The split method breaks a string into an array of substrings based on a separator. For example, "a,b,c".split(",") gives ["a", "b", "c"]. If we split by empty string split(""), each character becomes a separate element.

**Q13. Why is concatenation inside a loop inefficient?**
Because strings are immutable, every concatenation creates a new string and copies all characters. If done inside a loop n times, it results in O(n²) total work. The efficient way is to push all parts into an array and join at the end, which is O(n).

**Q14. What is the difference between toUpperCase and charCodeAt for case conversion?**
toUpperCase is a built-in method that converts the entire string to uppercase directly. charCodeAt gives the ASCII value of a character, which can be used to manually convert case by adding or subtracting 32, since the difference between uppercase and lowercase ASCII values is always 32.

**Q15. What are the real-world applications of Strings?**
Strings are used everywhere — storing names, addresses, and messages in databases, URL processing in web applications, text search and pattern matching in search engines, parsing and processing JSON or XML data, encryption and hashing of passwords, and natural language processing in AI applications.

---