// Problem: Reverse Nodes in K-Group
// Date: February 11, 2026

#include <bits/stdc++.h>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};
// TODO: Implement solution
ListNode* reverseKGroup(ListNode* head, int k) {

    ListNode* curr = head;

    int c = 0;
    while(curr!=NULL && c<k){
        curr= curr->next;
        c++;
    }

    if(c == k){
        ListNode* currNode = head;
        ListNode* prevNode = NULL;
        ListNode* nextNode = NULL;
        int c2 = 0;
    
        while(c2<k){
            nextNode = currNode->next;
            currNode->next = prevNode;
            prevNode = currNode;
            currNode  = nextNode;
            c2++;
        }
        head->next = reverseKGroup(curr,k);
        return prevNode;
    }
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
