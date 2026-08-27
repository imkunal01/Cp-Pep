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

// TODO: Implement solution
int rangeSumBST(TreeNode* root, int low, int high) {
    // Sum of all nodes with values in [low, high]

    if(root == NULL){
        return 0;
    }

    if(root->val >low){
        return rangeSumBST(root->right,low,high);
    }

    if(root->val < high){
        return rangeSumBST(root->left,low,high);
    }

    return root->val+(rangeSumBST(root->left, low, high)+ rangeSumBST(root->right,low,high));
    return 0;
}

int main() {
    
    return 0;
}
