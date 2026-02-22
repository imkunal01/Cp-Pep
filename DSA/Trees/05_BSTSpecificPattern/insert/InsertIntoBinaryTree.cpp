#include <bits/stdc++.h>
using namespace std;

class TreeNode {
public:
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};
TreeNode* insertIntoBST(TreeNode* root, int val) {
    if(root == NULL){
        return new TreeNode(val);
    }
    if(root->val > val){
        root->left = insertIntoBST(root->left,val);
    }else{
        root->right = insertIntoBST(root->right,val);
    }
    return root;
}
int main() {
    TreeNode* r= new TreeNode(1);
    r->left = new TreeNode(2);
    r->right = new TreeNode(3);
    insertIntoBST(r,4);
    return 0;
}