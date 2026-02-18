#include <bits/stdc++.h>
using namespace std;
class TreeNode {
public:
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

bool isSameTree(TreeNode* p, TreeNode* q) {
    if(p == NULL && q == NULL){
        return true;
    }
    if(p == NULL || q == NULL){
        return false;
    }
    if(p->val != q->val){
        return false;
    }
    return isSameTree(p->left,q->left) && isSameTree(p->right,q->right);
}

int main() {
    
    return 0;
    // Create first tree
    TreeNode* p = new TreeNode(1);
    p->left = new TreeNode(2);
    p->right = new TreeNode(3);
    
    // Create second tree
    TreeNode* q = new TreeNode(1);
    q->left = new TreeNode(2);
    q->right = new TreeNode(3);
    
    // Test isSameTree
    if(isSameTree(p, q)) {
        cout << "Trees are the same" << endl;
    } else {
        cout << "Trees are different" << endl;
    }
    
    return 0;
}