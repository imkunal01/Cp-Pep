#include <bits/stdc++.h>
using namespace std;
class TreeNode {
public:
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

 


    vector<int> topViewBFS(TreeNode *root) {
        vector<int> v;
        if(root == NULL){
            return v;
        }
        queue<pair<TreeNode*, int>> q;
        map<int,int> mp;

        q.push({root,0});

        while(!q.empty()){
            auto node = q.front();
            q.pop();

            TreeNode* f = node.first;
            int hd = node.second;

            if(mp.find(hd) == mp.end()) mp[hd] = f->val;
            if(f->left) q.push({f->left,hd-1});
            if(f->right) q.push({f->right,hd+1});
        }

        for(auto& i:mp){
            v.push_back(i.second);
        }
        return v;
    }

int main() {

    TreeNode* r= new TreeNode(1);
    r->left = new TreeNode(2);
    r->right = new TreeNode(3);


    vector<int> resultBFS = topViewBFS(r);
    cout<<endl;
    for(int i=0;i<resultBFS.size();i++){
        cout<<resultBFS[i]<<" ";
    }
    return 0;
}