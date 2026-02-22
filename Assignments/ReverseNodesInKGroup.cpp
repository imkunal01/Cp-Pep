// Problem: Reverse Nodes in K-Group
// Date: February 11, 2026

#include <bits/stdc++.h>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* reverse(ListNode* head, int k) {
    ListNode* prev = nullptr;
    ListNode* curr = head;
    while (k--) {
        ListNode* next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

ListNode* reverseKGroup(ListNode* head, int k) {
    // Check if we have k nodes
    ListNode* curr = head;
    int count = 0;
    while (curr && count < k) {
        curr = curr->next;
        count++;
    }
    
    if (count < k) return head;
    
    ListNode* newHead = reverse(head, k);
    head->next = reverseKGroup(curr, k);
    
    return newHead;
}

int main() {
    // Test cases
    return 0;
}
