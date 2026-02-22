// Problem: Depth of a Node
// Date: February 17, 2026

#include <bits/stdc++.h>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

int depthOfNode(TreeNode* root, int key, int depth = 0) {
    if (!root) return -1;
    if (root->val == key) return depth;
    
    int left = depthOfNode(root->left, key, depth + 1);
    if (left != -1) return left;
    
    return depthOfNode(root->right, key, depth + 1);
}

int main() {
    // Test cases
    return 0;
}
