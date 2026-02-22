// Problem: Intro to Doubly Linked List
// Date: February 9, 2026

#include <bits/stdc++.h>
using namespace std;

struct DListNode {
    int val;
    DListNode* prev;
    DListNode* next;
    DListNode(int x) : val(x), prev(nullptr), next(nullptr) {}
};

class DoublyLinkedList {
public:
    DListNode* head;
    DListNode* tail;
    
    DoublyLinkedList() : head(nullptr), tail(nullptr) {}
    
    void insertFront(int val) {
        DListNode* node = new DListNode(val);
        if (!head) {
            head = tail = node;
        } else {
            node->next = head;
            head->prev = node;
            head = node;
        }
    }
    
    void insertEnd(int val) {
        DListNode* node = new DListNode(val);
        if (!tail) {
            head = tail = node;
        } else {
            tail->next = node;
            node->prev = tail;
            tail = node;
        }
    }
    
    void deleteNode(int val) {
        DListNode* curr = head;
        while (curr && curr->val != val) curr = curr->next;
        if (!curr) return;
        if (curr->prev) curr->prev->next = curr->next;
        else head = curr->next;
        if (curr->next) curr->next->prev = curr->prev;
        else tail = curr->prev;
        delete curr;
    }
    
    void display() {
        DListNode* curr = head;
        while (curr) { cout << curr->val << " "; curr = curr->next; }
        cout << endl;
    }
};

int main() {
    // Test cases
    return 0;
}
