// Problem: Predecessor and Successor of a node
// Date: February 21, 2026

#include <bits/stdc++.h>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

void findPreSuc(TreeNode* root, TreeNode*& pre, TreeNode*& suc, int key) {
    if (!root) return;
    
    if (root->val == key) {
        // Predecessor: rightmost node in left subtree
        if (root->left) {
            TreeNode* temp = root->left;
            while (temp->right) temp = temp->right;
            pre = temp;
        }
        // Successor: leftmost node in right subtree
        if (root->right) {
            TreeNode* temp = root->right;
            while (temp->left) temp = temp->left;
            suc = temp;
        }
    } else if (key < root->val) {
        suc = root;  // Current node could be successor
        findPreSuc(root->left, pre, suc, key);
    } else {
        pre = root;  // Current node could be predecessor
        findPreSuc(root->right, pre, suc, key);
    }
}

int main() {
    // Test cases
    return 0;
}
