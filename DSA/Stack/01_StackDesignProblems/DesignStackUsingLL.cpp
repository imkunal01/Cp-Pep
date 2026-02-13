#include <bits/stdc++.h>
using namespace std;

class Node{
    public:
    int data;
    Node* next;

    Node(int data){
        this->data = data;
        this->next = NULL;
    }
};

class MyStack{
    private:
    Node* head;
    public:

    MyStack(){
        head = NULL;
    }
    void push(int x){
        Node* temp = new Node(x);
        temp->next = head;
        head = temp;
    }

    void pop(){
        if(head == NULL) return;
        Node* temp = head;
        head = head->next;
        delete temp;
    }

    int top(){
        if(head == NULL) return -1;
        return head->data;
    }

    bool empty(){
        return head == NULL;
    }
};
int main() {

    MyStack stack;
    
    stack.push(10);
    stack.push(20);
    stack.push(30);
    
    cout << "Top element: " << stack.top() << endl;
    
    while(!stack.empty()){
        cout << stack.top() << " ";
        stack.pop();
    }
    cout << endl;

    return 0;
}