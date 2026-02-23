    // Problem: All Nodes at Distance K
    // Date: February 19, 2026

    #include <bits/stdc++.h> // Include all standard libraries
    using namespace std; // Use standard namespace

    struct TreeNode { // Define tree node structure
        int val; // Node value
        TreeNode* left; // Pointer to left child
        TreeNode* right; // Pointer to right child
        TreeNode(int x) : val(x), left(nullptr), right(nullptr) {} // Constructor
    };

    // Build a map storing parent pointers for each node
    void buildParentMap(TreeNode* root, unordered_map<TreeNode*, TreeNode*>& parent) {
        if (!root) return; // Base case: if node is null, return
        if (root->left) { // If left child exists
            parent[root->left] = root; // Map left child to its parent
            buildParentMap(root->left, parent); // Recursively process left subtree
        }
        if (root->right) { // If right child exists
            parent[root->right] = root; // Map right child to its parent
            buildParentMap(root->right, parent); // Recursively process right subtree
        }
    }

    vector<int> distanceK(TreeNode* root, TreeNode* target, int k) {
        unordered_map<TreeNode*, TreeNode*> parent; // Store parent pointers
        buildParentMap(root, parent); // Build parent map
        
        vector<int> result; // Store result nodes
        unordered_set<TreeNode*> visited; // Track visited nodes
        queue<TreeNode*> q; // BFS queue
        q.push(target); // Start from target node
        visited.insert(target); // Mark target as visited
        int dist = 0; // Initialize distance counter

        while (!q.empty()) { // While queue is not empty
            if (dist == k) { // If we reached distance k
                while (!q.empty()) { // Extract all nodes at distance k
                    result.push_back(q.front()->val); // Add node value to result
                    q.pop(); // Remove node from queue
                }
                return result; // Return result
            }
            int size = q.size(); // Get current  level ka size
            for (int i = 0; i < size; i++) { // Process all nodes at current distance
                TreeNode* node = q.front(); // Get front node
                q.pop(); // Remove from queue
                if (node->left && !visited.count(node->left)) { // If left child exists and not visited
                    visited.insert(node->left); // Mark as visited
                    q.push(node->left); // Add to queue
                }
                if (node->right && !visited.count(node->right)) { // If right child exists and not visited
                    visited.insert(node->right); // Mark as visited
                    q.push(node->right); // Add to queue
                }
                if (parent.count(node) && !visited.count(parent[node])) { // If parent exists and not visited
                    visited.insert(parent[node]); // Mark as visited
                    q.push(parent[node]); // Add to queue
                }
            }
            dist++; // Increment distance counter
        }
        return result; // Return result
    }

    int main() {    
        // Create binary tree
        TreeNode* root = new TreeNode(3); // Create root node with value 3
        root->left = new TreeNode(5); // Create left child with value 5
        root->right = new TreeNode(1); // Create right child with value 1
        root->left->left = new TreeNode(6); // Create left-left child with value 6
        root->left->right = new TreeNode(2); // Create left-right child with value 2
        root->right->left = new TreeNode(0); // Create right-left child with value 0
        root->right->right = new TreeNode(8); // Create right-right child with value 8
        TreeNode* target = root->left; // Set target to node with value 5
        int k = 2; // Set distance to 2
        vector<int> result = distanceK(root, target, k); // Find all nodes at distance k
        cout << "Nodes at distance " << k << " from target node " << target->val << ": "; // Print header
        for (int val : result) { // Iterate through result
            cout << val << " "; // Print each value
        }
        cout << endl; // Print newline

        return 0; // Return success
    }
