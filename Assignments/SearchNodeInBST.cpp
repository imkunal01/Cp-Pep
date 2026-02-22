// Problem: Search Node in BST
// Date: February 19, 2026

#include <bits/stdc++.h>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

bool searchNode(TreeNode* root, int val) {
    if (!root) return false;
    if (root->val == val) return true;
    
    if (val < root->val) return searchNode(root->left, val);
    return searchNode(root->right, val);
}

int main() {
    // Test cases
    return 0;
}
