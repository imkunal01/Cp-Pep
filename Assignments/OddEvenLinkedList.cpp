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

// [2,1,3,5,6,4,7] for this test case it is not right
Node* OddEvenList(Node* head) {
    if(head == NULL || head->next == NULL){
        return head;
    }
    Node* odd = head;
    Node* even = head->next;
    Node* evenHead = even;

    while(even != NULL && even->next != NULL){
        odd->next = even->next;
        odd = odd->next;
        even->next = odd->next;
        even = even->next;
    }
    odd->next = evenHead;
    if(even != NULL){
        even->next = NULL;
    }
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