#include <bits/stdc++.h>
using namespace std;
class TreeNode {
public:
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

vector<vector<int>> levelOrder(TreeNode* root) {
        vector<vector<int>> ans;
        if (root == NULL) {
            return ans;
        }
        queue<TreeNode*> q;
        q.push(root);
        while (!q.empty()) {
            int size = q.size();
            vector<int> level;
            for (int i = 0; i < size; i++) {
                TreeNode* temp = q.front();
                q.pop();
                level.push_back(temp->val);
                if (temp->left)
                    q.push(temp->left);
                if (temp->right)
                    q.push(temp->right);
            }
            ans.push_back(level);
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

    vector<vector<int>> v = levelOrder(r);
    int n = v.size();
    for(int i =0;i<n;i++){
        int m = v[i].size();
        for(int j = 0;j<m;j++){
            cout<<v[i][j]<<" ";
        }
        cout<<endl;
    }
    
    return 0;
}