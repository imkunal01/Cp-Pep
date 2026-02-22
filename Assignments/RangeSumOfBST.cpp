// Problem: Range Sum of BST
// Date: February 20, 2026

#include <bits/stdc++.h>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

int rangeSumBST(TreeNode* root, int low, int high) {
    if (!root) return 0;
    
    int sum = 0;
    if (root->val >= low && root->val <= high)
        sum += root->val;
    
    if (root->val > low)
        sum += rangeSumBST(root->left, low, high);
    if (root->val < high)
        sum += rangeSumBST(root->right, low, high);
    
    return sum;
}

int main() {
    // Test cases
    return 0;
}
