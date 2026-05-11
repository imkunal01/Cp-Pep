// Problem: Design Circular Queue
// Date: February 17, 2026

#include <bits/stdc++.h>
using namespace std;

class MyCircularQueue {
    vector<int> data;
    int head;
    int tail;
    int count;
    int capacity;

public:
    MyCircularQueue(int k) {
        data.resize(k);
        head = 0;
        tail = -1;
        count = 0;
        capacity = k;
    }
    
    bool enQueue(int value) {
        if (isFull()) {
            return false;
        }
        tail = (tail + 1) % capacity;
        data[tail] = value;
        ++count;
        return true;
    }
    
    bool deQueue() {
        if (isEmpty()) {
            return false;
        }
        head = (head + 1) % capacity;
        --count;
        return true;
    }
    
    int Front() {
        if (isEmpty()) {
            return -1;
        }
        return data[head];
    }
    
    int Rear() {
        if (isEmpty()) {
            return -1;
        }
        return data[tail];
    }
    
    bool isEmpty() {
        return count == 0;
    }
    
    bool isFull() {
        return count == capacity;
    }
};

int main() {
    // Test cases
    return 0;
}
