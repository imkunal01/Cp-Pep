// Problem: Count Complete Tree Nodes
// Date: February 17, 2026

#include <bits/stdc++.h>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

int leftHeight(TreeNode* node) {
    int h = 0;
    while (node) {
        h++;
        node = node->left;
    }
    return h;
}

int rightHeight(TreeNode* node) {
    int h = 0;
    while (node) {
        h++;
        node = node->right;
    }
    return h;
}

int countNodes(TreeNode* root) {
    if (!root) return 0;
    
    int lh = leftHeight(root);
    int rh = rightHeight(root);
    
    if (lh == rh) return (1 << lh) - 1;  // 2^h - 1
    return 1 + countNodes(root->left) + countNodes(root->right);
}

int main() {
    // Test cases
    return 0;
}
