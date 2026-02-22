// Problem: Delete a Node from Linked List
// Date: February 4, 2026

#include <bits/stdc++.h>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* deleteNode(ListNode* head, int key) {
    if (!head) return nullptr;
    
    // If head is to be deleted
    if (head->val == key) return head->next;
    
    ListNode* curr = head;
    while (curr->next && curr->next->val != key) {
        curr = curr->next;
    }
    
    if (curr->next) {
        curr->next = curr->next->next;
    }
    return head;
}

int main() {
    // Test cases
    return 0;
}
