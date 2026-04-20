# 02 — Memory Allocation & Memory Leak

---

## What is Memory?

Memory (RAM) is where a computer **temporarily stores data** while a program is running.

**Simple words:** When you run a program, the computer gives it some space in RAM to store variables, data, and instructions. This space is called **memory**.

---

## What is Memory Allocation?

**Memory Allocation** is the process of **reserving a block of memory** for a program or variable to use.

**Simple words:** When you create a variable or a data structure in your program, the computer sets aside some memory space for it. That process is called memory allocation.

---

## Types of Memory Allocation

There are two types:

### 1. Static Memory Allocation

Memory is allocated **at compile time** (before the program runs).

- Size is fixed and decided in advance
- Cannot grow or shrink during runtime
- Stored in the **Stack**
- Faster but less flexible

**Example:**
```js
let x = 10;         // fixed size, allocated at compile time
let arr = [1,2,3];  // fixed size array
```

**Real-world analogy:** Booking a fixed number of seats in a cinema hall before the show starts.

---

### 2. Dynamic Memory Allocation

Memory is allocated **at runtime** (while the program is running).

- Size can grow or shrink as needed
- Stored in the **Heap**
- More flexible but slightly slower
- Programmer must manage it carefully

**Example:**
```js
let arr = [];          // dynamic — grows as we push
arr.push(1);
arr.push(2);
arr.push(3);
```

**Real-world analogy:** A hotel where rooms are booked and released as guests arrive and leave.

---

## Stack vs Heap Memory

These are the two areas of memory used during program execution.

### Stack
- Stores **local variables** and **function calls**
- Memory is automatically allocated and freed
- Works in **LIFO order** (Last In First Out)
- Fixed size — can cause **Stack Overflow** if exceeded
- Very fast

### Heap
- Stores **dynamically allocated data** (objects, arrays)
- Memory must be manually managed or handled by garbage collector
- No fixed order
- Larger size than stack
- Slightly slower than stack

---

## Stack vs Heap — Comparison Table

| Feature | Stack | Heap |
|---|---|---|
| Allocation | Compile time | Runtime |
| Size | Fixed / Limited | Large / Flexible |
| Speed | Very fast | Slightly slower |
| Management | Automatic | Manual or GC |
| Data stored | Local variables, function calls | Objects, dynamic arrays |
| Order | LIFO | No fixed order |
| Risk | Stack Overflow | Memory Leak |

---

## How Memory Allocation Works — Simple Flow

```
Program starts
      ↓
Variables declared → Stack memory allocated
      ↓
Objects / arrays created → Heap memory allocated
      ↓
Function ends → Stack memory freed automatically
      ↓
Objects no longer needed → Heap memory should be freed
      ↓
Program ends → All memory released
```

---

## What is a Memory Leak?

A **Memory Leak** happens when a program **allocates memory but never frees it**, even after it is no longer needed.

**Simple words:** Imagine you borrow books from a library but never return them. Eventually the library runs out of books for others. Same way, if a program keeps taking memory without releasing it, the system runs out of memory.

---

## How Memory Leak Happens

```js
function createLeak() {
  let bigArray = new Array(1000000).fill('data');
  // bigArray is never cleared or returned
  // memory is held forever — this is a leak
}

setInterval(createLeak, 1000); // called every second → memory keeps growing
```

Every second this runs, more memory is grabbed and never released. Eventually the program crashes.

---

## Common Causes of Memory Leak

### 1. Forgotten Timers or Intervals
```js
setInterval(() => {
  // runs forever, holds references in memory
}, 1000);
// never cleared with clearInterval()
```

### 2. Global Variables
```js
function example() {
  leakedVar = "I am global"; // no let/const/var — becomes global
  // stays in memory for entire program lifetime
}
```

### 3. Detached DOM Elements (in browsers)
```js
let element = document.getElementById('myDiv');
document.body.removeChild(element);
// element removed from DOM but JS variable still holds reference
// memory not freed
```

### 4. Closures holding references
```js
function outer() {
  let bigData = new Array(100000).fill('x');
  return function inner() {
    console.log(bigData[0]); // bigData stays in memory as long as inner exists
  }
}
```

---

## Effects of Memory Leak

- Program becomes **slower and slower** over time
- **RAM usage keeps increasing**
- System becomes **unresponsive**
- Program eventually **crashes**
- In servers — causes **downtime**

---

## What is Garbage Collection?

**Garbage Collection (GC)** is an **automatic memory management** process where the runtime environment finds and frees memory that is no longer being used.

**Simple words:** In languages like JavaScript, Java, and Python, you don't have to manually free memory. The garbage collector automatically finds unused memory and releases it.

**Languages with GC:** JavaScript, Java, Python, Go

**Languages without GC (manual):** C, C++ (programmer must free memory manually using `free()` or `delete`)

---

## How Garbage Collection Works (Simple)

The GC uses a methods

- **Mark and Sweep**:

1. **Mark** — GC starts from root variables and marks everything that is still reachable
2. **Sweep** — Everything that is NOT marked (unreachable) is deleted and memory is freed

```
Root variables → reachable objects → marked ✅ → kept in memory
Unreachable objects → not marked ❌ → swept away → memory freed
```
- Mark-and-Compact (defragmentation)

Mark live objects → move them together → free the gaps

After marking, the GC compacts memory so live objects are contiguous

Why it exists

Mark-and-sweep can leave fragmentation (holes)
Compaction improves cache locality and future allocations

Trade-off

Moving objects requires updating references (more work)

- Generational GC (most practical)

“Most objects die young”

Split heap into:
Young generation (nursery)
Old generation

How it works

New objects go to young space
Frequent, cheap collections clean young space
Survivors get promoted to old space
Old space is collected less often (heavier algorithms)

Why it’s powerful

Avoids scanning the entire heap every time
Great real-world performance (used by V8, JVM, .NET)

- Generational GC (most practical)

“Most objects die young”

Split heap into:
Young generation (nursery)
Old generation

How it works

New objects go to young space
Frequent, cheap collections clean young space
Survivors get promoted to old space
Old space is collected less often (heavier algorithms)

Why it’s powerful

Avoids scanning the entire heap every time
Great real-world performance (used by V8, JVM, .NET)
---

## How to Avoid Memory Leaks

1. **Clear timers and intervals** when no longer needed
```js
let timer = setInterval(fn, 1000);
clearInterval(timer); // always clear when done
```

2. **Always use let / const** instead of accidental globals
```js
let name = "correct"; // not just: name = "wrong"
```

3. **Remove event listeners** when not needed
```js
element.removeEventListener('click', handler);
```

4. **Set variables to null** when done
```js
let bigData = loadHugeData();
// after use:
bigData = null; // GC can now free it
```

5. **Avoid unnecessary global variables** — they live for the entire program lifetime

---

## Quick Revision Table

| Term | Simple Meaning |
|---|---|
| Memory Allocation | Reserving memory space for a program/variable |
| Static Allocation | Memory fixed at compile time, stored in Stack |
| Dynamic Allocation | Memory assigned at runtime, stored in Heap |
| Stack | Memory area for local variables and function calls |
| Heap | Memory area for dynamic data like objects and arrays |
| Memory Leak | Memory allocated but never freed |
| Garbage Collection | Automatic process of freeing unused memory |
| Mark and Sweep | GC method — mark reachable, sweep unreachable |
| Stack Overflow | Stack runs out of space, usually from infinite recursion |

---

## Viva Q&A

**Q1. What is Memory Allocation?**
Memory Allocation is the process of reserving a block of memory in RAM for a program or variable to use during execution.

**Q2. What are the two types of Memory Allocation?**
The two types are Static Memory Allocation and Dynamic Memory Allocation. Static allocation happens at compile time with a fixed size and is stored in the Stack. Dynamic allocation happens at runtime with flexible size and is stored in the Heap.

**Q3. What is the Stack in memory?**
Stack is a region of memory that stores local variables and function calls. It is automatically managed, works in LIFO order, and is very fast. It has a fixed size and can cause a Stack Overflow if exceeded.

**Q4. What is the Heap in memory?**
Heap is a region of memory used for dynamic memory allocation. It stores objects and arrays created at runtime. It is larger and more flexible than the Stack but requires manual management or garbage collection.

**Q5. What is a Memory Leak?**
A Memory Leak is a situation where a program allocates memory but never releases it after it is no longer needed. Over time this causes the program to consume more and more memory, leading to slowness and crashes.

**Q6. What are the common causes of Memory Leak?**
Common causes include forgotten timers or intervals that are never cleared, accidental global variables, detached DOM elements still referenced in JavaScript, and closures that hold references to large data unnecessarily.

**Q7. What are the effects of a Memory Leak?**
Memory leaks cause the program to become progressively slower, RAM usage keeps increasing, the system becomes unresponsive, and eventually the program crashes. In servers it can cause downtime.

**Q8. What is Garbage Collection?**
Garbage Collection is an automatic memory management feature in languages like JavaScript, Java, and Python where the runtime automatically finds and frees memory that is no longer being used by the program.

**Q9. Explain the Mark and Sweep method of Garbage Collection.**
In the Mark and Sweep method, the garbage collector first marks all objects that are still reachable from the root variables. Then it sweeps through memory and frees all objects that were not marked, as they are no longer needed.

**Q10. What is Stack Overflow?**
Stack Overflow happens when the Stack runs out of memory space. This commonly occurs due to infinite recursion, where a function keeps calling itself without a base condition, filling up the Stack completely.

**Q11. What is the difference between Stack and Heap memory?**
Stack is used for static allocation of local variables and function calls. It is fast, automatically managed, and limited in size. Heap is used for dynamic allocation of objects and arrays. It is larger, more flexible, but requires garbage collection or manual management.

**Q12. How can we prevent Memory Leaks?**
We can prevent memory leaks by clearing timers and intervals when done, always using let or const instead of accidental globals, removing event listeners when not needed, setting variables to null after use, and avoiding unnecessary global variables.

**Q13. Which languages use manual memory management?**
C and C++ use manual memory management. The programmer must explicitly free memory using free() in C or delete in C++. If not done, memory leaks occur.

**Q14. Why is memory management important in Data Structures?**
Because data structures like linked lists, trees, and graphs allocate memory dynamically for each node. If nodes are not properly deleted after use, memory leaks occur and the program consumes unnecessary memory over time.

---

