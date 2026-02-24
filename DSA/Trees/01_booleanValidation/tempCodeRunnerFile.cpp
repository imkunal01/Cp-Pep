#include <bits/stdc++.h>
using namespace std;
class TreeNode {
public:
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};
bool checkSymetric(TreeNode* leftNode,TreeNode* rightNode){
    
    if(leftNode == NULL && rightNode == NULL){
        return true;
    }
    
    if(leftNode == NULL || rightNode == NULL){
        return false;
    }

    if(leftNode->val != rightNode->val){
        return false;
    }
    return checkSymetric(leftNode->left,rightNode->right) && checkSymetric(leftNode->right,rightNode->left);
}

int main() {
    
    TreeNode* l = new TreeNode(1);
    l->left = new TreeNode(2);
    l->right = new TreeNode(3);

    TreeNode* r= new TreeNode(1);
    r->left = new TreeNode(2);
    r->right = new TreeNode(3);


    if(checkSymetric(r,l)) {
        cout << "Tree is symmetric " << endl;
    } else {
        cout << "Tree is not symmetric" << endl;
    }
    
    return 0;
}