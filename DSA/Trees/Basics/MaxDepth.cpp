#include <bits/stdc++.h>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};


int height(TreeNode* root){
    if(root == NULL){
        return 0;
    }
    int l = height(root->left);
    int r = height(root->right);
    int h = 1+max(l,r);
    return h;
}


int main() {
    TreeNode* root = new TreeNode(1);
    root->left = new TreeNode(2);
    root->right = new TreeNode(3);

    int h = height(root);
    cout<<h<<" ";


    return 0;
}