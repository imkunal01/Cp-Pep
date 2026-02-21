#include <bits/stdc++.h>
using namespace std;
class TreeNode {
public:
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

    bool check(TreeNode* root, int key){
        if(root == NULL || root->val == key)return root;
        if(root->val > key) return check(root->left,key);
        else  return check(root->left,key);
    }

int main() {

    TreeNode* r= new TreeNode(1);
    r->left = new TreeNode(2);
    r->right = new TreeNode(3);

    bool s = check(r,2);

    cout<<endl;
        cout<<s<<" ";
    

    return 0;
}