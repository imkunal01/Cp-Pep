// Problem: Two Sum BST
// Date: February 20, 2026

#include <bits/stdc++.h>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

void inorder(TreeNode* root, unordered_set<int>& seen, int k, bool& found) {
    if (!root || found) return;
    
    inorder(root->left, seen, k, found);
    if (seen.count(k - root->val)) {
        found = true;
        return;
    }
    seen.insert(root->val);
    inorder(root->right, seen, k, found);
}

bool findTarget(TreeNode* root, int k) {
    unordered_set<int> seen;
    bool found = false;
    inorder(root, seen, k, found);
    return found;
}

int main() {
    // Test cases
    return 0;
}
