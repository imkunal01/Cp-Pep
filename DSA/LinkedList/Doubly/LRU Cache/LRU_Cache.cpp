#include <bits/stdc++.h>
using namespace std;
class LRUCache {
public:

    class Node {
    public:
        int key;
        int value;
        Node* prev;
        Node* next;

        Node(int k, int v) {
            key = k;
            value = v;
            prev = nullptr;
            next = nullptr;
        }
        
    };

    int capacity;
    unordered_map<int, Node*> mp;
    Node* head;
    Node* tail;
    
    LRUCache(int capacity) {
        this->capacity = capacity;
        head = new Node(-1, -1);
        tail = new Node(-1, -1);
        head->next = tail;
        tail->prev = head;
    }

    void addNode(Node* node) {
        Node* prevNode = tail->prev;
        prevNode->next = node;
        node->prev = prevNode;
        node->next = tail;
        tail->prev = node;
    }

    void deleteNode(Node* node) {
        Node* prevNode = node->prev;
        Node* nextNode = node->next;
        prevNode->next = nextNode;
        nextNode->prev = prevNode;
    }
    
    int get(int key) {
        if (mp.find(key) == mp.end())
            return -1;
        Node* node = mp[key];
        deleteNode(node);
        addNode(node);
        return node->value;
    }
    
    void put(int key, int value) {
        if (mp.find(key) != mp.end()) {
            Node* existing = mp[key];
            existing->value = value;
            deleteNode(existing);
            addNode(existing);
            return;
        }
        if (mp.size() == capacity) {
            Node* lru = head->next;
            deleteNode(lru);
            mp.erase(lru->key);
            delete lru;
        }
        Node* newNode = new Node(key, value);
        addNode(newNode);
        mp[key] = newNode;
    }
};

int main(){
    LRUCache* cache = new LRUCache(2);
    cache->put(1, 1);
    cache->put(2, 2);
    cout << cache->get(1) << endl; // returns 1
    cache->put(3, 3); // evicts key 2
    cout << cache->get(2) << endl; // returns -1 (not found)
    cache->put(4, 4); // evicts key 1
    cout << cache->get(1) << endl; // returns -1 (not found)
    cout << cache->get(3) << endl; // returns 3
    cout << cache->get(4) << endl; // returns 4
}