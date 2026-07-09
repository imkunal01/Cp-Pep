#include <bits/stdc++.h>
using namespace std;
class Node{
    public:
    int data;
    Node* left;
    Node* right;
    Node* parant;
    Node(int val){
        data = val;
        left = right = parant  = NULL;
    }
};
Node* FindSuccessor(Node* head , Node* parant){
    Node* temp = head;

    if(temp->left == NULL){
        return temp->left;
    }

    if(temp->right == NULL){
        return temp->right;
    }
    
    while(parant!=NULL){
        Node* curr = parant;
        if(curr == parant->left && parant->right){
            return parant->right;
        }
        curr = parant;
        parant = parant->parant;
    }
    return NULL;
}

Node* insert(Node* root,int target){
    if(root == NULL){
        Node* temp = new Node(target);
        return temp;
    }
    if(target < root->data){
        root->left = insert(root->left,target);
    }
    else{
        root->right  = insert(root->right,target);
    }
    return root;
}
void inorder(Node* node) {
        if (node != NULL) {
            inorder(node->left);
            cout << node->data << " ";
            inorder(node->right);
        }
    }
int main(){
    int val;
    Node* root = new Node(10);
     while(true){
        cin>>val;
        if(val == -1){
            break;
        }
        root = insert(root,val);
    }
    inorder(root);
    return 0;
}