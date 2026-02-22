// Problem: Search in BST
// Date: February 20, 2026

#include <bits/stdc++.h>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

TreeNode* searchBST(TreeNode* root, int val) {
    if (!root || root->val == val) return root;
    
    if (val < root->val)
        return searchBST(root->left, val);
    else
        return searchBST(root->right, val);
}

int main() {
    // Test cases
    return 0;
}
