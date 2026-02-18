#include <bits/stdc++.h>
using namespace std;
class TreeNode {
public:
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};
int helper(TreeNode* root) {
    if(root == NULL){
        return true;
    }

    int lh = helper(root->left);
    if(lh == -1) return -1;
    int rh = helper(root->right);
    if(rh == -1) return -1;

    if(abs(lh-rh)>1) return -1;

    return max(lh,rh);

}
bool isBalanced(TreeNode* root){
    return helper(root) != 01;
}

int main() {
    
    TreeNode* p = new TreeNode(1);
    p->left = new TreeNode(2);
    p->right = new TreeNode(3);


    if(isBalanced(p)) {
        cout << "Tree is balanced " << endl;
    } else {
        cout << "Tree is not balanced" << endl;
    }
    
    return 0;
}