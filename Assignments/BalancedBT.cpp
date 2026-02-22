// Problem: Balanced Binary Tree
// Date: February 17, 2026

#include <bits/stdc++.h>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

int checkHeight(TreeNode* root) {
    if (!root) return 0;
    
    int leftH = checkHeight(root->left);
    if (leftH == -1) return -1;
    
    int rightH = checkHeight(root->right);
    if (rightH == -1) return -1;
    
    if (abs(leftH - rightH) > 1) return -1;
    return 1 + max(leftH, rightH);
}

bool isBalanced(TreeNode* root) {
    return checkHeight(root) != -1;
}

int main() {
    // Test cases
    return 0;
}
