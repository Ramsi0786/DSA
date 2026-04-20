# 08 — Linear Search & Binary Search

---

## What is Searching?

**Searching** is the process of **finding a specific element** in a collection of data.

**Simple words:** When you have a list of items and you want to find one particular item, the method you use to find it is called a searching algorithm.

**Real-world analogy:** Finding a contact in your phone. You either scroll through every contact one by one, or you type the name and jump directly to it. These two approaches are exactly Linear Search and Binary Search.

---

## Types of Searching Algorithms

There are many searching algorithms, but the two most fundamental ones are:

| Algorithm | Works on | Time Complexity |
|---|---|---|
| Linear Search | Any array (sorted or unsorted) | O(n) |
| Binary Search | Sorted array only | O(log n) |

---

# LINEAR SEARCH

---

## What is Linear Search?

**Linear Search** is a searching algorithm that **checks every element one by one** from the beginning until the target element is found or the end of the list is reached.

**Simple words:** You start from the first element and keep checking each element one by one until you find what you are looking for. If you reach the end without finding it, the element is not in the list.

**Real-world analogy:** Finding a specific page in a book by flipping through every page from the first page. You check each page one by one until you find the right one.

---

## How Linear Search Works — Step by Step

**Array:** [10, 40, 30, 50, 20] — Search for 30

```
Step 1: Check index 0 → 10 == 30? No
Step 2: Check index 1 → 40 == 30? No
Step 3: Check index 2 → 30 == 30? Yes! Found at index 2
```

**Array:** [10, 40, 30, 50, 20] — Search for 99

```
Step 1: Check index 0 → 10 == 99? No
Step 2: Check index 1 → 40 == 99? No
Step 3: Check index 2 → 30 == 99? No
Step 4: Check index 3 → 50 == 99? No
Step 5: Check index 4 → 20 == 99? No
End of array → return -1 (not found)
```

---

## Linear Search — Code

### Basic Linear Search
```js
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // return index where found
    }
  }
  return -1; // return -1 if not found
}

let arr = [10, 40, 30, 50, 20];
console.log(linearSearch(arr, 30)); // 2
console.log(linearSearch(arr, 99)); // -1
```

### Linear Search — Return true/false
```js
function contains(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return true;
  }
  return false;
}

console.log(contains([5, 3, 8, 1], 8)); // true
console.log(contains([5, 3, 8, 1], 9)); // false
```

### Linear Search — Find All Occurrences
```js
function findAllOccurrences(arr, target) {
  let indices = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      indices.push(i);
    }
  }
  return indices;
}

console.log(findAllOccurrences([1, 3, 5, 3, 7, 3], 3)); // [1, 3, 5]
```

### Linear Search on Array of Objects
```js
function searchByName(students, name) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].name === name) return students[i];
  }
  return null;
}

let students = [
  { name: "Arjun", grade: "A" },
  { name: "Priya", grade: "B" },
  { name: "Rahul", grade: "A" }
];

console.log(searchByName(students, "Priya")); // { name: "Priya", grade: "B" }
console.log(searchByName(students, "Ravi"));  // null
```

---

## Time and Space Complexity — Linear Search

| Case | Time Complexity | Situation |
|---|---|---|
| Best Case | O(1) | Target found at first position |
| Average Case | O(n) | Target found somewhere in middle |
| Worst Case | O(n) | Target at last position or not found |
| Space Complexity | O(1) | No extra memory used |

---

## Advantages of Linear Search

- Works on **any array** — sorted or unsorted
- Works on **any data type** — numbers, strings, objects
- **Simple to understand** and implement
- No preprocessing needed — works directly on raw data
- Good for **small datasets**

## Disadvantages of Linear Search

- **Very slow for large datasets** — checks every element
- **O(n) worst case** — not efficient
- Not suitable when the same list is searched many times

---

# BINARY SEARCH

---

## What is Binary Search?

**Binary Search** is a searching algorithm that works on a **sorted array** by **repeatedly dividing the search space in half** until the target element is found or the search space becomes empty.

**Simple words:** Instead of checking every element, Binary Search smartly eliminates half the elements at each step. It looks at the middle element — if it is too big, ignore the right half; if it is too small, ignore the left half; if it matches, done!

**Real-world analogy:** Finding a word in a dictionary. You open the dictionary in the middle. If your word comes before the middle, you search the left half. If it comes after, you search the right half. You keep halving until you find it.

**Important rule:** The array MUST be sorted before applying Binary Search.

---

## How Binary Search Works — Step by Step

**Array:** [10, 20, 30, 40, 50, 60, 70] — Search for 40

```
low = 0, high = 6

Step 1: mid = (0+6)/2 = 3 → arr[3] = 40 == 40? Yes! Found at index 3
```

**Array:** [10, 20, 30, 40, 50, 60, 70] — Search for 60

```
low = 0, high = 6

Step 1: mid = (0+6)/2 = 3 → arr[3] = 40 == 60? No. 40 < 60 → search right half
        low = mid + 1 = 4

Step 2: mid = (4+6)/2 = 5 → arr[5] = 60 == 60? Yes! Found at index 5
```

**Array:** [10, 20, 30, 40, 50, 60, 70] — Search for 25

```
low = 0, high = 6

Step 1: mid = 3 → arr[3] = 40 == 25? No. 40 > 25 → search left half
        high = mid - 1 = 2

Step 2: mid = (0+2)/2 = 1 → arr[1] = 20 == 25? No. 20 < 25 → search right
        low = mid + 1 = 2

Step 3: mid = (2+2)/2 = 2 → arr[2] = 30 == 25? No. 30 > 25 → search left
        high = mid - 1 = 1

Now low (2) > high (1) → stop → return -1 (not found)
```

---

## Binary Search — Code

### Iterative Binary Search
```js
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid;           // found at mid
    } else if (arr[mid] < target) {
      low = mid + 1;        // target is in right half
    } else {
      high = mid - 1;       // target is in left half
    }
  }

  return -1; // not found
}

let arr = [10, 20, 30, 40, 50, 60, 70];
console.log(binarySearch(arr, 40)); // 3
console.log(binarySearch(arr, 25)); // -1
```

### Recursive Binary Search
```js
function binarySearchRecursive(arr, target, low, high) {
  if (low > high) return -1; // base case — not found

  let mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) return mid;
  else if (arr[mid] < target) return binarySearchRecursive(arr, target, mid + 1, high);
  else return binarySearchRecursive(arr, target, low, mid - 1);
}

let arr = [10, 20, 30, 40, 50, 60, 70];
console.log(binarySearchRecursive(arr, 40, 0, arr.length - 1)); // 3
console.log(binarySearchRecursive(arr, 25, 0, arr.length - 1)); // -1
```

### Binary Search — Find First Occurrence
```js
function findFirst(arr, target) {
  let low = 0, high = arr.length - 1;
  let result = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      result = mid;     // record this position
      high = mid - 1;  // keep searching left for earlier occurrence
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return result;
}

console.log(findFirst([1, 2, 2, 2, 3, 4], 2)); // 1
```

### Binary Search — Find Last Occurrence
```js
function findLast(arr, target) {
  let low = 0, high = arr.length - 1;
  let result = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      result = mid;     // record this position
      low = mid + 1;   // keep searching right for later occurrence
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return result;
}

console.log(findLast([1, 2, 2, 2, 3, 4], 2)); // 3
```

---

## Time and Space Complexity — Binary Search

| Case | Time Complexity | Situation |
|---|---|---|
| Best Case | O(1) | Target is at the middle |
| Average Case | O(log n) | Target found after several halvings |
| Worst Case | O(log n) | Target at end or not found |
| Space (Iterative) | O(1) | No extra memory |
| Space (Recursive) | O(log n) | Call stack grows with recursion |

**Why O(log n)?**
Each step cuts the array in half. So for n elements:
- After 1 step → n/2 elements remain
- After 2 steps → n/4 elements remain
- After k steps → n/2ᵏ elements remain
- We stop when n/2ᵏ = 1 → k = log₂(n)

**Example:** Array of 1024 elements
- Linear Search worst case → 1024 steps
- Binary Search worst case → log₂(1024) = 10 steps only!

---

## Advantages of Binary Search

- **Very fast** — O(log n) is much better than O(n) for large data
- **Efficient** for large sorted datasets
- Simple to implement both iteratively and recursively

## Disadvantages of Binary Search

- **Array must be sorted** — extra O(n log n) time to sort first if unsorted
- Works only on data structures that allow **direct access by index** (arrays)
- Does **not work on Linked Lists** — no direct index access
- Not suitable for **frequently changing data** — re-sorting needed after every change

---

## Linear Search vs Binary Search — Full Comparison

| Feature | Linear Search | Binary Search |
|---|---|---|
| Works on | Sorted or unsorted | Sorted only |
| Approach | Check one by one | Divide and conquer |
| Best case | O(1) | O(1) |
| Average case | O(n) | O(log n) |
| Worst case | O(n) | O(log n) |
| Space complexity | O(1) | O(1) iterative / O(log n) recursive |
| Data structure | Array, Linked List, any | Array only |
| Preprocessing needed | No | Yes — must be sorted |
| Implementation | Very simple | Slightly more complex |
| Best for | Small or unsorted data | Large sorted data |

---

## When to Use Which?

| Situation | Use |
|---|---|
| Array is unsorted | Linear Search |
| Array is small (< 100 elements) | Linear Search |
| Array is large and sorted | Binary Search |
| Searching only once | Linear Search (no need to sort) |
| Searching many times | Sort once → Binary Search every time |
| Data structure is Linked List | Linear Search only |

---

## Quick Revision Table

| Term | Simple Meaning |
|---|---|
| Searching | Finding a specific element in a collection |
| Linear Search | Check every element one by one — O(n) |
| Binary Search | Divide array in half each step — O(log n) |
| low | Left boundary of current search space |
| high | Right boundary of current search space |
| mid | Middle index = (low + high) / 2 |
| Prerequisite of Binary Search | Array must be sorted |
| Iterative | Using a loop — O(1) space |
| Recursive | Calling itself — O(log n) space |

---

## Viva Q&A

**Q1. What is Linear Search?**
Linear Search is a searching algorithm that checks every element in an array one by one from the beginning until the target element is found or the end of the array is reached. It works on both sorted and unsorted arrays.

**Q2. What is the time complexity of Linear Search?**
The best case is O(1) when the element is at the first position. The average and worst case are both O(n) because we may have to check every element. The space complexity is O(1) as no extra memory is used.

**Q3. What is Binary Search?**
Binary Search is a searching algorithm that works on sorted arrays by repeatedly dividing the search space in half. It compares the target with the middle element and eliminates half the remaining elements at each step until the element is found or the search space is empty.

**Q4. What is the time complexity of Binary Search?**
The best case is O(1) when the element is at the middle. The average and worst case are both O(log n) because the array is halved at each step. Iterative version uses O(1) space and recursive version uses O(log n) space due to the call stack.

**Q5. Why must the array be sorted for Binary Search?**
Binary Search works by comparing the target with the middle element and deciding which half to search next. This decision only makes sense if the array is sorted — because in a sorted array, all elements smaller than the middle are on the left and all larger elements are on the right. If unsorted, this logic breaks completely.

**Q6. What is the difference between Linear Search and Binary Search?**
Linear Search checks every element one by one and works on any array with O(n) time complexity. Binary Search divides the array in half at each step, works only on sorted arrays, and has O(log n) time complexity. Binary Search is much faster for large sorted datasets.

**Q7. Why is Binary Search O(log n)?**
Because at each step, Binary Search cuts the remaining search space in half. Starting with n elements, after 1 step n/2 remain, after 2 steps n/4 remain, and so on. The number of steps needed is log₂(n). For 1024 elements, only 10 steps are needed in the worst case.

**Q8. Can Binary Search be applied to a Linked List?**
No. Binary Search requires direct access to the middle element by index. In a linked list, we cannot directly access an element by index — we must traverse from the head. Since direct index access is not possible, Binary Search cannot be applied to a linked list.

**Q9. What is the difference between iterative and recursive Binary Search?**
Both have O(log n) time complexity. Iterative Binary Search uses a while loop and O(1) space. Recursive Binary Search calls itself and uses O(log n) space due to the function call stack growing with each recursive call. Iterative is preferred when memory is a concern.

**Q10. When should we use Linear Search over Binary Search?**
We should use Linear Search when the array is unsorted, when the dataset is small, when we are searching only once and sorting would waste more time, or when the data structure is a linked list that does not support index access.

**Q11. What happens if we apply Binary Search on an unsorted array?**
Binary Search will give wrong results on an unsorted array. It may skip the target element because the decision to go left or right is based on sorted order. Without sorting, this decision is meaningless and the algorithm may return -1 even when the element exists.

**Q12. What is the mid formula in Binary Search and why is it important?**
The mid formula is mid = Math.floor((low + high) / 2). It calculates the middle index of the current search space. It is important because it is the element we compare with the target at each step. Some implementations use low + Math.floor((high - low) / 2) to avoid integer overflow in languages with fixed integer sizes.

**Q13. How does Binary Search find the first occurrence of a duplicate element?**
We modify Binary Search so that when we find the target at mid, instead of returning immediately, we record the position and continue searching in the left half by setting high = mid - 1. This ensures we find the earliest occurrence.

**Q14. What is the best case of Linear Search and when does it occur?**
The best case of Linear Search is O(1). It occurs when the target element is at the very first position of the array. We find it in the first comparison itself.

**Q15. Compare the number of steps for Linear Search vs Binary Search for 1 million elements.**
For 1 million elements, Linear Search may take up to 1,000,000 steps in the worst case. Binary Search takes at most log₂(1,000,000) which is approximately 20 steps. This shows how dramatically faster Binary Search is for large sorted datasets.

---
