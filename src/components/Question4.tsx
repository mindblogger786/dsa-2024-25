import { SubQuestion, Definition, CodeBlock, KeyPoints, ComparisonTable, Example, FlowChart, Hr } from './shared';

export default function Question4() {
  return (
    <div className="mb-16">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-rose-600 to-rose-700 text-white px-8 py-6">
          <h2 className="text-2xl font-bold">Question 4: Circular Queue & Hashing</h2>
          <p className="text-rose-200 mt-1">Sub-questions (a and b)</p>
        </div>

        <div className="p-6 sm:p-8 space-y-0">

          {/* 4a - Circular Queue */}
          <SubQuestion id="q4a" title="4(a). Explain Circular Queue. What is the condition if circular queue is full?">
            <Definition>
              A <strong>Circular Queue</strong> (also called a Ring Buffer or Cyclic Buffer) is a linear data structure that follows the First In, First Out (FIFO) principle but connects the last position of the queue back to the first position, forming a circle. This circular arrangement solves the major limitation of a linear queue — the "false overflow" problem where the queue appears full even when there is empty space at the beginning of the array due to dequeued elements.
            </Definition>

            <p className="text-gray-700 mt-4 leading-relaxed">
              In a standard linear queue implemented using an array, when elements are dequeued from the front, the space at the beginning of the array becomes empty but cannot be reused. For example, if you enqueue 5 elements into a queue of size 5 and then dequeue 3 elements, the array positions 0, 1, 2 are now empty, but the rear pointer is at position 4. If you try to enqueue a new element, the queue would report "overflow" even though there are 3 empty positions! This wasteful situation is called <strong>false overflow</strong>. The circular queue elegantly solves this by wrapping around: when the rear pointer reaches the end of the array, it wraps back to position 0 (using modulo arithmetic) and begins filling the empty spaces at the beginning.
            </p>

            <p className="text-gray-700 mt-4 leading-relaxed">
              <strong>Analogy:</strong> Imagine a circular conveyor belt in a sushi restaurant. Plates (data elements) are placed on the belt by the chef (enqueue) and picked off by customers (dequeue). The belt continuously rotates in a circle — when it reaches the end, it loops back to the beginning. Unlike a straight belt where plates would pile up at the end even though the beginning is empty, the circular belt efficiently reuses all available space.
            </p>

            <h4 className="font-bold text-lg text-gray-800 mt-6 mb-3">Circular Queue Conditions</h4>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg my-4">
              <p className="font-bold text-blue-800 mb-2">📋 Key Formulas (using modulo arithmetic):</p>
              <p>• <strong>Front:</strong> Index of the first element</p>
              <p>• <strong>Rear:</strong> Index of the last element</p>
              <p>• <strong>Enqueue:</strong> rear = (rear + 1) % MAX</p>
              <p>• <strong>Dequeue:</strong> front = (front + 1) % MAX</p>
              <p className="mt-3 font-bold text-red-700">🔴 Queue Full Condition:</p>
              <p className="text-red-800 text-lg font-mono">  (rear + 1) % MAX == front</p>
              <p className="mt-3 font-bold text-green-700">🟢 Queue Empty Condition:</p>
              <p className="text-green-800 text-lg font-mono">  front == rear</p>
              <p className="mt-2 text-blue-700 text-sm">
                Note: We sacrifice one slot to distinguish between full and empty conditions.
                Maximum usable capacity is MAX - 1.
              </p>
            </div>

            <FlowChart steps={[
              'Initialize: front = rear = 0 (queue is empty).',
              'Enqueue(x): Check if queue is full: (rear+1)%MAX == front.',
              'If not full: rear = (rear+1)%MAX, queue[rear] = x.',
              'Dequeue(): Check if queue is empty: front == rear.',
              'If not empty: front = (front+1)%MAX, return queue[front].',
            ]} />

            <CodeBlock code={`// Circular Queue Implementation in C
#include &lt;stdio.h&gt;
#define MAX 6  // Circular queue of size 5 (one slot reserved)

typedef struct {
    int items[MAX];
    int front, rear;
} CircularQueue;

// Initialize the queue
void initQueue(CircularQueue *q) {
    q->front = 0;
    q->rear = 0;
}

// Check if queue is full
int isFull(CircularQueue *q) {
    // FULL CONDITION: (rear + 1) % MAX == front
    return (q->rear + 1) % MAX == q->front;
}

// Check if queue is empty
int isEmpty(CircularQueue *q) {
    // EMPTY CONDITION: front == rear
    return q->front == q->rear;
}

// Enqueue operation
void enqueue(CircularQueue *q, int value) {
    if (isFull(q)) {
        printf("Queue is FULL! Cannot enqueue %d\\n", value);
        return;
    }
    q->rear = (q->rear + 1) % MAX;  // Circular increment
    q->items[q->rear] = value;
    printf("Enqueued: %d (front=%d, rear=%d)\\n", value, q->front, q->rear);
}

// Dequeue operation
int dequeue(CircularQueue *q) {
    if (isEmpty(q)) {
        printf("Queue is EMPTY! Cannot dequeue.\\n");
        return -1;
    }
    q->front = (q->front + 1) % MAX;  // Circular increment
    int item = q->items[q->front];
    printf("Dequeued: %d (front=%d, rear=%d)\\n", item, q->front, q->rear);
    return item;
}

// Display queue elements
void display(CircularQueue *q) {
    if (isEmpty(q)) {
        printf("Queue is empty.\\n");
        return;
    }
    printf("Queue elements: ");
    int i = (q->front + 1) % MAX;
    while (i != (q->rear + 1) % MAX) {
        printf("%d ", q->items[i]);
        i = (i + 1) % MAX;
    }
    printf("\\n");
}

int main() {
    CircularQueue q;
    initQueue(&q);

    enqueue(&q, 10);  // rear=1
    enqueue(&q, 20);  // rear=2
    enqueue(&q, 30);  // rear=3
    enqueue(&q, 40);  // rear=4
    enqueue(&q, 50);  // rear=5
    display(&q);

    // Queue is now full: (5+1)%6 = 0 = front → FULL!
    enqueue(&q, 60);  // Will show "Queue is FULL!"

    dequeue(&q);      // front=1, removes 10
    dequeue(&q);      // front=2, removes 20

    enqueue(&q, 70);  // rear wraps: (5+1)%6=0, rear=0
    enqueue(&q, 80);  // rear=1

    display(&q);
    return 0;
}`} title="Circular Queue Implementation in C" />

            <Example title="Numerical Scenarios">
              <p><strong>Scenario 1: Circular Queue (MAX=6)</strong></p>
              <div className="bg-gray-50 border rounded-lg p-3 mt-2 text-sm font-mono">
                <pre>{`Initial: front=0, rear=0 (empty)

Enqueue 10,20,30,40,50:
  [_, 10, 20, 30, 40, 50]
       ^front=0  ^rear=5

Check Full: (5+1)%6 = 0 == front(0) → FULL! ✓
Enqueue 60 → "Queue Full"

Dequeue → removes 10, front=(0+1)%6=1
Dequeue → removes 20, front=(1+1)%6=2

Now there's space! 
Enqueue 70: rear=(5+1)%6=0, arr[0]=70
  [70, _, 30, 30, 40, 50]
  ^rear=0  ^front=2

Enqueue 80: rear=(0+1)%6=1, arr[1]=80
  [70, 80, 30, 40, 50]
  ^rear=1  ^front=2`}</pre>
              </div>

              <p className="mt-4"><strong>Scenario 2: Verifying full condition with MAX=5</strong></p>
              <p>Enqueue 5 elements: rear advances 0→1→2→3→4. Front stays at 0.</p>
              <p>Check: (4+1)%5 = 0 = front → Queue is FULL. Capacity used: 4 out of 4 usable slots.</p>
            </Example>

            <ComparisonTable
              headers={['Feature', 'Linear Queue', 'Circular Queue']}
              rows={[
                ['Memory utilization', 'Wastes space (false overflow)', 'Fully utilizes all available space'],
                ['Overflow condition', 'rear == MAX - 1', '(rear + 1) % MAX == front'],
                ['Underflow condition', 'front > rear or front == -1', 'front == rear'],
                ['Pointer movement', 'Only forward (never wraps)', 'Circular (wraps around)'],
                ['Implementation', 'Simpler', 'Slightly more complex (modulo arithmetic)'],
                ['Space efficiency', 'O(n) but may waste slots', 'O(n) with full utilization'],
              ]}
            />

            <KeyPoints points={[
              'Circular Queue solves the false overflow problem of linear queues.',
              'Full condition: (rear + 1) % MAX == front.',
              'Empty condition: front == rear.',
              'One slot is sacrificed to distinguish full from empty.',
              'Both front and rear pointers wrap around using modulo arithmetic.',
              'Applications: CPU scheduling, memory management, buffering (keyboard, printer).',
            ]} />
          </SubQuestion>

          <Hr />

          {/* 4b - Hashing */}
          <SubQuestion id="q4b" title="4(b). What is Hashing? How is it used in search operations? Explain the importance of a good hash function.">
            <Definition>
              <strong>Hashing</strong> is a technique that maps data of arbitrary size to fixed-size values using a mathematical function called a <strong>hash function</strong>. The hash function takes an input (called a key) and produces an output (called a hash code or hash value), which is typically used as an index in a hash table to store or retrieve the corresponding data. The goal is to achieve near-constant time O(1) average-case performance for search, insert, and delete operations.
            </Definition>

            <p className="text-gray-700 mt-4 leading-relaxed">
              Hashing is one of the most powerful techniques in computer science for fast data retrieval. In a traditional array, you access elements by their index. But what if you want to access data by a meaningful key (like a student's name or an employee ID)? A hash function converts that key into an array index, giving you direct access to the data. For example, if we want to store student records keyed by roll number, we can use the hash function h(roll) = roll % 10 to map roll numbers to indices 0-9 in a hash table of size 10. Then, to search for roll number 42, we compute 42 % 10 = 2 and directly look at index 2.
            </p>

            <p className="text-gray-700 mt-4 leading-relaxed">
              <strong>Analogy:</strong> Think of a hash table like a library with numbered shelves. The librarian (hash function) takes your book title (key), performs a quick calculation, and tells you exactly which shelf (index) to find it on. Instead of searching every shelf (O(n) linear search), you go directly to the right shelf (O(1)). However, sometimes two books might end up assigned to the same shelf — this is called a <strong>collision</strong>, and we need strategies to handle it.
            </p>

            <h4 className="font-bold text-lg text-gray-800 mt-6 mb-3">Collision Handling Techniques</h4>
            <ComparisonTable
              headers={['Technique', 'Description', 'Advantage', 'Disadvantage']}
              rows={[
                ['Chaining', 'Each slot stores a linked list of collided elements', 'Simple, no clustering, unlimited elements', 'Extra memory for pointers, poor cache performance'],
                ['Linear Probing', 'h(k), h(k)+1, h(k)+2, ... (wrap around)', 'Good cache performance, no extra memory', 'Primary clustering problem'],
                ['Quadratic Probing', 'h(k), h(k)+1², h(k)+2², h(k)+3², ...', 'Reduces primary clustering', 'Secondary clustering, may not find empty slot'],
                ['Double Hashing', 'h1(k) + i·h2(k) for i=0,1,2,...', 'Minimal clustering, uniform distribution', 'Computationally expensive'],
              ]}
            />

            <h4 className="font-bold text-lg text-gray-800 mt-6 mb-3">Importance of a Good Hash Function</h4>
            <p className="text-gray-700 leading-relaxed">
              A good hash function is critical because it directly determines the performance of a hash table. The primary goals of a good hash function are:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2 ml-4">
              <li><strong>Deterministic:</strong> The same key must always produce the same hash value. If h("Alice") = 5 today, it must be 5 tomorrow.</li>
              <li><strong>Uniform Distribution:</strong> Hash values should be evenly distributed across the entire range to minimize collisions. If all keys hash to the same index, performance degrades to O(n).</li>
              <li><strong>Efficient to Compute:</strong> The function should be fast — ideally O(1). A slow hash function defeats the purpose of using a hash table.</li>
              <li><strong>Avalanche Effect:</strong> A small change in the input should produce a significantly different hash value. h("Alice") and h("alice") should be very different.</li>
              <li><strong>Minimal Collisions:</strong> For the expected input distribution, collisions should be rare.</li>
            </ul>

            <FlowChart steps={[
              'Take the search key as input.',
              'Apply hash function: index = h(key).',
              'Go directly to hashTable[index].',
              'If slot is empty → element not found (O(1)).',
              'If slot contains the key → element found (O(1)).',
              'If collision occurred → probe or follow chain until found or confirmed absent.',
            ]} />

            <CodeBlock code={`// Hash Table Implementation with Chaining in C
#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;
#include &lt;string.h&gt;

#define TABLE_SIZE 10

// Node for chaining
typedef struct Node {
    int key;
    int value;
    struct Node *next;
} Node;

// Hash Table
Node *hashTable[TABLE_SIZE];

// Good Hash Function: Division Method
int hash(int key) {
    return key % TABLE_SIZE;
}

// Insert key-value pair
void insert(int key, int value) {
    int index = hash(key);
    Node *newNode = (Node *)malloc(sizeof(Node));
    newNode->key = key;
    newNode->value = value;
    newNode->next = hashTable[index];  // Insert at head of chain
    hashTable[index] = newNode;
    printf("Inserted (%d, %d) at index %d\\n", key, value, index);
}

// Search for a key
int search(int key) {
    int index = hash(key);
    Node *current = hashTable[index];
    while (current != NULL) {
        if (current->key == key) {
            printf("Found key %d at index %d, value = %d\\n",
                   key, index, current->value);
            return current->value;
        }
        current = current->next;
    }
    printf("Key %d not found!\\n", key);
    return -1;
}

// Delete a key
void deleteKey(int key) {
    int index = hash(key);
    Node *current = hashTable[index];
    Node *prev = NULL;
    while (current != NULL) {
        if (current->key == key) {
            if (prev == NULL)
                hashTable[index] = current->next;
            else
                prev->next = current->next;
            free(current);
            printf("Deleted key %d from index %d\\n", key, index);
            return;
        }
        prev = current;
        current = current->next;
    }
    printf("Key %d not found for deletion.\\n", key);
}

int main() {
    // Initialize table
    for (int i = 0; i < TABLE_SIZE; i++)
        hashTable[i] = NULL;

    insert(42, 100);   // h(42)=42%10=2
    insert(23, 200);   // h(23)=23%10=3
    insert(52, 300);   // h(52)=52%10=2 (collision with 42!)
    insert(12, 400);   // h(12)=12%10=2 (collision chain: 12→52→42)

    search(52);        // Found at index 2
    search(99);        // Not found

    deleteKey(52);
    search(52);        // Not found after deletion
    return 0;
}`} title="Hash Table with Chaining in C" />

            <Example title="Numerical Scenarios">
              <p><strong>Scenario 1: Division Method Hash Function</strong></p>
              <p>Keys: 15, 25, 35, 45, Table size = 10</p>
              <p>h(15) = 15 % 10 = 5, h(25) = 25 % 10 = 5, h(35) = 35 % 10 = 5, h(45) = 45 % 10 = 5</p>
              <p className="text-red-600">⚠ All keys map to index 5 — TERRIBLE distribution! This is a collision nightmare.</p>
              <p className="mt-2 text-green-700">Better hash function: h(k) = (k × 7) % 10</p>
              <p>h(15) = 105 % 10 = 5, h(25) = 175 % 10 = 5, h(35) = 245 % 10 = 5 — still bad because keys share a pattern.</p>
              <p className="mt-1 text-green-700">Best: Use a prime table size: h(k) = k % 7</p>
              <p>h(15) = 1, h(25) = 4, h(35) = 0, h(45) = 3 — All different! ✅</p>

              <p className="mt-4"><strong>Scenario 2: Linear Probing Example</strong></p>
              <p>Keys: 10, 22, 31, 4, 15, 28, Table size = 7, h(k) = k % 7</p>
              <div className="bg-gray-50 border rounded-lg p-3 mt-2 text-sm font-mono">
                <pre>{`h(10) = 10%7 = 3 → Insert at index 3
h(22) = 22%7 = 1 → Insert at index 1
h(31) = 31%7 = 3 → Collision! Probe 4 → Insert at index 4
h(4)  = 4%7  = 4 → Collision! Probe 5 → Insert at index 5
h(15) = 15%7 = 1 → Collision! Probe 2 → Insert at index 2
h(28) = 28%7 = 0 → Insert at index 0

Final table:
[0:28] [1:22] [2:15] [3:10] [4:31] [5:4]  [6:___]`}</pre>
              </div>
            </Example>

            <KeyPoints points={[
              'Hashing maps keys to indices using a hash function for O(1) average-case search.',
              'A good hash function: deterministic, uniform distribution, fast computation, minimal collisions.',
              'Collision handling: Chaining (linked lists at each slot), Open Addressing (Linear/Quadratic Probing).',
              'Load factor α = n/m (elements/slots) affects performance; keep α < 0.75 for chaining.',
              'Division method h(k) = k % m works best when m is a prime number.',
              'Applications: Database indexing, caches, password storage, symbol tables in compilers.',
            ]} />
          </SubQuestion>

        </div>
      </div>
    </div>
  );
}
