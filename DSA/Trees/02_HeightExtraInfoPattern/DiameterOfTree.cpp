#include <bits/stdc++.h>
using namespace std;
class TreeNode {
public:
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};
int d = 0;
    int height(TreeNode* root) {
        if (root == NULL) {
            return 0;
        }

        int lh = height(root->left);
        int rh = height(root->right);
        d = max(d, lh + rh);

        return 1 + max(lh, rh);
    }
    int diameterOfBinaryTree(TreeNode* root) {
        height(root);
        return d;
    }



int main() {
    
    TreeNode* l = new TreeNode(1);
    l->left = new TreeNode(2);
    l->right = new TreeNode(3);

    TreeNode* r= new TreeNode(1);
    r->left = new TreeNode(2);
    r->right = new TreeNode(3);


   cout<<diameterOfBinaryTree(r);
    
    return 0;
}