#include <iostream>
#include<vector>
using namespace std;
class Node{
    public:
    int data;
    Node* next;
    Node* prev;
    Node(int data){
        this->data = data;
        this->next = NULL;
        this->prev = NULL;
    }
    Node(Node* next,int data){
        this->data = data;
        this->next = NULL;
        this->prev = NULL;
    }
    Node(int data, Node* next,Node* prev) : data(data), next(next) , prev(prev){}
};
Node* convertArrToDLL(vector<int>arr){
    if(arr.size() == 0){
            return NULL;
        }
        
        Node* head = new Node(arr[0]);
        Node* curr = head;
        int n = arr.size();
        for(int i =1;i<n;i++){
            Node* temp = new Node(arr[i]);
            curr->next = temp;
            temp->prev = curr;
            curr = temp;
        }
        return head;
}

Node* insertAtHead(Node* head, int val) {
    Node* newNode = new Node(val);

    if (head == NULL) return newNode;

    newNode->next = head;
    head->prev = newNode;
    head = newNode;

    return head;
}

Node* insertAtTail(Node* head, int val) {
    Node* newNode = new Node(val);
    if (head == NULL) return newNode;

    Node* temp = head;
    while (temp->next != NULL)
        temp = temp->next;

    temp->next = newNode;
    newNode->prev = temp;

    return head;
}

Node* findFirstMiddle(Node* head) {
    if (head == NULL) return NULL;

    Node* slow = head;
    Node* fast = head->next;

    while (fast != NULL && fast->next != NULL) {
        slow = slow->next;
        fast = fast->next->next;
    }

    return slow;
}

// delete a target value from the list
Node* deleteNode(Node* head, int target) {
    if (head == NULL) return NULL;

    Node* temp = head;

    // Find the node with target value
    while (temp != NULL && temp->data != target) {
        temp = temp->next;
    }

    // If target not found
    if (temp == NULL) return head;

    // If head needs to be deleted
    if (temp == head) {
        head = head->next;
        if (head != NULL) head->prev = NULL;
    } else {
        // Delete middle or tail node
        if (temp->prev != NULL) temp->prev->next = temp->next;
        if (temp->next != NULL) temp->next->prev = temp->prev;
    }

    delete temp;
    return head;
}



Node* detectCycleLoop(Node* head) {
    if (head == NULL) return NULL;

    Node* slow = head;
    Node* fast = head;

    while (fast != NULL && fast->next != NULL) {
        slow = slow->next;
        fast = fast->next->next;

        if (slow == fast) {
            slow = head;
            while (slow != fast) {
                slow = slow->next;
                fast = fast->next;
            }
            return slow; // Start of the loop
        }
    }

    return NULL; // No cycle
}

// delete node at a given position
Node* deleteAtPosition(Node* head, int pos) {
    if (head == NULL) return NULL;

    Node* temp = head;
    int currentPosition = 0;

    // Traverse to the node at the given position
    while (temp != NULL && currentPosition < pos) {
        temp = temp->next;
        currentPosition++;
    }

    // If position is out of bounds
    if (temp == NULL) return head;

    // If head needs to be deleted
    if (temp == head) {
        head = head->next;
        if (head != NULL) head->prev = NULL;
    } else {
        // Delete middle or tail node
        if (temp->prev != NULL) temp->prev->next = temp->next;
        if (temp->next != NULL) temp->next->prev = temp->prev;
    }

    delete temp;
    return head;
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
    vector<int>arr = {1,2,3,4,5};
    Node* head = convertArrToDLL(arr);
    display(head);
    return 0;
}