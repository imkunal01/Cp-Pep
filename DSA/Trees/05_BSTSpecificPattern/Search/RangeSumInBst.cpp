#include <bits/stdc++.h>
using namespace std;
class TreeNode {
public:
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

    int rangeSumBST(TreeNode* root, int low, int high) {
        if(root == NULL){
            return 0;
        }

        if(root->val < low ){
            return rangeSumBST(root->right,low,high);
        }
        
        if(root->val >high ){
            return rangeSumBST(root->left,low,high);
        }
        return root->val + rangeSumBST(root->left,low,high) + rangeSumBST(root->right,low,high);
    }

int main() {

    TreeNode* r= new TreeNode(1);
    r->left = new TreeNode(2);
    r->right = new TreeNode(3);

    int result = rangeSumBST(r, 1, 3);

    cout<<endl;
    cout<<result;

    return 0;
}