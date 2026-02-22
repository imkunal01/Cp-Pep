// Problem: Delete a Node from Doubly Linked List
// Date: February 9, 2026

#include <bits/stdc++.h>
using namespace std;

struct DListNode {
    int val;
    DListNode* prev;
    DListNode* next;
    DListNode(int x) : val(x), prev(nullptr), next(nullptr) {}
};

DListNode* deleteNode(DListNode* head, int key) {
    DListNode* curr = head;
    while (curr && curr->val != key) {
        curr = curr->next;
    }
    
    if (!curr) return head;
    
    if (curr->prev) curr->prev->next = curr->next;
    else head = curr->next;
    
    if (curr->next) curr->next->prev = curr->prev;
    
    delete curr;
    return head;
}

int main() {
    // Test cases
    return 0;
}
