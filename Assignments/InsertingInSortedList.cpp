// Problem: Inserting in a Sorted List
// Date: February 5, 2026

#include <bits/stdc++.h>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* insertInSortedList(ListNode* head, int val) {
    ListNode* newNode = new ListNode(val);
    
    if (!head || val < head->val) {
        newNode->next = head;
        return newNode;
    }
    
    ListNode* curr = head;
    while (curr->next && curr->next->val < val) {
        curr = curr->next;
    }
    
    newNode->next = curr->next;
    curr->next = newNode;
    return head;
}

int main() {
    // Test cases
    return 0;
}
