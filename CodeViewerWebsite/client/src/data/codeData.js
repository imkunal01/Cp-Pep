// Auto-generated code data
// Generated on: 2026-02-23T15:10:10.643Z
// Total problems: 108

export const codeData = {
  "LinkedList": [
    {
      "name": "0s1s2s_sort_LinkedList.cpp",
      "path": "Assignments/0s1s2s_sort_LinkedList.cpp",
      "difficulty": "Medium",
      "tags": [
        "Linked List"
      ],
      "code": "#include<iostream>\r\n#include<vector>\r\nusing namespace std;\r\nclass Node{\r\n    public: \r\n    int data;\r\n    Node* next;\r\n\r\n    Node(int data){\r\n        this->data = data;\r\n        this->next = NULL;\r\n    }\r\n    Node(Node* next,int data){\r\n        this->data = data;\r\n        this->next = NULL;\r\n    }\r\n    Node(int data, Node* next) : data(data), next(next) {}\r\n};\r\nNode* ConvetArrToLL(vector<int>arr){\r\n    if (arr.empty()) return nullptr;\r\n    Node* head = new Node(arr[0]);\r\n    Node * trev = head;\r\n    for(int i = 1;i<arr.size();i++){\r\n        Node* temp = new Node(arr[i]);\r\n        trev->next = temp;\r\n        trev = temp;\r\n\r\n    }\r\n    return head;\r\n}\r\nNode* DutchNationalFlag(Node* head){\r\n    if(head == NULL || head->next == NULL){\r\n        return head;\r\n    }\r\n    Node* zeroHead = new Node(-1);\r\n    Node* oneHead = new Node(-1);\r\n    Node* twoHead = new Node(-1);\r\n    Node* zeroTail = zeroHead;\r\n    Node* oneTail = oneHead;\r\n    Node* twoTail = twoHead;\r\n    Node* curr = head;\r\n    while(curr != NULL){\r\n        if(curr->data == 0){\r\n            zeroTail->next = curr;\r\n            zeroTail = zeroTail->next;\r\n        }\r\n        else if(curr->data == 1){\r\n            oneTail->next = curr;\r\n            oneTail = oneTail->next;\r\n        }\r\n        else{\r\n            twoTail->next = curr;\r\n            twoTail = twoTail->next;\r\n        }\r\n        curr = curr->next;\r\n    }\r\n    if(oneHead->next != NULL){\r\n        zeroTail->next = oneHead->next;\r\n        oneTail->next = twoHead->next;\r\n    }\r\n    else{\r\n        zeroTail->next = twoHead->next;\r\n    }\r\n    twoTail->next = NULL;\r\n    head = zeroHead->next;\r\n    delete zeroHead;\r\n    delete oneHead;\r\n    delete twoHead;\r\n\r\n    return head;\r\n}\r\n\r\n// convert array to linked list\r\nvector<int>convertLLToArr(Node* head){\r\n    vector<int>arr;\r\n    Node* temp = head;\r\n    while(temp != NULL){\r\n        arr.push_back(temp->data);\r\n        temp = temp->next;\r\n    }\r\n    return arr;\r\n}\r\n\r\nvoid display(Node* head){\r\n    Node* temp = head;\r\n    while(temp != NULL){\r\n        cout<<temp->data<<\" \";\r\n        temp = temp->next;\r\n    }\r\n    cout<<endl;\r\n}\r\n\r\nint main() {\r\n    vector<int>arr = {1,2,3,7,7,7};\r\n    Node* head = ConvetArrToLL(arr);\r\n    cout<<\"Array Converted To LinkedList\"<<endl;\r\n    display(head);\r\n    // cout<<\"After Head Deletion\"<<endl;\r\n    // head = deleteHead(head);\r\n    // display(head);\r\n    // cout<<\"After Tail Deletion\"<<endl;\r\n    // head = deleteTail(head);\r\n    // display(head);\r\n    // cout<<\"After Deletion at k=2\"<<endl;\r\n    // deleteAtPos(head,3);\r\n    // head = deleteMatchingValue(head,1);\r\n    int target = 7;\r\n\r\n    display(head);\r\n    return 0;\r\n}"
    },
    {
      "name": "DeleteNodeFromDoublyLL.cpp",
      "path": "Assignments/DeleteNodeFromDoublyLL.cpp",
      "difficulty": "Medium",
      "tags": [
        "Linked List"
      ],
      "code": "// Problem: Delete a Node from Doubly Linked List\r\n// Date: February 9, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct DListNode {\r\n    int val;\r\n    DListNode* prev;\r\n    DListNode* next;\r\n    DListNode(int x) : val(x), prev(nullptr), next(nullptr) {}\r\n};\r\n\r\nDListNode* deleteNode(DListNode* head, int key) {\r\n    DListNode* curr = head;\r\n    while (curr && curr->val != key) {\r\n        curr = curr->next;\r\n    }\r\n    \r\n    if (!curr) return head;\r\n    \r\n    if (curr->prev) curr->prev->next = curr->next;\r\n    else head = curr->next;\r\n    \r\n    if (curr->next) curr->next->prev = curr->prev;\r\n    \r\n    delete curr;\r\n    return head;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "DeleteNodeFromLL.cpp",
      "path": "Assignments/DeleteNodeFromLL.cpp",
      "difficulty": "Medium",
      "tags": [
        "Linked List"
      ],
      "code": "// Problem: Delete a Node from Linked List\r\n// Date: February 4, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct ListNode {\r\n    int val;\r\n    ListNode* next;\r\n    ListNode(int x) : val(x), next(nullptr) {}\r\n};\r\n\r\nListNode* deleteNode(ListNode* head, int key) {\r\n    if (!head) return nullptr;\r\n    \r\n    // If head is to be deleted\r\n    if (head->val == key) return head->next;\r\n    \r\n    ListNode* curr = head;\r\n    while (curr->next && curr->next->val != key) {\r\n        curr = curr->next;\r\n    }\r\n    \r\n    if (curr->next) {\r\n        curr->next = curr->next->next;\r\n    }\r\n    return head;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "DetectCycleInLL.cpp",
      "path": "Assignments/DetectCycleInLL.cpp",
      "difficulty": "Easy",
      "tags": [
        "Linked List",
        "Two Pointers"
      ],
      "code": "// Problem: Detect Cycle in Linked List\r\n// Date: February 6, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct ListNode {\r\n    int val;\r\n    ListNode* next;\r\n    ListNode(int x) : val(x), next(nullptr) {}\r\n};\r\n\r\nbool hasCycle(ListNode* head) {\r\n    ListNode* slow = head;\r\n    ListNode* fast = head;\r\n    \r\n    while (fast && fast->next) {\r\n        slow = slow->next;\r\n        fast = fast->next->next;\r\n        if (slow == fast) return true;\r\n    }\r\n    return false;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "InsertInDoublyLL.cpp",
      "path": "Assignments/InsertInDoublyLL.cpp",
      "difficulty": "Medium",
      "tags": [
        "Linked List"
      ],
      "code": "// Problem: Insert in Doubly Linked List\r\n// Date: February 9, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct DListNode {\r\n    int val;\r\n    DListNode* prev;\r\n    DListNode* next;\r\n    DListNode(int x) : val(x), prev(nullptr), next(nullptr) {}\r\n};\r\n\r\nDListNode* insertNode(DListNode* head, int val, int pos) {\r\n    DListNode* newNode = new DListNode(val);\r\n    \r\n    if (pos == 0) {\r\n        newNode->next = head;\r\n        if (head) head->prev = newNode;\r\n        return newNode;\r\n    }\r\n    \r\n    DListNode* curr = head;\r\n    for (int i = 0; i < pos - 1 && curr; i++) {\r\n        curr = curr->next;\r\n    }\r\n    \r\n    if (curr) {\r\n        newNode->next = curr->next;\r\n        newNode->prev = curr;\r\n        if (curr->next) curr->next->prev = newNode;\r\n        curr->next = newNode;\r\n    }\r\n    return head;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "InsertingInSortedList.cpp",
      "path": "Assignments/InsertingInSortedList.cpp",
      "difficulty": "Medium",
      "tags": [
        "Linked List",
        "Sorting"
      ],
      "code": "// Problem: Inserting in a Sorted List\r\n// Date: February 5, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct ListNode {\r\n    int val;\r\n    ListNode* next;\r\n    ListNode(int x) : val(x), next(nullptr) {}\r\n};\r\n\r\nListNode* insertInSortedList(ListNode* head, int val) {\r\n    ListNode* newNode = new ListNode(val);\r\n    \r\n    if (!head || val < head->val) {\r\n        newNode->next = head;\r\n        return newNode;\r\n    }\r\n    \r\n    ListNode* curr = head;\r\n    while (curr->next && curr->next->val < val) {\r\n        curr = curr->next;\r\n    }\r\n    \r\n    newNode->next = curr->next;\r\n    curr->next = newNode;\r\n    return head;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "IntersectionOfTwoLL.cpp",
      "path": "Assignments/IntersectionOfTwoLL.cpp",
      "difficulty": "Medium",
      "tags": [
        "Linked List"
      ],
      "code": "// Problem: Intersection of Two Linked Lists\r\n// Date: February 5, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct ListNode {\r\n    int val;\r\n    ListNode* next;\r\n    ListNode(int x) : val(x), next(nullptr) {}\r\n};\r\n\r\nListNode* getIntersectionNode(ListNode* headA, ListNode* headB) {\r\n    ListNode* a = headA;\r\n    ListNode* b = headB;\r\n    \r\n    while (a != b) {\r\n        a = a ? a->next : headB;\r\n        b = b ? b->next : headA;\r\n    }\r\n    return a;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "IntroToDoublyLL.cpp",
      "path": "Assignments/IntroToDoublyLL.cpp",
      "difficulty": "Medium",
      "tags": [
        "Linked List"
      ],
      "code": "// Problem: Intro to Doubly Linked List\r\n// Date: February 9, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct DListNode {\r\n    int val;\r\n    DListNode* prev;\r\n    DListNode* next;\r\n    DListNode(int x) : val(x), prev(nullptr), next(nullptr) {}\r\n};\r\n\r\nclass DoublyLinkedList {\r\npublic:\r\n    DListNode* head;\r\n    DListNode* tail;\r\n    \r\n    DoublyLinkedList() : head(nullptr), tail(nullptr) {}\r\n    \r\n    void insertFront(int val) {\r\n        DListNode* node = new DListNode(val);\r\n        if (!head) {\r\n            head = tail = node;\r\n        } else {\r\n            node->next = head;\r\n            head->prev = node;\r\n            head = node;\r\n        }\r\n    }\r\n    \r\n    void insertEnd(int val) {\r\n        DListNode* node = new DListNode(val);\r\n        if (!tail) {\r\n            head = tail = node;\r\n        } else {\r\n            tail->next = node;\r\n            node->prev = tail;\r\n            tail = node;\r\n        }\r\n    }\r\n    \r\n    void deleteNode(int val) {\r\n        DListNode* curr = head;\r\n        while (curr && curr->val != val) curr = curr->next;\r\n        if (!curr) return;\r\n        if (curr->prev) curr->prev->next = curr->next;\r\n        else head = curr->next;\r\n        if (curr->next) curr->next->prev = curr->prev;\r\n        else tail = curr->prev;\r\n        delete curr;\r\n    }\r\n    \r\n    void display() {\r\n        DListNode* curr = head;\r\n        while (curr) { cout << curr->val << \" \"; curr = curr->next; }\r\n        cout << endl;\r\n    }\r\n};\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "LinkedListIntro.cpp",
      "path": "Assignments/LinkedListIntro.cpp",
      "difficulty": "Medium",
      "tags": [
        "Linked List"
      ],
      "code": "// Problem: Linked Lists Introduction\r\n// Date: February 4, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct ListNode {\r\n    int val;\r\n    ListNode* next;\r\n    ListNode(int x) : val(x), next(nullptr) {}\r\n};\r\n\r\nclass LinkedList {\r\npublic:\r\n    ListNode* head;\r\n    \r\n    LinkedList() : head(nullptr) {}\r\n    \r\n    void insertFront(int val) {\r\n        ListNode* node = new ListNode(val);\r\n        node->next = head;\r\n        head = node;\r\n    }\r\n    \r\n    void insertEnd(int val) {\r\n        ListNode* node = new ListNode(val);\r\n        if (!head) { head = node; return; }\r\n        ListNode* curr = head;\r\n        while (curr->next) curr = curr->next;\r\n        curr->next = node;\r\n    }\r\n    \r\n    void insertAt(int pos, int val) {\r\n        if (pos == 0) { insertFront(val); return; }\r\n        ListNode* node = new ListNode(val);\r\n        ListNode* curr = head;\r\n        for (int i = 0; i < pos - 1 && curr; i++) curr = curr->next;\r\n        if (curr) { node->next = curr->next; curr->next = node; }\r\n    }\r\n    \r\n    void deleteNode(int val) {\r\n        if (!head) return;\r\n        if (head->val == val) { head = head->next; return; }\r\n        ListNode* curr = head;\r\n        while (curr->next && curr->next->val != val) curr = curr->next;\r\n        if (curr->next) curr->next = curr->next->next;\r\n    }\r\n    \r\n    void display() {\r\n        ListNode* curr = head;\r\n        while (curr) { cout << curr->val << \" \"; curr = curr->next; }\r\n        cout << endl;\r\n    }\r\n    \r\n    int size() {\r\n        int count = 0;\r\n        ListNode* curr = head;\r\n        while (curr) { count++; curr = curr->next; }\r\n        return count;\r\n    }\r\n};\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "LLCycleDetectionII.cpp",
      "path": "Assignments/LLCycleDetectionII.cpp",
      "difficulty": "Easy",
      "tags": [
        "Linked List",
        "Two Pointers"
      ],
      "code": "// Problem: Linked List Cycle Detection II\r\n// Date: February 6, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct ListNode {\r\n    int val;\r\n    ListNode* next;\r\n    ListNode(int x) : val(x), next(nullptr) {}\r\n};\r\n\r\nListNode* detectCycle(ListNode* head) {\r\n    ListNode* slow = head;\r\n    ListNode* fast = head;\r\n    \r\n    // Find meeting point\r\n    while (fast && fast->next) {\r\n        slow = slow->next;\r\n        fast = fast->next->next;\r\n        if (slow == fast) break;\r\n    }\r\n    \r\n    if (!fast || !fast->next) return nullptr;\r\n    \r\n    // Find cycle start\r\n    slow = head;\r\n    while (slow != fast) {\r\n        slow = slow->next;\r\n        fast = fast->next;\r\n    }\r\n    return slow;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "MergeTwoSortedLists.cpp",
      "path": "Assignments/MergeTwoSortedLists.cpp",
      "difficulty": "Easy",
      "tags": [
        "Linked List",
        "Sorting"
      ],
      "code": "// Problem: Merge Two Sorted Lists\r\n// Date: February 5, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct ListNode {\r\n    int val;\r\n    ListNode* next;\r\n    ListNode(int x) : val(x), next(nullptr) {}\r\n};\r\n\r\nListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {\r\n    ListNode dummy(0);\r\n    ListNode* tail = &dummy;\r\n    \r\n    while (list1 && list2) {\r\n        if (list1->val <= list2->val) {\r\n            tail->next = list1;\r\n            list1 = list1->next;\r\n        } else {\r\n            tail->next = list2;\r\n            list2 = list2->next;\r\n        }\r\n        tail = tail->next;\r\n    }\r\n    \r\n    tail->next = list1 ? list1 : list2;\r\n    return dummy.next;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "MiddleOfLL.cpp",
      "path": "Assignments/MiddleOfLL.cpp",
      "difficulty": "Medium",
      "tags": [
        "Linked List",
        "Two Pointers"
      ],
      "code": "// Problem: Middle of Linked List\r\n// Date: February 4, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct ListNode {\r\n    int val;\r\n    ListNode* next;\r\n    ListNode(int x) : val(x), next(nullptr) {}\r\n};\r\n\r\nListNode* middleNode(ListNode* head) {\r\n    ListNode* slow = head;\r\n    ListNode* fast = head;\r\n    \r\n    while (fast && fast->next) {\r\n        slow = slow->next;\r\n        fast = fast->next->next;\r\n    }\r\n    return slow;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "OddEvenLinkedList.cpp",
      "path": "Assignments/OddEvenLinkedList.cpp",
      "difficulty": "Medium",
      "tags": [
        "Linked List"
      ],
      "code": "#include<iostream>\r\n#include<vector>\r\nusing namespace std;\r\nclass Node{\r\n    public: \r\n    int data;\r\n    Node* next;\r\n\r\n    Node(int data){\r\n        this->data = data;\r\n        this->next = NULL;\r\n    }\r\n    Node(Node* next,int data){\r\n        this->data = data;\r\n        this->next = NULL;\r\n    }\r\n    Node(int data, Node* next) : data(data), next(next) {}\r\n};\r\nNode* ConvetArrToLL(vector<int>arr){\r\n    if (arr.empty()) return nullptr;\r\n    Node* head = new Node(arr[0]);\r\n    Node * trev = head;\r\n    for(int i = 1;i<arr.size();i++){\r\n        Node* temp = new Node(arr[i]);\r\n        trev->next = temp;\r\n        trev = temp;\r\n\r\n    }\r\n    return head;\r\n}\r\n\r\n// [2,1,3,5,6,4,7] for this test case it is not right\r\nNode* OddEvenList(Node* head) {\r\n    if(head == NULL || head->next == NULL){\r\n        return head;\r\n    }\r\n    Node* odd = head;\r\n    Node* even = head->next;\r\n    Node* evenHead = even;\r\n\r\n    while(even != NULL && even->next != NULL){\r\n        odd->next = even->next;\r\n        odd = odd->next;\r\n        even->next = odd->next;\r\n        even = even->next;\r\n    }\r\n    odd->next = evenHead;\r\n    if(even != NULL){\r\n        even->next = NULL;\r\n    }\r\n    return head;\r\n}\r\n\r\nvector<int>convertLLToArr(Node* head){\r\n    vector<int>arr;\r\n    Node* temp = head;\r\n    while(temp != NULL){\r\n        arr.push_back(temp->data);\r\n        temp = temp->next;\r\n    }\r\n    return arr;\r\n}\r\n\r\nvoid display(Node* head){\r\n    Node* temp = head;\r\n    while(temp != NULL){\r\n        cout<<temp->data<<\" \";\r\n        temp = temp->next;\r\n    }\r\n    cout<<endl;\r\n}\r\n\r\nint main() {\r\n    vector<int>arr = {1,2,3,7,7,7};\r\n    Node* head = ConvetArrToLL(arr);\r\n    display(head);\r\n    // cout<<\"After Head Deletion\"<<endl;\r\n    // head = deleteHead(head);\r\n    // display(head);\r\n    // cout<<\"After Tail Deletion\"<<endl;\r\n    // head = deleteTail(head);\r\n    // display(head);\r\n    // cout<<\"After Deletion at k=2\"<<endl;\r\n    // deleteAtPos(head,3);\r\n    // head = deleteMatchingValue(head,1);\r\n    int target = 7;\r\n\r\n    display(head);\r\n    return 0;\r\n}"
    },
    {
      "name": "OddEvenList.cpp",
      "path": "Assignments/OddEvenList.cpp",
      "difficulty": "Medium",
      "tags": [
        "Linked List"
      ],
      "code": "// Problem: Odd Even Linked List\r\n// Date: February 10, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct ListNode {\r\n    int val;\r\n    ListNode* next;\r\n    ListNode(int x) : val(x), next(nullptr) {}\r\n};\r\n\r\nListNode* oddEvenList(ListNode* head) {\r\n    if (!head) return nullptr;\r\n    \r\n    ListNode* odd = head;\r\n    ListNode* even = head->next;\r\n    ListNode* evenHead = even;\r\n    \r\n    while (even && even->next) {\r\n        odd->next = even->next;\r\n        odd = odd->next;\r\n        even->next = odd->next;\r\n        even = even->next;\r\n    }\r\n    \r\n    odd->next = evenHead;\r\n    return head;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "PalindromeLL.cpp",
      "path": "Assignments/PalindromeLL.cpp",
      "difficulty": "Medium",
      "tags": [
        "Linked List",
        "Two Pointers"
      ],
      "code": "// Problem: Palindrome Linked List\r\n// Date: February 5, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct ListNode {\r\n    int val;\r\n    ListNode* next;\r\n    ListNode(int x) : val(x), next(nullptr) {}\r\n};\r\n\r\nbool isPalindrome(ListNode* head) {\r\n    if (!head || !head->next) return true;\r\n    \r\n    // Find middle\r\n    ListNode* slow = head;\r\n    ListNode* fast = head;\r\n    while (fast->next && fast->next->next) {\r\n        slow = slow->next;\r\n        fast = fast->next->next;\r\n    }\r\n    \r\n    // Reverse second half\r\n    ListNode* prev = nullptr;\r\n    ListNode* curr = slow->next;\r\n    while (curr) {\r\n        ListNode* next = curr->next;\r\n        curr->next = prev;\r\n        prev = curr;\r\n        curr = next;\r\n    }\r\n    \r\n    // Compare\r\n    ListNode* p1 = head;\r\n    ListNode* p2 = prev;\r\n    while (p2) {\r\n        if (p1->val != p2->val) return false;\r\n        p1 = p1->next;\r\n        p2 = p2->next;\r\n    }\r\n    return true;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "RemoveDuplicatesFromSortedList.cpp",
      "path": "Assignments/RemoveDuplicatesFromSortedList.cpp",
      "difficulty": "Medium",
      "tags": [
        "Linked List",
        "Sorting"
      ],
      "code": "// Problem: Remove Duplicates from Sorted List\r\n// Date: February 5, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct ListNode {\r\n    int val;\r\n    ListNode* next;\r\n    ListNode(int x) : val(x), next(nullptr) {}\r\n};\r\n\r\nListNode* deleteDuplicates(ListNode* head) {\r\n    ListNode* curr = head;\r\n    \r\n    while (curr && curr->next) {\r\n        if (curr->val == curr->next->val) {\r\n            curr->next = curr->next->next;\r\n        } else {\r\n            curr = curr->next;\r\n        }\r\n    }\r\n    return head;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "RemoveLLElements.cpp",
      "path": "Assignments/RemoveLLElements.cpp",
      "difficulty": "Medium",
      "tags": [
        "Linked List"
      ],
      "code": "// Problem: Remove Linked List Elements\r\n// Date: February 6, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct ListNode {\r\n    int val;\r\n    ListNode* next;\r\n    ListNode(int x) : val(x), next(nullptr) {}\r\n};\r\n\r\nListNode* removeElements(ListNode* head, int val) {\r\n    ListNode dummy(0);\r\n    dummy.next = head;\r\n    ListNode* curr = &dummy;\r\n    \r\n    while (curr->next) {\r\n        if (curr->next->val == val) {\r\n            curr->next = curr->next->next;\r\n        } else {\r\n            curr = curr->next;\r\n        }\r\n    }\r\n    return dummy.next;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "ReverseLL.cpp",
      "path": "Assignments/ReverseLL.cpp",
      "difficulty": "Easy",
      "tags": [
        "Linked List"
      ],
      "code": "// Problem: Reverse Linked List\r\n// Date: February 4, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct ListNode {\r\n    int val;\r\n    ListNode* next;\r\n    ListNode(int x) : val(x), next(nullptr) {}\r\n};\r\n\r\nListNode* reverseList(ListNode* head) {\r\n    ListNode* prev = nullptr;\r\n    ListNode* curr = head;\r\n    \r\n    while (curr) {\r\n        ListNode* next = curr->next;\r\n        curr->next = prev;\r\n        prev = curr;\r\n        curr = next;\r\n    }\r\n    return prev;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "ReverseLL_in_K_Groups.cpp",
      "path": "Assignments/ReverseLL_in_K_Groups.cpp",
      "difficulty": "Easy",
      "tags": [
        "Linked List"
      ],
      "code": "#include<iostream>\r\n#include<vector>\r\nusing namespace std;\r\nclass Node{\r\n    public: \r\n    int data;\r\n    Node* next;\r\n\r\n    Node(int data){\r\n        this->data = data;\r\n        this->next = NULL;\r\n    }\r\n    Node(Node* next,int data){\r\n        this->data = data;\r\n        this->next = NULL;\r\n    }\r\n    Node(int data, Node* next) : data(data), next(next) {}\r\n};\r\nNode* ConvetArrToLL(vector<int>arr){\r\n    if (arr.empty()) return nullptr;\r\n    Node* head = new Node(arr[0]);\r\n    Node * trev = head;\r\n    for(int i = 1;i<arr.size();i++){\r\n        Node* temp = new Node(arr[i]);\r\n        trev->next = temp;\r\n        trev = temp;\r\n\r\n    }\r\n    return head;\r\n}\r\n\r\nNode* ReverseKGroup(Node* head, int k) {\r\n    if (head == NULL || k <= 1) return head;\r\n\r\n    Node* dummy = new Node(0);\r\n    dummy->next = head;\r\n    Node* prevGroupEnd = dummy;\r\n\r\n    while (true) {\r\n        Node* groupStart = prevGroupEnd->next;\r\n        Node* groupEnd = prevGroupEnd;\r\n        for (int i = 0; i < k && groupEnd != NULL; i++) {\r\n            groupEnd = groupEnd->next;\r\n        }\r\n        if (groupEnd == NULL) break;\r\n        Node* nextGroupStart = groupEnd->next;\r\n        Node* prev = nextGroupStart;\r\n        Node* curr = groupStart;\r\n        while (curr != nextGroupStart) {\r\n            Node* temp = curr->next;\r\n            curr->next = prev;\r\n            prev = curr;\r\n            curr = temp;\r\n        }\r\n\r\n        prevGroupEnd->next = groupEnd;\r\n        prevGroupEnd = groupStart; \r\n    }\r\n\r\n    head = dummy->next;\r\n    delete dummy;\r\n    return head;\r\n}\r\n\r\nvector<int>convertLLToArr(Node* head){\r\n    vector<int>arr;\r\n    Node* temp = head;\r\n    while(temp != NULL){\r\n        arr.push_back(temp->data);\r\n        temp = temp->next;\r\n    }\r\n    return arr;\r\n}\r\n\r\nvoid display(Node* head){\r\n    Node* temp = head;\r\n    while(temp != NULL){\r\n        cout<<temp->data<<\" \";\r\n        temp = temp->next;\r\n    }\r\n    cout<<endl;\r\n}\r\n\r\nint main() {\r\n    vector<int>arr = {1,2,3,7,7,7};\r\n    Node* head = ConvetArrToLL(arr);\r\n    display(head);\r\n    // cout<<\"After Head Deletion\"<<endl;\r\n    // head = deleteHead(head);\r\n    // display(head);\r\n    // cout<<\"After Tail Deletion\"<<endl;\r\n    // head = deleteTail(head);\r\n    // display(head);\r\n    // cout<<\"After Deletion at k=2\"<<endl;\r\n    // deleteAtPos(head,3);\r\n    // head = deleteMatchingValue(head,1);\r\n    int target = 7;\r\n\r\n    display(head);\r\n    return 0;\r\n}"
    },
    {
      "name": "RotateList.cpp",
      "path": "Assignments/RotateList.cpp",
      "difficulty": "Medium",
      "tags": [
        "Linked List"
      ],
      "code": "// Problem: Rotate List\r\n// Date: February 6, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct ListNode {\r\n    int val;\r\n    ListNode* next;\r\n    ListNode(int x) : val(x), next(nullptr) {}\r\n};\r\n\r\nListNode* rotateRight(ListNode* head, int k) {\r\n    if (!head || !head->next || k == 0) return head;\r\n    \r\n    // Find length and last node\r\n    int len = 1;\r\n    ListNode* tail = head;\r\n    while (tail->next) {\r\n        len++;\r\n        tail = tail->next;\r\n    }\r\n    \r\n    k = k % len;\r\n    if (k == 0) return head;\r\n    \r\n    // Find new tail (len - k - 1 steps from head)\r\n    ListNode* newTail = head;\r\n    for (int i = 0; i < len - k - 1; i++) {\r\n        newTail = newTail->next;\r\n    }\r\n    \r\n    ListNode* newHead = newTail->next;\r\n    newTail->next = nullptr;\r\n    tail->next = head;\r\n    \r\n    return newHead;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "Sort012LinkedList.cpp",
      "path": "Assignments/Sort012LinkedList.cpp",
      "difficulty": "Medium",
      "tags": [
        "Linked List",
        "Sorting"
      ],
      "code": "// Problem: Sort 0s, 1s and 2s in Linked List\r\n// Date: February 11, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct ListNode {\r\n    int val;\r\n    ListNode* next;\r\n    ListNode(int x) : val(x), next(nullptr) {}\r\n};\r\n\r\nListNode* sortList(ListNode* head) {\r\n    if (!head) return nullptr;\r\n    \r\n    int count[3] = {0, 0, 0};\r\n    ListNode* curr = head;\r\n    \r\n    // Count 0s, 1s, 2s\r\n    while (curr) {\r\n        count[curr->val]++;\r\n        curr = curr->next;\r\n    }\r\n    \r\n    // Fill list\r\n    curr = head;\r\n    int i = 0;\r\n    while (curr) {\r\n        if (count[i] == 0) i++;\r\n        else {\r\n            curr->val = i;\r\n            count[i]--;\r\n            curr = curr->next;\r\n        }\r\n    }\r\n    return head;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    }
  ],
  "Trees": [
    {
      "name": "AllNodesAtDistanceK.cpp",
      "path": "Assignments/AllNodesAtDistanceK.cpp",
      "difficulty": "Medium",
      "tags": [
        "BFS"
      ],
      "code": "    // Problem: All Nodes at Distance K\r\n    // Date: February 19, 2026\r\n\r\n    #include <bits/stdc++.h> // Include all standard libraries\r\n    using namespace std; // Use standard namespace\r\n\r\n    struct TreeNode { // Define tree node structure\r\n        int val; // Node value\r\n        TreeNode* left; // Pointer to left child\r\n        TreeNode* right; // Pointer to right child\r\n        TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} // Constructor\r\n    };\r\n\r\n    // Build a map storing parent pointers for each node\r\n    void buildParentMap(TreeNode* root, unordered_map<TreeNode*, TreeNode*>& parent) {\r\n        if (!root) return; // Base case: if node is null, return\r\n        if (root->left) { // If left child exists\r\n            parent[root->left] = root; // Map left child to its parent\r\n            buildParentMap(root->left, parent); // Recursively process left subtree\r\n        }\r\n        if (root->right) { // If right child exists\r\n            parent[root->right] = root; // Map right child to its parent\r\n            buildParentMap(root->right, parent); // Recursively process right subtree\r\n        }\r\n    }\r\n\r\n    vector<int> distanceK(TreeNode* root, TreeNode* target, int k) {\r\n        unordered_map<TreeNode*, TreeNode*> parent; // Store parent pointers\r\n        buildParentMap(root, parent); // Build parent map\r\n        \r\n        vector<int> result; // Store result nodes\r\n        unordered_set<TreeNode*> visited; // Track visited nodes\r\n        queue<TreeNode*> q; // BFS queue\r\n        q.push(target); // Start from target node\r\n        visited.insert(target); // Mark target as visited\r\n        int dist = 0; // Initialize distance counter\r\n\r\n        while (!q.empty()) { // While queue is not empty\r\n            if (dist == k) { // If we reached distance k\r\n                while (!q.empty()) { // Extract all nodes at distance k\r\n                    result.push_back(q.front()->val); // Add node value to result\r\n                    q.pop(); // Remove node from queue\r\n                }\r\n                return result; // Return result\r\n            }\r\n            int size = q.size(); // Get current  level ka size\r\n            for (int i = 0; i < size; i++) { // Process all nodes at current distance\r\n                TreeNode* node = q.front(); // Get front node\r\n                q.pop(); // Remove from queue\r\n                if (node->left && !visited.count(node->left)) { // If left child exists and not visited\r\n                    visited.insert(node->left); // Mark as visited\r\n                    q.push(node->left); // Add to queue\r\n                }\r\n                if (node->right && !visited.count(node->right)) { // If right child exists and not visited\r\n                    visited.insert(node->right); // Mark as visited\r\n                    q.push(node->right); // Add to queue\r\n                }\r\n                if (parent.count(node) && !visited.count(parent[node])) { // If parent exists and not visited\r\n                    visited.insert(parent[node]); // Mark as visited\r\n                    q.push(parent[node]); // Add to queue\r\n                }\r\n            }\r\n            dist++; // Increment distance counter\r\n        }\r\n        return result; // Return result\r\n    }\r\n\r\n    int main() {    \r\n        // Create binary tree\r\n        TreeNode* root = new TreeNode(3); // Create root node with value 3\r\n        root->left = new TreeNode(5); // Create left child with value 5\r\n        root->right = new TreeNode(1); // Create right child with value 1\r\n        root->left->left = new TreeNode(6); // Create left-left child with value 6\r\n        root->left->right = new TreeNode(2); // Create left-right child with value 2\r\n        root->right->left = new TreeNode(0); // Create right-left child with value 0\r\n        root->right->right = new TreeNode(8); // Create right-right child with value 8\r\n        TreeNode* target = root->left; // Set target to node with value 5\r\n        int k = 2; // Set distance to 2\r\n        vector<int> result = distanceK(root, target, k); // Find all nodes at distance k\r\n        cout << \"Nodes at distance \" << k << \" from target node \" << target->val << \": \"; // Print header\r\n        for (int val : result) { // Iterate through result\r\n            cout << val << \" \"; // Print each value\r\n        }\r\n        cout << endl; // Print newline\r\n\r\n        return 0; // Return success\r\n    }\r\n"
    },
    {
      "name": "BalancedBT.cpp",
      "path": "Assignments/BalancedBT.cpp",
      "difficulty": "Medium",
      "tags": [
        "Binary Tree"
      ],
      "code": "// Problem: Balanced Binary Tree\r\n// Date: February 17, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct TreeNode {\r\n    int val;\r\n    TreeNode* left;\r\n    TreeNode* right;\r\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n};\r\n\r\nint checkHeight(TreeNode* root) {\r\n    if (!root) return 0;\r\n    \r\n    int leftH = checkHeight(root->left);\r\n    if (leftH == -1) return -1;\r\n    \r\n    int rightH = checkHeight(root->right);\r\n    if (rightH == -1) return -1;\r\n    \r\n    if (abs(leftH - rightH) > 1) return -1;\r\n    return 1 + max(leftH, rightH);\r\n}\r\n\r\nbool isBalanced(TreeNode* root) {\r\n    return checkHeight(root) != -1;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "BottomViewOfBT.cpp",
      "path": "Assignments/BottomViewOfBT.cpp",
      "difficulty": "Medium",
      "tags": [
        "Binary Tree",
        "BFS"
      ],
      "code": "// Problem: Bottom View of Binary Tree\r\n// Date: February 19, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct TreeNode {\r\n    int val;\r\n    TreeNode* left;\r\n    TreeNode* right;\r\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n};\r\n\r\nvector<int> bottomView(TreeNode* root) {\r\n    vector<int> result;\r\n    if (!root) return result;\r\n    \r\n    map<int, int> hdMap;  // horizontal distance -> node value\r\n    queue<pair<TreeNode*, int>> q;\r\n    q.push({root, 0});\r\n    \r\n    while (!q.empty()) {\r\n        auto [node, hd] = q.front();\r\n        q.pop();\r\n        \r\n        hdMap[hd] = node->val;  // Overwrite to get bottom-most\r\n        \r\n        if (node->left) q.push({node->left, hd - 1});\r\n        if (node->right) q.push({node->right, hd + 1});\r\n    }\r\n    \r\n    for (auto& [hd, val] : hdMap)\r\n        result.push_back(val);\r\n    return result;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "ConvertSortedToBST.cpp",
      "path": "Assignments/ConvertSortedToBST.cpp",
      "difficulty": "Medium",
      "tags": [
        "BST",
        "Sorting"
      ],
      "code": "// Problem: Convert Sorted Array to BST\r\n// Date: February 20, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct TreeNode {\r\n    int val;\r\n    TreeNode* left;\r\n    TreeNode* right;\r\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n};\r\n\r\nTreeNode* buildBST(vector<int>& nums, int left, int right) {\r\n    if (left > right) return nullptr;\r\n    \r\n    int mid = left + (right - left) / 2;\r\n    TreeNode* root = new TreeNode(nums[mid]);\r\n    root->left = buildBST(nums, left, mid - 1);\r\n    root->right = buildBST(nums, mid + 1, right);\r\n    return root;\r\n}\r\n\r\nTreeNode* sortedArrayToBST(vector<int>& nums) {\r\n    return buildBST(nums, 0, nums.size() - 1);\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "CountCompleteTreeNodes.cpp",
      "path": "Assignments/CountCompleteTreeNodes.cpp",
      "difficulty": "Easy",
      "tags": [
        "Binary Tree"
      ],
      "code": "// Problem: Count Complete Tree Nodes\r\n// Date: February 17, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct TreeNode {\r\n    int val;\r\n    TreeNode* left;\r\n    TreeNode* right;\r\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n};\r\n\r\nint leftHeight(TreeNode* node) {\r\n    int h = 0;\r\n    while (node) {\r\n        h++;\r\n        node = node->left;\r\n    }\r\n    return h;\r\n}\r\n\r\nint rightHeight(TreeNode* node) {\r\n    int h = 0;\r\n    while (node) {\r\n        h++;\r\n        node = node->right;\r\n    }\r\n    return h;\r\n}\r\n\r\nint countNodes(TreeNode* root) {\r\n    if (!root) return 0;\r\n    \r\n    int lh = leftHeight(root);\r\n    int rh = rightHeight(root);\r\n    \r\n    if (lh == rh) return (1 << lh) - 1;  // 2^h - 1\r\n    return 1 + countNodes(root->left) + countNodes(root->right);\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "CountLeafNodes.cpp",
      "path": "Assignments/CountLeafNodes.cpp",
      "difficulty": "Easy",
      "tags": [],
      "code": "// Problem: Count Leaf Nodes\r\n// Date: February 17, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct TreeNode {\r\n    int val;\r\n    TreeNode* left;\r\n    TreeNode* right;\r\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n};\r\n\r\nint countLeafNodes(TreeNode* root) {\r\n    if (!root) return 0;\r\n    \r\n    if (!root->left && !root->right) return 1;\r\n    \r\n    return countLeafNodes(root->left) + countLeafNodes(root->right);\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "DeleteNodeInBST.cpp",
      "path": "Assignments/DeleteNodeInBST.cpp",
      "difficulty": "Medium",
      "tags": [
        "BST"
      ],
      "code": "// Problem: Delete Node in BST\r\n// Date: February 20, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct TreeNode {\r\n    int val;\r\n    TreeNode* left;\r\n    TreeNode* right;\r\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n};\r\n\r\nTreeNode* findMin(TreeNode* node) {\r\n    while (node->left) node = node->left;\r\n    return node;\r\n}\r\n\r\nTreeNode* deleteNode(TreeNode* root, int key) {\r\n    if (!root) return nullptr;\r\n    \r\n    if (key < root->val) {\r\n        root->left = deleteNode(root->left, key);\r\n    } else if (key > root->val) {\r\n        root->right = deleteNode(root->right, key);\r\n    } else {\r\n        // Node to delete found\r\n        if (!root->left) return root->right;\r\n        if (!root->right) return root->left;\r\n        \r\n        // Node has two children: replace with inorder successor\r\n        TreeNode* successor = findMin(root->right);\r\n        root->val = successor->val;\r\n        root->right = deleteNode(root->right, successor->val);\r\n    }\r\n    return root;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "DeleteNodeLC237.cpp",
      "path": "Assignments/DeleteNodeLC237.cpp",
      "difficulty": "Medium",
      "tags": [],
      "code": "// Problem: Delete a Node (LC 237 - Given only access to that node)\r\n// Date: February 5, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct ListNode {\r\n    int val;\r\n    ListNode* next;\r\n    ListNode(int x) : val(x), next(nullptr) {}\r\n};\r\n\r\nvoid deleteNode(ListNode* node) {\r\n    // Copy next node's value to current\r\n    node->val = node->next->val;\r\n    // Skip next node\r\n    node->next = node->next->next;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "DepthOfNode.cpp",
      "path": "Assignments/DepthOfNode.cpp",
      "difficulty": "Easy",
      "tags": [],
      "code": "// Problem: Depth of a Node\r\n// Date: February 17, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct TreeNode {\r\n    int val;\r\n    TreeNode* left;\r\n    TreeNode* right;\r\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n};\r\n\r\nint depthOfNode(TreeNode* root, int key, int depth = 0) {\r\n    if (!root) return -1;\r\n    if (root->val == key) return depth;\r\n    \r\n    int left = depthOfNode(root->left, key, depth + 1);\r\n    if (left != -1) return left;\r\n    \r\n    return depthOfNode(root->right, key, depth + 1);\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "DiameterOfBT.cpp",
      "path": "Assignments/DiameterOfBT.cpp",
      "difficulty": "Medium",
      "tags": [
        "Binary Tree"
      ],
      "code": "// Problem: Diameter of Binary Tree\r\n// Date: February 17, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct TreeNode {\r\n    int val;\r\n    TreeNode* left;\r\n    TreeNode* right;\r\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n};\r\n\r\nint height(TreeNode* root, int& diameter) {\r\n    if (!root) return 0;\r\n    \r\n    int leftH = height(root->left, diameter);\r\n    int rightH = height(root->right, diameter);\r\n    \r\n    diameter = max(diameter, leftH + rightH);\r\n    return 1 + max(leftH, rightH);\r\n}\r\n\r\nint diameterOfBinaryTree(TreeNode* root) {\r\n    int diameter = 0;\r\n    height(root, diameter);\r\n    return diameter;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "HeightOfBT.cpp",
      "path": "Assignments/HeightOfBT.cpp",
      "difficulty": "Easy",
      "tags": [
        "Binary Tree"
      ],
      "code": "// Problem: Height of Binary Tree\r\n// Date: February 17, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct TreeNode {\r\n    int val;\r\n    TreeNode* left;\r\n    TreeNode* right;\r\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n};\r\n\r\nint maxDepth(TreeNode* root) {\r\n    if (!root) return 0;\r\n    \r\n    return 1 + max(maxDepth(root->left), maxDepth(root->right));\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "InsertIntoBST.cpp",
      "path": "Assignments/InsertIntoBST.cpp",
      "difficulty": "Medium",
      "tags": [
        "BST"
      ],
      "code": "// Problem: Insert into BST\r\n// Date: February 20, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct TreeNode {\r\n    int val;\r\n    TreeNode* left;\r\n    TreeNode* right;\r\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n};\r\n\r\nTreeNode* insertIntoBST(TreeNode* root, int val) {\r\n    if (!root) return new TreeNode(val);\r\n    \r\n    if (val < root->val)\r\n        root->left = insertIntoBST(root->left, val);\r\n    else\r\n        root->right = insertIntoBST(root->right, val);\r\n    \r\n    return root;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "InvertBinaryTree.cpp",
      "path": "Assignments/InvertBinaryTree.cpp",
      "difficulty": "Easy",
      "tags": [
        "Binary Tree"
      ],
      "code": "// Problem: Invert a Binary Tree\r\n// Date: February 17, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct TreeNode {\r\n    int val;\r\n    TreeNode* left;\r\n    TreeNode* right;\r\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n};\r\n\r\nTreeNode* invertTree(TreeNode* root) {\r\n    if (!root) return nullptr;\r\n    \r\n    TreeNode* left = invertTree(root->left);\r\n    TreeNode* right = invertTree(root->right);\r\n    \r\n    root->left = right;\r\n    root->right = left;\r\n    \r\n    return root;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "KthSmallestInBST.cpp",
      "path": "Assignments/KthSmallestInBST.cpp",
      "difficulty": "Medium",
      "tags": [
        "BST"
      ],
      "code": "// Problem: Kth Smallest in BST\r\n// Date: February 21, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct TreeNode {\r\n    int val;\r\n    TreeNode* left;\r\n    TreeNode* right;\r\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n};\r\n\r\nvoid inorder(TreeNode* root, vector<int>& result) {\r\n    if (!root) return;\r\n    inorder(root->left, result);\r\n    result.push_back(root->val);\r\n    inorder(root->right, result);\r\n}\r\n\r\nint kthSmallest(TreeNode* root, int k) {\r\n    vector<int> result;\r\n    inorder(root, result);\r\n    return result[k - 1];\r\n}\r\n\r\n// Optimized: Stop early when k elements found\r\nint kthSmallestOptimized(TreeNode* root, int& k) {\r\n    if (!root) return -1;\r\n    int left = kthSmallestOptimized(root->left, k);\r\n    if (k == 0) return left;\r\n    k--;\r\n    if (k == 0) return root->val;\r\n    return kthSmallestOptimized(root->right, k);\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "LCAOfBST.cpp",
      "path": "Assignments/LCAOfBST.cpp",
      "difficulty": "Medium",
      "tags": [
        "BST"
      ],
      "code": "// Problem: LCA Of BST\r\n// Date: February 21, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct TreeNode {\r\n    int val;\r\n    TreeNode* left;\r\n    TreeNode* right;\r\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n};\r\n\r\nTreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {\r\n    if (!root) return nullptr;\r\n    \r\n    // If both p and q are smaller, LCA is in left subtree\r\n    if (p->val < root->val && q->val < root->val)\r\n        return lowestCommonAncestor(root->left, p, q);\r\n    \r\n    // If both p and q are greater, LCA is in right subtree\r\n    if (p->val > root->val && q->val > root->val)\r\n        return lowestCommonAncestor(root->right, p, q);\r\n    \r\n    // Otherwise, current node is the LCA\r\n    return root;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "LeftViewOfBT.cpp",
      "path": "Assignments/LeftViewOfBT.cpp",
      "difficulty": "Medium",
      "tags": [
        "Binary Tree",
        "BFS"
      ],
      "code": "// Problem: Left View of Binary Tree\r\n// Date: February 18, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct TreeNode {\r\n    int val;\r\n    TreeNode* left;\r\n    TreeNode* right;\r\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n};\r\n\r\nvector<int> leftView(TreeNode* root) {\r\n    vector<int> result;\r\n    if (!root) return result;\r\n    \r\n    queue<TreeNode*> q;\r\n    q.push(root);\r\n    \r\n    while (!q.empty()) {\r\n        int size = q.size();\r\n        for (int i = 0; i < size; i++) {\r\n            TreeNode* node = q.front();\r\n            q.pop();\r\n            \r\n            if (i == 0) result.push_back(node->val);  // First node of each level\r\n            \r\n            if (node->left) q.push(node->left);\r\n            if (node->right) q.push(node->right);\r\n        }\r\n    }\r\n    return result;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "LevelOfNodeInBT.cpp",
      "path": "Assignments/LevelOfNodeInBT.cpp",
      "difficulty": "Medium",
      "tags": [
        "Binary Tree"
      ],
      "code": "// Problem: Level of a Node in Binary Tree\r\n// Date: February 17, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct TreeNode {\r\n    int val;\r\n    TreeNode* left;\r\n    TreeNode* right;\r\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n};\r\n\r\nint getLevelOfNode(TreeNode* root, int key, int level = 1) {\r\n    if (!root) return -1;\r\n    if (root->val == key) return level;\r\n    \r\n    int left = getLevelOfNode(root->left, key, level + 1);\r\n    if (left != -1) return left;\r\n    \r\n    return getLevelOfNode(root->right, key, level + 1);\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "LevelOrderTraversal.cpp",
      "path": "Assignments/LevelOrderTraversal.cpp",
      "difficulty": "Medium",
      "tags": [
        "BFS"
      ],
      "code": "// Problem: Level Order Traversal\r\n// Date: February 18, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct TreeNode {\r\n    int val;\r\n    TreeNode* left;\r\n    TreeNode* right;\r\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n};\r\n\r\nvector<vector<int>> levelOrder(TreeNode* root) {\r\n    vector<vector<int>> result;\r\n    if (!root) return result;\r\n    \r\n    queue<TreeNode*> q;\r\n    q.push(root);\r\n    \r\n    while (!q.empty()) {\r\n        int size = q.size();\r\n        vector<int> level;\r\n        \r\n        for (int i = 0; i < size; i++) {\r\n            TreeNode* node = q.front();\r\n            q.pop();\r\n            level.push_back(node->val);\r\n            \r\n            if (node->left) q.push(node->left);\r\n            if (node->right) q.push(node->right);\r\n        }\r\n        result.push_back(level);\r\n    }\r\n    return result;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "LowestCommonAncestorOfBT.cpp",
      "path": "Assignments/LowestCommonAncestorOfBT.cpp",
      "difficulty": "Medium",
      "tags": [
        "Binary Tree"
      ],
      "code": "// Problem: Lowest Common Ancestor of Binary Tree\r\n// Date: February 19, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct TreeNode {\r\n    int val;\r\n    TreeNode* left;\r\n    TreeNode* right;\r\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n};\r\n\r\nTreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {\r\n    if (!root || root == p || root == q) return root;\r\n    \r\n    TreeNode* left = lowestCommonAncestor(root->left, p, q);\r\n    TreeNode* right = lowestCommonAncestor(root->right, p, q);\r\n    \r\n    if (left && right) return root;  // p and q are on different sides\r\n    return left ? left : right;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "MatrixBoundaryTraversal.cpp",
      "path": "Assignments/MatrixBoundaryTraversal.cpp",
      "difficulty": "Medium",
      "tags": [
        "Matrix"
      ],
      "code": "// Problem: Matrix Boundary Traversal\r\n// Date: February 10, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nvector<int> boundaryTraversal(vector<vector<int>>& matrix) {\r\n    vector<int> result;\r\n    int m = matrix.size(), n = matrix[0].size();\r\n    if (m == 0) return result;\r\n    \r\n    // Top row\r\n    for (int j = 0; j < n; j++)\r\n        result.push_back(matrix[0][j]);\r\n    \r\n    // Right column\r\n    for (int i = 1; i < m; i++)\r\n        result.push_back(matrix[i][n - 1]);\r\n    \r\n    // Bottom row (if more than 1 row)\r\n    if (m > 1)\r\n        for (int j = n - 2; j >= 0; j--)\r\n            result.push_back(matrix[m - 1][j]);\r\n    \r\n    // Left column (if more than 1 column)\r\n    if (n > 1)\r\n        for (int i = m - 2; i > 0; i--)\r\n            result.push_back(matrix[i][0]);\r\n    \r\n    return result;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "RangeSumOfBST.cpp",
      "path": "Assignments/RangeSumOfBST.cpp",
      "difficulty": "Medium",
      "tags": [
        "BST"
      ],
      "code": "// Problem: Range Sum of BST\r\n// Date: February 20, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct TreeNode {\r\n    int val;\r\n    TreeNode* left;\r\n    TreeNode* right;\r\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n};\r\n\r\nint rangeSumBST(TreeNode* root, int low, int high) {\r\n    if (!root) return 0;\r\n    \r\n    int sum = 0;\r\n    if (root->val >= low && root->val <= high)\r\n        sum += root->val;\r\n    \r\n    if (root->val > low)\r\n        sum += rangeSumBST(root->left, low, high);\r\n    if (root->val < high)\r\n        sum += rangeSumBST(root->right, low, high);\r\n    \r\n    return sum;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "ReverseNodesInKGroup.cpp",
      "path": "Assignments/ReverseNodesInKGroup.cpp",
      "difficulty": "Easy",
      "tags": [],
      "code": "// Problem: Reverse Nodes in K-Group\r\n// Date: February 11, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct ListNode {\r\n    int val;\r\n    ListNode* next;\r\n    ListNode(int x) : val(x), next(nullptr) {}\r\n};\r\n\r\nListNode* reverse(ListNode* head, int k) {\r\n    ListNode* prev = nullptr;\r\n    ListNode* curr = head;\r\n    while (k--) {\r\n        ListNode* next = curr->next;\r\n        curr->next = prev;\r\n        prev = curr;\r\n        curr = next;\r\n    }\r\n    return prev;\r\n}\r\n\r\nListNode* reverseKGroup(ListNode* head, int k) {\r\n    // Check if we have k nodes\r\n    ListNode* curr = head;\r\n    int count = 0;\r\n    while (curr && count < k) {\r\n        curr = curr->next;\r\n        count++;\r\n    }\r\n    \r\n    if (count < k) return head;\r\n    \r\n    ListNode* newHead = reverse(head, k);\r\n    head->next = reverseKGroup(curr, k);\r\n    \r\n    return newHead;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "SameTree.cpp",
      "path": "Assignments/SameTree.cpp",
      "difficulty": "Easy",
      "tags": [
        "Binary Tree"
      ],
      "code": "// Problem: Same Tree\r\n// Date: February 17, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct TreeNode {\r\n    int val;\r\n    TreeNode* left;\r\n    TreeNode* right;\r\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n};\r\n\r\nbool isSameTree(TreeNode* p, TreeNode* q) {\r\n    if (!p && !q) return true;\r\n    if (!p || !q) return false;\r\n    if (p->val != q->val) return false;\r\n    \r\n    return isSameTree(p->left, q->left) && isSameTree(p->right, q->right);\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "SearchInBST.cpp",
      "path": "Assignments/SearchInBST.cpp",
      "difficulty": "Medium",
      "tags": [
        "BST",
        "Searching"
      ],
      "code": "// Problem: Search in BST\r\n// Date: February 20, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct TreeNode {\r\n    int val;\r\n    TreeNode* left;\r\n    TreeNode* right;\r\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n};\r\n\r\nTreeNode* searchBST(TreeNode* root, int val) {\r\n    if (!root || root->val == val) return root;\r\n    \r\n    if (val < root->val)\r\n        return searchBST(root->left, val);\r\n    else\r\n        return searchBST(root->right, val);\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "SearchNodeInBST.cpp",
      "path": "Assignments/SearchNodeInBST.cpp",
      "difficulty": "Medium",
      "tags": [
        "BST",
        "Searching"
      ],
      "code": "// Problem: Search Node in BST\r\n// Date: February 19, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct TreeNode {\r\n    int val;\r\n    TreeNode* left;\r\n    TreeNode* right;\r\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n};\r\n\r\nbool searchNode(TreeNode* root, int val) {\r\n    if (!root) return false;\r\n    if (root->val == val) return true;\r\n    \r\n    if (val < root->val) return searchNode(root->left, val);\r\n    return searchNode(root->right, val);\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "SerializeAndDeserializeBinaryTree.cpp",
      "path": "Assignments/SerializeAndDeserializeBinaryTree.cpp",
      "difficulty": "Hard",
      "tags": [
        "Binary Tree",
        "BFS"
      ],
      "code": "// Problem: Serialize and Deserialize a Binary Tree\r\n// Date: February 21, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct TreeNode {\r\n    int val;\r\n    TreeNode* left;\r\n    TreeNode* right;\r\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n};\r\n\r\nclass Codec {\r\npublic:\r\n    string serialize(TreeNode* root) {\r\n        if (!root) return \"null,\";\r\n        return to_string(root->val) + \",\" + \r\n               serialize(root->left) + \r\n               serialize(root->right);\r\n    }\r\n\r\n    TreeNode* deserializeHelper(queue<string>& nodes) {\r\n        string val = nodes.front();\r\n        nodes.pop();\r\n        if (val == \"null\") return nullptr;\r\n        \r\n        TreeNode* root = new TreeNode(stoi(val));\r\n        root->left = deserializeHelper(nodes);\r\n        root->right = deserializeHelper(nodes);\r\n        return root;\r\n    }\r\n\r\n    TreeNode* deserialize(string data) {\r\n        queue<string> nodes;\r\n        string curr;\r\n        for (char c : data) {\r\n            if (c == ',') {\r\n                nodes.push(curr);\r\n                curr.clear();\r\n            } else {\r\n                curr += c;\r\n            }\r\n        }\r\n        return deserializeHelper(nodes);\r\n    }\r\n};\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "SwapNodesInPairs.cpp",
      "path": "Assignments/SwapNodesInPairs.cpp",
      "difficulty": "Medium",
      "tags": [],
      "code": "// Problem: Swap Nodes in Pairs\r\n// Date: February 6, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct ListNode {\r\n    int val;\r\n    ListNode* next;\r\n    ListNode(int x) : val(x), next(nullptr) {}\r\n};\r\n\r\nListNode* swapPairs(ListNode* head) {\r\n    ListNode dummy(0);\r\n    dummy.next = head;\r\n    ListNode* prev = &dummy;\r\n    \r\n    while (prev->next && prev->next->next) {\r\n        ListNode* first = prev->next;\r\n        ListNode* second = prev->next->next;\r\n        \r\n        first->next = second->next;\r\n        second->next = first;\r\n        prev->next = second;\r\n        \r\n        prev = first;\r\n    }\r\n    return dummy.next;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "TopViewOfBT.cpp",
      "path": "Assignments/TopViewOfBT.cpp",
      "difficulty": "Medium",
      "tags": [
        "Binary Tree",
        "BFS"
      ],
      "code": "// Problem: Top View of Binary Tree\r\n// Date: February 19, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct TreeNode {\r\n    int val;\r\n    TreeNode* left;\r\n    TreeNode* right;\r\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n};\r\n\r\nvector<int> topView(TreeNode* root) {\r\n    vector<int> result;\r\n    if (!root) return result;\r\n    \r\n    map<int, int> hdMap;  // horizontal distance -> first node value\r\n    queue<pair<TreeNode*, int>> q;\r\n    q.push({root, 0});\r\n    \r\n    while (!q.empty()) {\r\n        auto [node, hd] = q.front();\r\n        q.pop();\r\n        \r\n        if (hdMap.find(hd) == hdMap.end())\r\n            hdMap[hd] = node->val;  // Only store first occurrence\r\n        \r\n        if (node->left) q.push({node->left, hd - 1});\r\n        if (node->right) q.push({node->right, hd + 1});\r\n    }\r\n    \r\n    for (auto& [hd, val] : hdMap)\r\n        result.push_back(val);\r\n    return result;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "TreeBoundaryTraversal.cpp",
      "path": "Assignments/TreeBoundaryTraversal.cpp",
      "difficulty": "Medium",
      "tags": [
        "Binary Tree"
      ],
      "code": "// Problem: Tree Boundary Traversal\r\n// Date: February 18, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct TreeNode {\r\n    int val;\r\n    TreeNode* left;\r\n    TreeNode* right;\r\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n};\r\n\r\nvoid addLeftBoundary(TreeNode* root, vector<int>& result) {\r\n    TreeNode* curr = root->left;\r\n    while (curr) {\r\n        if (curr->left || curr->right) result.push_back(curr->val);\r\n        curr = curr->left ? curr->left : curr->right;\r\n    }\r\n}\r\n\r\nvoid addLeaves(TreeNode* root, vector<int>& result) {\r\n    if (!root) return;\r\n    if (!root->left && !root->right) {\r\n        result.push_back(root->val);\r\n        return;\r\n    }\r\n    addLeaves(root->left, result);\r\n    addLeaves(root->right, result);\r\n}\r\n\r\nvoid addRightBoundary(TreeNode* root, vector<int>& result) {\r\n    vector<int> temp;\r\n    TreeNode* curr = root->right;\r\n    while (curr) {\r\n        if (curr->left || curr->right) temp.push_back(curr->val);\r\n        curr = curr->right ? curr->right : curr->left;\r\n    }\r\n    for (int i = temp.size() - 1; i >= 0; i--)\r\n        result.push_back(temp[i]);\r\n}\r\n\r\nvector<int> boundaryTraversal(TreeNode* root) {\r\n    vector<int> result;\r\n    if (!root) return result;\r\n    \r\n    if (root->left || root->right) result.push_back(root->val);\r\n    addLeftBoundary(root, result);\r\n    addLeaves(root, result);\r\n    addRightBoundary(root, result);\r\n    return result;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "TwoSumBST.cpp",
      "path": "Assignments/TwoSumBST.cpp",
      "difficulty": "Medium",
      "tags": [
        "BST"
      ],
      "code": "// Problem: Two Sum BST\r\n// Date: February 20, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct TreeNode {\r\n    int val;\r\n    TreeNode* left;\r\n    TreeNode* right;\r\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n};\r\n\r\nvoid inorder(TreeNode* root, unordered_set<int>& seen, int k, bool& found) {\r\n    if (!root || found) return;\r\n    \r\n    inorder(root->left, seen, k, found);\r\n    if (seen.count(k - root->val)) {\r\n        found = true;\r\n        return;\r\n    }\r\n    seen.insert(root->val);\r\n    inorder(root->right, seen, k, found);\r\n}\r\n\r\nbool findTarget(TreeNode* root, int k) {\r\n    unordered_set<int> seen;\r\n    bool found = false;\r\n    inorder(root, seen, k, found);\r\n    return found;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "ValidateBST.cpp",
      "path": "Assignments/ValidateBST.cpp",
      "difficulty": "Easy",
      "tags": [
        "BST"
      ],
      "code": "// Problem: Validate BST\r\n// Date: February 20, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct TreeNode {\r\n    int val;\r\n    TreeNode* left;\r\n    TreeNode* right;\r\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n};\r\n\r\nbool validate(TreeNode* root, long minVal, long maxVal) {\r\n    if (!root) return true;\r\n    if (root->val <= minVal || root->val >= maxVal) return false;\r\n    return validate(root->left, minVal, root->val) && \r\n           validate(root->right, root->val, maxVal);\r\n}\r\n\r\nbool isValidBST(TreeNode* root) {\r\n    return validate(root, LONG_MIN, LONG_MAX);\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "ZigZagLevelOrderTraversal.cpp",
      "path": "Assignments/ZigZagLevelOrderTraversal.cpp",
      "difficulty": "Medium",
      "tags": [
        "BFS"
      ],
      "code": "// Problem: Zig Zag Level Order Traversal\r\n// Date: February 18, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct TreeNode {\r\n    int val;\r\n    TreeNode* left;\r\n    TreeNode* right;\r\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n};\r\n\r\nvector<vector<int>> zigzagLevelOrder(TreeNode* root) {\r\n    vector<vector<int>> result;\r\n    if (!root) return result;\r\n    \r\n    queue<TreeNode*> q;\r\n    q.push(root);\r\n    bool leftToRight = true;\r\n    \r\n    while (!q.empty()) {\r\n        int size = q.size();\r\n        vector<int> level(size);\r\n        \r\n        for (int i = 0; i < size; i++) {\r\n            TreeNode* node = q.front();\r\n            q.pop();\r\n            \r\n            int idx = leftToRight ? i : size - 1 - i;\r\n            level[idx] = node->val;\r\n            \r\n            if (node->left) q.push(node->left);\r\n            if (node->right) q.push(node->right);\r\n        }\r\n        result.push_back(level);\r\n        leftToRight = !leftToRight;\r\n    }\r\n    return result;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    }
  ],
  "Miscellaneous": [
    {
      "name": "AsteroidCollision.cpp",
      "path": "Assignments/AsteroidCollision.cpp",
      "difficulty": "Medium",
      "tags": [
        "Stack"
      ],
      "code": "// Problem: Asteroid Collision\r\n// Date: February 16, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nvector<int> asteroidCollision(vector<int>& asteroids) {\r\n    stack<int> st;\r\n    \r\n    for (int ast : asteroids) {\r\n        bool destroyed = false;\r\n        \r\n        while (!st.empty() && ast < 0 && st.top() > 0) {\r\n            if (abs(ast) > st.top()) {\r\n                st.pop();\r\n            } else if (abs(ast) == st.top()) {\r\n                st.pop();\r\n                destroyed = true;\r\n                break;\r\n            } else {\r\n                destroyed = true;\r\n                break;\r\n            }\r\n        }\r\n        \r\n        if (!destroyed) st.push(ast);\r\n    }\r\n    \r\n    vector<int> result(st.size());\r\n    for (int i = st.size() - 1; i >= 0; i--) {\r\n        result[i] = st.top();\r\n        st.pop();\r\n    }\r\n    return result;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "Calculator.cpp",
      "path": "Assignments/Calculator.cpp",
      "difficulty": "Medium",
      "tags": [],
      "code": "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nint main() {\r\n    double a, b;\r\n    char op;\r\n\r\n    cout << \"first : \";\r\n    cin >> a;\r\n\r\n    cout << \"operator (+, -, *, /): \";\r\n\r\n    cin >> op;\r\n\r\n    cout << \"second number: \";\r\n\r\n    cin >> b;\r\n\r\n    if (op == '+') {\r\n        cout << \"Result: \" << a + b;\r\n    }\r\n    else if (op == '-') {\r\n        cout << \"Result: \" << a - b;\r\n    }\r\n    else if (op == '*') {\r\n        cout << \"Result: \" << a * b;\r\n    }\r\n    else if (op == '/') {\r\n        if (b == 0) {\r\n            cout << \"cant be divided by zero\";\r\n        } else {\r\n            cout << \"Res: \" << a / b;\r\n        }\r\n    }\r\n    else {\r\n        cout << \"Invalid operator!\";\r\n    }\r\n\r\n    return 0;\r\n}"
    },
    {
      "name": "ClearDigits.cpp",
      "path": "Assignments/ClearDigits.cpp",
      "difficulty": "Medium",
      "tags": [],
      "code": "// Problem: Clear Digits\r\n// Date: February 14, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstring clearDigits(string s) {\r\n    string result;\r\n    for (char c : s) {\r\n        if (isdigit(c)) {\r\n            if (!result.empty()) result.pop_back();\r\n        } else {\r\n            result += c;\r\n        }\r\n    }\r\n    return result;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    cout << clearDigits(\"a1b2c3\") << endl; // Output: \"\"\r\n    cout << clearDigits(\"abc123\") << endl; // Output: \"a\"\r\n    cout << clearDigits(\"1a2b3c\") << endl; // Output: \"\"\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "DailyTemperatures.cpp",
      "path": "Assignments/DailyTemperatures.cpp",
      "difficulty": "Medium",
      "tags": [
        "Stack"
      ],
      "code": "// Problem: Daily Temperatures\r\n// Date: February 14, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nvector<int> dailyTemperatures(vector<int>& temperatures) {\r\n    int n = temperatures.size();\r\n    vector<int> result(n, 0);\r\n    stack<int> st;  // Stack of indices\r\n    \r\n    for (int i = 0; i < n; i++) {\r\n        while (!st.empty() && temperatures[i] > temperatures[st.top()]) {\r\n            result[st.top()] = i - st.top();\r\n            st.pop();\r\n        }\r\n        st.push(i);\r\n    }\r\n    return result;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "EvaluationOfPostfix.cpp",
      "path": "Assignments/EvaluationOfPostfix.cpp",
      "difficulty": "Medium",
      "tags": [
        "Stack"
      ],
      "code": "// Problem: Evaluation of Postfix\r\n// Date: February 13, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nint evaluatePostfix(string s) {\r\n    stack<int> st;\r\n    \r\n    for (int i = 0; i < s.length(); i++) {\r\n        if (s[i] == ' ') continue;\r\n        \r\n        if (isdigit(s[i])) {\r\n            int num = 0;\r\n            while (i < s.length() && isdigit(s[i])) {\r\n                num = num * 10 + (s[i] - '0');\r\n                i++;\r\n            }\r\n            i--;\r\n            st.push(num);\r\n        } else {\r\n            int b = st.top(); st.pop();\r\n            int a = st.top(); st.pop();\r\n            \r\n            switch (s[i]) {\r\n                case '+': st.push(a + b); break;\r\n                case '-': st.push(a - b); break;\r\n                case '*': st.push(a * b); break;\r\n                case '/': st.push(a / b); break;\r\n            }\r\n        }\r\n    }\r\n    return st.top();\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "FindPeakElementII.cpp",
      "path": "Assignments/FindPeakElementII.cpp",
      "difficulty": "Medium",
      "tags": [],
      "code": "// Problem: Find a Peak Element II\r\n// Date: February 11, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nvector<int> findPeakGrid(vector<vector<int>>& mat) {\r\n    int m = mat.size(), n = mat[0].size();\r\n    int lo = 0, hi = n - 1;\r\n    \r\n    while (lo <= hi) {\r\n        int mid = lo + (hi - lo) / 2;\r\n        \r\n        // Find max in column mid\r\n        int maxRow = 0;\r\n        for (int i = 0; i < m; i++) {\r\n            if (mat[i][mid] > mat[maxRow][mid])\r\n                maxRow = i;\r\n        }\r\n        \r\n        int left = mid > 0 ? mat[maxRow][mid - 1] : -1;\r\n        int right = mid < n - 1 ? mat[maxRow][mid + 1] : -1;\r\n        \r\n        if (mat[maxRow][mid] > left && mat[maxRow][mid] > right)\r\n            return {maxRow, mid};\r\n        else if (left > mat[maxRow][mid])\r\n            hi = mid - 1;\r\n        else\r\n            lo = mid + 1;\r\n    }\r\n    return {-1, -1};\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "FirstElementWithUniqueFrequency.cpp",
      "path": "Assignments/FirstElementWithUniqueFrequency.cpp",
      "difficulty": "Medium",
      "tags": [],
      "code": "// Problem: First Element with Unique Frequency\r\n// Date: February 15, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nint firstUniqueFrequency(vector<int>& arr) {\r\n    unordered_map<int, int> freq;\r\n    for (int x : arr) freq[x]++;\r\n    \r\n    unordered_set<int> freqSet;\r\n    for (auto& p : freq) {\r\n        if (freqSet.count(p.second)) continue;\r\n        freqSet.insert(p.second);\r\n    }\r\n    \r\n    for (int x : arr) {\r\n        // Check if frequency of x is unique\r\n        int cnt = 0;\r\n        for (auto& p : freq) {\r\n            if (p.second == freq[x]) cnt++;\r\n        }\r\n        if (cnt == 1) return x;\r\n    }\r\n    return -1;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "FirstNonRepeatingCharInStream.cpp",
      "path": "Assignments/FirstNonRepeatingCharInStream.cpp",
      "difficulty": "Medium",
      "tags": [
        "BFS"
      ],
      "code": "// Problem: First Non-Repeating Character in a Stream\r\n// Date: February 16, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstring firstNonRepeating(string stream) {\r\n    string result;\r\n    queue<char> q;\r\n    vector<int> count(26, 0);\r\n    \r\n    for (char c : stream) {\r\n        count[c - 'a']++;\r\n        q.push(c);\r\n        \r\n        while (!q.empty() && count[q.front() - 'a'] > 1) {\r\n            q.pop();\r\n        }\r\n        \r\n        result += q.empty() ? '#' : q.front();\r\n    }\r\n    return result;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "FloydsCycleDetection.cpp",
      "path": "Assignments/FloydsCycleDetection.cpp",
      "difficulty": "Easy",
      "tags": [
        "Two Pointers"
      ],
      "code": "// Problem: Floyd's Cycle Detection Algorithm\r\n// Date: February 6, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct ListNode {\r\n    int val;\r\n    ListNode* next;\r\n    ListNode(int x) : val(x), next(nullptr) {}\r\n};\r\n\r\nbool floydCycleDetection(ListNode* head) {\r\n    ListNode* slow = head;\r\n    ListNode* fast = head;\r\n    \r\n    while (fast && fast->next) {\r\n        slow = slow->next;\r\n        fast = fast->next->next;\r\n        if (slow == fast) return true;\r\n    }\r\n    return false;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "InfixToPostfix.cpp",
      "path": "Assignments/InfixToPostfix.cpp",
      "difficulty": "Medium",
      "tags": [
        "Stack"
      ],
      "code": "// Problem: Infix to Postfix\r\n// Date: February 17, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nint precedence(char c) {\r\n    if (c == '^') return 3;\r\n    if (c == '*' || c == '/') return 2;\r\n    if (c == '+' || c == '-') return 1;\r\n    return 0;\r\n}\r\n\r\nstring infixToPostfix(string s) {\r\n    string result;\r\n    stack<char> st;\r\n    \r\n    for (char c : s) {\r\n        if (isalnum(c)) {\r\n            result += c;\r\n        } else if (c == '(') {\r\n            st.push(c);\r\n        } else if (c == ')') {\r\n            while (!st.empty() && st.top() != '(') {\r\n                result += st.top();\r\n                st.pop();\r\n            }\r\n            st.pop();\r\n        } else {\r\n            while (!st.empty() && precedence(st.top()) >= precedence(c)) {\r\n                result += st.top();\r\n                st.pop();\r\n            }\r\n            st.push(c);\r\n        }\r\n    }\r\n    \r\n    while (!st.empty()) {\r\n        result += st.top();\r\n        st.pop();\r\n    }\r\n    \r\n    return result;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "InPrePostfix.cpp",
      "path": "Assignments/InPrePostfix.cpp",
      "difficulty": "Medium",
      "tags": [
        "Stack"
      ],
      "code": "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nint evaluatePostfix(string s) {\r\n    stack<int> st;\r\n    stringstream ss(s);\r\n    string token;\r\n\r\n    while (ss >> token) {\r\n        if (isdigit(token[0])) {\r\n            st.push(stoi(token));\r\n        } \r\n        else {\r\n            int op2 = st.top(); \r\n            st.pop();\r\n            int op1 = st.top();\r\n            st.pop();\r\n\r\n            if (token == \"+\") \r\n            st.push(op1 + op2);\r\n            else if (token == \"-\") \r\n            st.push(op1 - op2);\r\n            else if (token == \"*\") \r\n            st.push(op1 * op2);\r\n            else if (token == \"/\") \r\n            st.push(op1 / op2);\r\n        }\r\n    }\r\n    return st.top();\r\n}\r\nint evaluatePrefix(string s) {\r\n    stack<int> st;\r\n\r\n    // Traverse from right to left\r\n    for (int i = s.length() - 1; i >= 0; i--) {\r\n\r\n        // Ignore spaces\r\n        if (s[i] == ' ') continue;\r\n\r\n        // If operand\r\n        if (isdigit(s[i])) {\r\n            st.push(s[i] - '0');\r\n        }\r\n        else {\r\n            int op1 = st.top(); st.pop();\r\n            int op2 = st.top(); st.pop();\r\n\r\n            switch (s[i]) {\r\n                case '+': st.push(op1 + op2); break;\r\n                case '-': st.push(op1 - op2); break;\r\n                case '*': st.push(op1 * op2); break;\r\n                case '/': st.push(op1 / op2); break;\r\n            }\r\n        }\r\n    }\r\n\r\n    return st.top();\r\n}\r\n\r\n\r\nint precedence(char op) {\r\n    if (op == '+' || op == '-') return 1;\r\n    if (op == '*' || op == '/') return 2;\r\n    return 0;\r\n}\r\n\r\nint applyOp(int a, int b, char op) {\r\n    if (op == '+') return a + b;\r\n    if (op == '-') return a - b;\r\n    if (op == '*') return a * b;\r\n    if (op == '/') return a / b;\r\n    return 0;\r\n}\r\n\r\nint evaluateInfix(string s) {\r\n    stack<int> values;\r\n    stack<char> ops;\r\n\r\n    for (int i = 0; i < s.length(); i++) {\r\n\r\n        if (s[i] == ' ') continue;\r\n\r\n        // If digit\r\n        if (isdigit(s[i])) {\r\n            values.push(s[i] - '0');\r\n        }\r\n\r\n        else if (s[i] == '(') {\r\n            ops.push(s[i]);\r\n        }\r\n\r\n        else if (s[i] == ')') {\r\n            while (!ops.empty() && ops.top() != '(') {\r\n                int b = values.top(); values.pop();\r\n                int a = values.top(); values.pop();\r\n                char op = ops.top(); ops.pop();\r\n                values.push(applyOp(a, b, op));\r\n            }\r\n            ops.pop(); // remove '('\r\n        }\r\n\r\n        else { // operator\r\n            while (!ops.empty() && \r\n                   precedence(ops.top()) >= precedence(s[i])) {\r\n                int b = values.top(); values.pop();\r\n                int a = values.top(); values.pop();\r\n                char op = ops.top(); ops.pop();\r\n                values.push(applyOp(a, b, op));\r\n            }\r\n            ops.push(s[i]);\r\n        }\r\n    }\r\n\r\n    // Final remaining operations\r\n    while (!ops.empty()) {\r\n        int b = values.top(); values.pop();\r\n        int a = values.top(); values.pop();\r\n        char op = ops.top(); ops.pop();\r\n        values.push(applyOp(a, b, op));\r\n    }\r\n\r\n    return values.top();\r\n}\r\n\r\nint main() {\r\n    string expr1 = \"1-(2*(4+6))\";\r\n    string expr2 = \"- 1 * 2 + 4 6\";\r\n    string expr3 = \"1 2 4 6 + * -\";\r\n    cout << evaluateInfix(expr1);\r\n    cout << evaluatePrefix(expr2);\r\n    cout << evaluatePostfix(expr3);\r\n}\r\n"
    },
    {
      "name": "KDistanceFromRoot.cpp",
      "path": "Assignments/KDistanceFromRoot.cpp",
      "difficulty": "Medium",
      "tags": [
        "BFS"
      ],
      "code": "// Problem: K Distance from Root\r\n// Date: February 18, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct TreeNode {\r\n    int val;\r\n    TreeNode* left;\r\n    TreeNode* right;\r\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n};\r\n\r\nvector<int> kDistanceFromRoot(TreeNode* root, int k) {\r\n    vector<int> result;\r\n    if (!root) return result;\r\n    \r\n    queue<TreeNode*> q;\r\n    q.push(root);\r\n    int level = 0;\r\n    \r\n    while (!q.empty()) {\r\n        int size = q.size();\r\n        for (int i = 0; i < size; i++) {\r\n            TreeNode* node = q.front();\r\n            q.pop();\r\n            \r\n            if (level == k) result.push_back(node->val);\r\n            \r\n            if (node->left) q.push(node->left);\r\n            if (node->right) q.push(node->right);\r\n        }\r\n        if (level == k) break;\r\n        level++;\r\n    }\r\n    return result;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "MaximalRectangle.cpp",
      "path": "Assignments/MaximalRectangle.cpp",
      "difficulty": "Hard",
      "tags": [
        "Stack"
      ],
      "code": "// Problem: Maximal Rectangle\r\n// Date: February 16, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nint largestRectangle(vector<int>& heights) {\r\n    int n = heights.size();\r\n    stack<int> st;\r\n    int maxArea = 0;\r\n    \r\n    for (int i = 0; i <= n; i++) {\r\n        int h = (i == n) ? 0 : heights[i];\r\n        while (!st.empty() && h < heights[st.top()]) {\r\n            int height = heights[st.top()];\r\n            st.pop();\r\n            int width = st.empty() ? i : i - st.top() - 1;\r\n            maxArea = max(maxArea, height * width);\r\n        }\r\n        st.push(i);\r\n    }\r\n    return maxArea;\r\n}\r\n\r\nint maximalRectangle(vector<vector<char>>& matrix) {\r\n    if (matrix.empty()) return 0;\r\n    int m = matrix.size(), n = matrix[0].size();\r\n    vector<int> heights(n, 0);\r\n    int maxArea = 0;\r\n    \r\n    for (int i = 0; i < m; i++) {\r\n        for (int j = 0; j < n; j++) {\r\n            heights[j] = (matrix[i][j] == '1') ? heights[j] + 1 : 0;\r\n        }\r\n        maxArea = max(maxArea, largestRectangle(heights));\r\n    }\r\n    return maxArea;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "MaximizeTheMinimum.cpp",
      "path": "Assignments/MaximizeTheMinimum.cpp",
      "difficulty": "Medium",
      "tags": [],
      "code": "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nint maxDistance(vector<int> nums,int m){\r\n    sort(nums.begin(),nums.end());\r\n\r\n    \r\n    int count = 1;\r\n    int l_pos = nums[0];\r\n    int n = nums.size();\r\n\r\n    \r\n\r\n\r\n}\r\nint main() {\r\n    \r\n    return 0;\r\n}"
    },
    {
      "name": "MinimumswapsandKtogether.cpp",
      "path": "Assignments/MinimumswapsandKtogether.cpp",
      "difficulty": "Medium",
      "tags": [],
      "code": "#include <bits/stdc++.h>\r\nusing namespace std;\r\nint Check(vector<int>arr,int k){\r\n\r\n    int n = arr.size();\r\n    int good= 0;\r\n    int bad= 0;\r\n\r\n    for(int i =0;i<n;i++){\r\n        if(arr[i]<=k){\r\n            good++;\r\n        }\r\n    }\r\n    \r\n    for(int i = 0;i<good;i++){\r\n        if(arr[i]>k){\r\n            bad++;\r\n        }\r\n    }\r\n\r\n    int ans = bad;\r\n    \r\n    if (good == 0 || good == n) return 0;\r\n    int r = good;\r\n    int l = 0;\r\n    while(r < n){\r\n\r\n        if(arr[l]>k){\r\n            bad--;\r\n        }\r\n        l++;\r\n\r\n        if(arr[r]>k){\r\n            bad++;\r\n        }\r\n        r++;\r\n\r\n        ans = min(ans,bad);\r\n        \r\n    }\r\n    return ans;\r\n}\r\n\r\nint main() {\r\n\r\n    {\r\n        vector<int>arr = {2, 7, 9, 5, 8, 7, 4};\r\n        int k = 6;\r\n        cout << \"Test Case 1: \" << Check(arr,k) << \"\\n\";\r\n        if(Check(arr,k) == 2){\r\n            cout<<\"Test Case Passed\";\r\n        }\r\n        else{\r\n            \r\n            cout<<\"Test Case Failed\";\r\n        }\r\n        cout<<endl;\r\n    }{\r\n        vector<int>arr = {2, 1, 5, 6, 3};\r\n        int k = 3;\r\n        cout << \"Test Case 2: \" << Check(arr,k) << \"\\n\";\r\n        if(Check(arr,k) == 1){\r\n            cout<<\"Test Case Passed\";\r\n        }\r\n        else{\r\n            \r\n            cout<<\"Test Case Failed\";\r\n        }\r\n    }\r\n    return 0;\r\n}"
    },
    {
      "name": "NextGreaterElement.cpp",
      "path": "Assignments/NextGreaterElement.cpp",
      "difficulty": "Medium",
      "tags": [
        "Stack"
      ],
      "code": "// Problem: Next Greater Element\r\n// Date: February 13, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nvector<int> nextGreater(vector<int>& arr) {\r\n    int n = arr.size();\r\n    vector<int> result(n, -1);\r\n    stack<int> st;\r\n    \r\n    for (int i = n - 1; i >= 0; i--) {\r\n        while (!st.empty() && st.top() <= arr[i]) {\r\n            st.pop();\r\n        }\r\n        if (!st.empty()) result[i] = st.top();\r\n        st.push(arr[i]);\r\n    }\r\n    return result;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "NextSmallerElement.cpp",
      "path": "Assignments/NextSmallerElement.cpp",
      "difficulty": "Medium",
      "tags": [
        "Stack"
      ],
      "code": "// Problem: Next Smaller Element\r\n// Date: February 13, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nvector<int> nextSmallerElement(vector<int>& arr) {\r\n    int n = arr.size();\r\n    vector<int> result(n, -1);\r\n    stack<int> st;\r\n    \r\n    for (int i = n - 1; i >= 0; i--) {\r\n        while (!st.empty() && st.top() >= arr[i]) {\r\n            st.pop();\r\n        }\r\n        if (!st.empty()) result[i] = st.top();\r\n        st.push(arr[i]);\r\n    }\r\n    return result;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "NumberOfOccurrences.cpp",
      "path": "Assignments/NumberOfOccurrences.cpp",
      "difficulty": "Medium",
      "tags": [],
      "code": "// Problem: Number of Occurrences\r\n// Date: February 3, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nint lowerBound(vector<int>& arr, int target) {\r\n    int lo = 0, hi = arr.size();\r\n    while (lo < hi) {\r\n        int mid = lo + (hi - lo) / 2;\r\n        if (arr[mid] < target) lo = mid + 1;\r\n        else hi = mid;\r\n    }\r\n    return lo;\r\n}\r\n\r\nint upperBound(vector<int>& arr, int target) {\r\n    int lo = 0, hi = arr.size();\r\n    while (lo < hi) {\r\n        int mid = lo + (hi - lo) / 2;\r\n        if (arr[mid] <= target) lo = mid + 1;\r\n        else hi = mid;\r\n    }\r\n    return lo;\r\n}\r\n\r\nint countOccurrences(vector<int>& arr, int target) {\r\n    return upperBound(arr, target) - lowerBound(arr, target);\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "OnlineStockSpan.cpp",
      "path": "Assignments/OnlineStockSpan.cpp",
      "difficulty": "Medium",
      "tags": [
        "Stack"
      ],
      "code": "// Problem: Online Stock Span\r\n// Date: February 16, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nclass StockSpanner {\r\n    stack<pair<int, int>> st;  // {price, span}\r\npublic:\r\n    StockSpanner() {\r\n    }\r\n    \r\n    int next(int price) {\r\n        int span = 1;\r\n        while (!st.empty() && st.top().first <= price) {\r\n            span += st.top().second;\r\n            st.pop();\r\n        }\r\n        st.push({price, span});\r\n        return span;\r\n    }\r\n};\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "PowerOfNumber.cpp",
      "path": "Assignments/PowerOfNumber.cpp",
      "difficulty": "Medium",
      "tags": [],
      "code": "// Problem: Power of a Number\r\n// Date: February 3, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\ndouble myPow(double x, int n) {\r\n    if (n == 0) return 1;\r\n    if (n < 0) {\r\n        x = 1 / x;\r\n        n = -(n + 1);  // Handle INT_MIN\r\n        return x * myPow(x, n);\r\n    }\r\n    \r\n    double half = myPow(x, n / 2);\r\n    if (n % 2 == 0) return half * half;\r\n    return half * half * x;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "PredecessorAndSuccessor.cpp",
      "path": "Assignments/PredecessorAndSuccessor.cpp",
      "difficulty": "Medium",
      "tags": [],
      "code": "// Problem: Predecessor and Successor of a node\r\n// Date: February 21, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct TreeNode {\r\n    int val;\r\n    TreeNode* left;\r\n    TreeNode* right;\r\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n};\r\n\r\nvoid findPreSuc(TreeNode* root, TreeNode*& pre, TreeNode*& suc, int key) {\r\n    if (!root) return;\r\n    \r\n    if (root->val == key) {\r\n        // Predecessor: rightmost node in left subtree\r\n        if (root->left) {\r\n            TreeNode* temp = root->left;\r\n            while (temp->right) temp = temp->right;\r\n            pre = temp;\r\n        }\r\n        // Successor: leftmost node in right subtree\r\n        if (root->right) {\r\n            TreeNode* temp = root->right;\r\n            while (temp->left) temp = temp->left;\r\n            suc = temp;\r\n        }\r\n    } else if (key < root->val) {\r\n        suc = root;  // Current node could be successor\r\n        findPreSuc(root->left, pre, suc, key);\r\n    } else {\r\n        pre = root;  // Current node could be predecessor\r\n        findPreSuc(root->right, pre, suc, key);\r\n    }\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "PrefixEvaluation.cpp",
      "path": "Assignments/PrefixEvaluation.cpp",
      "difficulty": "Medium",
      "tags": [
        "Stack"
      ],
      "code": "// Problem: Prefix Evaluation\r\n// Date: February 13, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nint evaluatePrefix(string s) {\r\n    stack<int> st;\r\n    \r\n    for (int i = s.length() - 1; i >= 0; i--) {\r\n        if (s[i] == ' ') continue;\r\n        \r\n        if (isdigit(s[i])) {\r\n            int num = 0, pow = 1;\r\n            while (i >= 0 && isdigit(s[i])) {\r\n                num = num + (s[i] - '0') * pow;\r\n                pow *= 10;\r\n                i--;\r\n            }\r\n            i++;\r\n            st.push(num);\r\n        } else {\r\n            int a = st.top(); st.pop();\r\n            int b = st.top(); st.pop();\r\n            \r\n            switch (s[i]) {\r\n                case '+': st.push(a + b); break;\r\n                case '-': st.push(a - b); break;\r\n                case '*': st.push(a * b); break;\r\n                case '/': st.push(a / b); break;\r\n            }\r\n        }\r\n    }\r\n    return st.top();\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "RemoveDuplicateLetters.cpp",
      "path": "Assignments/RemoveDuplicateLetters.cpp",
      "difficulty": "Medium",
      "tags": [],
      "code": "// Problem: Remove Duplicate Letters\r\n// Date: February 13, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstring removeDuplicateLetters(string s) {\r\n    vector<int> count(26, 0);\r\n    vector<bool> inStack(26, false);\r\n    string result;\r\n    \r\n    for (char c : s) count[c - 'a']++;\r\n    \r\n    for (char c : s) {\r\n        count[c - 'a']--;\r\n        if (inStack[c - 'a']) continue;\r\n        \r\n        while (!result.empty() && result.back() > c && count[result.back() - 'a'] > 0) {\r\n            inStack[result.back() - 'a'] = false;\r\n            result.pop_back();\r\n        }\r\n        result += c;\r\n        inStack[c - 'a'] = true;\r\n    }\r\n    return result;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "RemoveNthFromEnd.cpp",
      "path": "Assignments/RemoveNthFromEnd.cpp",
      "difficulty": "Medium",
      "tags": [
        "Two Pointers"
      ],
      "code": "// Problem: Remove Nth Node from End of List\r\n// Date: February 5, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct ListNode {\r\n    int val;\r\n    ListNode* next;\r\n    ListNode(int x) : val(x), next(nullptr) {}\r\n};\r\n\r\nListNode* removeNthFromEnd(ListNode* head, int n) {\r\n    ListNode dummy(0);\r\n    dummy.next = head;\r\n    ListNode* fast = &dummy;\r\n    ListNode* slow = &dummy;\r\n    \r\n    // Move fast n+1 steps ahead\r\n    for (int i = 0; i <= n; i++) {\r\n        fast = fast->next;\r\n    }\r\n    \r\n    // Move both until fast reaches end\r\n    while (fast) {\r\n        fast = fast->next;\r\n        slow = slow->next;\r\n    }\r\n    \r\n    slow->next = slow->next->next;\r\n    return dummy.next;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "ReverseFirstKElements.cpp",
      "path": "Assignments/ReverseFirstKElements.cpp",
      "difficulty": "Easy",
      "tags": [
        "BFS",
        "Stack"
      ],
      "code": "// Problem: Reverse First K Elements of a Queue\r\n// Date: February 16, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nqueue<int> reverseFirstK(queue<int> q, int k) {\r\n    stack<int> st;\r\n    \r\n    // Push first k elements to stack\r\n    for (int i = 0; i < k; i++) {\r\n        st.push(q.front());\r\n        q.pop();\r\n    }\r\n    \r\n    // Pop from stack and push back to queue\r\n    while (!st.empty()) {\r\n        q.push(st.top());\r\n        st.pop();\r\n    }\r\n    \r\n    // Move remaining elements to back\r\n    int remaining = q.size() - k;\r\n    for (int i = 0; i < remaining; i++) {\r\n        q.push(q.front());\r\n        q.pop();\r\n    }\r\n    \r\n    return q;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "SumOfLeftLeaves.cpp",
      "path": "Assignments/SumOfLeftLeaves.cpp",
      "difficulty": "Medium",
      "tags": [],
      "code": "// Problem: Sum of Left Leaves\r\n// Date: February 17, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct TreeNode {\r\n    int val;\r\n    TreeNode* left;\r\n    TreeNode* right;\r\n    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n};\r\n\r\nint sumOfLeftLeaves(TreeNode* root, bool isLeft = false) {\r\n    if (!root) return 0;\r\n    \r\n    // If leaf node and it's a left child\r\n    if (!root->left && !root->right) {\r\n        return isLeft ? root->val : 0;\r\n    }\r\n    \r\n    return sumOfLeftLeaves(root->left, true) + sumOfLeftLeaves(root->right, false);\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    }
  ],
  "Stack": [
    {
      "name": "DeleteMiddleFromStack.cpp",
      "path": "Assignments/DeleteMiddleFromStack.cpp",
      "difficulty": "Medium",
      "tags": [
        "Stack"
      ],
      "code": "// Problem: Delete Middle Element from Stack\r\n// Date: February 12, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nvoid deleteMiddle(stack<int>& st, int n, int curr) {\r\n    if (curr == n / 2) {\r\n        st.pop();\r\n        return;\r\n    }\r\n    \r\n    int top = st.top();\r\n    st.pop();\r\n    deleteMiddle(st, n, curr + 1);\r\n    st.push(top);\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "ImplementStackUsingArray.cpp",
      "path": "Assignments/ImplementStackUsingArray.cpp",
      "difficulty": "Medium",
      "tags": [
        "Stack"
      ],
      "code": "// Problem: Implement Stack using Array\r\n// Date: February 12, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nclass Stack {\r\n    int* arr;\r\n    int topIndex;\r\n    int capacity;\r\n    \r\npublic:\r\n    Stack(int size) {\r\n        capacity = size;\r\n        arr = new int[capacity];\r\n        topIndex = -1;\r\n    }\r\n    \r\n    void push(int x) {\r\n        if (!isFull()) {\r\n            arr[++topIndex] = x;\r\n        }\r\n    }\r\n    \r\n    int pop() {\r\n        if (isEmpty()) return -1;\r\n        return arr[topIndex--];\r\n    }\r\n    \r\n    int top() {\r\n        if (isEmpty()) return -1;\r\n        return arr[topIndex];\r\n    }\r\n    \r\n    bool isEmpty() {\r\n        return topIndex == -1;\r\n    }\r\n    \r\n    bool isFull() {\r\n        return topIndex == capacity - 1;\r\n    }\r\n};\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "ImplementStackUsingQueue.cpp",
      "path": "Assignments/ImplementStackUsingQueue.cpp",
      "difficulty": "Medium",
      "tags": [
        "Stack",
        "Queue",
        "BFS"
      ],
      "code": "// Problem: Implement Stack using Queue\r\n// Date: February 12, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nclass MyStack {\r\npublic:\r\n    queue<int> q;\r\n    \r\n    MyStack() {\r\n    }\r\n    \r\n    void push(int x) {\r\n        q.push(x);\r\n        int sz = q.size();\r\n        for (int i = 0; i < sz - 1; i++) {\r\n            q.push(q.front());\r\n            q.pop();\r\n        }\r\n    }\r\n    \r\n    int pop() {\r\n        int val = q.front();\r\n        q.pop();\r\n        return val;\r\n    }\r\n    \r\n    int top() {\r\n        return q.front();\r\n    }\r\n    \r\n    bool empty() {\r\n        return q.empty();\r\n    }\r\n};\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "LargestRectangleInHistogram.cpp",
      "path": "Assignments/LargestRectangleInHistogram.cpp",
      "difficulty": "Hard",
      "tags": [
        "Stack"
      ],
      "code": "// Problem: Largest Rectangle in Histogram\r\n// Date: February 16, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nint largestRectangleArea(vector<int>& heights) {\r\n    int n = heights.size();\r\n    stack<int> st;\r\n    int maxArea = 0;\r\n    \r\n    for (int i = 0; i <= n; i++) {\r\n        int h = (i == n) ? 0 : heights[i];\r\n        while (!st.empty() && h < heights[st.top()]) {\r\n            int height = heights[st.top()];\r\n            st.pop();\r\n            int width = st.empty() ? i : i - st.top() - 1;\r\n            maxArea = max(maxArea, height * width);\r\n        }\r\n        st.push(i);\r\n    }\r\n    \r\n    return maxArea;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "MinStack.cpp",
      "path": "Assignments/MinStack.cpp",
      "difficulty": "Medium",
      "tags": [
        "Stack"
      ],
      "code": "// Problem: Min Stack\r\n// Date: February 19, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nclass MinStack {\r\n    stack<long long> st;\r\n    long long minVal;\r\npublic:\r\n    MinStack() {\r\n        minVal = LLONG_MAX;\r\n    }\r\n    \r\n    void push(int val) {\r\n        if (st.empty()) {\r\n            st.push(val);\r\n            minVal = val;\r\n        } else if (val < minVal) {\r\n            st.push(2LL * val - minVal);\r\n            minVal = val;\r\n        } else {\r\n            st.push(val);\r\n        }\r\n    }\r\n    \r\n    void pop() {\r\n        if (st.top() < minVal) {\r\n            minVal = 2LL * minVal - st.top();\r\n        }\r\n        st.pop();\r\n    }\r\n    \r\n    int top() {\r\n        if (st.top() < minVal) return minVal;\r\n        return st.top();\r\n    }\r\n    \r\n    int getMin() {\r\n        return minVal;\r\n    }\r\n};\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "NGEI.cpp",
      "path": "Assignments/NGEI.cpp",
      "difficulty": "Medium",
      "tags": [
        "Stack"
      ],
      "code": "// Problem: NGE I (Next Greater Element I)\r\n// Date: February 13, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nvector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {\r\n    unordered_map<int, int> nge;\r\n    stack<int> st;\r\n    \r\n    for (int num : nums2) {\r\n        while (!st.empty() && st.top() < num) {\r\n            nge[st.top()] = num;\r\n            st.pop();\r\n        }\r\n        st.push(num);\r\n    }\r\n    \r\n    vector<int> result;\r\n    for (int num : nums1) {\r\n        result.push_back(nge.count(num) ? nge[num] : -1);\r\n    }\r\n    return result;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "NGEII.cpp",
      "path": "Assignments/NGEII.cpp",
      "difficulty": "Medium",
      "tags": [
        "Stack"
      ],
      "code": "// Problem: NGE II (Next Greater Element II - Circular)\r\n// Date: February 13, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nvector<int> nextGreaterElements(vector<int>& nums) {\r\n    int n = nums.size();\r\n    vector<int> result(n, -1);\r\n    stack<int> st;\r\n    \r\n    // Process array twice for circular behavior\r\n    for (int i = 0; i < 2 * n; i++) {\r\n        while (!st.empty() && nums[st.top()] < nums[i % n]) {\r\n            result[st.top()] = nums[i % n];\r\n            st.pop();\r\n        }\r\n        if (i < n) st.push(i);\r\n    }\r\n    return result;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "ReverseStackRecursion.cpp",
      "path": "Assignments/ReverseStackRecursion.cpp",
      "difficulty": "Easy",
      "tags": [
        "Stack"
      ],
      "code": "// Problem: Reverse Stack\r\n// Date: February 12, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nvoid insertAtBottom(stack<int>& st, int val) {\r\n    if (st.empty()) {\r\n        st.push(val);\r\n        return;\r\n    }\r\n    int top = st.top();\r\n    st.pop();\r\n    insertAtBottom(st, val);\r\n    st.push(top);\r\n}\r\n\r\nvoid reverseStack(stack<int>& st) {\r\n    if (st.empty()) return;\r\n    \r\n    int top = st.top();\r\n    st.pop();\r\n    reverseStack(st);\r\n    insertAtBottom(st, top);\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "ValidParenthesis.cpp",
      "path": "Assignments/ValidParenthesis.cpp",
      "difficulty": "Easy",
      "tags": [
        "Stack"
      ],
      "code": "// Problem: Valid Parenthesis\r\n// Date: February 12, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nbool isValid(string s) {\r\n    stack<char> st;\r\n    \r\n    for (char c : s) {\r\n        if (c == '(' || c == '{' || c == '[') {\r\n            st.push(c);\r\n        } else {\r\n            if (st.empty()) return false;\r\n            char top = st.top();\r\n            if ((c == ')' && top != '(') ||\r\n                (c == '}' && top != '{') ||\r\n                (c == ']' && top != '[')) {\r\n                return false;\r\n            }\r\n            st.pop();\r\n        }\r\n    }\r\n    return st.empty();\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "DeleteMiddleOfTheStack.cpp",
      "path": "DSA/Stack/DeleteMiddleOfTheStack.cpp",
      "difficulty": "Medium",
      "tags": [
        "Stack"
      ],
      "code": "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\n\r\nvoid deleteMiddle(stack<int>& st, int n) {\r\n    if(st.empty()) return;\r\n\r\n    int mid = n / 2;   // 0-based from top\r\n    stack<int> temp;\r\n\r\n    // Move top mid elements\r\n    for(int i = 0; i < mid; i++) {\r\n        temp.push(st.top());\r\n        st.pop();\r\n    }\r\n\r\n    // Remove middle element\r\n    st.pop();\r\n\r\n    // Put elements back\r\n    while(!temp.empty()) {\r\n        st.push(temp.top());\r\n        temp.pop();\r\n    }\r\n}\r\n\r\nint main() {\r\n    cout<<boolalpha;\r\n    stack<int> st;\r\n    st.push(1);\r\n    st.push(2);\r\n    st.push(3);\r\n    st.push(4);\r\n    st.push(5);\r\n        \r\n    while(!st.empty()) {\r\n        cout << st.top() << \" \";\r\n        st.pop();\r\n    }\r\n\r\n    int n = st.size();\r\n    deleteMiddle(st, n);\r\n    cout<<endl;\r\n\r\n    // while(!st.empty()) {\r\n    //     cout << st.top() << \" \";\r\n    //     st.pop();\r\n    // }\r\n    return 0;\r\n}"
    },
    {
      "name": "ReverseStack.cpp",
      "path": "DSA/Stack/ReverseStack.cpp",
      "difficulty": "Easy",
      "tags": [
        "Stack"
      ],
      "code": "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\n\r\nvoid deleteMiddle(stack<int>& st, int n) {\r\n    if(st.empty()) return;\r\n    int mid = n / 2;\r\n    stack<int> temp;\r\n    for(int i = 0; i < mid; i++) {\r\n        temp.push(st.top());\r\n        st.pop();\r\n    }\r\n    st.pop();\r\n    while(!temp.empty()) {\r\n        st.push(temp.top());\r\n        temp.pop();\r\n    }\r\n}\r\n\r\nint main() {\r\n    cout<<boolalpha;\r\n    stack<int> st;\r\n    st.push(1);\r\n    st.push(2);\r\n    st.push(3);\r\n    st.push(4);\r\n    st.push(5);\r\n    while(!st.empty()) {\r\n        cout << st.top() << \" \";\r\n        st.pop();\r\n    }\r\n    int n = st.size();\r\n    deleteMiddle(st, n);\r\n    cout<<endl;\r\n    return 0;\r\n}"
    }
  ],
  "Queue": [
    {
      "name": "DesignCircularQueue.cpp",
      "path": "Assignments/DesignCircularQueue.cpp",
      "difficulty": "Medium",
      "tags": [
        "Queue"
      ],
      "code": "// Problem: Design Circular Queue\r\n// Date: February 17, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nclass MyCircularQueue {\r\n    vector<int> data;\r\n    int head, tail, size, capacity;\r\npublic:\r\n    MyCircularQueue(int k) {\r\n        data.resize(k);\r\n        head = 0;\r\n        tail = -1;\r\n        size = 0;\r\n        capacity = k;\r\n    }\r\n    \r\n    bool enQueue(int value) {\r\n        if (isFull()) return false;\r\n        tail = (tail + 1) % capacity;\r\n        data[tail] = value;\r\n        size++;\r\n        return true;\r\n    }\r\n    \r\n    bool deQueue() {\r\n        if (isEmpty()) return false;\r\n        head = (head + 1) % capacity;\r\n        size--;\r\n        return true;\r\n    }\r\n    \r\n    int Front() {\r\n        if (isEmpty()) return -1;\r\n        return data[head];\r\n    }\r\n    \r\n    int Rear() {\r\n        if (isEmpty()) return -1;\r\n        return data[tail];\r\n    }\r\n    \r\n    bool isEmpty() {\r\n        return size == 0;\r\n    }\r\n    \r\n    bool isFull() {\r\n        return size == capacity;\r\n    }\r\n};\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "ImplementQueueUsingArray.cpp",
      "path": "Assignments/ImplementQueueUsingArray.cpp",
      "difficulty": "Medium",
      "tags": [
        "Queue"
      ],
      "code": "// Problem: Implement Queue using Array\r\n// Date: February 12, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nclass Queue {\r\n    int* arr;\r\n    int front, rear;\r\n    int capacity;\r\n    \r\npublic:\r\n    Queue(int size) {\r\n        capacity = size;\r\n        arr = new int[capacity];\r\n        front = rear = -1;\r\n    }\r\n    \r\n    void enqueue(int x) {\r\n        if (isFull()) return;\r\n        if (isEmpty()) front = 0;\r\n        arr[++rear] = x;\r\n    }\r\n    \r\n    int dequeue() {\r\n        if (isEmpty()) return -1;\r\n        int val = arr[front];\r\n        if (front == rear) front = rear = -1;\r\n        else front++;\r\n        return val;\r\n    }\r\n    \r\n    int getFront() {\r\n        if (isEmpty()) return -1;\r\n        return arr[front];\r\n    }\r\n    \r\n    bool isEmpty() {\r\n        return front == -1;\r\n    }\r\n    \r\n    bool isFull() {\r\n        return rear == capacity - 1;\r\n    }\r\n};\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "InterleaveQueue.cpp",
      "path": "Assignments/InterleaveQueue.cpp",
      "difficulty": "Medium",
      "tags": [
        "Queue",
        "BFS"
      ],
      "code": "// Problem: Interleave the First Half of the Queue with Second Half\r\n// Date: February 17, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nvoid interleaveQueue(queue<int>& q) {\r\n    int n = q.size();\r\n    queue<int> firstHalf;\r\n    \r\n    // Store first half\r\n    for (int i = 0; i < n / 2; i++) {\r\n        firstHalf.push(q.front());\r\n        q.pop();\r\n    }\r\n    \r\n    // Interleave\r\n    while (!firstHalf.empty()) {\r\n        q.push(firstHalf.front());\r\n        firstHalf.pop();\r\n        q.push(q.front());\r\n        q.pop();\r\n    }\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    }
  ],
  "Matrix": [
    {
      "name": "MatrixRotationCheck.cpp",
      "path": "Assignments/MatrixRotationCheck.cpp",
      "difficulty": "Medium",
      "tags": [
        "Matrix"
      ],
      "code": "// Problem: Determine Whether Matrix Can Be Obtained by Rotation\r\n// Date: February 11, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nvoid rotate90(vector<vector<int>>& mat) {\r\n    int n = mat.size();\r\n    // Transpose\r\n    for (int i = 0; i < n; i++)\r\n        for (int j = i; j < n; j++)\r\n            swap(mat[i][j], mat[j][i]);\r\n    // Reverse rows\r\n    for (int i = 0; i < n; i++)\r\n        reverse(mat[i].begin(), mat[i].end());\r\n}\r\n\r\nbool findRotation(vector<vector<int>>& mat, vector<vector<int>>& target) {\r\n    for (int i = 0; i < 4; i++) {\r\n        if (mat == target) return true;\r\n        rotate90(mat);\r\n    }\r\n    return false;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "MatrixSnakePattern.cpp",
      "path": "Assignments/MatrixSnakePattern.cpp",
      "difficulty": "Medium",
      "tags": [
        "Matrix"
      ],
      "code": "// Problem: Matrix Snake Pattern\r\n// Date: February 10, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nvector<int> snakePattern(vector<vector<int>>& matrix) {\r\n    vector<int> result;\r\n    int m = matrix.size();\r\n    \r\n    for (int i = 0; i < m; i++) {\r\n        if (i % 2 == 0) {\r\n            // Left to right\r\n            for (int j = 0; j < matrix[i].size(); j++)\r\n                result.push_back(matrix[i][j]);\r\n        } else {\r\n            // Right to left\r\n            for (int j = matrix[i].size() - 1; j >= 0; j--)\r\n                result.push_back(matrix[i][j]);\r\n        }\r\n    }\r\n    return result;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "RotateImage.cpp",
      "path": "Assignments/RotateImage.cpp",
      "difficulty": "Medium",
      "tags": [],
      "code": "// Problem: Rotate Image\r\n// Date: February 10, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nvoid rotate(vector<vector<int>>& matrix) {\r\n    int n = matrix.size();\r\n    \r\n    // Transpose\r\n    for (int i = 0; i < n; i++) {\r\n        for (int j = i; j < n; j++) {\r\n            swap(matrix[i][j], matrix[j][i]);\r\n        }\r\n    }\r\n    \r\n    // Reverse each row\r\n    for (int i = 0; i < n; i++) {\r\n        reverse(matrix[i].begin(), matrix[i].end());\r\n    }\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "Search2DMatrix.cpp",
      "path": "Assignments/Search2DMatrix.cpp",
      "difficulty": "Medium",
      "tags": [
        "Searching",
        "Matrix"
      ],
      "code": "// Problem: Search 2D Matrix\r\n// Date: February 10, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nbool searchMatrix(vector<vector<int>>& matrix, int target) {\r\n    int m = matrix.size(), n = matrix[0].size();\r\n    int left = 0, right = m * n - 1;\r\n    \r\n    while (left <= right) {\r\n        int mid = left + (right - left) / 2;\r\n        int val = matrix[mid / n][mid % n];\r\n        \r\n        if (val == target) return true;\r\n        if (val < target) left = mid + 1;\r\n        else right = mid - 1;\r\n    }\r\n    return false;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "Search2DMatrixII.cpp",
      "path": "Assignments/Search2DMatrixII.cpp",
      "difficulty": "Medium",
      "tags": [
        "Searching",
        "Matrix"
      ],
      "code": "// Problem: Search 2D Matrix II\r\n// Date: February 10, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nbool searchMatrix(vector<vector<int>>& matrix, int target) {\r\n    int m = matrix.size(), n = matrix[0].size();\r\n    int row = 0, col = n - 1;\r\n    \r\n    while (row < m && col >= 0) {\r\n        if (matrix[row][col] == target) return true;\r\n        if (matrix[row][col] > target) col--;\r\n        else row++;\r\n    }\r\n    return false;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "SetMatrixZeroes.cpp",
      "path": "Assignments/SetMatrixZeroes.cpp",
      "difficulty": "Medium",
      "tags": [
        "Matrix"
      ],
      "code": "// Problem: Set Matrix Zeroes\r\n// Date: February 11, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nvoid setZeroes(vector<vector<int>>& matrix) {\r\n    int m = matrix.size(), n = matrix[0].size();\r\n    bool firstRowZero = false, firstColZero = false;\r\n    \r\n    // Check if first row/col needs to be zero\r\n    for (int j = 0; j < n; j++)\r\n        if (matrix[0][j] == 0) firstRowZero = true;\r\n    for (int i = 0; i < m; i++)\r\n        if (matrix[i][0] == 0) firstColZero = true;\r\n    \r\n    // Use first row/col as markers\r\n    for (int i = 1; i < m; i++) {\r\n        for (int j = 1; j < n; j++) {\r\n            if (matrix[i][j] == 0) {\r\n                matrix[i][0] = 0;\r\n                matrix[0][j] = 0;\r\n            }\r\n        }\r\n    }\r\n    \r\n    // Set zeros based on markers\r\n    for (int i = 1; i < m; i++) {\r\n        for (int j = 1; j < n; j++) {\r\n            if (matrix[i][0] == 0 || matrix[0][j] == 0)\r\n                matrix[i][j] = 0;\r\n        }\r\n    }\r\n    \r\n    // Handle first row/col\r\n    if (firstRowZero)\r\n        for (int j = 0; j < n; j++) matrix[0][j] = 0;\r\n    if (firstColZero)\r\n        for (int i = 0; i < m; i++) matrix[i][0] = 0;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "SpiralMatrix.cpp",
      "path": "Assignments/SpiralMatrix.cpp",
      "difficulty": "Medium",
      "tags": [
        "Matrix"
      ],
      "code": "// Problem: Spiral Matrix\r\n// Date: February 10, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nvector<int> spiralOrder(vector<vector<int>>& matrix) {\r\n    vector<int> result;\r\n    if (matrix.empty()) return result;\r\n    \r\n    int top = 0, bottom = matrix.size() - 1;\r\n    int left = 0, right = matrix[0].size() - 1;\r\n    \r\n    while (top <= bottom && left <= right) {\r\n        // Traverse right\r\n        for (int i = left; i <= right; i++)\r\n            result.push_back(matrix[top][i]);\r\n        top++;\r\n        \r\n        // Traverse down\r\n        for (int i = top; i <= bottom; i++)\r\n            result.push_back(matrix[i][right]);\r\n        right--;\r\n        \r\n        // Traverse left\r\n        if (top <= bottom) {\r\n            for (int i = right; i >= left; i--)\r\n                result.push_back(matrix[bottom][i]);\r\n            bottom--;\r\n        }\r\n        \r\n        // Traverse up\r\n        if (left <= right) {\r\n            for (int i = bottom; i >= top; i--)\r\n                result.push_back(matrix[i][left]);\r\n            left++;\r\n        }\r\n    }\r\n    return result;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "SpiralMatrixII.cpp",
      "path": "Assignments/SpiralMatrixII.cpp",
      "difficulty": "Medium",
      "tags": [
        "Matrix"
      ],
      "code": "// Problem: Spiral Matrix II\r\n// Date: February 11, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nvector<vector<int>> generateMatrix(int n) {\r\n    vector<vector<int>> matrix(n, vector<int>(n, 0));\r\n    int top = 0, bottom = n - 1, left = 0, right = n - 1;\r\n    int num = 1;\r\n    \r\n    while (top <= bottom && left <= right) {\r\n        for (int i = left; i <= right; i++)\r\n            matrix[top][i] = num++;\r\n        top++;\r\n        \r\n        for (int i = top; i <= bottom; i++)\r\n            matrix[i][right] = num++;\r\n        right--;\r\n        \r\n        for (int i = right; i >= left; i--)\r\n            matrix[bottom][i] = num++;\r\n        bottom--;\r\n        \r\n        for (int i = bottom; i >= top; i--)\r\n            matrix[i][left] = num++;\r\n        left++;\r\n    }\r\n    return matrix;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "TransposeMatrix.cpp",
      "path": "Assignments/TransposeMatrix.cpp",
      "difficulty": "Medium",
      "tags": [
        "Matrix"
      ],
      "code": "// Problem: Transpose Matrix\r\n// Date: February 10, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nvector<vector<int>> transpose(vector<vector<int>>& matrix) {\r\n    int m = matrix.size(), n = matrix[0].size();\r\n    vector<vector<int>> result(n, vector<int>(m));\r\n    \r\n    for (int i = 0; i < m; i++) {\r\n        for (int j = 0; j < n; j++) {\r\n            result[j][i] = matrix[i][j];\r\n        }\r\n    }\r\n    return result;\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    }
  ],
  "Sorting": [
    {
      "name": "MergeSort.cpp",
      "path": "Assignments/MergeSort.cpp",
      "difficulty": "Easy",
      "tags": [
        "Sorting"
      ],
      "code": "// Problem: Merge Sort\r\n// Date: February 3, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nvoid merge(vector<int>& arr, int left, int mid, int right) {\r\n    vector<int> temp;\r\n    int i = left, j = mid + 1;\r\n    \r\n    while (i <= mid && j <= right) {\r\n        if (arr[i] <= arr[j]) temp.push_back(arr[i++]);\r\n        else temp.push_back(arr[j++]);\r\n    }\r\n    while (i <= mid) temp.push_back(arr[i++]);\r\n    while (j <= right) temp.push_back(arr[j++]);\r\n    \r\n    for (int i = left; i <= right; i++)\r\n        arr[i] = temp[i - left];\r\n}\r\n\r\nvoid mergeSort(vector<int>& arr, int left, int right) {\r\n    if (left >= right) return;\r\n    \r\n    int mid = left + (right - left) / 2;\r\n    mergeSort(arr, left, mid);\r\n    mergeSort(arr, mid + 1, right);\r\n    merge(arr, left, mid, right);\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "QuickSort.cpp",
      "path": "Assignments/QuickSort.cpp",
      "difficulty": "Medium",
      "tags": [
        "Sorting"
      ],
      "code": "// Problem: Quick Sort\r\n// Date: February 4, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nint partition(vector<int>& arr, int low, int high) {\r\n    int pivot = arr[high];\r\n    int i = low - 1;\r\n    \r\n    for (int j = low; j < high; j++) {\r\n        if (arr[j] < pivot) {\r\n            i++;\r\n            swap(arr[i], arr[j]);\r\n        }\r\n    }\r\n    swap(arr[i + 1], arr[high]);\r\n    return i + 1;\r\n}\r\n\r\nvoid quickSort(vector<int>& arr, int low, int high) {\r\n    if (low < high) {\r\n        int pi = partition(arr, low, high);\r\n        quickSort(arr, low, pi - 1);\r\n        quickSort(arr, pi + 1, high);\r\n    }\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "MergeSort.cpp",
      "path": "DSA/Sorting/MergeSort.cpp",
      "difficulty": "Easy",
      "tags": [
        "Sorting"
      ],
      "code": "// Problem: Merge Sort\r\n// Date: February 3, 2026\r\n\r\n#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\n// TODO: Implement solution\r\nvoid merge(vector<int>& arr, int left, int mid, int right) {\r\n    // Merge two sorted subarrays\r\n}\r\n\r\nvoid mergeSort(vector<int>& arr, int left, int right) {\r\n    // Merge sort implementation\r\n}\r\n\r\nint main() {\r\n    // Test cases\r\n    return 0;\r\n}\r\n"
    },
    {
      "name": "MergeTwoSortedArrays.cpp",
      "path": "DSA/Sorting/MergeTwoSortedArrays.cpp",
      "difficulty": "Easy",
      "tags": [
        "Sorting"
      ],
      "code": "#include <bits/stdc++.h>\r\nusing namespace std;\r\nint main() {\r\n    \r\n    vector<int>num1 = {1,2,3,4,5};\r\n    vector<int>num2 = {6,7,8,8,9,10};\r\n\r\n    int n = num1.size();\r\n    int m = num2.size();\r\n\r\n    vector<int> merged;\r\n    merged.reserve(n + m);\r\n\r\n    int i = 0;\r\n    int j = 0;\r\n\r\n    while (i < n && j < m) {\r\n        if (num1[i] <= num2[j]) {\r\n            merged.push_back(num1[i++]);\r\n        } else {\r\n            merged.push_back(num2[j++]);\r\n        }\r\n    }\r\n\r\n    while (i < n) {\r\n        merged.push_back(num1[i++]);\r\n    }\r\n    while (j < m) {\r\n        merged.push_back(num2[j++]);\r\n    }\r\n\r\n    for (int x : merged) {\r\n        cout << x << \" \";\r\n    }\r\n\r\n    return 0;\r\n}"
    }
  ],
  "Arrays": [
    {
      "name": "MoveAllZeroesToEnd.cpp",
      "path": "DSA/Arrays/MoveAllZeroesToEnd.cpp",
      "difficulty": "Medium",
      "tags": [],
      "code": "#include <bits/stdc++.h>\r\nusing namespace std;\r\nint main() {\r\n    vector<int>nums = {1,2,0,0,0,3,4,1};\r\n    int n = nums.size();\r\n    int non = 0;\r\n    for(int i =0;i<n;i++){\r\n        if(nums[i] != 0){\r\n            nums[non] = nums[i];\r\n            non++;\r\n        }\r\n    }\r\n    for(int i = non ;i<n;i++){\r\n        nums[i] = 0;\r\n    }\r\n\r\n\r\n    for(int i : nums){\r\n        cout<<i<<\" \";\r\n    }\r\n    return 0;\r\n}"
    },
    {
      "name": "RemoveAllZeroes.cpp",
      "path": "DSA/Arrays/RemoveAllZeroes.cpp",
      "difficulty": "Medium",
      "tags": [],
      "code": "#include <bits/stdc++.h>\r\nusing namespace std;\r\nint main() {\r\n    vector<int>v = {1,6,0,1,2,3,4,0,1,0};\r\n    int n = v.size();\r\n\r\n    v.erase(remove(v.begin(),v.end(),0),v.end());\r\n    // for(int i=n;i>=0;i--){\r\n    //     if(v[i] == 0 ){\r\n    //         v.erase(v.begin()+i);\r\n    //     }       \r\n    // }\r\n\r\n    for(int i:v){\r\n        cout<<i<<\" \";\r\n    }\r\n    \r\n    return 0;\r\n}"
    }
  ]
};

export const getTotalProblems = () => {
  return Object.values(codeData).reduce((acc, files) => acc + files.length, 0);
};

export const getAllTags = () => {
  const tags = new Set();
  Object.values(codeData).forEach(files => {
    files.forEach(file => {
      file.tags?.forEach(tag => tags.add(tag));
    });
  });
  return Array.from(tags).sort();
};
