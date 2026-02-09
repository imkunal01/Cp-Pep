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

Node* deleteTail(Node* head){
    if(head == NULL || head->next == NULL){
        delete head;
        return NULL;
    }
    Node* temp = head;
    while(temp->next->next != NULL){
        temp = temp->next;

    }
    delete temp->next;
    temp->next = NULL;
    return head;
}

Node* deleteHead(Node* head){
    if(head == NULL){
        return head;
    }
    Node* temp  = head;
    head = head->next;
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

Node* deleteAtPos(Node* head,int k){
    if(k == 1){
        Node* temp = head;
        head = head->next;
        delete temp;
        return head;
    }
    int count = 0;Node *temp = head; Node*prev = NULL;
    while(temp!=NULL){
        count++;
        if(count==k){
            prev->next = prev->next->next;
            delete temp;
            break;
        }
        prev = temp;
        temp = temp->next;
    }
    return head;

}

Node* deleteMatchingValue(Node* head, int val) {
    if (head == NULL) return head;
    
    while(head!= NULL && head->data == val){
        Node* temp = head;
        head = head->next;
        delete temp;
    }
    if (head == NULL) return head;

    Node* curr = head;
    while (curr->next != NULL) {
        if (curr->next->data == val) {
            Node* temp = curr->next;
            curr->next = curr->next->next;
            delete temp;
        }
        else{
            curr = curr->next;
        }
    }

    return head;
}



struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};
 
class Solution {
    public:
    ListNode* removeElements(ListNode* head, int val) {
            ListNode* temp = new ListNode(0);
            temp->next = head;
            ListNode* curr = temp;
            while (curr->next != NULL) {
                if (curr->next->val == val)
                    curr->next = curr->next->next;
                else
                    curr = curr->next;
            }
            return temp->next;
        }
    ListNode* removeElementsOptim(ListNode* head, int target) {
        if(target == head->val){
            ListNode* temp = head;
            head = head->next;
            return head;
        }
        if(target == 1){
            ListNode* temp = head;
            delete temp;
            return head;
        }

        ListNode* temp = head;
        ListNode* prev = NULL;

        while(temp != NULL){
            if(temp->val == target){
                prev->next = prev->next->next;
                delete temp;
                break;
            }
            prev = temp;
            temp = temp->next;
        }
        return head;
    }
};

Node* insertAtHead(Node* head,int val){
    Node* temp = new Node(val,head);
    return temp;
}
Node* insertSorted(Node* head, int val){
    Node* newNode = new Node(val);
    newNode->data = val;
    head = newNode;

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
    head = insertAtHead(head,100);
    deleteMatchingValue(head,target);
    display(head);
    return 0;
}