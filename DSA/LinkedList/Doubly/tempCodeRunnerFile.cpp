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
void display(Node* head){
    Node* temp = head;
    while(temp != NULL){
        temp = temp->next;
        cout<<temp->data<<" ";
    }
    cout<<endl;
}
int main() {
    vector<int>arr = {1,2,3,4,5};
    Node* head = convertArrToDLL(arr);
    display(head);
    return 0;
}