// Problem: Diameter of Binary Tree
// Date: February 17, 2026

#include <bits/stdc++.h>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

int height(TreeNode* root, int& diameter) {
    if (!root) return 0;
    
    int leftH = height(root->left, diameter);
    int rightH = height(root->right, diameter);
    
    diameter = max(diameter, leftH + rightH);
    return 1 + max(leftH, rightH);
}

int diameterOfBinaryTree(TreeNode* root) {
    int diameter = 0;
    height(root, diameter);
    return diameter;
}

int main() {
    // Test cases
    return 0;
}
