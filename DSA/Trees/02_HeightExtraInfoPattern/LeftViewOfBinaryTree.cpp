#include <bits/stdc++.h>
using namespace std;
class TreeNode {
public:
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

  void solve(TreeNode* root,int level,vector<int>&v){
        if(root == NULL){
            return;
        }
        if(level == v.size()){
            v.push_back(root->val);
        }
        solve(root->left,level+1,v);
        solve(root->right,level+1,v);
    }
    vector<int> leftView(TreeNode *root) {
        vector<int> v;
        solve(root,0,v);
        return v;
    }


    vector<int> LeftViewBFS(TreeNode *root) {
        vector<int> v;
        if(root == NULL){
            return v;
        }
        queue<TreeNode*> q;
        q.push(root);
        while(!q.empty()){
            int size = q.size();
            for(int i=0;i<size;i++){
                TreeNode* node = q.front();
                q.pop();
                if(i == 0){
                    v.push_back(node->val);
                }
                if(node->left != NULL){
                    q.push(node->left);
                }
                if(node->right != NULL){
                    q.push(node->right);
                }
            }
        }
        return v;
    }

int main() {

    TreeNode* r= new TreeNode(1);
    r->left = new TreeNode(2);
    r->right = new TreeNode(3);


   vector<int> result = leftView(r);
   for(int i=0;i<result.size();i++){
       cout<<result[i]<<" ";
   }

    vector<int> resultBFS = LeftViewBFS(r);
    cout<<endl;
    for(int i=0;i<resultBFS.size();i++){
        cout<<resultBFS[i]<<" ";
    }

    
    return 0;
}