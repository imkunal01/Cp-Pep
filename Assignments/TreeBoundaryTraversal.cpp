// Problem: Tree Boundary Traversal
// Date: February 18, 2026

#include <bits/stdc++.h>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

void addLeftBoundary(TreeNode* root, vector<int>& result) {
    TreeNode* curr = root->left;
    while (curr) {
        if (curr->left || curr->right) result.push_back(curr->val);
        curr = curr->left ? curr->left : curr->right;
    }
}

void addLeaves(TreeNode* root, vector<int>& result) {
    if (!root) return;
    if (!root->left && !root->right) {
        result.push_back(root->val);
        return;
    }
    addLeaves(root->left, result);
    addLeaves(root->right, result);
}

void addRightBoundary(TreeNode* root, vector<int>& result) {
    vector<int> temp;
    TreeNode* curr = root->right;
    while (curr) {
        if (curr->left || curr->right) temp.push_back(curr->val);
        curr = curr->right ? curr->right : curr->left;
    }
    for (int i = temp.size() - 1; i >= 0; i--)
        result.push_back(temp[i]);
}

vector<int> boundaryTraversal(TreeNode* root) {
    vector<int> result;
    if (!root) return result;
    
    if (root->left || root->right) result.push_back(root->val);
    addLeftBoundary(root, result);
    addLeaves(root, result);
    addRightBoundary(root, result);
    return result;
}

int main() {
    // Test cases
    return 0;
}
