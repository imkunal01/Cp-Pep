#include <iostream>
using namespace std;

class Node {
  public:
    int data;
    Node* left;
    Node* right;
    Node(int d) {
        data = d;
        left = nullptr;
        right = nullptr;
    }
};

bool search(Node* root, int key, Node* temp) {
    if (root == nullptr)
        return false;

    Node* current = root;
    while (current != nullptr) {
        if (current->data == key && current != temp) 
            return true;
        else if (key < current->data) 
            current = current->left;
        else 
            current = current->right;
    }
    return false; 
}
bool findTargetRec(Node* root, Node* current, int target) {
    if (current == nullptr)
        return false;
  	
  	int complement = target - current->data;
  	if (search(root, complement, current)) 
      	return true;
	
    return findTargetRec(root, current->left, target) || 
      		findTargetRec(root, current->right, target);
}
bool findTarget(Node* root, int target) {
    Node* curr = root;
  	return findTargetRec(root, curr, target);
}

int main() {

    // Constructing the following BST:
    //         7
    //        / \
    //       3   8
    //      / \   \
    //     2   4   9

    Node *root = new Node(7);
    root->left = new Node(3);
    root->right = new Node(8);
    root->left->left = new Node(2);
    root->left->right = new Node(4);
    root->right->right = new Node(9);

    int target = 12;

    cout << (findTarget(root, target) ? "true" : "false");
    return 0;
}