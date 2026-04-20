# 03 — Complexity Analysis

---

## What is Complexity Analysis?

**Complexity Analysis** is the process of **measuring how efficient an algorithm is** in terms of time and memory as the input size grows.

**Simple words:** When we write a program, we want to know — how fast is it? How much memory does it use? Complexity analysis answers these questions.

There are two types:
- **Time Complexity** → how much time the algorithm takes
- **Space Complexity** → how much memory the algorithm uses

---

## Why is it Important?

Imagine you have 1 million records. One algorithm takes 1 second, another takes 10 hours for the same task. Complexity analysis helps us pick the better one **before** even running the code.

---

## Big O Notation

**Big O Notation** is the standard way to express the complexity of an algorithm.

**Simple words:** It tells us the **worst case** — how slow can this algorithm get as input grows bigger and bigger.

We ignore constants and small values. We only care about the **dominant term**.

### Common Big O Values (from fastest to slowest):

| Big O | Name | Simple Meaning |
|---|---|---|
| O(1) | Constant | Always takes same time, no matter input size |
| O(log n) | Logarithmic | Time grows very slowly, very efficient |
| O(n) | Linear | Time grows equal to input size |
| O(n log n) | Linearithmic | Slightly worse than linear, still good |
| O(n²) | Quadratic | Time grows as square of input, slow |
| O(n³) | Cubic | Very slow for large input |
| O(2ⁿ) | Exponential | Extremely slow, doubles with each input |
| O(n!) | Factorial | Worst possible, only for tiny inputs |

### Simple Rule to Remember:
O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!)
**Left = fast, Right = slow**

---

## Time Complexity — Examples

### O(1) — Constant Time
```js
function getFirst(arr) {
  return arr[0]; // always one step, no matter array size
}
```

### O(n) — Linear Time
```js
function printAll(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // loops once for each element
  }
}
```

### O(n²) — Quadratic Time
```js
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]); // loop inside loop
    }
  }
}
```

### O(log n) — Logarithmic Time
Binary Search — every step cuts the problem in half.
```js
// searching in sorted array, each step divides in half
// input 1000 → 10 steps only (log₂ 1000 ≈ 10)
```

---

## Space Complexity — Examples

### O(1) — Constant Space
```js
function sum(a, b) {
  return a + b; // no extra memory used
}
```

### O(n) — Linear Space
```js
function copyArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]); // new array grows with input
  }
  return newArr;
}
```

---

## Best, Average, and Worst Case

For any algorithm, we can measure three cases:

| Case | Meaning | Example (Linear Search) |
|---|---|---|
| Best Case | Fastest possible (Ω) | Element found at first position |
| Average Case | Normal situation (Θ) | Element found in middle |
| Worst Case | Slowest possible (O) | Element at last or not found |

**In interviews and analysis, we always talk about Worst Case (Big O).**

---

## Complexity of Common Data Structure Operations

This is the most important table — study it well!

### Array

| Operation | Time Complexity | Reason |
|---|---|---|
| Access by index | O(1) | Direct memory location |
| Search (unsorted) | O(n) | May check every element |
| Search (sorted) | O(log n) | Binary search possible |
| Insert at end | O(1) | Just add at last position |
| Insert at beginning/middle | O(n) | Must shift elements |
| Delete at end | O(1) | Just remove last |
| Delete at beginning/middle | O(n) | Must shift elements |

---

### Linked List (Singly)

| Operation | Time Complexity | Reason |
|---|---|---|
| Access by index | O(n) | Must traverse from head |
| Search | O(n) | Must traverse one by one |
| Insert at beginning | O(1) | Just change head pointer |
| Insert at end | O(n) | Must traverse to end first |
| Insert at middle | O(n) | Must find position first |
| Delete at beginning | O(1) | Just move head pointer |
| Delete at end/middle | O(n) | Must traverse to find node |

---

### Doubly Linked List

| Operation | Time Complexity | Reason |
|---|---|---|
| Access by index | O(n) | Must traverse |
| Search | O(n) | Must traverse |
| Insert at beginning | O(1) | Update head and prev pointer |
| Insert at end | O(1) | If tail pointer is maintained |
| Delete at beginning | O(1) | Update head |
| Delete at end | O(1) | Use tail pointer directly |
| Delete at middle | O(n) | Must find node first |

---

### Stack

| Operation | Time Complexity | Reason |
|---|---|---|
| Push (insert) | O(1) | Add on top |
| Pop (delete) | O(1) | Remove from top |
| Peek (top element) | O(1) | Just look at top |
| Search | O(n) | Must pop one by one to find |

---

### Queue

| Operation | Time Complexity | Reason |
|---|---|---|
| Enqueue (insert) | O(1) | Add at rear |
| Dequeue (delete) | O(1) | Remove from front |
| Peek (front element) | O(1) | Just look at front |
| Search | O(n) | Must traverse one by one |

---

### Hash Table (Hash Map)

| Operation | Average Case | Worst Case | Reason |
|---|---|---|---|
| Insert | O(1) | O(n) | Worst case is all keys collide |
| Search | O(1) | O(n) | Collision makes it linear |
| Delete | O(1) | O(n) | Same reason as above |

**Simple words:** Hash table is very fast on average. Worst case only happens when many keys land in the same bucket (collision).

---

### Binary Search Tree (BST)

| Operation | Average Case | Worst Case | Reason |
|---|---|---|---|
| Search | O(log n) | O(n) | Worst if tree is skewed (like a linked list) |
| Insert | O(log n) | O(n) | Same reason |
| Delete | O(log n) | O(n) | Same reason |

**Simple words:** BST is fast when balanced. If all nodes go to one side it becomes like a linked list → slow.

---

### Balanced BST (AVL Tree / Red-Black Tree)

| Operation | Time Complexity | Reason |
|---|---|---|
| Search | O(log n) | Always balanced, no skew |
| Insert | O(log n) | Rebalances automatically |
| Delete | O(log n) | Rebalances automatically |

---

### Heap (Min Heap / Max Heap)

| Operation | Time Complexity | Reason |
|---|---|---|
| Insert | O(log n) | Bubble up to correct position |
| Delete (min/max) | O(log n) | Bubble down after removal |
| Get min / Get max | O(1) | Always at the root |
| Build heap from array | O(n) | Heapify process |

---

### Graph

| Operation | Adjacency List | Adjacency Matrix |
|---|---|---|
| Add vertex | O(1) | O(V²) |
| Add edge | O(1) | O(1) |
| Remove vertex | O(V + E) | O(V²) |
| Remove edge | O(E) | O(1) |
| Search (BFS / DFS) | O(V + E) | O(V²) |
| Check if edge exists | O(V) | O(1) |

V = number of vertices, E = number of edges

---

### Sorting Algorithms (Time Complexity)

| Algorithm | Best | Average | Worst | Space |
|---|---|---|---|---|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) |
| Heap Sort | O(n log n) | O(n log n) | O(n log n) | O(1) |

---

### Searching Algorithms

| Algorithm | Best | Average | Worst | Condition |
|---|---|---|---|---|
| Linear Search | O(1) | O(n) | O(n) | Works on any array |
| Binary Search | O(1) | O(log n) | O(log n) | Array must be sorted |

---

## Quick Summary — All in One

| Data Structure | Access | Search | Insert | Delete |
|---|---|---|---|---|
| Array | O(1) | O(n) | O(n) | O(n) |
| Linked List | O(n) | O(n) | O(1)* | O(1)* |
| Stack | O(n) | O(n) | O(1) | O(1) |
| Queue | O(n) | O(n) | O(1) | O(1) |
| Hash Table | O(1) | O(1) | O(1) | O(1) |
| BST (balanced) | O(log n) | O(log n) | O(log n) | O(log n) |
| Heap | O(n) | O(n) | O(log n) | O(log n) |

*at beginning/end with pointer

---

## Viva Q&A

**Q1. What is Complexity Analysis?**
Complexity Analysis is the process of measuring how efficient an algorithm is in terms of time taken and memory used as the input size increases.

**Q2. What is Time Complexity?**
Time Complexity is a measure of how much time an algorithm takes to complete as the size of the input grows.

**Q3. What is Space Complexity?**
Space Complexity is a measure of how much memory an algorithm uses as the size of the input grows.

**Q4. What is Big O Notation?**
Big O Notation is a mathematical way to express the worst case efficiency of an algorithm. It tells us how the time or memory grows as input size increases.

**Q5. What is O(1) complexity? Give an example.**
O(1) means constant time. The algorithm always takes the same time regardless of input size. Example: accessing an element in an array by index like arr[5].

**Q6. What is O(n) complexity? Give an example.**
O(n) means linear time. The time grows proportionally with input size. Example: searching for an element in an unsorted array by checking each one.

**Q7. What is O(log n) complexity? Give an example.**
O(log n) means logarithmic time. The input is divided in half at each step. Example: Binary Search on a sorted array.

**Q8. What is O(n²) complexity? Give an example.**
O(n²) means quadratic time. It happens when there is a loop inside a loop. Example: Bubble Sort, where each element is compared with every other element.

**Q9. What is the time complexity of inserting at the beginning of a Linked List?**
O(1), because we just change the head pointer to point to the new node. No traversal is needed.

**Q10. Why is searching in a Hash Table O(1) on average?**
Because a hash function directly maps the key to a memory location (bucket). So we can jump directly to the value without traversing. Worst case is O(n) when many keys collide in the same bucket.

**Q11. What is the worst case of Binary Search Tree operations and why?**
The worst case is O(n). This happens when the tree is skewed, meaning all nodes are on one side, making it behave like a linked list.

**Q12. What is the difference between Best Case, Average Case, and Worst Case?**
Best case is the fastest possible scenario. Average case is the normal expected scenario. Worst case is the slowest possible scenario. In analysis, we always focus on worst case using Big O notation.

**Q13. Which sorting algorithm has the best worst-case time complexity?**
Merge Sort and Heap Sort both have O(n log n) worst case, which is the best among comparison-based sorting algorithms.

**Q14. What is the time complexity of Binary Search?**
O(log n), because at each step the search space is cut in half.

**Q15. Why is Array access O(1) but Linked List access O(n)?**
In an array, each element has a direct memory address calculated using the index, so access is instant. In a linked list, we have to start from the head and follow pointers one by one to reach the desired position, so it takes O(n) time.

---
