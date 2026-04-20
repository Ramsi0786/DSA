# 05 — Arrays

---

## What is an Array?

An **Array** is a **collection of elements stored in continuous memory locations**, where each element is of the same data type and can be accessed using an index.

**Simple words:** An array is like a row of boxes placed side by side. Each box holds one value, and each box has a number (index) starting from 0. You can directly go to any box using its number.

**Real-world analogy:** A row of lockers in a school. Each locker has a number. You can go directly to locker number 5 without opening lockers 1, 2, 3, or 4.

---

## Key Properties of Arrays

- Elements are stored in **contiguous (side by side) memory**
- Each element has an **index** starting from **0**
- All elements must be of the **same data type**
- Size is usually **fixed** at the time of creation (in static languages)
- **Direct access** to any element using index → O(1)

---

## Array Indexing

```
Array:   [10, 20, 30, 40, 50]
Index:     0   1   2   3   4
```

- First element → index 0
- Last element → index (length - 1)
- To access 30 → arr[2]

---

## Types of Arrays

### 1. One-Dimensional Array (1D)
A simple list of elements in a single row.
```js
let arr = [10, 20, 30, 40, 50];
console.log(arr[0]); // 10
console.log(arr[3]); // 40
```

### 2. Two-Dimensional Array (2D)
An array of arrays — like a table with rows and columns.
```js
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix[0][0]); // 1 (row 0, col 0)
console.log(matrix[1][2]); // 6 (row 1, col 2)
console.log(matrix[2][1]); // 8 (row 2, col 1)
```

**Real-world analogy:** A spreadsheet with rows and columns.

### 3. Multi-Dimensional Array
Arrays with more than 2 dimensions. Example: 3D array is like a cube of data.

---

## Basic Array Operations

### Create an Array
```js
let fruits = ['apple', 'banana', 'mango'];
let numbers = new Array(5); // empty array of size 5
let zeros = new Array(5).fill(0); // [0, 0, 0, 0, 0]
```

### Access an Element — O(1)
```js
let arr = [10, 20, 30, 40, 50];
console.log(arr[2]); // 30 — direct access using index
```

### Update an Element — O(1)
```js
arr[2] = 99;
console.log(arr); // [10, 20, 99, 40, 50]
```

### Insert at End — O(1)
```js
arr.push(60);
console.log(arr); // [10, 20, 99, 40, 50, 60]
```

### Insert at Beginning — O(n)
```js
arr.unshift(5);
console.log(arr); // [5, 10, 20, 99, 40, 50, 60]
// All existing elements shift one position to the right
```

### Delete from End — O(1)
```js
arr.pop();
console.log(arr); // last element removed
```

### Delete from Beginning — O(n)
```js
arr.shift();
console.log(arr); // first element removed, all others shift left
```

### Find Length
```js
console.log(arr.length); // number of elements
```

---

## Traversal — Visiting Every Element

### Using for loop
```js
let arr = [10, 20, 30, 40, 50];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

### Using for...of loop
```js
for (let value of arr) {
  console.log(value);
}
```

### Using forEach
```js
arr.forEach(function(value) {
  console.log(value);
});
```

---

## Searching in an Array

### Linear Search — O(n)
Check every element one by one until found.
```js
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i; // return index
  }
  return -1; // not found
}

let arr = [10, 20, 30, 40, 50];
console.log(linearSearch(arr, 30)); // 2
console.log(linearSearch(arr, 99)); // -1
```

### Binary Search — O(log n)
Only works on **sorted arrays**. Cuts the search space in half each step.
```js
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

let sorted = [10, 20, 30, 40, 50];
console.log(binarySearch(sorted, 30)); // 2
console.log(binarySearch(sorted, 99)); // -1
```

---

## Sorting an Array

### Built-in sort
```js
let arr = [5, 2, 8, 1, 9];
arr.sort((a, b) => a - b); // ascending
console.log(arr); // [1, 2, 5, 8, 9]

arr.sort((a, b) => b - a); // descending
console.log(arr); // [9, 8, 5, 2, 1]
```

### Bubble Sort (Manual) — O(n²)
```js
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 2, 8, 1, 9])); // [1, 2, 5, 8, 9]
```

---

## Useful Built-in Array Methods (JavaScript)

| Method | What it does | Example |
|---|---|---|
| push(x) | Add x at end | arr.push(5) |
| pop() | Remove last element | arr.pop() |
| unshift(x) | Add x at beginning | arr.unshift(1) |
| shift() | Remove first element | arr.shift() |
| indexOf(x) | Find index of x | arr.indexOf(30) |
| includes(x) | Check if x exists | arr.includes(30) |
| slice(a, b) | Return portion a to b | arr.slice(1, 3) |
| splice(i, n) | Remove n elements from i | arr.splice(1, 2) |
| reverse() | Reverse the array | arr.reverse() |
| join(sep) | Join elements as string | arr.join('-') |
| concat(arr2) | Merge two arrays | arr.concat(arr2) |
| map(fn) | Transform each element | arr.map(x => x * 2) |
| filter(fn) | Filter elements by condition | arr.filter(x => x > 3) |
| reduce(fn) | Reduce to single value | arr.reduce((a,b) => a+b, 0) |
| find(fn) | Find first matching element | arr.find(x => x > 3) |
| some(fn) | Check if any match | arr.some(x => x > 3) |
| every(fn) | Check if all match | arr.every(x => x > 0) |

---

## Advantages of Arrays

- **Fast access** — O(1) access using index
- **Simple to use** — easy to create and traverse
- **Memory efficient** — stored in contiguous memory
- **Cache friendly** — contiguous storage helps CPU cache

---

## Disadvantages of Arrays

- **Fixed size** — in static languages, size cannot change after creation
- **Slow insert/delete** — inserting or deleting in middle requires shifting elements → O(n)
- **Same data type** — cannot mix types in typed languages
- **Wasted memory** — if array is too large and not fully used

---

## Time Complexity of Array Operations

| Operation | Time Complexity | Reason |
|---|---|---|
| Access by index | O(1) | Direct memory address calculation |
| Search (unsorted) | O(n) | May check every element |
| Search (sorted) | O(log n) | Binary search possible |
| Insert at end | O(1) | Just add at last position |
| Insert at beginning / middle | O(n) | Must shift all elements |
| Delete at end | O(1) | Just remove last |
| Delete at beginning / middle | O(n) | Must shift all elements |
| Traverse | O(n) | Visit every element once |

---

## Space Complexity

| Case | Space Complexity |
|---|---|
| Storing n elements | O(n) |
| Extra space for operations | O(1) for most operations |
| Merge / Copy array | O(n) for the new array |

---

## Quick Revision Table

| Term | Simple Meaning |
|---|---|
| Array | Collection of same-type elements in contiguous memory |
| Index | Position number of an element, starts from 0 |
| 1D Array | Simple list — one row of elements |
| 2D Array | Table of elements — rows and columns |
| Traversal | Visiting every element one by one |
| Linear Search | Search one by one — O(n) |
| Binary Search | Search by halving — O(log n), needs sorted array |
| push / pop | Add/remove from end — O(1) |
| unshift / shift | Add/remove from beginning — O(n) |

---

## Viva Q&A

**Q1. What is an Array?**
An Array is a collection of elements of the same data type stored in contiguous memory locations. Each element can be accessed directly using an index number that starts from 0.

**Q2. What is an index in an array?**
An index is the position number of an element in an array. Array indexing starts from 0. So the first element is at index 0, the second at index 1, and so on.

**Q3. Why is array access O(1)?**
Because elements are stored in contiguous memory. The computer calculates the exact memory address of any element using the formula: base address + (index × size of element). So it can jump directly to any element without traversing.

**Q4. Why is inserting at the beginning of an array O(n)?**
Because when we insert at the beginning, all existing elements must shift one position to the right to make space for the new element. Shifting n elements takes O(n) time.

**Q5. What is the difference between a 1D and 2D array?**
A 1D array is a simple list of elements in a single row. A 2D array is an array of arrays, like a table with rows and columns. Elements in a 2D array are accessed using two indices — row and column.

**Q6. What is the difference between Linear Search and Binary Search?**
Linear Search checks every element one by one and works on any array. Its time complexity is O(n). Binary Search works only on sorted arrays and cuts the search space in half at each step. Its time complexity is O(log n).

**Q7. What are the advantages of arrays?**
Arrays provide O(1) direct access using index, are simple to use, stored in contiguous memory making them cache friendly, and are memory efficient for storing a collection of same-type elements.

**Q8. What are the disadvantages of arrays?**
Arrays have fixed size in static languages, inserting or deleting in the middle is slow at O(n) due to shifting, all elements must be of the same type, and memory can be wasted if the array is larger than needed.

**Q9. What is the difference between push and unshift in JavaScript?**
push adds an element at the end of the array and takes O(1) time. unshift adds an element at the beginning and takes O(n) time because all existing elements must shift to the right.

**Q10. What is a 2D array? Give a real-world example.**
A 2D array is an array where each element is itself an array, forming a table with rows and columns. A real-world example is a spreadsheet or a chessboard where each cell is identified by a row number and a column number.

**Q11. What is array traversal?**
Array traversal means visiting every element of the array one by one from the first index to the last. It is done using loops and has a time complexity of O(n).

**Q12. What is the time complexity of searching in an unsorted array?**
O(n), because we use linear search and may have to check every element before finding the target or confirming it is not present.

**Q13. What is the space complexity of an array?**
The space complexity of storing n elements in an array is O(n) because memory is needed for each element. Most operations on arrays use O(1) extra space.

**Q14. When should we use an array over a linked list?**
We should use an array when we need fast O(1) access to elements by index, when the size is known in advance, and when we do more reading than inserting or deleting. Linked lists are better when we frequently insert or delete at the beginning or middle.

**Q15. What happens in memory when we create an array?**
When we create an array, the computer allocates a contiguous block of memory large enough to hold all elements. Each element occupies a fixed-size slot in that block, and the index is used to calculate the exact memory address of each element.

---

