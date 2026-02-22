// Problem: Invert a Binary Tree
// Date: February 17, 2026

#include <bits/stdc++.h>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

TreeNode* invertTree(TreeNode* root) {
    if (!root) return nullptr;
    
    TreeNode* left = invertTree(root->left);
    TreeNode* right = invertTree(root->right);
    
    root->left = right;
    root->right = left;
    
    return root;
}

int main() {
    // Test cases
    return 0;
}
