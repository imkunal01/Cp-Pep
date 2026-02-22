// Problem: Delete a Node (LC 237 - Given only access to that node)
// Date: February 5, 2026

#include <bits/stdc++.h>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

void deleteNode(ListNode* node) {
    // Copy next node's value to current
    node->val = node->next->val;
    // Skip next node
    node->next = node->next->next;
}

int main() {
    // Test cases
    return 0;
}
