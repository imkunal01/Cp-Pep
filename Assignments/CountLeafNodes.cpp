// Problem: Count Leaf Nodes
// Date: February 17, 2026

#include <bits/stdc++.h>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

int countLeafNodes(TreeNode* root) {
    if (!root) return 0;
    
    if (!root->left && !root->right) return 1;
    
    return countLeafNodes(root->left) + countLeafNodes(root->right);
}

int main() {
    // Test cases
    return 0;
}
