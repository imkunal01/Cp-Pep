// Problem: Linked Lists Introduction
// Date: February 4, 2026

#include <bits/stdc++.h>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

class LinkedList {
public:
    ListNode* head;
    
    LinkedList() : head(nullptr) {}
    
    void insertFront(int val) {
        ListNode* node = new ListNode(val);
        node->next = head;
        head = node;
    }
    
    void insertEnd(int val) {
        ListNode* node = new ListNode(val);
        if (!head) { head = node; return; }
        ListNode* curr = head;
        while (curr->next) curr = curr->next;
        curr->next = node;
    }
    
    void insertAt(int pos, int val) {
        if (pos == 0) { insertFront(val); return; }
        ListNode* node = new ListNode(val);
        ListNode* curr = head;
        for (int i = 0; i < pos - 1 && curr; i++) curr = curr->next;
        if (curr) { node->next = curr->next; curr->next = node; }
    }
    
    void deleteNode(int val) {
        if (!head) return;
        if (head->val == val) { head = head->next; return; }
        ListNode* curr = head;
        while (curr->next && curr->next->val != val) curr = curr->next;
        if (curr->next) curr->next = curr->next->next;
    }
    
    void display() {
        ListNode* curr = head;
        while (curr) { cout << curr->val << " "; curr = curr->next; }
        cout << endl;
    }
    
    int size() {
        int count = 0;
        ListNode* curr = head;
        while (curr) { count++; curr = curr->next; }
        return count;
    }
};

int main() {
    // Test cases
    return 0;
}
