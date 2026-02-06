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

Node* SortedInsert(Node* head){
    
}

int main() {
    // Test: binary 1->0->1->1 (11)
    Node* n4 = new Node(1);
    Node* n3 = new Node(1, n4);
    Node* n2 = new Node(0, n3);
    Node* n1 = new Node(1, n2);

    SortedInsert(n1);
    


    delete n1;
    delete n2;
    delete n3;
    delete n4;
    return 0;
}