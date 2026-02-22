// Problem: Insert in Doubly Linked List
// Date: February 9, 2026

#include <bits/stdc++.h>
using namespace std;

struct DListNode {
    int val;
    DListNode* prev;
    DListNode* next;
    DListNode(int x) : val(x), prev(nullptr), next(nullptr) {}
};

DListNode* insertNode(DListNode* head, int val, int pos) {
    DListNode* newNode = new DListNode(val);
    
    if (pos == 0) {
        newNode->next = head;
        if (head) head->prev = newNode;
        return newNode;
    }
    
    DListNode* curr = head;
    for (int i = 0; i < pos - 1 && curr; i++) {
        curr = curr->next;
    }
    
    if (curr) {
        newNode->next = curr->next;
        newNode->prev = curr;
        if (curr->next) curr->next->prev = newNode;
        curr->next = newNode;
    }
    return head;
}

int main() {
    // Test cases
    return 0;
}
