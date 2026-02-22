// Problem: Kth Smallest in BST
// Date: February 21, 2026

#include <bits/stdc++.h>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

void inorder(TreeNode* root, vector<int>& result) {
    if (!root) return;
    inorder(root->left, result);
    result.push_back(root->val);
    inorder(root->right, result);
}

int kthSmallest(TreeNode* root, int k) {
    vector<int> result;
    inorder(root, result);
    return result[k - 1];
}

// Optimized: Stop early when k elements found
int kthSmallestOptimized(TreeNode* root, int& k) {
    if (!root) return -1;
    int left = kthSmallestOptimized(root->left, k);
    if (k == 0) return left;
    k--;
    if (k == 0) return root->val;
    return kthSmallestOptimized(root->right, k);
}

int main() {
    // Test cases
    return 0;
}
