#include <bits/stdc++.h>
using namespace std;
class TreeNode {
public:
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

vector<vector<int>> zigzagLevelOrder(TreeNode* root){
    // we gonna reverse the array after every level

    vector<vector<int>> ans;

    if(root == NULL){
        return ans;
    }
    queue<TreeNode*> q;
    q.push(root);

    bool leftToRight = true;

    while(!q.empty()){
        int size = q.size();
        vector<int> level;

        for(int i = 0; i < size; i++){
            TreeNode* node = q.front();
            q.pop();

            level.push_back(node->val);

            if(node->left) q.push(node->left);
            if(node->right) q.push(node->right);
        }

        if(!leftToRight){
            reverse(level.begin(), level.end());
        }

        ans.push_back(level);
        leftToRight = !leftToRight;
    }
    return ans;
}
int main() {
    TreeNode* l = new TreeNode(1);
    l->left = new TreeNode(2);
    l->right = new TreeNode(3);

    TreeNode* r= new TreeNode(1);
    r->left = new TreeNode(2);
    r->right = new TreeNode(3);

    vector<vector<int>> v = zigzagLevelOrder(r);
    for(auto i : v){
        for(auto j : i){
            cout<<j<<" ";
        }
        cout<<endl;
    }
    
    return 0;
}