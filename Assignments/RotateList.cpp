// Problem: Rotate List
// Date: February 6, 2026

#include <bits/stdc++.h>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* rotateRight(ListNode* head, int k) {
    if (!head || !head->next || k == 0) return head;
    
    // Find length and last node
    int len = 1;
    ListNode* tail = head;
    while (tail->next) {
        len++;
        tail = tail->next;
    }
    
    k = k % len;
    if (k == 0) return head;
    
    // Find new tail (len - k - 1 steps from head)
    ListNode* newTail = head;
    for (int i = 0; i < len - k - 1; i++) {
        newTail = newTail->next;
    }
    
    ListNode* newHead = newTail->next;
    newTail->next = nullptr;
    tail->next = head;
    
    return newHead;
}

int main() {
    // Test cases
    return 0;
}
