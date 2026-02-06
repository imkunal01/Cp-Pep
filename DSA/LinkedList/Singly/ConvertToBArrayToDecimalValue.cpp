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

vector<int> toVector(Node* head) {
    vector<int> bits;
    Node* current = head;
    while (current != NULL) {
        bits.push_back(current->data);
        current = current->next;
    }
    return bits;
}

int GetDecimal(Node* head){
    vector<int>v = toVector(head);
    int n = v.size();
    int d = 0;
    for(int i =0;i<n;i++){
        d = (d<<1)|v[i];
    }
    return d;
}

int main() {
    // Test: binary 1->0->1->1 (11)
    Node* n4 = new Node(1);
    Node* n3 = new Node(1, n4);
    Node* n2 = new Node(0, n3);
    Node* n1 = new Node(1, n2);

    int result = GetDecimal(n1);
    if (result != 11) {
        cout << "Test failed: expected 11, got " << result << "\n";
        return 1;
    }

    cout << result<<" All tests passed\n";

    delete n1;
    delete n2;
    delete n3;
    delete n4;
    return 0;
}