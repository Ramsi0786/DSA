# 09 — Recursion

---

## What is Recursion?

**Recursion** is a technique where a **function calls itself** repeatedly until a specific condition is met to stop.

**Simple words:** Recursion is when a function solves a big problem by breaking it into smaller versions of the same problem and calling itself to solve each smaller version. It keeps calling itself until the problem becomes so small that it can be solved directly.

**Real-world analogy:** Standing between two mirrors facing each other. Each mirror reflects the other mirror, which reflects the other mirror, and so on — creating an infinite series of reflections. In recursion, we control this by having a stopping condition so it does not go on forever.

**Another analogy:** Russian nesting dolls (Matryoshka). You open a doll and find a smaller doll inside. You keep opening until you reach the smallest doll that cannot be opened. That smallest doll is the base case.

---

## Two Essential Parts of Recursion

Every recursive function MUST have exactly two parts:

### 1. Base Case
The condition that **stops the recursion**. Without a base case, the function will call itself forever and cause a **Stack Overflow**.

**Simple words:** The base case is the smallest version of the problem that we can solve directly without any more recursion.

### 2. Recursive Case
The part where the function **calls itself** with a smaller or simpler version of the problem.

**Simple words:** This is where we break the big problem into a smaller one and call ourselves again.

```js
function recursiveFunction(n) {
  // Base Case — stop condition
  if (n === 0) return;

  // Recursive Case — call itself with smaller input
  recursiveFunction(n - 1);
}
```

---

## How Recursion Works — The Call Stack

When a function calls itself, each call is added to the **Call Stack** — a stack in memory that keeps track of all active function calls.

**Simple words:** Think of the call stack as a stack of plates. Every time a function calls itself, a new plate is added on top. When the base case is reached, plates are removed one by one from the top until all are done.

**Example — countdown(3):**

```
countdown(3) called → added to stack
  countdown(2) called → added to stack
    countdown(1) called → added to stack
      countdown(0) called → BASE CASE → returns
    countdown(1) → resumes and returns
  countdown(2) → resumes and returns
countdown(3) → resumes and returns
```

**Stack view:**
```
| countdown(0) |  ← base case, starts returning
| countdown(1) |
| countdown(2) |
| countdown(3) |  ← first call
|______________|
   Call Stack
```

---

## Simple Recursion Examples

### Example 1 — Countdown
```js
function countdown(n) {
  if (n <= 0) {          // base case
    console.log("Done!");
    return;
  }
  console.log(n);
  countdown(n - 1);      // recursive case
}

countdown(5);
// Output: 5, 4, 3, 2, 1, Done!
```

### Example 2 — Factorial
Factorial of n = n × (n-1) × (n-2) × ... × 1
Example: 5! = 5 × 4 × 3 × 2 × 1 = 120

```js
function factorial(n) {
  if (n === 0 || n === 1) return 1;  // base case — 0! = 1! = 1
  return n * factorial(n - 1);       // recursive case
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
```

**How it works:**
```
factorial(5)
= 5 × factorial(4)
= 5 × 4 × factorial(3)
= 5 × 4 × 3 × factorial(2)
= 5 × 4 × 3 × 2 × factorial(1)
= 5 × 4 × 3 × 2 × 1
= 120
```

### Example 3 — Sum of Natural Numbers
```js
function sum(n) {
  if (n === 0) return 0;       // base case
  return n + sum(n - 1);       // recursive case
}

console.log(sum(5)); // 15 (5+4+3+2+1+0)
```

### Example 4 — Fibonacci
Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21...
Each number = sum of previous two numbers

```js
function fibonacci(n) {
  if (n === 0) return 0;                       // base case 1
  if (n === 1) return 1;                       // base case 2
  return fibonacci(n - 1) + fibonacci(n - 2); // recursive case
}

console.log(fibonacci(6)); // 8
console.log(fibonacci(7)); // 13
```

**How it works for fibonacci(4):**
```
fibonacci(4)
= fibonacci(3) + fibonacci(2)
= (fibonacci(2) + fibonacci(1)) + (fibonacci(1) + fibonacci(0))
= ((fibonacci(1) + fibonacci(0)) + 1) + (1 + 0)
= ((1 + 0) + 1) + 1
= 3
```

### Example 5 — Power of a Number
```js
function power(base, exp) {
  if (exp === 0) return 1;             // base case — anything^0 = 1
  return base * power(base, exp - 1); // recursive case
}

console.log(power(2, 5)); // 32 (2×2×2×2×2)
console.log(power(3, 3)); // 27 (3×3×3)
```

### Example 6 — Reverse a String
```js
function reverseString(str) {
  if (str.length === 0) return "";                          // base case
  return reverseString(str.slice(1)) + str[0];             // recursive case
}

console.log(reverseString("hello")); // "olleh"
```

### Example 7 — Binary Search using Recursion
```js
function binarySearch(arr, target, low, high) {
  if (low > high) return -1;                  // base case — not found

  let mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) return mid;        // base case — found
  else if (arr[mid] < target)
    return binarySearch(arr, target, mid + 1, high);  // search right
  else
    return binarySearch(arr, target, low, mid - 1);   // search left
}

let arr = [10, 20, 30, 40, 50];
console.log(binarySearch(arr, 30, 0, arr.length - 1)); // 2
```

---

## Types of Recursion

### 1. Direct Recursion
A function calls **itself directly**.
```js
function direct(n) {
  if (n === 0) return;
  direct(n - 1); // calls itself
}
```

### 2. Indirect Recursion
Function A calls Function B, and Function B calls Function A back.
```js
function A(n) {
  if (n <= 0) return;
  console.log("A: " + n);
  B(n - 1);      // A calls B
}

function B(n) {
  if (n <= 0) return;
  console.log("B: " + n);
  A(n - 1);      // B calls A
}

A(4);
```

### 3. Tail Recursion
The recursive call is the **very last operation** in the function. No work is done after the recursive call returns.
```js
function tailFactorial(n, accumulator = 1) {
  if (n === 0) return accumulator;             // base case
  return tailFactorial(n - 1, n * accumulator); // last operation is the recursive call
}

console.log(tailFactorial(5)); // 120
```

**Why tail recursion is better:** Some languages and compilers optimize tail recursion to avoid growing the call stack, making it as efficient as a loop.

### 4. Head Recursion
The recursive call happens **before** any other work in the function.
```js
function headRecursion(n) {
  if (n === 0) return;
  headRecursion(n - 1);   // recursive call first
  console.log(n);          // work done after returning
}

headRecursion(5);
// Output: 1, 2, 3, 4, 5 (prints in reverse of call order)
```

---

## Recursion vs Iteration (Loop)

| Feature | Recursion | Iteration (Loop) |
|---|---|---|
| Approach | Function calls itself | Uses for/while loop |
| Base case | Required to stop | Loop condition to stop |
| Memory | Uses Call Stack — O(n) space | O(1) space |
| Speed | Slightly slower (function call overhead) | Slightly faster |
| Code length | Usually shorter and cleaner | Sometimes longer |
| Risk | Stack Overflow if base case missing | Infinite loop |
| Best for | Tree, graph traversal, divide & conquer | Simple repetition |
| Readability | More readable for complex problems | More readable for simple loops |

---

## What is Stack Overflow in Recursion?

**Stack Overflow** happens when recursion goes too deep — too many function calls pile up in the call stack and it runs out of memory.

**Simple words:** The call stack has a limited size. If recursion keeps calling itself without ever hitting the base case, the stack fills up completely and crashes with a Stack Overflow error.

**Common causes:**
- Missing base case
- Base case that is never reached
- Input that makes recursion go too deep

```js
// This causes Stack Overflow — no base case!
function infinite(n) {
  return infinite(n - 1); // never stops
}
```

---

## Recursion and the Call Stack — Visual

```
function factorial(3) {

  factorial(3) ──calls──► factorial(2) ──calls──► factorial(1) ──calls──► factorial(0)
                                                                              ↓
                                                                         returns 1
                                                        ◄── returns 1×1 = 1
                                        ◄── returns 2×1 = 2
               ◄── returns 3×2 = 6

  Final answer: 6
}
```

---

## Memoization — Making Recursion Faster

**Memoization** is a technique where we **store the results** of recursive calls so we don't compute the same thing twice.

**Simple words:** If we already solved a sub-problem before, we remember the answer and reuse it instead of solving it again. This avoids repeated work.

**Problem — Fibonacci without memoization:**
```
fibonacci(5) calls fibonacci(4) and fibonacci(3)
fibonacci(4) calls fibonacci(3) and fibonacci(2)
fibonacci(3) is computed TWICE — wasteful!
Time complexity: O(2ⁿ)
```

**Solution — Fibonacci with memoization:**
```js
function fibonacci(n, memo = {}) {
  if (n in memo) return memo[n];   // return stored result
  if (n === 0) return 0;
  if (n === 1) return 1;

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo); // store result
  return memo[n];
}

console.log(fibonacci(10)); // 55
console.log(fibonacci(50)); // works fast now!
// Time complexity: O(n)
```

---

## Time and Space Complexity of Recursion

| Function | Time Complexity | Space Complexity | Reason |
|---|---|---|---|
| Factorial | O(n) | O(n) | n recursive calls, n stack frames |
| Fibonacci (no memo) | O(2ⁿ) | O(n) | Branches double each level |
| Fibonacci (with memo) | O(n) | O(n) | Each value computed once |
| Binary Search | O(log n) | O(log n) | Halves each time, log n stack frames |
| Sum of n numbers | O(n) | O(n) | n recursive calls |
| Reverse string | O(n) | O(n) | n recursive calls |

---

## Applications of Recursion

- **Factorial and mathematical computations**
- **Fibonacci sequence**
- **Tree traversal** — in-order, pre-order, post-order
- **Graph traversal** — DFS (Depth First Search)
- **Binary Search** — recursive version
- **Merge Sort and Quick Sort** — divide and conquer sorting
- **Tower of Hanoi** — classic recursion problem
- **Directory traversal** — listing all files in nested folders
- **Parsing expressions** — compilers use recursion to parse code

---

## Quick Revision Table

| Term | Simple Meaning |
|---|---|
| Recursion | A function that calls itself to solve smaller versions of a problem |
| Base Case | The stopping condition — prevents infinite recursion |
| Recursive Case | The part where function calls itself with a smaller input |
| Call Stack | Memory area that stores all active function calls |
| Stack Overflow | Error when call stack runs out of space due to too many recursive calls |
| Memoization | Storing results of sub-problems to avoid recomputing |
| Tail Recursion | Recursive call is the last operation — can be optimized |
| Direct Recursion | Function calls itself directly |
| Indirect Recursion | Function A calls B, B calls A back |

---

## Viva Q&A

**Q1. What is Recursion?**
Recursion is a programming technique where a function calls itself repeatedly to solve a problem by breaking it into smaller versions of the same problem. It continues calling itself until a base case is reached which stops the recursion.

**Q2. What are the two essential parts of a recursive function?**
Every recursive function must have two parts. The base case is the stopping condition that returns a value directly without any more recursive calls. The recursive case is where the function calls itself with a smaller or simpler input to move towards the base case.

**Q3. What is a Base Case in recursion?**
The base case is the condition in a recursive function that stops the recursion. It is the simplest version of the problem that can be solved directly without calling the function again. Without a base case, recursion never stops and causes a Stack Overflow.

**Q4. What is Stack Overflow in recursion?**
Stack Overflow happens when a recursive function calls itself too many times and fills up the call stack completely. This usually happens when the base case is missing or never reached. The program crashes with a Stack Overflow error because there is no more memory in the call stack.

**Q5. What is the Call Stack and how does it relate to recursion?**
The Call Stack is a region of memory that stores information about all active function calls. In recursion, every time a function calls itself, a new stack frame is added to the call stack. When the base case is reached and functions start returning, stack frames are removed one by one. Each recursive call uses memory in the call stack, which is why recursion has O(n) space complexity.

**Q6. What is the difference between Recursion and Iteration?**
Recursion solves a problem by a function calling itself and uses the call stack which takes O(n) space. Iteration solves a problem using loops and takes O(1) space. Recursion is more readable for complex problems like tree traversal while iteration is faster and more memory efficient for simple repetitive tasks.

**Q7. What is the time complexity of recursive Fibonacci without memoization?**
O(2ⁿ) because each call branches into two more calls. For fibonacci(n), the number of function calls grows exponentially. For example fibonacci(5) makes around 15 calls and fibonacci(50) would make trillions of calls.

**Q8. What is Memoization? How does it improve recursion?**
Memoization is a technique where we store the results of already computed sub-problems in a cache like an object or array. When the same sub-problem appears again, we return the stored result instead of computing it again. This reduces the Fibonacci time complexity from O(2ⁿ) to O(n).

**Q9. What is Tail Recursion?**
Tail Recursion is a type of recursion where the recursive call is the very last operation in the function. No work is done after the recursive call returns. Some compilers and runtimes can optimize tail recursion to avoid growing the call stack, making it as efficient as a loop.

**Q10. What is the difference between Direct and Indirect Recursion?**
In Direct Recursion, a function calls itself directly. In Indirect Recursion, function A calls function B and function B calls function A back. Both achieve recursion but through different paths.

**Q11. What is the space complexity of a recursive function?**
The space complexity of a recursive function is O(n) in most cases because each recursive call adds a new frame to the call stack. For a function that makes n recursive calls, n frames are stored simultaneously in the stack.

**Q12. When should we use Recursion over Iteration?**
We should use recursion when the problem has a naturally recursive structure such as tree traversal, graph DFS, divide and conquer algorithms like merge sort, or when the recursive solution is much simpler and more readable than an iterative one. We prefer iteration when performance and memory efficiency are critical.

**Q13. What is the time and space complexity of recursive factorial?**
The time complexity is O(n) because the function makes n recursive calls. The space complexity is also O(n) because n stack frames are created in the call stack, one for each recursive call.

**Q14. Give real-world applications of Recursion.**
Recursion is used in tree traversal for in-order, pre-order, and post-order operations, graph traversal using Depth First Search, divide and conquer sorting algorithms like Merge Sort and Quick Sort, Binary Search recursive version, Tower of Hanoi problem, directory traversal to list all nested files, and expression parsing in compilers.

**Q15. What happens if the base case is never reached in recursion?**
If the base case is never reached, the function keeps calling itself indefinitely. Each call adds a new frame to the call stack. Eventually the call stack runs out of memory and the program crashes with a Stack Overflow error. This is why a correct and reachable base case is absolutely essential in every recursive function.

---
