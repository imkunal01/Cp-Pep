// Problem: Linked Lists Introduction
// Date: February 4, 2026

#include <bits/stdc++.h>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

// TODO: Implement linked list operations
class LinkedList {
public:
    ListNode* head;
    
    LinkedList() : head(nullptr) {}
    
    void insertFront(int val) {}
    void insertEnd(int val) {}
    void insertAt(int pos, int val) {}
    void deleteNode(int val) {}
    void display() {}
    int size() { return 0; }
};

int main() {
    // Test cases
    return 0;
}
