// Problem: Level of a Node in Binary Tree
// Date: February 17, 2026

#include <bits/stdc++.h>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

int getLevelOfNode(TreeNode* root, int key, int level = 1) {
    if (!root) return -1;
    if (root->val == key) return level;
    
    int left = getLevelOfNode(root->left, key, level + 1);
    if (left != -1) return left;
    
    return getLevelOfNode(root->right, key, level + 1);
}

int main() {
    // Test cases
    return 0;
}
