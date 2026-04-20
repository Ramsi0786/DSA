# 06 — Linked List

---

## What is a Linked List?

A **Linked List** is a **linear data structure** where elements are stored in **nodes**, and each node is connected to the next node using a **pointer**.

**Simple words:** Unlike an array where elements are stored side by side in memory, a linked list stores elements at different memory locations. Each element holds the data and the address of the next element. It is like a treasure hunt — each clue points to the next location.

**Real-world analogy:** A train with coaches. Each coach is connected to the next one. To reach coach 5, you start from coach 1 and move one by one. You cannot jump directly to coach 5.

---

## Node — The Building Block

Every linked list is made of **nodes**. Each node has two parts:

```
[ DATA | NEXT POINTER ]
```

- **Data** → the actual value stored
- **Next Pointer** → the address of the next node in the list

**In code (JavaScript):**
```js
class Node {
  constructor(data) {
    this.data = data;   // stores the value
    this.next = null;   // points to next node, null means end
  }
}
```

---

## How a Linked List Looks in Memory

```
Head
 ↓
[10 | •]──→ [20 | •]──→ [30 | •]──→ [40 | null]
```

- **Head** → pointer to the first node
- Each node points to the next
- Last node points to **null** → meaning end of list
- Nodes are stored at **random memory locations** (not contiguous like arrays)

---

## Types of Linked Lists

There are three main types:

### 1. Singly Linked List
Each node has **one pointer** — pointing to the **next node** only.
Traversal is only possible in **one direction** (forward).

```
[10 | •]──→ [20 | •]──→ [30 | •]──→ [40 | null]
```

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }
}
```

---

### 2. Doubly Linked List
Each node has **two pointers** — one pointing to the **next node** and one pointing to the **previous node**.
Traversal is possible in **both directions** (forward and backward).

```
null ←[• | 10 | •]⇄[• | 20 | •]⇄[• | 30 | •]→ null
```

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;  // points to next node
    this.prev = null;  // points to previous node
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;  // tail pointer for O(1) insert at end
  }
}
```

---

### 3. Circular Linked List
The **last node points back to the first node** instead of null.
The list forms a **circle** — no null at the end.
Can be singly or doubly circular.

```
[10 | •]──→ [20 | •]──→ [30 | •]──→ [40 | •]──┐
 ↑                                              │
 └──────────────────────────────────────────────┘
```

**Real-world analogy:** A circular conveyor belt — after the last item, it comes back to the first item again.

**Use cases:** Music playlist on loop, round-robin CPU scheduling, multiplayer board games (turns go in a circle).

---

## Singly vs Doubly vs Circular — Comparison

| Feature | Singly | Doubly | Circular |
|---|---|---|---|
| Pointers per node | 1 (next) | 2 (next + prev) | 1 or 2 |
| Traversal direction | Forward only | Forward & backward | Circular |
| Memory per node | Less | More | Same as singly/doubly |
| Insert at end | O(n) | O(1) with tail | O(n) or O(1) with tail |
| Delete at end | O(n) | O(1) with tail | O(n) |
| Reverse traversal | Not possible | Possible | Not possible (singly) |
| Last node points to | null | null | Head node |

---

## How Linked List is Stored in Memory

Unlike arrays, linked list nodes are **not stored side by side**. They are scattered across different memory locations and connected through pointers.

```
Memory Address:  100      250      430      610
                [10|250] [20|430] [30|610] [40|null]
```

- Node at address 100 holds data 10 and points to address 250
- Node at address 250 holds data 20 and points to address 430
- And so on...

**Simple words:** It is like following a chain of clues scattered across a city. Each clue tells you where the next one is.

---

## Linked List vs Array — Key Differences

| Feature | Array | Linked List |
|---|---|---|
| Memory | Contiguous (side by side) | Non-contiguous (scattered) |
| Size | Fixed (static) | Dynamic (grows/shrinks) |
| Access | O(1) — direct by index | O(n) — must traverse |
| Insert at beginning | O(n) — shift elements | O(1) — change pointer |
| Insert at end | O(1) | O(n) singly / O(1) doubly |
| Delete at beginning | O(n) — shift elements | O(1) — change pointer |
| Memory usage | Less (no pointers) | More (extra pointer per node) |
| Cache performance | Good (contiguous) | Poor (scattered memory) |
| Search | O(n) linear / O(log n) binary | O(n) only |

---

## Advantages of Linked List

- **Dynamic size** — grows and shrinks at runtime, no need to declare size in advance
- **Efficient insert/delete at beginning** — O(1), just change the head pointer
- **No memory wastage** — memory is allocated only when a new node is needed
- **Easy to implement stacks and queues** using linked lists

---

## Disadvantages of Linked List

- **No direct access** — cannot access element by index, must traverse from head → O(n)
- **Extra memory** — each node needs an extra pointer which uses additional memory
- **Poor cache performance** — nodes scattered in memory, CPU cache cannot be used efficiently
- **No binary search** — since elements are not in contiguous memory, binary search is not possible
- **Reverse traversal** — not possible in singly linked list

---

## Time Complexity of Linked List Operations

### Singly Linked List

| Operation | Time Complexity | Reason |
|---|---|---|
| Access by index | O(n) | Must traverse from head |
| Search | O(n) | Must traverse one by one |
| Insert at beginning | O(1) | Just update head pointer |
| Insert at end | O(n) | Must traverse to reach last node |
| Insert at middle | O(n) | Must find position first |
| Delete at beginning | O(1) | Just move head to next node |
| Delete at end | O(n) | Must traverse to second last node |
| Delete at middle | O(n) | Must find the node first |

### Doubly Linked List

| Operation | Time Complexity | Reason |
|---|---|---|
| Access by index | O(n) | Must traverse |
| Search | O(n) | Must traverse |
| Insert at beginning | O(1) | Update head and prev pointer |
| Insert at end | O(1) | Use tail pointer directly |
| Insert at middle | O(n) | Must find position first |
| Delete at beginning | O(1) | Update head pointer |
| Delete at end | O(1) | Use tail pointer directly |
| Delete at middle | O(n) | Must find node first |

---

## Space Complexity

| Type | Space Complexity | Reason |
|---|---|---|
| Singly Linked List | O(n) | n nodes, each with data + 1 pointer |
| Doubly Linked List | O(n) | n nodes, each with data + 2 pointers |
| Circular Linked List | O(n) | Same as singly or doubly |

---

## Applications of Linked List

- **Stacks and Queues** — implemented using linked lists
- **Browser history** — back and forward navigation (doubly linked list)
- **Music playlist** — next and previous song (doubly linked list)
- **Undo/Redo functionality** — in text editors
- **Image viewer** — next and previous image
- **Round-robin scheduling** — OS uses circular linked list for CPU scheduling
- **Hash table chaining** — collisions handled using linked lists
- **Polynomial representation** — each term stored as a node

---

## Quick Revision Table

| Term | Simple Meaning |
|---|---|
| Linked List | Linear DS where nodes are connected using pointers |
| Node | Building block of linked list — holds data and pointer |
| Head | Pointer to the first node of the list |
| Tail | Pointer to the last node (used in doubly linked list) |
| Singly Linked List | Each node points to next node only |
| Doubly Linked List | Each node points to both next and previous nodes |
| Circular Linked List | Last node points back to the first node |
| Null | Marks the end of a singly or doubly linked list |
| Traversal | Moving through nodes one by one starting from head |

---

## Viva Q&A

**Q1. What is a Linked List?**
A Linked List is a linear data structure where data is stored in nodes, and each node contains the data and a pointer to the next node. Unlike arrays, nodes are not stored in contiguous memory locations — they are connected through pointers.

**Q2. What is a Node in a Linked List?**
A Node is the basic building block of a linked list. Each node has two parts — the data part which stores the actual value, and the pointer part which stores the address of the next node in the list.

**Q3. What is the Head of a Linked List?**
The Head is a pointer that points to the first node of the linked list. It is the starting point of the list. If the head is null, it means the list is empty.

**Q4. What are the types of Linked Lists?**
There are three main types. Singly Linked List where each node points to the next node only. Doubly Linked List where each node has two pointers — one to the next node and one to the previous node. Circular Linked List where the last node points back to the first node forming a circle.

**Q5. What is the difference between Singly and Doubly Linked List?**
In a Singly Linked List, each node has only one pointer pointing to the next node, so traversal is possible only in the forward direction. In a Doubly Linked List, each node has two pointers — next and prev — so traversal is possible in both forward and backward directions. Doubly linked list uses more memory but allows O(1) deletion at the end using a tail pointer.

**Q6. What is a Circular Linked List?**
A Circular Linked List is a linked list where the last node points back to the first node instead of null. This forms a circle. It is useful in applications like round-robin CPU scheduling, music playlists on loop, and multiplayer board games.

**Q7. What is the difference between an Array and a Linked List?**
An array stores elements in contiguous memory locations and allows O(1) direct access by index but has a fixed size. A linked list stores nodes at scattered memory locations connected by pointers, does not allow direct access so traversal is O(n), but has dynamic size and allows O(1) insertion and deletion at the beginning.

**Q8. Why is insertion at the beginning of a Linked List O(1)?**
Because we only need to create a new node, set its next pointer to the current head, and update the head to point to the new node. No traversal is needed, so it is O(1).

**Q9. Why is insertion at the end of a Singly Linked List O(n)?**
Because we have to start from the head and traverse all the way to the last node before we can attach the new node. Traversing n nodes takes O(n) time. In a Doubly Linked List with a tail pointer, this becomes O(1).

**Q10. Why can we not do Binary Search on a Linked List?**
Binary Search requires direct access to the middle element. In a linked list, we cannot directly access any element by index — we must traverse from the head. Since direct access is not possible, Binary Search cannot be applied.

**Q11. What are the advantages of a Linked List over an Array?**
Linked lists have dynamic size so memory is allocated only when needed. Insertion and deletion at the beginning is O(1). There is no memory wastage from unused slots. It is easier to implement stacks and queues using linked lists.

**Q12. What are the disadvantages of a Linked List?**
Linked lists do not support direct access by index, so every search requires O(n) traversal. Each node requires extra memory for the pointer. Nodes are scattered in memory so CPU cache performance is poor. Binary search is not possible.

**Q13. What is the time complexity of searching in a Linked List?**
O(n), because we have to traverse from the head node and check each node one by one until we find the element or reach the end of the list.

**Q14. How does a Doubly Linked List allow O(1) deletion at the end?**
Because a doubly linked list maintains a tail pointer that directly points to the last node. To delete the last node, we access the tail, update the tail to the previous node using the prev pointer, and set its next to null. No traversal is needed.

**Q15. What are the real-world applications of Linked Lists?**
Linked lists are used in browser history for back and forward navigation, music playlists for next and previous song, undo and redo functionality in text editors, round-robin CPU scheduling using circular linked list, and hash table collision handling using chaining.

---

