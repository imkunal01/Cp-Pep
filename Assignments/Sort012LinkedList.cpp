// Problem: Sort 0s, 1s and 2s in Linked List
// Date: February 11, 2026

#include <bits/stdc++.h>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* sortList(ListNode* head) {
    if (!head) return nullptr;
    
    int count[3] = {0, 0, 0};
    ListNode* curr = head;
    
    // Count 0s, 1s, 2s
    while (curr) {
        count[curr->val]++;
        curr = curr->next;
    }
    
    // Fill list
    curr = head;
    int i = 0;
    while (curr) {
        if (count[i] == 0) i++;
        else {
            curr->val = i;
            count[i]--;
            curr = curr->next;
        }
    }
    return head;
}

int main() {
    // Test cases
    return 0;
}
