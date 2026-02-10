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
Node* DutchNationalFlag(Node* head){
    if(head == NULL || head->next == NULL){
        return head;
    }
    Node* zeroHead = new Node(-1);
    Node* oneHead = new Node(-1);
    Node* twoHead = new Node(-1);
    Node* zeroTail = zeroHead;
    Node* oneTail = oneHead;
    Node* twoTail = twoHead;
    Node* curr = head;
    while(curr != NULL){
        if(curr->data == 0){
            zeroTail->next = curr;
            zeroTail = zeroTail->next;
        }
        else if(curr->data == 1){
            oneTail->next = curr;
            oneTail = oneTail->next;
        }
        else{
            twoTail->next = curr;
            twoTail = twoTail->next;
        }
        curr = curr->next;
    }
    if(oneHead->next != NULL){
        zeroTail->next = oneHead->next;
        oneTail->next = twoHead->next;
    }
    else{
        zeroTail->next = twoHead->next;
    }
    twoTail->next = NULL;
    head = zeroHead->next;
    delete zeroHead;
    delete oneHead;
    delete twoHead;

    return head;
}

// convert array to linked list
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
    cout<<"Array Converted To LinkedList"<<endl;
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