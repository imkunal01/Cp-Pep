#include <bits/stdc++.h>
using namespace std;
class TreeNode {
public:
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

int height(TreeNode* root){
    if(root == NULL){
        return 0;
    }
    queue<TreeNode*> q;
    int h  =0;
    q.push(root);

    while(!q.empty()){
        int size = q.size();
        h++;
        for(int i =0;i<size;i++){
            TreeNode* temp = q.front();
            q.pop();
            if(temp->left) q.push(temp->left);
            if(temp->right) q.push(temp->right);
        }
    }
    return h;

}
int main() {
    TreeNode* l = new TreeNode(1);
    l->left = new TreeNode(2);
    l->right = new TreeNode(3);

    TreeNode* r= new TreeNode(1);
    r->left = new TreeNode(2);
    r->right = new TreeNode(3);

    int v = height(r);
    cout<<v<<" ";
    
    return 0;
}