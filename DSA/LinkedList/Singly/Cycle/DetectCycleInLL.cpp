// Problem: Detect Cycle in Linked List
// Date: February 6, 2026

#include <bits/stdc++.h>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

// TODO: Implement solution
bool hasCycle(ListNode* head) {
    ListNode* slow = head;
    ListNode* fast = head;
    while(fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if(slow == fast) {
            return true;
        }
    }
    return false;
}

int main() {
    // create a test case here
    ListNode* head = new ListNode(1);
    ListNode* second = new ListNode(2);
    ListNode* third = new ListNode(3);
    head->next = second;
    second->next = third;
    third->next = second; // create a cycle
    cout << hasCycle(head) << endl;
    
    return 0;
}
