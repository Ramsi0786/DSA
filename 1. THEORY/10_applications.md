# 10 — Applications of Data Structures

---

## Why Applications Matter?

Knowing a data structure is one thing. Knowing **where and why it is used in real life** is what makes you truly understand it.

**Simple words:** Every data structure was invented to solve a specific real-world problem. When you know the application, you will always remember which data structure to use and why.

---

## 1. Array — Applications

**What it is:** Collection of elements in contiguous memory, accessed by index.

### Real-world Applications:

- **Image processing** — An image is stored as a 2D array of pixels. Each pixel value is one element in the array.
- **Spreadsheets** — Rows and columns of data in Excel or Google Sheets are stored as 2D arrays.
- **Contact list in phone** — All contacts stored in an array, accessed by index.
- **Leaderboard in games** — Player scores stored and sorted in an array.
- **Database tables** — Each row of a table is stored as an array of column values.
- **Matrix operations** — Mathematical matrices used in graphics, AI, and machine learning are 2D arrays.
- **Video frames** — A video is a sequence of image frames stored as an array.
- **Browser history (simple)** — List of visited URLs stored as an array.

### Why Array is used here:
Fast O(1) access by index is needed. When we know the position of data, arrays give the fastest retrieval.

---

## 2. Linked List — Applications

**What it is:** Nodes connected through pointers, dynamic size, O(1) insert/delete at beginning.

### Real-world Applications:

- **Browser history (back & forward)** — Each page visited is a node. Back button goes to previous node, forward goes to next. Uses Doubly Linked List.
- **Music playlist** — Each song is a node. Next song and previous song use next and prev pointers. Uses Doubly Linked List.
- **Undo & Redo in text editors** — Each action is stored as a node. Undo goes to previous node, Redo goes to next. Uses Doubly Linked List.
- **Image viewer** — Next image and previous image navigation uses Doubly Linked List.
- **GPS navigation** — Route is stored as linked nodes. Each turn is a node pointing to the next turn.
- **Hash table chaining** — When two keys land in the same bucket (collision), a linked list stores all values at that bucket.
- **Memory management** — Operating systems use linked lists to track free and used memory blocks.
- **Polynomial representation** — Each term of a polynomial like 3x² + 2x + 1 is stored as a node.

### Why Linked List is used here:
Dynamic size and fast insertion/deletion without shifting. Ideal when data grows and shrinks frequently.

---

## 3. Stack — Applications

**What it is:** LIFO (Last In First Out) structure. Only top element is accessible.

### Real-world Applications:

- **Function call management** — The Call Stack in every program is a Stack. When a function is called, it is pushed. When it returns, it is popped.
- **Undo operation** — In text editors like MS Word, every action is pushed onto a stack. Ctrl+Z pops the last action and undoes it.
- **Browser back button** — Each page visited is pushed. Pressing back pops the current page and returns to the previous one.
- **Expression evaluation** — Compilers use stacks to evaluate mathematical expressions like 3 + (4 × 2).
- **Balanced parentheses checking** — Compilers check if brackets are balanced using a stack. Opening brackets are pushed, closing brackets are matched by popping.
- **Syntax parsing** — Compilers and interpreters use stacks to parse and validate code syntax.
- **Backtracking algorithms** — Maze solving, puzzle solving — when a path fails, stack helps backtrack to the previous step.
- **Reverse a string or word** — Push all characters, then pop them in reverse order.

### Why Stack is used here:
LIFO order is perfect when we need to reverse operations or go back to the most recent state.

---

## 4. Queue — Applications

**What it is:** FIFO (First In First Out) structure. First element added is first to be removed.

### Real-world Applications:

- **CPU scheduling** — Operating systems use queues to manage processes waiting for CPU time. First process in the queue gets CPU first.
- **Printer queue** — Documents sent to the printer are queued. First document sent is printed first.
- **Keyboard buffer** — Keystrokes are stored in a queue. First key pressed is first to be processed.
- **Call center systems** — Customer calls are queued. First caller is answered first.
- **Breadth First Search (BFS)** — Graph traversal algorithm uses a queue to visit nodes level by level.
- **Order processing systems** — Online orders are processed in the order they were placed.
- **Ticket booking systems** — Users in a waiting list are served in order.
- **Message queues** — In distributed systems like WhatsApp or email, messages are queued and delivered in order.
- **Circular Queue in traffic systems** — Traffic lights rotate through signals using circular queue logic.

### Why Queue is used here:
FIFO order is essential when fairness matters — whoever comes first should be served first.

---

## 5. Hash Table (Hash Map) — Applications

**What it is:** Key-value pairs with O(1) average time for insert, search, and delete.

### Real-world Applications:

- **Database indexing** — Databases use hash tables to index records for fast lookup by primary key.
- **Caching** — Web browsers, DNS servers, and CDNs use hash tables to store frequently accessed data for instant retrieval.
- **Password storage** — Passwords are hashed and stored. When you log in, your input is hashed and compared with the stored hash.
- **Frequency counting** — Counting how many times each word appears in a document uses a hash map.
- **Spell checker** — Dictionary words stored in a hash table for O(1) spell checking.
- **Symbol table in compilers** — Variable names and their values are stored in a hash table during compilation.
- **Phone book / Contact lookup** — Name as key, phone number as value — O(1) lookup.
- **Unique element detection** — Checking if an element has already been seen uses a hash set.
- **Implementing sets** — A set data structure is built using hash tables internally.

### Why Hash Table is used here:
O(1) average lookup, insert, and delete makes it the fastest structure for key-value data.

---

## 6. Tree — Applications

**What it is:** Hierarchical data structure with parent and child nodes. Root is the top node.

### Real-world Applications:

- **File system** — Folders and files are organized as a tree. Root is the main drive, branches are folders, leaves are files.
- **HTML/XML DOM** — A webpage's structure is a tree. The html tag is the root, with head and body as children.
- **Database indexing (B-Trees)** — Databases use B-Trees and B+ Trees for efficient indexing and range queries.
- **Binary Search Tree** — Used for fast searching, insertion, and deletion in O(log n).
- **Decision trees in AI** — Machine learning models use decision trees to classify data.
- **Expression trees** — Compilers use trees to represent and evaluate mathematical expressions.
- **Autocomplete / Trie** — Search engines and keyboards use Trie trees for word suggestions and autocomplete.
- **Network routing** — Spanning trees are used in network protocols to find shortest paths.
- **Organization chart** — Company hierarchy — CEO at root, managers as children, employees as leaves.
- **Game trees** — Chess and other games use trees to map all possible moves and outcomes.

### Why Tree is used here:
Hierarchical relationships are best represented as trees. Balanced trees give O(log n) operations which is very efficient.

---

## 7. Graph — Applications

**What it is:** A set of nodes (vertices) connected by edges. Can be directed or undirected, weighted or unweighted.

### Real-world Applications:

- **Google Maps / GPS navigation** — Cities are nodes, roads are edges with weights (distance or time). Shortest path algorithms like Dijkstra find the best route.
- **Social networks** — Users are nodes, friendships are edges. Friend suggestions use graph algorithms.
- **Internet / Web crawling** — Web pages are nodes, hyperlinks are edges. Google's crawler traverses this graph.
- **Airline route planning** — Airports are nodes, flights are edges. Finding the cheapest or fastest route is a graph problem.
- **Recommendation systems** — Netflix, Amazon, YouTube use graphs to connect users and items for recommendations.
- **Network topology** — Computers and routers in a network are nodes, cables are edges.
- **Dependency resolution** — Package managers like npm use directed graphs to resolve which packages depend on which others.
- **Fraud detection** — Banks use graph analysis to detect suspicious transaction patterns.
- **Biological networks** — Protein interaction networks in biology are represented as graphs.

### Why Graph is used here:
Graphs model relationships and connections between many entities, which is the most flexible and powerful data structure for real-world networks.

---

## 8. Heap — Applications

**What it is:** A complete binary tree where parent is always greater (Max Heap) or smaller (Min Heap) than children. O(1) access to min/max.

### Real-world Applications:

- **Priority Queue** — Tasks with higher priority are processed first. Hospital emergency rooms, OS schedulers use priority queues backed by heaps.
- **Dijkstra's shortest path algorithm** — Uses a min heap to always pick the next closest node efficiently.
- **Heap Sort** — Sorting algorithm that uses a heap to sort elements in O(n log n).
- **Finding K largest or K smallest elements** — Use a heap to efficiently find top K results.
- **Job scheduling in OS** — Jobs with highest priority are always at the root of the heap and scheduled first.
- **Median finding** — Use two heaps (one min, one max) to find the median of a data stream efficiently.
- **Event-driven simulation** — Events are stored in a min heap ordered by time. The next event to process is always at the root.

### Why Heap is used here:
O(1) access to the minimum or maximum element makes heaps ideal for priority-based processing.

---

## 9. String — Applications

**What it is:** Sequence of characters stored in memory.

### Real-world Applications:

- **Search engines** — Pattern matching and text search across billions of web pages.
- **Text editors** — Every document is processed as a string. Find, replace, spell check all use string operations.
- **DNA sequence analysis** — DNA is represented as a string of characters A, T, G, C. Pattern matching finds genes.
- **Compilers and interpreters** — Source code is a string that is tokenized, parsed, and interpreted.
- **Cryptography** — Encryption algorithms process data as strings of characters or bytes.
- **URL parsing** — Web servers parse URLs as strings to route requests.
- **Natural Language Processing (NLP)** — AI models process text as strings to understand language.
- **Password validation** — Checking length, special characters, and patterns uses string operations.

---

## 10. Recursion — Applications

**What it is:** A function solving a problem by calling itself with smaller inputs.

### Real-world Applications:

- **File system traversal** — Listing all files in nested folders recursively opens each folder and lists its contents.
- **Tree and graph traversal** — DFS (Depth First Search), in-order, pre-order, post-order traversals are naturally recursive.
- **Merge Sort and Quick Sort** — Both divide the array recursively into halves and sort.
- **Tower of Hanoi** — Moving disks between pegs is a classic recursive problem.
- **Fractal generation** — Fractals in computer graphics are generated recursively.
- **Parsing** — Compilers parse nested structures like expressions and code blocks recursively.
- **Backtracking problems** — Sudoku solving, N-Queens problem, maze solving all use recursion with backtracking.
- **XML/HTML parsing** — Parsing nested tags in HTML and XML documents uses recursion.

---

## Quick Summary — Data Structure vs Application

| Data Structure | Key Application |
|---|---|
| Array | Images, spreadsheets, leaderboards, matrix operations |
| Linked List | Browser history, music playlist, undo/redo, memory management |
| Stack | Function calls, undo, browser back, expression evaluation |
| Queue | CPU scheduling, printer, BFS, order processing |
| Hash Table | Caching, password storage, frequency count, symbol table |
| Tree | File system, DOM, database indexing, autocomplete |
| Graph | Maps, social networks, web crawling, recommendations |
| Heap | Priority queue, Dijkstra, heap sort, K largest elements |
| String | Search engines, DNA analysis, compilers, NLP |
| Recursion | File traversal, tree/graph DFS, sorting, backtracking |

---

## Which Data Structure to Use When?

| Situation | Best Data Structure |
|---|---|
| Need fast access by index | Array |
| Need frequent insert/delete at beginning | Linked List |
| Need LIFO — last in first out | Stack |
| Need FIFO — first in first out | Queue |
| Need fast key-value lookup | Hash Table |
| Need hierarchical data | Tree |
| Need to represent connections/relationships | Graph |
| Need fast access to min or max | Heap |
| Need to process text data | String |
| Problem can be broken into smaller same problems | Recursion |

---

## Quick Revision Table

| Term | Simple Meaning |
|---|---|
| Array | Best for index-based access — images, tables |
| Linked List | Best for dynamic insert/delete — playlists, browser history |
| Stack | Best for LIFO — undo, function calls, back button |
| Queue | Best for FIFO — scheduling, printing, BFS |
| Hash Table | Best for key-value — caching, counting, lookup |
| Tree | Best for hierarchy — file system, DOM, search |
| Graph | Best for networks — maps, social media, web |
| Heap | Best for priority — scheduling, shortest path |
| String | Best for text — search, parsing, NLP |
| Recursion | Best for self-similar problems — traversal, sorting |

---

## Viva Q&A

**Q1. What is the main application of an Array?**
Arrays are mainly used where fast index-based access is needed. Real-world examples include storing image pixels as a 2D array, spreadsheet data, leaderboard scores in games, and database table rows. Arrays are ideal when the size is known and direct access by position is required.

**Q2. Where is a Linked List used in real life?**
Linked Lists are used in browser history where each page is a node and back/forward buttons navigate through nodes. Music playlists use doubly linked lists for next and previous song navigation. Undo and redo in text editors, image viewers, and memory management in operating systems also use linked lists.

**Q3. What are the applications of a Stack?**
Stacks are used in the function call stack of every program where each function call is pushed and popped when it returns. Undo operations in text editors, browser back button, balanced parentheses checking in compilers, expression evaluation, and backtracking algorithms all use stacks.

**Q4. What are the applications of a Queue?**
Queues are used in CPU process scheduling where the first process gets CPU first, printer queues, keyboard buffers, call center systems, Breadth First Search graph traversal, online order processing, and message queues in distributed systems like WhatsApp.

**Q5. Why is a Hash Table used for caching?**
Hash Tables provide O(1) average time for lookup. When a web browser or server caches data, it stores the URL or key in a hash table with the cached content as the value. The next time the same URL is requested, the hash table instantly returns the cached result without fetching it again.

**Q6. What is the application of a Tree in file systems?**
A file system is organized as a tree. The root is the main drive. Branches are folders which can contain more folders or files. Leaves are the actual files. This hierarchical structure allows efficient navigation, searching, and organization of files.

**Q7. How is a Graph used in Google Maps?**
In Google Maps, cities and locations are represented as nodes (vertices) and roads between them are edges with weights representing distance or travel time. Shortest path algorithms like Dijkstra's algorithm traverse this graph to find the fastest or shortest route between two locations.

**Q8. What is the application of a Heap in operating systems?**
Heaps are used to implement priority queues in operating systems. Each process or job has a priority. The heap always keeps the highest priority process at the root, so the OS can instantly access and schedule the most important task in O(1) time.

**Q9. How is recursion used in file system traversal?**
When listing all files in a folder that contains subfolders, recursion is used. The function opens a folder, lists its contents, and for each subfolder found, calls itself recursively. It keeps going deeper until it reaches folders with no more subfolders — the base case.

**Q10. Why is a Hash Table used for password storage?**
Passwords are never stored as plain text. Instead, the password is hashed using a hash function which converts it into a fixed-length string. This hash is stored. When you log in, your entered password is hashed and compared with the stored hash. Even if the database is stolen, the actual passwords cannot be recovered from the hashes.

**Q11. What is the application of a Stack in compilers?**
Compilers use stacks to check balanced parentheses, evaluate arithmetic expressions, and parse code syntax. When an opening bracket is found it is pushed onto the stack. When a closing bracket is found the stack is popped and checked for a match. If the stack is empty at the end, the brackets are balanced.

**Q12. Where is a Trie (Tree) used in real life?**
A Trie is a special tree used in autocomplete features. Search engines, mobile keyboards, and IDE code editors use Tries to suggest word completions as you type. Each character of a word is stored as a node, and all words sharing the same prefix share the same path in the tree.

**Q13. How does a social network use a Graph?**
In a social network like Facebook or Instagram, each user is a node and each friendship or follow is an edge. Graph algorithms find mutual friends, suggest new friends based on connections, detect communities, and calculate influence based on number of connections.

**Q14. What is the application of Merge Sort using Recursion?**
Merge Sort uses recursion to sort an array. It recursively divides the array into two halves until each half has one element (base case). Then it merges the sorted halves back together. This divide and conquer approach gives O(n log n) time complexity.

**Q15. Which data structure would you use to implement an undo feature and why?**
A Stack is the best choice for implementing an undo feature. Every action the user performs is pushed onto the stack. When the user presses undo, the most recent action is popped from the stack and reversed. This LIFO behavior of stacks perfectly matches the undo requirement where the last action is the first to be undone.

---
