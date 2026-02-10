#include<iostream>
#include<vector>
using namespace std;
class Node{
    public: 
    int data;
    Node* next;

    Node(int data){
        this->data = data;
        this->next = NULL;
    }
    Node(Node* next,int data){
        this->data = data;
        this->next = NULL;
    }
    Node(int data, Node* next) : data(data), next(next) {}
};
Node* ConvetArrToLL(vector<int>arr){
    if (arr.empty()) return nullptr;
    Node* head = new Node(arr[0]);
    Node * trev = head;
    for(int i = 1;i<arr.size();i++){
        Node* temp = new Node(arr[i]);
        trev->next = temp;
        trev = temp;

    }
    return head;
}

Node* ReverseKGroup(Node* head, int k) {
    if (head == NULL || k <= 1) return head;

    Node* dummy = new Node(0);
    dummy->next = head;
    Node* prevGroupEnd = dummy;

    while (true) {
        Node* groupStart = prevGroupEnd->next;
        Node* groupEnd = prevGroupEnd;
        for (int i = 0; i < k && groupEnd != NULL; i++) {
            groupEnd = groupEnd->next;
        }
        if (groupEnd == NULL) break;
        Node* nextGroupStart = groupEnd->next;
        Node* prev = nextGroupStart;
        Node* curr = groupStart;
        while (curr != nextGroupStart) {
            Node* temp = curr->next;
            curr->next = prev;
            prev = curr;
            curr = temp;
        }

        prevGroupEnd->next = groupEnd;
        prevGroupEnd = groupStart; 
    }

    head = dummy->next;
    delete dummy;
    return head;
}

vector<int>convertLLToArr(Node* head){
    vector<int>arr;
    Node* temp = head;
    while(temp != NULL){
        arr.push_back(temp->data);
        temp = temp->next;
    }
    return arr;
}

void display(Node* head){
    Node* temp = head;
    while(temp != NULL){
        cout<<temp->data<<" ";
        temp = temp->next;
    }
    cout<<endl;
}

int main() {
    vector<int>arr = {1,2,3,7,7,7};
    Node* head = ConvetArrToLL(arr);
    display(head);
    // cout<<"After Head Deletion"<<endl;
    // head = deleteHead(head);
    // display(head);
    // cout<<"After Tail Deletion"<<endl;
    // head = deleteTail(head);
    // display(head);
    // cout<<"After Deletion at k=2"<<endl;
    // deleteAtPos(head,3);
    // head = deleteMatchingValue(head,1);
    int target = 7;

    display(head);
    return 0;
}