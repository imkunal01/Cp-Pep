#include <bits/stdc++.h>
using namespace std;

class ListNode{
public:
    int data;
    ListNode* next;
    ListNode(int data){ this->data = data; this->next = NULL; }
    ListNode(ListNode* next,int data){ this->data = data; this->next = NULL; }
    ListNode(int data, ListNode* next) : data(data), next(next) {}
};

 ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode* dummy = new ListNode(0);
        dummy->next = head;

        ListNode* fast = dummy;
        ListNode* slow = dummy;

        // move fast n steps ahead
        for (int i = 0; i < n; i++) {
            fast = fast->next;
        }

        // move both until fast reaches end
        while (fast->next != nullptr) {
            fast = fast->next;
            slow = slow->next;
        }

        // delete nth node from end
        ListNode* temp = slow->next;
        slow->next = slow->next->next;
        delete temp;

        return dummy->next;
    }
int main() {
    
    return 0;
}