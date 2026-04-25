import { SubQuestion, Definition, CodeBlock, KeyPoints, ComparisonTable, Example, FlowChart, Hr } from './shared';

export default function Question2() {
  return (
    <div className="mb-16">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-6">
          <h2 className="text-2xl font-bold">Question 2: Data Structures, Stack, Sorting, Trees & Graphs</h2>
          <p className="text-purple-200 mt-1">Sub-questions (a through e)</p>
        </div>

        <div className="p-6 sm:p-8 space-y-0">

          {/* 2a - Data Structure */}
          <SubQuestion id="q2a" title="2(a). Define Data Structure. Describe about its need and types.">
            <Definition>
              A <strong>Data Structure</strong> is a systematic way of organizing, storing, and managing data in a computer so that it can be accessed, modified, and processed efficiently. It defines the relationship between the data elements and the operations that can be performed on them. The choice of an appropriate data structure can significantly impact the performance of an algorithm.
            </Definition>

            <p className="text-gray-700 mt-4 leading-relaxed">
              Data structures are the fundamental building blocks of any software system. Every program, from a simple calculator to a complex operating system, relies on data structures to manage information. The need for data structures arises from the fact that the way data is organized directly affects how quickly and efficiently we can perform operations like searching, inserting, deleting, and updating. For example, if we need to frequently search for elements, a hash table (O(1) average) would be far more efficient than an unsorted array (O(n)). Similarly, if we need to maintain data in a hierarchical relationship, a tree structure would be the natural choice.
            </p>

            <p className="text-gray-700 mt-4 leading-relaxed">
              <strong>Why do we need Data Structures?</strong> (1) <strong>Efficiency:</strong> Proper data structures make programs run faster and use less memory. (2) <strong>Reusability:</strong> Well-designed data structures can be reused across multiple applications. (3) <strong>Abstraction:</strong> Data structures provide a level of abstraction, allowing programmers to focus on solving problems rather than low-level data management. (4) <strong>Scalability:</strong> Good data structure choices allow systems to handle growing amounts of data gracefully.
            </p>

            <p className="text-gray-700 mt-4 leading-relaxed">
              <strong>Analogy:</strong> Think of data structures like different types of storage systems. A bookshelf (array) is great for ordered collections where you know the position. A stack of plates (stack) is perfect when you only need the top item. A queue at a bank (queue) works when you need first-come-first-served ordering. A family tree (tree) captures hierarchical relationships. The choice of storage system depends on what operations you need to perform most frequently.
            </p>

            <ComparisonTable
              headers={['Type', 'Category', 'Description', 'Examples', 'Key Operations']}
              rows={[
                ['Array', 'Linear / Static', 'Fixed-size contiguous memory locations storing same-type elements', 'int arr[10];', 'Access, Traverse'],
                ['Linked List', 'Linear / Dynamic', 'Nodes connected via pointers; dynamic size', 'Singly, Doubly, Circular', 'Insert, Delete, Traverse'],
                ['Stack', 'Linear / LIFO', 'Last In, First Out structure', 'Undo/Redo, Call Stack', 'Push, Pop, Peek'],
                ['Queue', 'Linear / FIFO', 'First In, First Out structure', 'Print Queue, BFS', 'Enqueue, Dequeue'],
                ['Tree', 'Non-Linear / Hierarchical', 'Nodes connected in parent-child relationship', 'BST, AVL, B-Tree', 'Insert, Delete, Traverse'],
                ['Graph', 'Non-Linear / Network', 'Nodes (vertices) connected by edges', 'Social Networks, Maps', 'BFS, DFS, Shortest Path'],
                ['Hash Table', 'Linear / Key-Value', 'Maps keys to values using hash function', 'Dictionary, Cache', 'Insert, Search, Delete'],
              ]}
            />

            <h4 className="font-bold text-lg text-gray-800 mt-6 mb-3">Classification of Data Structures</h4>
            <div className="bg-gray-50 border rounded-lg p-4 my-4">
              <pre className="text-sm text-gray-800 leading-relaxed">{`
Data Structures
├── Primitive (int, float, char, boolean)
└── Non-Primitive
    ├── Linear
    │   ├── Static (Array)
    │   └── Dynamic (Linked List, Stack, Queue)
    └── Non-Linear
        ├── Tree (Binary Tree, BST, AVL, B-Tree)
        └── Graph (Directed, Undirected, Weighted)
              `}</pre>
            </div>

            <Example title="Real-World Applications">
              <p><strong>Scenario 1:</strong> In a university management system, student records can be stored in a <strong>linked list</strong> for dynamic enrollment/dropping, course prerequisites can be modeled as a <strong>graph</strong> (DAG), and the waitlist for popular courses can be implemented using a <strong>queue</strong>.</p>
              <p className="mt-3"><strong>Scenario 2:</strong> In a GPS navigation system, the road network is represented as a <strong>weighted graph</strong>, intersections are vertices, roads are edges, and distances are weights. Finding the shortest route uses Dijkstra's algorithm on this graph structure.</p>
            </Example>

            <KeyPoints points={[
              'A data structure is a way of organizing and storing data for efficient access and modification.',
              'Linear data structures: Array, Linked List, Stack, Queue — elements are arranged sequentially.',
              'Non-linear data structures: Tree, Graph — elements are arranged hierarchically or in networks.',
              'Static (fixed size): Arrays. Dynamic (variable size): Linked Lists, Trees.',
              'Choosing the right data structure is critical for algorithm efficiency.',
              'Data structures provide abstraction, reusability, and scalability.',
            ]} />
          </SubQuestion>

          <Hr />

          {/* 2b - Stack */}
          <SubQuestion id="q2b" title="2(b). What is a Stack? Describe the array and linked list implementation of a stack in C. Compare both in terms of memory usage and flexibility.">
            <Definition>
              A <strong>Stack</strong> is a linear data structure that follows the <strong>Last In, First Out (LIFO)</strong> principle. This means that the last element added (pushed) to the stack is the first one to be removed (popped). A stack can be visualized as a stack of plates in a cafeteria — you can only add or remove the top plate. The two primary operations are <code className="bg-gray-100 px-1 rounded">push</code> (insert an element) and <code className="bg-gray-100 px-1 rounded">pop</code> (remove the top element).
            </Definition>

            <p className="text-gray-700 mt-4 leading-relaxed">
              Stacks are one of the most widely used data structures in computer science. They are fundamental to function call management (the call stack), expression evaluation, syntax parsing, backtracking algorithms, and undo mechanisms in text editors. The LIFO property makes stacks ideal for problems where you need to reverse something or track the most recent operation. A stack supports four essential operations: <strong>push(x)</strong> — insert element x on top; <strong>pop()</strong> — remove and return the top element; <strong>peek/top()</strong> — return the top element without removing it; <strong>isEmpty()</strong> — check if the stack is empty.
            </p>

            <p className="text-gray-700 mt-4 leading-relaxed">
              <strong>Analogy:</strong> Imagine a stack of books on your desk. You can only place a new book on the top of the stack, and you can only take the top book. If you want a book that's in the middle, you must remove all books above it first. This is exactly how a stack data structure works — the last book placed is the first one you can pick up.
            </p>

            <h4 className="font-bold text-lg text-gray-800 mt-6 mb-3">Array Implementation of Stack in C</h4>
            <CodeBlock code={`#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;
#define MAX 100  // Maximum size of the stack

// Array-based Stack structure
typedef struct {
    int arr[MAX];
    int top;
} Stack;

// Initialize the stack
void initStack(Stack *s) {
    s->top = -1;  // Stack is empty
}

// Check if stack is full
int isFull(Stack *s) {
    return s->top == MAX - 1;
}

// Check if stack is empty
int isEmpty(Stack *s) {
    return s->top == -1;
}

// Push operation — insert element on top
void push(Stack *s, int value) {
    if (isFull(s)) {
        printf("Stack Overflow! Cannot push %d\\n", value);
        return;
    }
    s->arr[++(s->top)] = value;
    printf("Pushed %d onto the stack.\\n", value);
}

// Pop operation — remove and return top element
int pop(Stack *s) {
    if (isEmpty(s)) {
        printf("Stack Underflow! Stack is empty.\\n");
        return -1;
    }
    return s->arr[(s->top)--];
}

// Peek operation — view top element without removing
int peek(Stack *s) {
    if (isEmpty(s)) {
        printf("Stack is empty.\\n");
        return -1;
    }
    return s->arr[s->top];
}

// Display all elements in the stack
void display(Stack *s) {
    if (isEmpty(s)) {
        printf("Stack is empty.\\n");
        return;
    }
    printf("Stack elements (top to bottom): ");
    for (int i = s->top; i >= 0; i--)
        printf("%d ", s->arr[i]);
    printf("\\n");
}

int main() {
    Stack s;
    initStack(&s);
    push(&s, 10);
    push(&s, 20);
    push(&s, 30);
    display(&s);
    printf("Popped: %d\\n", pop(&s));
    printf("Top element: %d\\n", peek(&s));
    display(&s);
    return 0;
}`} title="Array Implementation of Stack in C" />

            <h4 className="font-bold text-lg text-gray-800 mt-6 mb-3">Linked List Implementation of Stack in C</h4>
            <CodeBlock code={`#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

// Node structure for linked list
typedef struct Node {
    int data;
    struct Node *next;
} Node;

// Stack structure using linked list (top pointer)
typedef struct {
    Node *top;
} Stack;

// Initialize the stack
void initStack(Stack *s) {
    s->top = NULL;
}

// Check if stack is empty
int isEmpty(Stack *s) {
    return s->top == NULL;
}

// Push operation — insert at beginning (top)
void push(Stack *s, int value) {
    Node *newNode = (Node *)malloc(sizeof(Node));
    if (newNode == NULL) {
        printf("Memory allocation failed! Stack Overflow.\\n");
        return;
    }
    newNode->data = value;
    newNode->next = s->top;
    s->top = newNode;
    printf("Pushed %d onto the stack.\\n", value);
}

// Pop operation — remove from beginning (top)
int pop(Stack *s) {
    if (isEmpty(s)) {
        printf("Stack Underflow! Stack is empty.\\n");
        return -1;
    }
    Node *temp = s->top;
    int popped = temp->data;
    s->top = s->top->next;
    free(temp);
    return popped;
}

// Peek operation — view top element
int peek(Stack *s) {
    if (isEmpty(s)) {
        printf("Stack is empty.\\n");
        return -1;
    }
    return s->top->data;
}

// Display all elements
void display(Stack *s) {
    if (isEmpty(s)) {
        printf("Stack is empty.\\n");
        return;
    }
    Node *current = s->top;
    printf("Stack elements (top to bottom): ");
    while (current != NULL) {
        printf("%d ", current->data);
        current = current->next;
    }
    printf("\\n");
}

int main() {
    Stack s;
    initStack(&s);
    push(&s, 10);
    push(&s, 20);
    push(&s, 30);
    display(&s);
    printf("Popped: %d\\n", pop(&s));
    printf("Top element: %d\\n", peek(&s));
    display(&s);
    return 0;
}`} title="Linked List Implementation of Stack in C" />

            <h4 className="font-bold text-lg text-gray-800 mt-6 mb-3">Comparison: Array vs Linked List Stack</h4>
            <ComparisonTable
              headers={['Parameter', 'Array Implementation', 'Linked List Implementation']}
              rows={[
                ['Memory Allocation', 'Static — fixed size at compile time', 'Dynamic — allocated at runtime per node'],
                ['Memory Usage', 'May waste space (unused slots); uses contiguous memory', 'Exact memory needed; extra pointer per node (overhead)', ],
                ['Size Flexibility', 'Fixed (MAX size); cannot grow beyond capacity', 'Flexible; grows/shrinks as needed, limited only by heap'],
                ['Overflow Condition', 'top == MAX - 1 (stack full)', 'malloc fails (rare — system out of memory)'],
                ['Time Complexity', 'All operations O(1)', 'All operations O(1)'],
                ['Memory Overhead', 'No extra pointer per element', 'Each node has an extra pointer (4/8 bytes)'],
                ['Cache Performance', 'Better (contiguous memory — cache friendly)', 'Poorer (scattered memory — cache misses)'],
                ['Implementation', 'Simpler; uses index management', 'Slightly complex; uses pointer management'],
                ['Best Use Case', 'When max size is known in advance', 'When size is unpredictable or varies greatly'],
              ]}
            />

            <Example title="Numerical Scenarios">
              <p><strong>Scenario 1 (Array):</strong> Stack of MAX=5. Push 10, 20, 30, 40, 50 → Stack full. Cannot push 60 (overflow). Pop → 50. Push 60 → now works. Memory used: 5×4=20 bytes (int). No pointer overhead.</p>
              <p className="mt-3"><strong>Scenario 2 (Linked List):</strong> Push 10, 20, 30. Each node = 4 bytes (data) + 4/8 bytes (pointer) = 8/12 bytes. Total for 3 nodes = 24/36 bytes. Pop → 30, memory freed. Push 40 → new node allocated dynamically. No overflow until system memory exhausted.</p>
            </Example>

            <KeyPoints points={[
              'Stack follows LIFO — Last In, First Out principle.',
              'Array stack: Simple, cache-friendly, but fixed size (may overflow or waste memory).',
              'Linked list stack: Dynamic size, no overflow risk, but extra pointer overhead per node.',
              'Push and Pop are O(1) in both implementations.',
              'Array uses contiguous memory; linked list uses scattered memory allocation.',
              'Use array when size is known; use linked list when size is unpredictable.',
            ]} />
          </SubQuestion>

          <Hr />

          {/* 2c - Insertion Sort */}
          <SubQuestion id="q2c" title="2(c). Explain the working of Insertion Sort with an example. What is its time complexity in the best, average, and worst cases?">
            <Definition>
              <strong>Insertion Sort</strong> is a simple, comparison-based sorting algorithm that builds the final sorted array one element at a time. It works by repeatedly taking the next unsorted element and inserting it into its correct position among the already-sorted elements. Think of it as how you might sort playing cards in your hand — you pick up one card at a time and insert it into its proper position among the cards you are already holding.
            </Definition>

            <p className="text-gray-700 mt-4 leading-relaxed">
              The algorithm maintains a conceptual division of the array into two parts: a <strong>sorted subarray</strong> (initially containing just the first element) and an <strong>unsorted subarray</strong> (the remaining elements). In each iteration, it picks the first element from the unsorted part and shifts all elements in the sorted part that are greater than the picked element one position to the right, making room to insert the element in its correct position. This process continues until all elements are sorted.
            </p>

            <p className="text-gray-700 mt-4 leading-relaxed">
              <strong>Analogy:</strong> Imagine you're organizing a bookshelf. You start with one book (already sorted). Then you pick up the second book and decide whether it goes before or after the first. Then the third book — you scan from left to right and insert it where it belongs among the first two. You continue this process for every book, and by the end, the entire shelf is sorted.
            </p>

            <h4 className="font-bold text-lg text-gray-800 mt-6 mb-3">Algorithm</h4>
            <FlowChart steps={[
              'Start with the second element (index 1) as the key to insert.',
              'Compare the key with elements in the sorted portion (to its left).',
              'Shift all sorted elements that are greater than the key one position to the right.',
              'Insert the key into the correct position (the vacated slot).',
              'Move to the next element and repeat until all elements are sorted.',
            ]} />

            <CodeBlock code={`// Insertion Sort in C
void insertionSort(int arr[], int n) {
    int i, key, j;
    for (i = 1; i < n; i++) {
        key = arr[i];       // Element to be inserted
        j = i - 1;

        // Shift elements greater than key to the right
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;   // Insert key at correct position
    }
}`} title="Insertion Sort in C" />

            <Example title="Step-by-Step Example">
              <p><strong>Input Array:</strong> [12, 11, 13, 5, 6]</p>
              <div className="bg-gray-50 border rounded-lg p-4 mt-3 text-sm">
                <p><strong>Pass 1:</strong> key = 11. Compare with 12: 12 &gt; 11, shift 12 right. Insert 11 at position 0.</p>
                <p className="text-blue-700 font-mono">Array: [11, 12, 13, 5, 6]</p>
                <p className="mt-2"><strong>Pass 2:</strong> key = 13. Compare with 12: 12 &lt; 13, no shift. Insert 13 at position 2 (unchanged).</p>
                <p className="text-blue-700 font-mono">Array: [11, 12, 13, 5, 6]</p>
                <p className="mt-2"><strong>Pass 3:</strong> key = 5. Compare: 13&gt;5 shift, 12&gt;5 shift, 11&gt;5 shift. Insert 5 at position 0.</p>
                <p className="text-blue-700 font-mono">Array: [5, 11, 12, 13, 6]</p>
                <p className="mt-2"><strong>Pass 4:</strong> key = 6. Compare: 13&gt;6 shift, 12&gt;6 shift, 11&gt;6 shift, 5&lt;6 stop. Insert 6 at position 1.</p>
                <p className="text-blue-700 font-mono">Array: [5, 6, 11, 12, 13] ← <strong>SORTED</strong></p>
              </div>
              <p className="mt-3"><strong>Scenario 2:</strong> Input: [4, 3, 2, 10, 12, 1, 5, 6]</p>
              <div className="bg-gray-50 border rounded-lg p-4 mt-3 text-sm">
                <p>Pass 1: [3, 4, 2, 10, 12, 1, 5, 6] — inserted 3</p>
                <p>Pass 2: [2, 3, 4, 10, 12, 1, 5, 6] — inserted 2</p>
                <p>Pass 3: [2, 3, 4, 10, 12, 1, 5, 6] — 10 already in place</p>
                <p>Pass 4: [2, 3, 4, 10, 12, 1, 5, 6] — 12 already in place</p>
                <p>Pass 5: [1, 2, 3, 4, 10, 12, 5, 6] — inserted 1</p>
                <p>Pass 6: [1, 2, 3, 4, 5, 10, 12, 6] — inserted 5</p>
                <p>Pass 7: [1, 2, 3, 4, 5, 6, 10, 12] — inserted 6 → <strong>SORTED</strong></p>
              </div>
            </Example>

            <h4 className="font-bold text-lg text-gray-800 mt-6 mb-3">Time Complexity Analysis</h4>
            <ComparisonTable
              headers={['Case', 'Condition', 'Comparisons', 'Shifts', 'Complexity']}
              rows={[
                ['Best Case', 'Array already sorted', 'n-1 (one per element)', '0 (no shifts)', 'O(n)'],
                ['Average Case', 'Random order', 'n(n-1)/4 approximately', '~n²/4', 'O(n²)'],
                ['Worst Case', 'Array reverse sorted', 'n(n-1)/2', 'n(n-1)/2', 'O(n²)'],
              ]}
            />

            <KeyPoints points={[
              'Insertion Sort builds the sorted array one element at a time by insertion.',
              'Best case O(n) when array is already sorted (no shifts needed).',
              'Worst case O(n²) when array is reverse sorted (maximum shifts).',
              'Space complexity: O(1) — it is an in-place sorting algorithm.',
              'It is a stable sort — preserves relative order of equal elements.',
              'Efficient for small datasets and nearly-sorted arrays.',
              'Used as a subroutine in advanced algorithms like Tim Sort and Shell Sort.',
            ]} />
          </SubQuestion>

          <Hr />

          {/* 2d - Binary Tree from Traversals */}
          <SubQuestion id="q2d" title="2(d). Draw a binary tree with the following traversals: Inorder: D B H E A I F J C G, Preorder: A B D E H C F I J G">
            <Definition>
              Given the <strong>Inorder</strong> and <strong>Preorder</strong> traversal sequences of a binary tree, we can uniquely reconstruct the original tree. The key principle is: the <strong>first element of Preorder is always the root</strong> of the tree (or subtree). Once we identify the root, we locate it in the Inorder sequence — everything to its left forms the left subtree, and everything to its right forms the right subtree. We then recursively apply this logic to build the entire tree.
            </Definition>

            <p className="text-gray-700 mt-4 leading-relaxed">
              This reconstruction technique works because Preorder traversal visits nodes in the order: Root → Left → Right, while Inorder traversal visits: Left → Root → Right. The root element divides the Inorder sequence into two halves, giving us the exact structure of left and right subtrees. This method requires that all elements in the tree are unique.
            </p>

            <h4 className="font-bold text-lg text-gray-800 mt-6 mb-3">Step-by-Step Construction</h4>
            <div className="bg-gray-50 border rounded-lg p-5 text-sm space-y-3">
              <p><strong>Given:</strong></p>
              <p>Inorder: D B H E A I F J C G</p>
              <p>Preorder: A B D E H C F I J G</p>

              <p className="mt-4"><strong>Step 1:</strong> Root = first element of Preorder = <strong>A</strong></p>
              <p>Find A in Inorder: D B H E | <strong>A</strong> | I F J C G</p>
              <p>Left subtree Inorder: [D B H E], Right subtree Inorder: [I F J C G]</p>
              <p>Left subtree Preorder: [B D E H], Right subtree Preorder: [C F I J G]</p>

              <p className="mt-3"><strong>Step 2:</strong> Left subtree root = B (first in [B D E H])</p>
              <p>Find B in [D B H E]: D | <strong>B</strong> | H E</p>
              <p>B's left child: D, B's right subtree Inorder: [H E], Preorder: [E H]</p>

              <p className="mt-3"><strong>Step 3:</strong> B's left child = D (leaf node)</p>

              <p className="mt-3"><strong>Step 4:</strong> B's right subtree root = E (first in [E H])</p>
              <p>Find E in [H E]: H | <strong>E</strong></p>
              <p>E's left child: H, E's right child: none</p>

              <p className="mt-3"><strong>Step 5:</strong> Right subtree root = C (first in [C F I J G])</p>
              <p>Find C in [I F J C G]: I F J | <strong>C</strong> | G</p>
              <p>C's left subtree Inorder: [I F J], Preorder: [F I J]</p>
              <p>C's right child: G (leaf)</p>

              <p className="mt-3"><strong>Step 6:</strong> C's left subtree root = F (first in [F I J])</p>
              <p>Find F in [I F J]: I | <strong>F</strong> | J</p>
              <p>F's left child: I, F's right child: J</p>
            </div>

            <h4 className="font-bold text-lg text-gray-800 mt-6 mb-3">Final Binary Tree</h4>
            <div className="bg-gray-900 text-green-300 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`
              A
            /   \\
          /       \\
         B         C
        / \\       / \\
       D   E     F   G
          /     / \\
         H     I   J

Inorder:   D B H E A I F J C G  ✓
Preorder:  A B D E H C F I J G  ✓
`}</pre>
            </div>

            <KeyPoints points={[
              'First element of Preorder traversal is always the root of the tree.',
              'In Inorder, elements to the left of root belong to left subtree, right elements to right subtree.',
              'The process is applied recursively to build left and right subtrees.',
              'This method requires all elements to be unique.',
              'Time complexity: O(n²) naive, O(n) with hash map for index lookup.',
              'We can also reconstruct from Inorder + Postorder (last element of Postorder is root).',
            ]} />
          </SubQuestion>

          <Hr />

          {/* 2e - Spanning Tree & Prim's Algorithm */}
          <SubQuestion id="q2e" title="2(e). Define Spanning Tree. Find the Minimal Spanning Tree using Prim's algorithm for the given graph.">
            <Definition>
              A <strong>Spanning Tree</strong> of a connected, undirected graph G is a subgraph that includes all the vertices of G and is a tree (connected and acyclic). For a graph with V vertices, a spanning tree has exactly V-1 edges. A <strong>Minimum Spanning Tree (MST)</strong> is a spanning tree whose total edge weight is minimum among all possible spanning trees of the graph.
            </Definition>

            <p className="text-gray-700 mt-4 leading-relaxed">
              Spanning trees have numerous practical applications: designing least-cost networks (telephone, electrical, roads), cluster analysis, circuit design, and approximation algorithms for NP-hard problems. Two most popular algorithms for finding MST are <strong>Prim's Algorithm</strong> (which grows the MST one vertex at a time) and <strong>Kruskal's Algorithm</strong> (which grows the MST one edge at a time). Prim's algorithm is particularly efficient for dense graphs.
            </p>

            <p className="text-gray-700 mt-4 leading-relaxed">
              <strong>Prim's Algorithm</strong> works by starting from an arbitrary vertex and greedily adding the cheapest edge that connects a vertex in the MST to a vertex not yet in the MST. It maintains a set of vertices included in the MST and at each step, it selects the minimum-weight edge that crosses the cut between the MST set and the remaining vertices.
            </p>

            <h4 className="font-bold text-lg text-gray-800 mt-6 mb-3">Given Graph</h4>
            <div className="bg-gray-900 text-green-300 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`
     2           3
 A ------- B ------- C
 |         / \\         |
 | 6    /     \\   5    | 7
 |   /  8       \\     |
 | /               \\  |
 D --------- E
      9

Vertices: A, B, C, D, E
Edges with weights:
  A-B: 2, A-D: 6
  B-C: 3, B-D: 8, B-E: 5
  C-E: 7
  D-E: 9
`}</pre>
            </div>

            <h4 className="font-bold text-lg text-gray-800 mt-6 mb-3">Prim's Algorithm — Step by Step</h4>
            <FlowChart steps={[
              'Start with vertex A. MST = {A}, Edges considered: A-B(2), A-D(6)',
              'Select minimum edge A-B(2). MST = {A,B}, Edge A-B added.',
              'Edges from MST: A-D(6), B-C(3), B-D(8), B-E(5). Select B-C(3). MST = {A,B,C}',
              'Edges from MST: A-D(6), B-D(8), B-E(5), C-E(7). Select B-E(5). MST = {A,B,C,E}',
              'Edges from MST: A-D(6), B-D(8), C-E(7), D-E(9). Select A-D(6). MST = {A,B,C,E,D}',
              'All 5 vertices included. MST complete with 4 edges.',
            ]} />

            <div className="bg-green-50 border border-green-200 rounded-lg p-5 mt-4">
              <h4 className="font-bold text-green-800 mb-2">Minimum Spanning Tree Result</h4>
              <p><strong>MST Edges:</strong> A-B(2), B-C(3), B-E(5), A-D(6)</p>
              <p><strong>Total Weight:</strong> 2 + 3 + 5 + 6 = <strong>16</strong></p>
              <pre className="mt-3 text-sm">{`
     2           3
 A ------- B ------- C
 |                     |
 | 6                   | (not included)
 |                     |
 D         E
             |
             | 5 (from B to E, not shown in ascii)
`}</pre>
            </div>

            <CodeBlock code={`// Prim's Algorithm in C (simplified)
#include &lt;stdio.h&gt;
#include &lt;limits.h&gt;

#define V 5  // Number of vertices

// Find vertex with minimum key value not yet in MST
int minKey(int key[], int mstSet[]) {
    int min = INT_MAX, min_index;
    for (int v = 0; v < V; v++)
        if (mstSet[v] == 0 && key[v] < min)
            min = key[v], min_index = v;
    return min_index;
}

void primMST(int graph[V][V]) {
    int parent[V];  // Store MST structure
    int key[V];     // Key values for minimum edge weight
    int mstSet[V];  // Vertices included in MST

    // Initialize all keys as INFINITE
    for (int i = 0; i < V; i++) {
        key[i] = INT_MAX;
        mstSet[i] = 0;
    }
    key[0] = 0;      // Start from vertex 0 (A)
    parent[0] = -1;   // Root has no parent

    for (int count = 0; count < V - 1; count++) {
        int u = minKey(key, mstSet);
        mstSet[u] = 1;

        for (int v = 0; v < V; v++)
            if (graph[u][v] && mstSet[v] == 0 && graph[u][v] < key[v]) {
                parent[v] = u;
                key[v] = graph[u][v];
            }
    }

    // Print MST
    printf("Edge \\tWeight\\n");
    int totalWeight = 0;
    for (int i = 1; i < V; i++) {
        printf("%c - %c \\t%d\\n", parent[i]+'A', i+'A', graph[i][parent[i]]);
        totalWeight += graph[i][parent[i]];
    }
    printf("Total MST Weight: %d\\n", totalWeight);
}
`}
              title="Prim's Algorithm in C"
            />

            <Example title="Edge Selection Summary">
              <p><strong>Scenario 1 (Start from A):</strong></p>
              <p>Step 1: A→B(2) ✓ | Step 2: B→C(3) ✓ | Step 3: B→E(5) ✓ | Step 4: A→D(6) ✓</p>
              <p>Total: 2+3+5+6 = 16</p>
              <p className="mt-3"><strong>Scenario 2 (If we started from D instead):</strong></p>
              <p>Step 1: D→A(6) | Step 2: A→B(2) | Step 3: B→C(3) | Step 4: B→E(5)</p>
              <p>Total: 6+2+3+5 = 16 (Same MST — Prim's produces same result regardless of starting vertex)</p>
            </Example>

            <KeyPoints points={[
              'A spanning tree of a graph with V vertices has exactly V-1 edges.',
              'MST is the spanning tree with minimum total edge weight.',
              "Prim's algorithm: O(V²) with adjacency matrix, O(E log V) with min-heap.",
              "Prim's grows the MST one vertex at a time using a greedy approach.",
              'Starting vertex does not affect the final MST (only the order of edge selection may vary).',
              'MST is unique when all edge weights are distinct.',
            ]} />
          </SubQuestion>

        </div>
      </div>
    </div>
  );
}
