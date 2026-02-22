// Problem: Swap Nodes in Pairs
// Date: February 6, 2026

#include <bits/stdc++.h>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* swapPairs(ListNode* head) {
    ListNode dummy(0);
    dummy.next = head;
    ListNode* prev = &dummy;
    
    while (prev->next && prev->next->next) {
        ListNode* first = prev->next;
        ListNode* second = prev->next->next;
        
        first->next = second->next;
        second->next = first;
        prev->next = second;
        
        prev = first;
    }
    return dummy.next;
}

int main() {
    // Test cases
    return 0;
}
