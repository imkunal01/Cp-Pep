// Sample code data - You can generate this dynamically from your repository
// or manually add more problems as needed

export const codeData = {
  'LinkedList': [
    {
      name: 'DetectCycleInLL.cpp',
      path: 'Assignments/DetectCycleInLL.cpp',
      description: 'Given head of a linked list, determine if the linked list has a cycle in it. A cycle exists if there is some node in the list that can be reached again by continuously following the next pointer.',
      difficulty: 'Easy',
      tags: ['Two Pointers', 'Floyd\'s Cycle', 'Linked List'],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      leetcodeLink: 'https://leetcode.com/problems/linked-list-cycle/',
      notes: 'Uses Floyd\'s Tortoise and Hare algorithm. The slow pointer moves one step while fast moves two steps. If they meet, there\'s a cycle.',
      code: `// Problem: Detect Cycle in Linked List
// Date: February 6, 2026

#include <bits/stdc++.h>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

bool hasCycle(ListNode* head) {
    ListNode* slow = head;
    ListNode* fast = head;
    
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) return true;
    }
    return false;
}

int main() {
    // Test cases
    return 0;
}`
    },
    {
      name: 'ReverseLL.cpp',
      path: 'Assignments/ReverseLL.cpp',
      description: 'Given the head of a singly linked list, reverse the list, and return the reversed list.',
      difficulty: 'Easy',
      tags: ['Linked List', 'Iterative', 'Pointers'],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      leetcodeLink: 'https://leetcode.com/problems/reverse-linked-list/',
      code: `// Problem: Reverse Linked List
#include <bits/stdc++.h>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* reverseList(ListNode* head) {
    ListNode* prev = nullptr;
    ListNode* curr = head;
    
    while (curr) {
        ListNode* next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

int main() {
    return 0;
}`
    },
    {
      name: 'MergeTwoSortedLists.cpp',
      path: 'Assignments/MergeTwoSortedLists.cpp',
      description: 'Merge two sorted linked lists and return it as a sorted list.',
      difficulty: 'Easy',
      tags: ['Linked List', 'Two Pointers', 'Merge'],
      timeComplexity: 'O(n + m)',
      spaceComplexity: 'O(1)',
      leetcodeLink: 'https://leetcode.com/problems/merge-two-sorted-lists/',
      code: `// Problem: Merge Two Sorted Lists
#include <bits/stdc++.h>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
    ListNode dummy(0);
    ListNode* tail = &dummy;
    
    while (l1 && l2) {
        if (l1->val <= l2->val) {
            tail->next = l1;
            l1 = l1->next;
        } else {
            tail->next = l2;
            l2 = l2->next;
        }
        tail = tail->next;
    }
    tail->next = l1 ? l1 : l2;
    return dummy.next;
}

int main() {
    return 0;
}`
    },
  ],
  'Stack': [
    {
      name: 'ValidParenthesis.cpp',
      path: 'Assignments/ValidParenthesis.cpp',
      description: 'Given a string s containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid.',
      difficulty: 'Easy',
      tags: ['Stack', 'String', 'Matching'],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      leetcodeLink: 'https://leetcode.com/problems/valid-parentheses/',
      notes: 'Push opening brackets to stack, for closing brackets check if top matches. Finally stack should be empty.',
      code: `// Problem: Valid Parenthesis
// Date: February 12, 2026

#include <bits/stdc++.h>
using namespace std;

bool isValid(string s) {
    stack<char> st;
    
    for (char c : s) {
        if (c == '(' || c == '{' || c == '[') {
            st.push(c);
        } else {
            if (st.empty()) return false;
            char top = st.top();
            if ((c == ')' && top != '(') ||
                (c == '}' && top != '{') ||
                (c == ']' && top != '[')) {
                return false;
            }
            st.pop();
        }
    }
    return st.empty();
}

int main() {
    // Test cases
    return 0;
}`
    },
    {
      name: 'MinStack.cpp',
      path: 'Assignments/MinStack.cpp',
      description: 'Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.',
      difficulty: 'Medium',
      tags: ['Stack', 'Design', 'Data Structure'],
      timeComplexity: 'O(1) all operations',
      spaceComplexity: 'O(n)',
      leetcodeLink: 'https://leetcode.com/problems/min-stack/',
      code: `// Problem: Min Stack Design
#include <bits/stdc++.h>
using namespace std;

class MinStack {
    stack<pair<int, int>> st; // {value, current_min}
    
public:
    void push(int val) {
        int minVal = st.empty() ? val : min(val, st.top().second);
        st.push({val, minVal});
    }
    
    void pop() {
        st.pop();
    }
    
    int top() {
        return st.top().first;
    }
    
    int getMin() {
        return st.top().second;
    }
};

int main() {
    MinStack minStack;
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    cout << minStack.getMin() << endl; // -3
    minStack.pop();
    cout << minStack.top() << endl;    // 0
    cout << minStack.getMin() << endl; // -2
    return 0;
}`
    },
    {
      name: 'LargestRectangleInHistogram.cpp',
      path: 'Assignments/LargestRectangleInHistogram.cpp',
      description: 'Given an array of integers heights representing the histogram\'s bar height, find the area of largest rectangle in the histogram.',
      difficulty: 'Hard',
      tags: ['Stack', 'Monotonic Stack', 'Array'],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      leetcodeLink: 'https://leetcode.com/problems/largest-rectangle-in-histogram/',
      code: `// Problem: Largest Rectangle in Histogram
#include <bits/stdc++.h>
using namespace std;

int largestRectangleArea(vector<int>& heights) {
    stack<int> st;
    int maxArea = 0;
    int n = heights.size();
    
    for (int i = 0; i <= n; i++) {
        int h = (i == n) ? 0 : heights[i];
        
        while (!st.empty() && h < heights[st.top()]) {
            int height = heights[st.top()];
            st.pop();
            int width = st.empty() ? i : i - st.top() - 1;
            maxArea = max(maxArea, height * width);
        }
        st.push(i);
    }
    return maxArea;
}

int main() {
    vector<int> heights = {2, 1, 5, 6, 2, 3};
    cout << largestRectangleArea(heights) << endl; // 10
    return 0;
}`
    },
  ],
  'Trees': [
    {
      name: 'InvertBinaryTree.cpp',
      path: 'Assignments/InvertBinaryTree.cpp',
      description: 'Given the root of a binary tree, invert the tree, and return its root.',
      difficulty: 'Easy',
      tags: ['Binary Tree', 'DFS', 'Recursion'],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(h)',
      leetcodeLink: 'https://leetcode.com/problems/invert-binary-tree/',
      notes: 'Famous problem that Max Howell (creator of Homebrew) couldn\'t solve in a Google interview.',
      code: `// Problem: Invert a Binary Tree
// Date: February 17, 2026

#include <bits/stdc++.h>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

TreeNode* invertTree(TreeNode* root) {
    if (!root) return nullptr;
    
    TreeNode* left = invertTree(root->left);
    TreeNode* right = invertTree(root->right);
    
    root->left = right;
    root->right = left;
    
    return root;
}

int main() {
    // Test cases
    return 0;
}`
    },
    {
      name: 'LevelOrderTraversal.cpp',
      path: 'Assignments/LevelOrderTraversal.cpp',
      description: 'Given the root of a binary tree, return the level order traversal of its nodes\' values. (i.e., from left to right, level by level).',
      difficulty: 'Medium',
      tags: ['Binary Tree', 'BFS', 'Queue', 'Level Order'],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      leetcodeLink: 'https://leetcode.com/problems/binary-tree-level-order-traversal/',
      code: `// Problem: Level Order Traversal
// Date: February 18, 2026

#include <bits/stdc++.h>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

vector<vector<int>> levelOrder(TreeNode* root) {
    vector<vector<int>> result;
    if (!root) return result;
    
    queue<TreeNode*> q;
    q.push(root);
    
    while (!q.empty()) {
        int size = q.size();
        vector<int> level;
        
        for (int i = 0; i < size; i++) {
            TreeNode* node = q.front();
            q.pop();
            level.push_back(node->val);
            
            if (node->left) q.push(node->left);
            if (node->right) q.push(node->right);
        }
        result.push_back(level);
    }
    return result;
}

int main() {
    // Test cases
    return 0;
}`
    },
    {
      name: 'DiameterOfBT.cpp',
      path: 'Assignments/DiameterOfBT.cpp',
      description: 'Given the root of a binary tree, return the length of the diameter of the tree.',
      difficulty: 'Easy',
      tags: ['Binary Tree', 'DFS', 'Height'],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(h)',
      leetcodeLink: 'https://leetcode.com/problems/diameter-of-binary-tree/',
      code: `// Problem: Diameter of Binary Tree
#include <bits/stdc++.h>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

class Solution {
    int diameter = 0;
    
    int height(TreeNode* root) {
        if (!root) return 0;
        
        int left = height(root->left);
        int right = height(root->right);
        
        diameter = max(diameter, left + right);
        return 1 + max(left, right);
    }
    
public:
    int diameterOfBinaryTree(TreeNode* root) {
        height(root);
        return diameter;
    }
};

int main() {
    return 0;
}`
    },
    {
      name: 'ValidateBST.cpp',
      path: 'Assignments/ValidateBST.cpp',
      description: 'Given the root of a binary tree, determine if it is a valid binary search tree (BST).',
      difficulty: 'Medium',
      tags: ['BST', 'DFS', 'Validation', 'Inorder'],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(h)',
      leetcodeLink: 'https://leetcode.com/problems/validate-binary-search-tree/',
      code: `// Problem: Validate Binary Search Tree
#include <bits/stdc++.h>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

bool isValidBST(TreeNode* root, long long minVal = LLONG_MIN, long long maxVal = LLONG_MAX) {
    if (!root) return true;
    
    if (root->val <= minVal || root->val >= maxVal) 
        return false;
    
    return isValidBST(root->left, minVal, root->val) &&
           isValidBST(root->right, root->val, maxVal);
}

int main() {
    return 0;
}`
    },
  ],
  'Sorting': [
    {
      name: 'MergeSort.cpp',
      path: 'Assignments/MergeSort.cpp',
      description: 'Implement Merge Sort algorithm - a divide and conquer algorithm that divides the input array into two halves, recursively sorts them, and merges the sorted halves.',
      difficulty: 'Medium',
      tags: ['Sorting', 'Divide and Conquer', 'Recursion'],
      timeComplexity: 'O(n log n)',
      spaceComplexity: 'O(n)',
      notes: 'Stable sorting algorithm. Preferred for linked lists and external sorting.',
      code: `// Problem: Merge Sort
// Date: February 3, 2026

#include <bits/stdc++.h>
using namespace std;

void merge(vector<int>& arr, int left, int mid, int right) {
    vector<int> temp;
    int i = left, j = mid + 1;
    
    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) temp.push_back(arr[i++]);
        else temp.push_back(arr[j++]);
    }
    while (i <= mid) temp.push_back(arr[i++]);
    while (j <= right) temp.push_back(arr[j++]);
    
    for (int i = left; i <= right; i++)
        arr[i] = temp[i - left];
}

void mergeSort(vector<int>& arr, int left, int right) {
    if (left >= right) return;
    
    int mid = left + (right - left) / 2;
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
}

int main() {
    // Test cases
    return 0;
}`
    },
    {
      name: 'QuickSort.cpp',
      path: 'Assignments/QuickSort.cpp',
      description: 'Implement Quick Sort algorithm using the partition technique.',
      difficulty: 'Medium',
      tags: ['Sorting', 'Divide and Conquer', 'Partition'],
      timeComplexity: 'O(n log n) average, O(n²) worst',
      spaceComplexity: 'O(log n)',
      code: `// Problem: Quick Sort
#include <bits/stdc++.h>
using namespace std;

int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}

void quickSort(vector<int>& arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int main() {
    vector<int> arr = {64, 34, 25, 12, 22, 11, 90};
    quickSort(arr, 0, arr.size() - 1);
    
    for (int x : arr) cout << x << " ";
    return 0;
}`
    },
  ],
  'Matrix': [
    {
      name: 'SpiralMatrix.cpp',
      path: 'Assignments/SpiralMatrix.cpp',
      description: 'Given an m x n matrix, return all elements of the matrix in spiral order.',
      difficulty: 'Medium',
      tags: ['Matrix', 'Simulation', 'Array'],
      timeComplexity: 'O(m × n)',
      spaceComplexity: 'O(1)',
      leetcodeLink: 'https://leetcode.com/problems/spiral-matrix/',
      code: `// Problem: Spiral Matrix
#include <bits/stdc++.h>
using namespace std;

vector<int> spiralOrder(vector<vector<int>>& matrix) {
    vector<int> result;
    if (matrix.empty()) return result;
    
    int top = 0, bottom = matrix.size() - 1;
    int left = 0, right = matrix[0].size() - 1;
    
    while (top <= bottom && left <= right) {
        // Right
        for (int i = left; i <= right; i++)
            result.push_back(matrix[top][i]);
        top++;
        
        // Down
        for (int i = top; i <= bottom; i++)
            result.push_back(matrix[i][right]);
        right--;
        
        // Left
        if (top <= bottom) {
            for (int i = right; i >= left; i--)
                result.push_back(matrix[bottom][i]);
            bottom--;
        }
        
        // Up
        if (left <= right) {
            for (int i = bottom; i >= top; i--)
                result.push_back(matrix[i][left]);
            left++;
        }
    }
    return result;
}

int main() {
    vector<vector<int>> matrix = {{1,2,3},{4,5,6},{7,8,9}};
    vector<int> result = spiralOrder(matrix);
    for (int x : result) cout << x << " ";
    return 0;
}`
    },
    {
      name: 'RotateImage.cpp',
      path: 'Assignments/RotateImage.cpp',
      description: 'Rotate the image by 90 degrees (clockwise) in-place.',
      difficulty: 'Medium',
      tags: ['Matrix', 'In-place', 'Rotation'],
      timeComplexity: 'O(n²)',
      spaceComplexity: 'O(1)',
      leetcodeLink: 'https://leetcode.com/problems/rotate-image/',
      notes: 'Transpose the matrix, then reverse each row.',
      code: `// Problem: Rotate Image (90° clockwise)
#include <bits/stdc++.h>
using namespace std;

void rotate(vector<vector<int>>& matrix) {
    int n = matrix.size();
    
    // Transpose
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            swap(matrix[i][j], matrix[j][i]);
        }
    }
    
    // Reverse each row
    for (int i = 0; i < n; i++) {
        reverse(matrix[i].begin(), matrix[i].end());
    }
}

int main() {
    vector<vector<int>> matrix = {{1,2,3},{4,5,6},{7,8,9}};
    rotate(matrix);
    
    for (auto& row : matrix) {
        for (int x : row) cout << x << " ";
        cout << endl;
    }
    return 0;
}`
    },
    {
      name: 'Search2DMatrix.cpp',
      path: 'Assignments/Search2DMatrix.cpp',
      description: 'Search for a value in an m x n matrix where rows and columns are sorted.',
      difficulty: 'Medium',
      tags: ['Matrix', 'Binary Search', 'Searching'],
      timeComplexity: 'O(log(m × n))',
      spaceComplexity: 'O(1)',
      leetcodeLink: 'https://leetcode.com/problems/search-a-2d-matrix/',
      code: `// Problem: Search a 2D Matrix
#include <bits/stdc++.h>
using namespace std;

bool searchMatrix(vector<vector<int>>& matrix, int target) {
    int m = matrix.size(), n = matrix[0].size();
    int left = 0, right = m * n - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        int val = matrix[mid / n][mid % n];
        
        if (val == target) return true;
        else if (val < target) left = mid + 1;
        else right = mid - 1;
    }
    return false;
}

int main() {
    vector<vector<int>> matrix = {{1,3,5,7},{10,11,16,20},{23,30,34,60}};
    cout << searchMatrix(matrix, 3) << endl;  // 1
    cout << searchMatrix(matrix, 13) << endl; // 0
    return 0;
}`
    },
  ],
  'Queue': [
    {
      name: 'DesignCircularQueue.cpp',
      path: 'Assignments/DesignCircularQueue.cpp',
      description: 'Design your implementation of the circular queue.',
      difficulty: 'Medium',
      tags: ['Queue', 'Design', 'Circular'],
      timeComplexity: 'O(1) all operations',
      spaceComplexity: 'O(n)',
      leetcodeLink: 'https://leetcode.com/problems/design-circular-queue/',
      code: `// Problem: Design Circular Queue
#include <bits/stdc++.h>
using namespace std;

class MyCircularQueue {
    vector<int> data;
    int front, rear, size, capacity;
    
public:
    MyCircularQueue(int k) : data(k), front(0), rear(-1), size(0), capacity(k) {}
    
    bool enQueue(int value) {
        if (isFull()) return false;
        rear = (rear + 1) % capacity;
        data[rear] = value;
        size++;
        return true;
    }
    
    bool deQueue() {
        if (isEmpty()) return false;
        front = (front + 1) % capacity;
        size--;
        return true;
    }
    
    int Front() { return isEmpty() ? -1 : data[front]; }
    int Rear() { return isEmpty() ? -1 : data[rear]; }
    bool isEmpty() { return size == 0; }
    bool isFull() { return size == capacity; }
};

int main() {
    MyCircularQueue q(3);
    q.enQueue(1);
    q.enQueue(2);
    q.enQueue(3);
    cout << q.enQueue(4) << endl; // 0
    cout << q.Rear() << endl;     // 3
    cout << q.isFull() << endl;   // 1
    return 0;
}`
    },
  ],
  'TwoPointers': [
    {
      name: 'RemoveNthFromEnd.cpp',
      path: 'Assignments/RemoveNthFromEnd.cpp',
      description: 'Remove the nth node from the end of a linked list and return its head.',
      difficulty: 'Medium',
      tags: ['Linked List', 'Two Pointers'],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      leetcodeLink: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/',
      code: `// Problem: Remove Nth Node From End of List
#include <bits/stdc++.h>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* removeNthFromEnd(ListNode* head, int n) {
    ListNode* dummy = new ListNode(0);
    dummy->next = head;
    ListNode* fast = dummy;
    ListNode* slow = dummy;
    
    // Move fast n+1 steps ahead
    for (int i = 0; i <= n; i++) {
        fast = fast->next;
    }
    
    // Move both until fast reaches end
    while (fast) {
        fast = fast->next;
        slow = slow->next;
    }
    
    // Remove the nth node
    ListNode* toDelete = slow->next;
    slow->next = slow->next->next;
    delete toDelete;
    
    return dummy->next;
}

int main() {
    return 0;
}`
    },
  ],
};

// Helper function to get total problem count
export const getTotalProblems = () => {
  return Object.values(codeData).reduce((acc, files) => acc + files.length, 0);
};

// Helper function to get all tags
export const getAllTags = () => {
  const tags = new Set();
  Object.values(codeData).forEach(files => {
    files.forEach(file => {
      file.tags?.forEach(tag => tags.add(tag));
    });
  });
  return Array.from(tags).sort();
};
