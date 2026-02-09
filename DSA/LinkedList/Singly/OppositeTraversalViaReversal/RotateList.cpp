#include <bits/stdc++.h>
using namespace std;

class Node{
public:
    int data;
    Node* next;
    Node(int data){ this->data = data; this->next = NULL; }
    Node(Node* next,int data){ this->data = data; this->next = NULL; }
    Node(int data, Node* next) : data(data), next(next) {}
};


bool CheckPalindrom(Node* head){
    Node* curr = head;
    stack<int> s;
    while(curr != NULL){
        s.push(curr->data);
        curr = curr->next;
    }
    curr = head;
    while(curr){
        if(curr->data != s.top()) return false;
        s.pop();
        curr= curr->next;
    }
    return true;
}

bool PalindromOptimal(Node* head){
    Node* slow = head;
    Node* fast = head;

    while(fast && fast->next){
        slow = slow->next;
        fast = fast->next->next;
    }

    // the second half

    Node* prev = NULL;
    Node* curr = slow;
    Node* nextpt = NULL;
    
    while(curr){
        nextpt = curr->next;
        curr->next = prev;
        prev = curr;
        curr = nextpt;
    }
    
    Node* first = head;
    Node* second = prev;
    while(second){
        if(first->data != second->data) return false;
        first = first->next;
        second = second->next;
    }
    return true;
}

Node* RotateList(Node*head,int k){
    if(!head || !head->next || k==0){
        return head;
    }

    Node* curr = head;

    int length = 1;
    while(curr->next){
        curr = curr->next;
        length++;
    }

    curr->next = head;
    k = k%length;

    if(k==0){
        curr->next = NULL;
        return head;
    }

    int tail = length - k-1;
    Node* tailpt = head;
    for(int i = 0;i<tail;i++){
        tailpt = tailpt->next;
    }
    Node* newHead = tailpt->next;
    tailpt->next = NULL;
    return head;
}

Node* RotateNew(Node* head,int k){

    for(int i =0;i<k;i++){

        if(k == 0 || head == NULL){
            return head;
        }

        Node* curr = head;
        while(curr->next != NULL){
            curr = curr->next;
        }
        
        curr->next = head;
        curr = curr->next;
        head = head->next;
        curr->next = NULL;
    }

    return head;
}

int main() {
    // Test case: 1 -> 2 -> 1 (palindrome)
    Node* n3 = new Node(1);
    Node* n2 = new Node(2, n3);
    Node* n1 = new Node(1, n2);

    bool result1 = CheckPalindrom(n1);
    bool result2 = PalindromOptimal(n1);

    if (!result1 || !result2) {
        cout << "Test failed: expected palindrome\n";
        return 1;
    }

    cout << "All tests passed\n";

    delete n1;
    delete n2;
    delete n3;
    return 0;
}
