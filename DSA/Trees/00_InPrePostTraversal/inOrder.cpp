#include <bits/stdc++.h>
using namespace std;
class TreeNode {
public:
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};


void inorder(TreeNode* root,vector<int>res) {
        if (root == NULL) {
            return;
        }
        inorder(root->left,res);
        res.push_back(root->val);
        inorder(root->right,res);
}

vector<int> inorderTraversal(TreeNode* root) {
        vector<int>res;
        inorder(root,res);
        return res;
}

int main() {
    
    TreeNode* l = new TreeNode(1);
    l->left = new TreeNode(2);
    l->right = new TreeNode(3);

    TreeNode* r= new TreeNode(1);
    r->left = new TreeNode(2);
    r->right = new TreeNode(3);

    vector<int> v = inorderTraversal(r);
    for(int i : v){
        cout<<i<<" ";
    }
    
    return 0;
}