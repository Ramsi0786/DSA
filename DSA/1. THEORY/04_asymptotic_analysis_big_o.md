# 04 — Asymptotic Analysis & Big O Notation

> Note: Big O basics, complexity tables, and best/average/worst cases are already covered in `03_complexity_analysis.md`.
> This file covers the deeper side — the three notations, Big O rules, and how to calculate Big O from any code.

---

## What is Asymptotic Analysis?

**Asymptotic Analysis** is a method of **evaluating an algorithm's efficiency** by studying how it behaves as the input size grows towards infinity.

**Simple words:** Instead of measuring exact time in seconds (which depends on the computer), we look at the **growth pattern** of the algorithm. This gives a universal, machine-independent way to compare algorithms.

**Why not just measure time in seconds?**
- Different computers run at different speeds
- Same code runs differently under different loads
- We need a standard that works everywhere — that is Asymptotic Analysis

---

## The Three Asymptotic Notations

There are three notations used to describe algorithm efficiency:

| Notation | Symbol | Case | Meaning |
|---|---|---|---|
| Big O | O | Worst case | Maximum time the algorithm can take |
| Big Omega | Ω | Best case | Minimum time the algorithm can take |
| Big Theta | Θ | Average / Tight bound | Exact growth when best and worst are same |

---

## Big O — Worst Case (Upper Bound)

**Big O** gives the **upper bound** — the maximum time or space an algorithm will ever need.

**Simple words:** In the worst possible situation, how slow can this get?

**Example — Linear Search:**
- Worst case: element is at the last position or not found at all
- We check every single element → **O(n)**

**Use:** In interviews and real analysis, we always talk about Big O (worst case) because we want to guarantee our program never exceeds this limit.

---

## Big Omega (Ω) — Best Case (Lower Bound)

**Big Omega** gives the **lower bound** — the minimum time an algorithm needs.

**Simple words:** In the luckiest situation, how fast can this get?

**Example — Linear Search:**
- Best case: element is found at the very first position
- We check only one element → **Ω(1)**

**Example — Bubble Sort:**
- Best case: array is already sorted, no swaps needed → **Ω(n)**

---

## Big Theta (Θ) — Tight Bound (Average Case)

**Big Theta** gives the **tight bound** — used when the best case and worst case grow at the same rate.

**Simple words:** When an algorithm always takes the same growth regardless of input arrangement, we use Theta.

**Example — Merge Sort:**
- Best case: O(n log n)
- Worst case: O(n log n)
- Both are same → **Θ(n log n)**

**Example — Selection Sort:**
- Always scans the full array regardless of input → **Θ(n²)**

---

## Difference Between O, Ω, and Θ — Simple Table

| Notation | Full Name | Represents | Think of it as |
|---|---|---|---|
| O | Big O | Worst case — upper bound | "It will never be slower than this" |
| Ω | Big Omega | Best case — lower bound | "It will never be faster than this" |
| Θ | Big Theta | Tight bound — exact | "It always grows exactly like this" |

---

## Rules of Big O — How to Simplify

### Rule 1 — Drop Constants
Constants don't affect growth pattern, so we remove them.
```
O(2n)   → O(n)
O(500)  → O(1)
O(3n²)  → O(n²)
```

### Rule 2 — Drop Non-Dominant Terms
Keep only the fastest growing term.
```
O(n² + n)       → O(n²)
O(n + log n)    → O(n)
O(2ⁿ + n³)     → O(2ⁿ)
```

### Rule 3 — Sequential steps → Add
Two separate loops one after another:
```js
for (let i = 0; i < n; i++) { }   // O(n)
for (let j = 0; j < n; j++) { }   // O(n)
// Total = O(n) + O(n) = O(2n) = O(n)
```

### Rule 4 — Nested steps → Multiply
A loop inside another loop:
```js
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) { }
}
// Total = O(n) × O(n) = O(n²)
```

### Rule 5 — Different inputs → Different variables
Don't assume both inputs are the same size:
```js
function example(arrA, arrB) {
  for (let a of arrA) { }   // O(a)
  for (let b of arrB) { }   // O(b)
}
// Total = O(a + b), NOT O(n)
```

### Rule 6 — Halving loop → O(log n)
When the loop variable doubles or input halves each step:
```js
for (let i = 1; i < n; i = i * 2) { }
// i goes: 1, 2, 4, 8, 16...
// Total steps = log₂(n) → O(log n)
```

---

## How to Calculate Big O From Code — Step by Step

### Example 1 — Single loop
```js
function printAll(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
```
- One loop running n times → **O(n)**

---

### Example 2 — Two separate loops
```js
function twoLoops(arr) {
  for (let i = 0; i < arr.length; i++) { }  // O(n)
  for (let j = 0; j < arr.length; j++) { }  // O(n)
}
```
- Add them: O(n) + O(n) = O(2n) → drop constant → **O(n)**

---

### Example 3 — Nested loops
```js
function nested(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
```
- Multiply: O(n) × O(n) → **O(n²)**

---

### Example 4 — Loop + constant operation
```js
function mixed(arr) {
  let first = arr[0];                         // O(1)
  for (let i = 0; i < arr.length; i++) { }   // O(n)
}
```
- O(1) + O(n) → dominant term → **O(n)**

---

### Example 5 — Triple nested loop
```js
function triple(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) { }
    }
  }
}
```
- O(n) × O(n) × O(n) → **O(n³)**

---

### Example 6 — Halving loop
```js
function halvingLoop(n) {
  for (let i = n; i > 1; i = Math.floor(i / 2)) {
    console.log(i);
  }
}
```
- Input halves every step → **O(log n)**

---

### Example 7 — Recursive function
```js
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
```
- Calls itself n times → **O(n)**

---

### Example 8 — Recursive with two calls
```js
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```
- Each call branches into two → **O(2ⁿ)**

---

## Quick Formula Sheet

| Code Pattern | Big O |
|---|---|
| Single statement | O(1) |
| Single loop of n | O(n) |
| Two separate loops of n | O(n) |
| Loop that halves each time | O(log n) |
| Loop of n with log n inside | O(n log n) |
| Nested loop (2 levels) | O(n²) |
| Nested loop (3 levels) | O(n³) |
| Recursive — calls itself once | O(n) |
| Recursive — calls itself twice | O(2ⁿ) |

---

## Viva Q&A

**Q1. What is Asymptotic Analysis?**
Asymptotic Analysis is a method of measuring algorithm efficiency by studying how time or space grows as the input size becomes very large. It is machine-independent and gives a universal way to compare algorithms.

**Q2. Why do we use Asymptotic Analysis instead of measuring actual time?**
Because actual time depends on hardware speed, programming language, and system load. Asymptotic analysis ignores these factors and focuses only on the growth pattern of the algorithm.

**Q3. What are the three asymptotic notations?**
The three notations are Big O which gives the worst case upper bound, Big Omega which gives the best case lower bound, and Big Theta which gives the tight bound when best and worst case are the same.

**Q4. What is Big O notation and what case does it represent?**
Big O notation represents the worst case or upper bound of an algorithm. It tells us the maximum time or space an algorithm can ever take. It guarantees the algorithm will never be slower than this.

**Q5. What is Big Omega notation?**
Big Omega represents the best case or lower bound of an algorithm. It tells us the minimum time the algorithm needs in the most favorable situation. For example, Linear Search has Ω(1) when the element is at the first position.

**Q6. What is Big Theta notation? When do we use it?**
Big Theta represents the tight bound of an algorithm. We use it when the best case and worst case grow at exactly the same rate. For example, Merge Sort is Θ(n log n) because it always takes n log n time regardless of input.

**Q7. What is the rule for nested loops in Big O?**
When loops are nested inside each other, we multiply their complexities. A loop of n inside another loop of n gives O(n × n) = O(n²).

**Q8. What is the rule for sequential loops in Big O?**
When loops appear one after another, we add their complexities and keep the dominant term. Two separate loops of n give O(n) + O(n) = O(2n) = O(n).

**Q9. Why do we drop constants in Big O?**
We drop constants because Big O focuses on the growth pattern as input grows very large. O(2n) and O(n) both grow linearly, so the constant 2 has no effect on the growth pattern.

**Q10. Why do we drop non-dominant terms in Big O?**
For large inputs, the dominant term completely overshadows smaller terms. For example in O(n² + n), when n is 1000, n² is 1,000,000 and n is only 1000 — n becomes irrelevant, so we write O(n²).

**Q11. What is the Big O of a loop where the variable doubles each time?**
It is O(log n). When the loop variable doubles each step like i = i * 2, the loop runs log₂(n) times because we are effectively halving the remaining work each iteration.

**Q12. What is the Big O of a recursive function that calls itself twice?**
O(2ⁿ). Each call branches into two more calls, creating an exponential number of total calls. Example: naive Fibonacci without memoization.

**Q13. What is the difference between Big O and Big Theta?**
Big O is the worst case upper bound — the algorithm may be faster in practice. Big Theta is the tight bound — the algorithm always grows at exactly this rate. If best and worst case are the same, Big O and Big Theta are equal.

**Q14. Give an example of an algorithm that is both O(n log n) and Ω(n log n).**
Merge Sort. Its best case, average case, and worst case are all n log n. So it is Θ(n log n), which means it is both O(n log n) and Ω(n log n).

---
