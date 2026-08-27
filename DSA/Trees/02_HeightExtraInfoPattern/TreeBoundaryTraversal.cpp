// Problem: Tree Boundary Traversal
// Date: February 18, 2026

#include <bits/stdc++.h>
using namespace std;

class Node {
  public:
    int data;
    Node* left, *right;
    Node(int val) {
        data = val;
        left = right = nullptr;
    }
};

class Solution {
  public:
    
    bool isLeaf(Node* root){
        return root->left == NULL && root->right == NULL;
    }
    
    void addLeaves(Node* root, vector<int>& res) {
        if(root == NULL) return;
        if (isLeaf(root)) {
            res.push_back(root->data);
            return;
        }
        addLeaves(root->left, res);
        addLeaves(root->right, res);
    }
    
    void leftSide(Node* root , vector<int>&res){
        Node* curr = root->left;
        while(curr){
            if(!isLeaf(curr)) res.push_back(curr->data);
            if(curr->left) curr = curr->left;
            else curr = curr->right;
        }
    }
    
    void rightSide(Node* root, vector<int>&res){
        Node* curr = root->right;
        vector<int> temp;
        while(curr){
            if(!isLeaf(curr)) temp.push_back(curr->data);
            if(curr->right) curr = curr->right;
            else curr = curr->left;
        }
        
        for(int i =temp.size()-1; i >=0;i--){
            res.push_back(temp[i]);
        }

    }
    
    vector<int> boundaryTraversal(Node *root) {
        // code here
        vector<int>res;
        if(root == NULL){
            return res;
        }
        if (!isLeaf(root))
            res.push_back(root->data);
        
        if(root->left) leftSide(root,res);
        addLeaves(root,res);
        if(root->right) rightSide(root,res);
        return res;
    }
};

int main() {
    // Test cases
    return 0;
}
