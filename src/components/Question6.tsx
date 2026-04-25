import { SubQuestion, Definition, CodeBlock, KeyPoints, ComparisonTable, Example, FlowChart, Hr } from './shared';

export default function Question6() {
  return (
    <div className="mb-16">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-6">
          <h2 className="text-2xl font-bold">Question 6: BST & B-Tree</h2>
          <p className="text-amber-200 mt-1">Sub-questions (a and b)</p>
        </div>

        <div className="p-6 sm:p-8 space-y-0">

          {/* 6a - BST */}
          <SubQuestion id="q6a" title="6(a). Define Binary Search Tree. Create BST for the following data, show all steps: 20, 10, 25, 5, 15, 22, 30, 3, 14, 13">
            <Definition>
              A <strong>Binary Search Tree (BST)</strong> is a binary tree data structure in which each node has at most two children (left and right), and the following invariant holds: for every node, all values in its <strong>left subtree</strong> are <strong>less than</strong> the node's value, and all values in its <strong>right subtree</strong> are <strong>greater than</strong> the node's value. This ordering property makes BST extremely efficient for searching, inserting, and deleting elements.
            </Definition>

            <p className="text-gray-700 mt-4 leading-relaxed">
              The BST property enables binary search on the tree structure: at each node, we can eliminate half the remaining tree by comparing the target with the node's value and choosing the appropriate subtree. This gives an average time complexity of O(log n) for search, insert, and delete operations in a balanced BST. However, in the worst case (when elements are inserted in sorted order), the tree degenerates into a linked list with O(n) complexity for all operations. Self-balancing variants like AVL trees and Red-Black trees guarantee O(log n) performance by maintaining balance.
            </p>

            <p className="text-gray-700 mt-4 leading-relaxed">
              <strong>Analogy:</strong> Think of a BST like a phone directory organized by first letter. At the root, you have "M" (middle of alphabet). If you're looking for "Alice", you go left (A &lt; M). The next node might be "G" — still go left. Each step narrows down the search space by roughly half, making it very fast to find any entry.
            </p>

            <h4 className="font-bold text-lg text-gray-800 mt-6 mb-3">BST Properties</h4>
            <ComparisonTable
              headers={['Property', 'Value']}
              rows={[
                ['Left subtree', 'All values < parent node'],
                ['Right subtree', 'All values > parent node'],
                ['Search (avg)', 'O(log n)'],
                ['Search (worst)', 'O(n) — degenerate tree'],
                ['Insert', 'O(log n) avg, O(n) worst'],
                ['Delete', 'O(log n) avg, O(n) worst'],
                ['Inorder Traversal', 'Always gives sorted order'],
              ]}
            />

            <h4 className="font-bold text-lg text-gray-800 mt-6 mb-3">Step-by-Step BST Construction</h4>
            <p className="text-gray-700 mb-4">Input: 20, 10, 25, 5, 15, 22, 30, 3, 14, 13</p>

            <div className="bg-gray-50 border rounded-lg p-5 space-y-4 text-sm">
              <div>
                <p className="font-bold text-indigo-700">Step 1: Insert 20 (First element → Root)</p>
                <pre className="bg-white border rounded p-2 mt-1 text-xs">20</pre>
              </div>

              <div>
                <p className="font-bold text-indigo-700">Step 2: Insert 10 (10 &lt; 20 → Left child of 20)</p>
                <pre className="bg-white border rounded p-2 mt-1 text-xs">{`
   20
  /
10`}</pre>
              </div>

              <div>
                <p className="font-bold text-indigo-700">Step 3: Insert 25 (25 &gt; 20 → Right child of 20)</p>
                <pre className="bg-white border rounded p-2 mt-1 text-xs">{`
   20
  /  \\
10    25`}</pre>
              </div>

              <div>
                <p className="font-bold text-indigo-700">Step 4: Insert 5 (5 &lt; 20 → go left to 10; 5 &lt; 10 → Left child of 10)</p>
                <pre className="bg-white border rounded p-2 mt-1 text-xs">{`
     20
    /  \\
  10    25
 /
5`}</pre>
              </div>

              <div>
                <p className="font-bold text-indigo-700">Step 5: Insert 15 (15 &lt; 20 → go left to 10; 15 &gt; 10 → Right child of 10)</p>
                <pre className="bg-white border rounded p-2 mt-1 text-xs">{`
     20
    /  \\
  10    25
 / \\
5  15`}</pre>
              </div>

              <div>
                <p className="font-bold text-indigo-700">Step 6: Insert 22 (22 &gt; 20 → go right to 25; 22 &lt; 25 → Left child of 25)</p>
                <pre className="bg-white border rounded p-2 mt-1 text-xs">{`
     20
    /  \\
  10    25
 / \\    /
5  15  22`}</pre>
              </div>

              <div>
                <p className="font-bold text-indigo-700">Step 7: Insert 30 (30 &gt; 20 → go right to 25; 30 &gt; 25 → Right child of 25)</p>
                <pre className="bg-white border rounded p-2 mt-1 text-xs">{`
     20
    /  \\
  10    25
 / \\    / \\
5  15  22  30`}</pre>
              </div>

              <div>
                <p className="font-bold text-indigo-700">Step 8: Insert 3 (3 &lt; 20 → 10 → 5; 3 &lt; 5 → Left child of 5)</p>
                <pre className="bg-white border rounded p-2 mt-1 text-xs">{`
       20
      /  \\
    10    25
   / \\    / \\
  5  15  22  30
 /
3`}</pre>
              </div>

              <div>
                <p className="font-bold text-indigo-700">Step 9: Insert 14 (14 &lt; 20 → 10 → 15; 14 &lt; 15 → Left child of 15)</p>
                <pre className="bg-white border rounded p-2 mt-1 text-xs">{`
       20
      /  \\
    10    25
   / \\    / \\
  5  15  22  30
 /  /
3  14`}</pre>
              </div>

              <div>
                <p className="font-bold text-indigo-700">Step 10: Insert 13 (13 &lt; 20 → 10 → 15 → 14; 13 &lt; 14 → Left child of 14)</p>
                <pre className="bg-white border rounded p-2 mt-1 text-xs font-bold">{`
         20
       /    \\
     10      25
    /  \\    /  \\
   5   15  22   30
  /   /
 3   14
    /
   13

   FINAL BST`}</pre>
              </div>
            </div>

            <CodeBlock code={`// BST Implementation in C
#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

typedef struct Node {
    int data;
    struct Node *left, *right;
} Node;

// Create a new node
Node* createNode(int value) {
    Node *newNode = (Node*)malloc(sizeof(Node));
    newNode->data = value;
    newNode->left = newNode->right = NULL;
    return newNode;
}

// Insert a value into BST
Node* insert(Node *root, int value) {
    if (root == NULL)
        return createNode(value);

    if (value < root->data)
        root->left = insert(root->left, value);
    else if (value > root->data)
        root->right = insert(root->right, value);

    return root;
}

// Inorder Traversal (gives sorted output)
void inorder(Node *root) {
    if (root != NULL) {
        inorder(root->left);
        printf("%d ", root->data);
        inorder(root->right);
    }
}

// Search for a value
Node* search(Node *root, int key) {
    if (root == NULL || root->data == key)
        return root;
    if (key < root->data)
        return search(root->left, key);
    return search(root->right, key);
}

int main() {
    Node *root = NULL;
    int data[] = {20, 10, 25, 5, 15, 22, 30, 3, 14, 13};
    int n = 10;

    for (int i = 0; i < n; i++) {
        root = insert(root, data[i]);
        printf("Inserted %d\\n", data[i]);
    }

    printf("\\nInorder traversal (sorted): ");
    inorder(root);  // Output: 3 5 10 13 14 15 20 22 25 30
    printf("\\n");

    // Search example
    Node *result = search(root, 15);
    if (result) printf("Found: %d\\n", result->data);
    else printf("Not found.\\n");

    return 0;
}`} title="BST Implementation in C" />

            <Example title="Search Examples">
              <p><strong>Scenario 1: Search for 14 in the BST</strong></p>
              <p>14 &lt; 20 → go left → at 10</p>
              <p>14 &gt; 10 → go right → at 15</p>
              <p>14 &lt; 15 → go left → at 14 → <strong>Found!</strong> (4 comparisons)</p>
              <p className="mt-3"><strong>Scenario 2: Search for 17 in the BST</strong></p>
              <p>17 &lt; 20 → go left → at 10</p>
              <p>17 &gt; 10 → go right → at 15</p>
              <p>17 &gt; 15 → go right → NULL → <strong>Not Found!</strong> (3 comparisons)</p>
              <p>Inorder traversal always gives: 3, 5, 10, 13, 14, 15, 20, 22, 25, 30 (sorted order)</p>
            </Example>

            <KeyPoints points={[
              'BST: Left subtree values < root < right subtree values.',
              'Average case: Search, Insert, Delete — O(log n).',
              'Worst case (degenerate/skewed tree): O(n).',
              'Inorder traversal of BST always gives elements in sorted (ascending) order.',
              'First element inserted becomes the root of the BST.',
              'Self-balancing BSTs (AVL, Red-Black) guarantee O(log n) for all operations.',
            ]} />
          </SubQuestion>

          <Hr />

          {/* 6b - B-Tree */}
          <SubQuestion id="q6b" title="6(b). What is a B-Tree? Construct a B-tree on the following sequence of inputs. Assume that the order of the B-tree is 3: 10, 20, 30, 40, 50, 60, 70, 80, 90">
            <Definition>
              A <strong>B-Tree</strong> is a self-balancing search tree designed to work well on disk-based storage systems. Unlike a BST where each node has at most 2 children, a B-Tree allows nodes to have multiple children and multiple keys. For a B-Tree of <strong>order m</strong>, each node can have at most m children and m-1 keys. The root has at least 2 children (if not a leaf), and every non-leaf node (except root) has at least ⌈m/2⌉ children. All leaves appear at the same level, ensuring the tree remains balanced at all times.
            </Definition>

            <p className="text-gray-700 mt-4 leading-relaxed">
              B-Trees are the backbone of database indexing and file systems. When data is too large to fit in main memory, we need to minimize disk accesses. B-Trees achieve this by storing multiple keys per node (corresponding to a disk block), so each disk read brings in a page full of useful keys. A B-Tree of order 100 might store 99 keys per node, meaning a tree storing millions of records might only be 3-4 levels deep, requiring only 3-4 disk accesses. This is vastly superior to BSTs which could require many more levels.
            </p>

            <p className="text-gray-700 mt-4 leading-relaxed">
              <strong>Analogy:</strong> Think of a B-Tree like a library's card catalog system. Instead of one card per drawer (like a BST), each drawer holds multiple cards sorted alphabetically. A librarian can quickly scan through many cards in one drawer before deciding which drawer to open next. This "batch of keys per node" approach is exactly what makes B-Trees efficient for disk-based operations.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg my-4">
              <p className="font-bold text-blue-800 mb-2">📐 B-Tree Properties (Order m = 3):</p>
              <p>• Maximum keys per node: m - 1 = <strong>2</strong></p>
              <p>• Minimum keys per node (except root): ⌈m/2⌉ - 1 = <strong>1</strong></p>
              <p>• Maximum children per node: m = <strong>3</strong></p>
              <p>• Minimum children (non-leaf, non-root): ⌈m/2⌉ = <strong>2</strong></p>
              <p>• All leaves must be at the same level.</p>
              <p className="mt-2 text-blue-700">When a node gets 3 keys (overflow), it <strong>splits</strong>: the middle key moves up to the parent.</p>
            </div>

            <h4 className="font-bold text-lg text-gray-800 mt-6 mb-3">Step-by-Step B-Tree Construction (Order 3)</h4>
            <div className="bg-gray-50 border rounded-lg p-5 space-y-3 text-sm">
              <p className="font-bold">Input: 10, 20, 30, 40, 50, 60, 70, 80, 90</p>

              <div className="border-t pt-3">
                <p className="font-bold text-indigo-700">Step 1: Insert 10</p>
                <pre className="bg-white border rounded p-2 mt-1">[10]  (root, 1 key)</pre>
              </div>

              <div className="border-t pt-3">
                <p className="font-bold text-indigo-700">Step 2: Insert 20</p>
                <pre className="bg-white border rounded p-2 mt-1">[10 | 20]  (root, 2 keys — full!)</pre>
              </div>

              <div className="border-t pt-3">
                <p className="font-bold text-indigo-700">Step 3: Insert 30 → Node overflows (3 keys)! SPLIT!</p>
                <p>Middle key (20) moves up as new root.</p>
                <pre className="bg-white border rounded p-2 mt-1">{`       [20]
      /    \\
  [10]     [30]`}</pre>
              </div>

              <div className="border-t pt-3">
                <p className="font-bold text-indigo-700">Step 4: Insert 40</p>
                <p>40 &gt; 20 → go right → [30] has room → [30|40]</p>
                <pre className="bg-white border rounded p-2 mt-1">{`       [20]
      /    \\
  [10]     [30 | 40]`}</pre>
              </div>

              <div className="border-t pt-3">
                <p className="font-bold text-indigo-700">Step 5: Insert 50 → Right child overflows! SPLIT!</p>
                <p>[30|40|50] → Middle key 40 moves up. Root becomes [20|40].</p>
                <pre className="bg-white border rounded p-2 mt-1">{`       [20 | 40]
      /    |     \\
  [10]   [30]   [50]`}</pre>
              </div>

              <div className="border-t pt-3">
                <p className="font-bold text-indigo-700">Step 6: Insert 60</p>
                <p>60 &gt; 40 → go to rightmost → [50] has room → [50|60]</p>
                <pre className="bg-white border rounded p-2 mt-1">{`       [20 | 40]
      /    |     \\
  [10]   [30]   [50 | 60]`}</pre>
              </div>

              <div className="border-t pt-3">
                <p className="font-bold text-indigo-700">Step 7: Insert 70 → Right child overflows! SPLIT!</p>
                <p>[50|60|70] → Middle key 60 moves up. Root becomes [20|40|60].</p>
                <p>Root now has 3 keys → OVERFLOW! Split root: middle key 40 becomes new root.</p>
                <pre className="bg-white border rounded p-2 mt-1">{`            [40]
          /       \\
      [20]       [60]
     /   \\      /   \\
  [10]  [30] [50]  [70]`}</pre>
              </div>

              <div className="border-t pt-3">
                <p className="font-bold text-indigo-700">Step 8: Insert 80</p>
                <p>80 &gt; 40 → 60 → 70 → [70] has room → [70|80]</p>
                <pre className="bg-white border rounded p-2 mt-1">{`            [40]
          /       \\
      [20]       [60]
     /   \\      /   \\
  [10]  [30] [50]  [70 | 80]`}</pre>
              </div>

              <div className="border-t pt-3">
                <p className="font-bold text-indigo-700">Step 9: Insert 90 → Right child overflows! SPLIT!</p>
                <p>[70|80|90] → 80 moves up. [60] becomes [60|80].</p>
                <pre className="bg-white border rounded p-2 mt-1 font-bold">{`            [40]
          /       \\
      [20]       [60 | 80]
     /   \\      /   |    \\
  [10]  [30] [50] [70]  [90]

       FINAL B-TREE (Order 3)
  All leaves at the same level ✓
  Each node has 1-2 keys ✓
  Each internal node has 2-3 children ✓`}</pre>
              </div>
            </div>

            <Example title="Search and Verification">
              <p><strong>Scenario 1: Search for 50 in the B-Tree</strong></p>
              <p>Start at root [40]: 50 &gt; 40 → go right</p>
              <p>At [60|80]: 50 &lt; 60 → go to leftmost child</p>
              <p>At [50]: Found! Total: 3 node accesses.</p>
              <p className="mt-3"><strong>Scenario 2: Search for 75 in the B-Tree</strong></p>
              <p>Start at root [40]: 75 &gt; 40 → go right</p>
              <p>At [60|80]: 60 &lt; 75 &lt; 80 → go to middle child</p>
              <p>At [70]: 75 &gt; 70, no more keys → Not Found. Total: 3 node accesses.</p>
            </Example>

            <ComparisonTable
              headers={['Feature', 'BST', 'B-Tree (Order m)']}
              rows={[
                ['Max children per node', '2', 'm'],
                ['Keys per node', '1', '1 to m-1'],
                ['Balance', 'May be unbalanced', 'Always balanced (all leaves same level)'],
                ['Height (worst)', 'O(n)', 'O(log n)'],
                ['Split on overflow', 'Not applicable', 'Middle key moves up to parent'],
                ['Best use case', 'In-memory data', 'Disk-based data (databases, file systems)'],
                ['Search complexity', 'O(log n) avg, O(n) worst', 'O(log n) guaranteed'],
              ]}
            />

            <KeyPoints points={[
              'B-Tree of order m: max m children, max m-1 keys per node.',
              'Minimum keys (non-root): ceil(m/2) - 1. For order 3: minimum 1 key per node.',
              'All leaves are at the same level — the tree is always balanced.',
              'Insertion: Add key to appropriate leaf. If overflow (m keys), split: middle key moves to parent.',
              'If root overflows, create new root → tree height increases by 1.',
              'B-Trees are used in databases (MySQL, PostgreSQL) and file systems (NTFS, ext4).',
              'Order 3 B-Tree: max 2 keys per node, max 3 children per node.',
            ]} />
          </SubQuestion>

        </div>
      </div>
    </div>
  );
}
