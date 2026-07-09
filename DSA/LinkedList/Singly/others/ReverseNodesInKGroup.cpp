// Problem: Reverse Nodes in K-Group
// Date: February 11, 2026

#include <bits/stdc++.h>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};
ListNode* reverse(ListNode* head) {
    ListNode* prev = nullptr;
    ListNode* curr = head;
    while (curr) {
        ListNode* nextTemp = curr->next;
        curr->next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
}

// TODO: Implement solution
ListNode* reverseKGroup(ListNode* head, int k) {
    ListNode* temp = head;
    ListNode* curr = NULL;
    int c = 0;
    while (temp && c < k) {
        temp = temp->next;
        c++;
    }
    if (c < k) {
        return head;
    }
    curr = head;
    for (int i = 0; i < k - 1; i++) {
        curr = curr->next;
    }
    ListNode* nextGroup = curr->next;
    curr->next = nullptr;
    head = reverse(head);
    curr = head;
    while (curr->next) {
        curr = curr->next;
    }
    curr->next = reverseKGroup(nextGroup, k);

    return head;
}
void printList(ListNode* head) {
    ListNode* temp = head;
    while (temp) {
        cout << temp->val << " ";
        temp = temp->next;
    }
    cout << endl;
}

int main() {
    // create a test case here
    ListNode* head = new ListNode(1);
    ListNode* second = new ListNode(2);
    ListNode* third = new ListNode(3);
    ListNode* fourth = new ListNode(4);
    ListNode* fifth = new ListNode(5);
    ListNode* sixth = new ListNode(6);
    head->next = second;
    second->next = third;
    third->next = fourth;
    fourth->next = fifth;
    fifth->next = sixth; 
    head = reverseKGroup(head, 3);
    printList(head);

    return 0;
}
