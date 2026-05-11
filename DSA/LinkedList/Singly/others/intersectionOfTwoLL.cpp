#include <bits/stdc++.h>
using namespace std;
struct Node{
    int data;
    Node* next;

    Node(int x){
        data = x;
        next = NULL;
    }
};

Node* insert(Node* head, int data){
    Node* newNode = new Node(data);
    if(head == NULL){
        return newNode;
    }
    Node* temp = head;
    while(temp->next!=NULL){
        temp = temp->next;
    }
    temp->next = newNode;
    return head;
}

Node* intersection(Node* head1, Node* head2){
    Node* temp1 = head1;
    Node* temp2 = head2;

    while(temp1 != NULL && temp2 != NULL){
        if(temp1 == temp2){
            return temp1;
        }
        temp1 = temp1->next;
        temp2 = temp2->next;
    }
    return NULL;

}
int main() {
    Node* head1 = NULL;
    head1 = insert(head1, 1);
    head1 = insert(head1, 2);
    head1 = insert(head1, 3);

    Node* head2 = NULL;
    head2 = insert(head2, 2);
    head2 = insert(head2, 3);
    head2 = insert(head2, 4);

    Node* result = intersection(head1, head2);
    if(result != NULL){
        cout << "Intersection found at node with data: " << result->data << endl;
    }
    else{
        cout << "No intersection found." << endl;
    }

    return 0;
}