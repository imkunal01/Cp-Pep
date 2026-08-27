#include <bits/stdc++.h>
using namespace std;
class Node;
using P = pair<Node*, int>;

class Node {
public:
    int val;
    Node *left;
    Node *right;
    Node(int x) : val(x), left(NULL), right(NULL) {}
};

vector<int> topView(Node *root) {
    if (root == NULL) {
        return {};
    }

    map<int, int> topNodes;
    queue<P> q;

    q.push(make_pair(root, 0));

    while (!q.empty()) {
        Node *curr = q.front().first;
        int hd = q.front().second;
        q.pop();

        if (topNodes.find(hd) == topNodes.end()) {
            topNodes[hd] = curr->val;
        }
        if (curr->left) {
            q.push(make_pair(curr->left, hd - 1));
        }
        if (curr->right) {
            q.push(make_pair(curr->right, hd + 1));
        }
    }

    vector<int> res;
    for (auto &entry : topNodes) {
        res.push_back(entry.second);
    }
    return res;
}

    // vector<int> topViewBFS(Node *root) {
    //     vector<int> v;

    //     if(root == NULL){
    //         return v;
    //     }
        
    //     queue<pair<Node*, int>> q;
    //     map<int,int> mp;

    //     q.push({root,0});

    //     while(!q.empty()){

    //         auto node = q.front();
    //         q.pop();

    //         Node* f = node.first;
    //         int hd = node.second;

    //         if(mp.find(hd) == mp.end()) mp[hd] = f->val;
    //         if(f->left) q.push({f->left,hd-1});
    //         if(f->right) q.push({f->right,hd+1});

    //     }

    //     for(auto& i:mp){
    //         v.push_back(i.second);
    //     }
    //     return v;
    // }

int main() {

    Node* r= new Node(1);
    r->left = new Node(2);
    r->right = new Node(3);

    vector<int> resultBFS = topView(r);

    cout<<endl;
    for(int i=0;i<resultBFS.size();i++){
        cout<<resultBFS[i]<<" ";
    }

    return 0;
}