#include <bits/stdc++.h>
using namespace std;
class TreeNode {
public:
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};


void inorder(TreeNode* root,vector<int>res) {
        if (root == NULL) {
            return;
        }
        inorder(root->left,res);
        res.push_back(root->val);
        inorder(root->right,res);
}

vector<int> inorderTraversal(TreeNode* root) {
        vector<int>res;
        inorder(root,res);
        return res;
}

// build a tree from a given array
TreeNode* buildTree(vector<int> arr, int index) {
    if (index >= arr.size() || arr[index] == -1) {
        return NULL;
    }
    TreeNode* node = new TreeNode(arr[index]);
    node->left = buildTree(arr, 2 * index + 1);
    node->right = buildTree(arr, 2 * index + 2);
    return node;
}
//explainantion for this buildTree function:
// The buildTree function takes a vector of integers (arr) and an index as input.
// It checks if the index is out of bounds or if the value at the index is -1 (indicating a null node). If either condition is true, it returns NULL.
// If the index is valid, it creates a new TreeNode with the value at the current index.
// It then recursively builds the left subtree by calling buildTree with the index of the left child
// (2 * index + 1) and the right subtree with the index of the right child (2 * index + 2). this 2 * index + 1 and 2 * index + 2 is based on the property of a complete binary tree where for any given node at index i, its left child is at index 2*i + 1 and its right child is at index 2*i + 2.

int main() {
    
    TreeNode* l = new TreeNode(1);
    l->left = new TreeNode(2);
    l->right = new TreeNode(3);

    TreeNode* r= new TreeNode(1);
    r->left = new TreeNode(2);
    r->right = new TreeNode(3);

    vector<int> v = inorderTraversal(r);
    for(int i : v){
        cout<<i<<" ";
    }
    
    return 0;
}