#include <bits/stdc++.h>
using namespace std;
class MedianFinder {
    public:
    priority_queue<int>left;// max heap for smaller values
    priority_queue<int,vector<int>,greater<int>>right; // min heap for larger values 

    MedianFinder() {}

    void addNum(int num) {
        left.push(num);
        // order fix karne ke liye 
        if(!right.empty() && left.top()>right.top()){
            right.push(left.top());
            left.pop();
        }
        // size imbalance fix karne ke liye for left 
        if(left.size()> right.size()+1){
            right.push(left.top());
            left.pop();
        }
        // size imbalance fix karne ke liye for right
        else if(right.size() > left.size()){
            left.push(right.top());
            right.pop();
        }
    }
    
    // 5, 15, 1, 3

        // left = [5]
        // right = []
        // Median = 5

        // Insert 15
        // Push into left
        // left = [15,5]
        // Fix order
        // right empty skip
        // Fix size:
        // left.size() = 2, right = 0
        // Move top to right
        // left = [5]
        // right = [15]
        // Median = (5+15)/2 = 10
        
        // add 1
        // always Push into left
        // left = [5,1]
        // Check order
        // left.top() = 5
        // right.top() = 15
        // thik hai 
        // Check size:
        // left = 2
        // right = 1
        // Allowed (difference = 1)
        // Median = left.top() = 5
        // Sorted version: [1,5,15]
        // Correct median = 5 cuz condition says middle of mean is median
        
        // Insert 3
        // Push into left:
        // left = [5,1,3]
        // Check order:
        // left.top() = 5
        // right.top() = 15
        // OK
        // Check size:
        // left = 3
        // right = 1
        // Difference = 2 
        // Move top of left to right:
        // left = [3,1]
        // right = [5,15]
        // Now balanced.
        // Median = (3+5)/2 = 4
        
        // Sorted array: [1,3,5,15]
        // Correct median = 4 
        
    double findMedian() {
        if(left.size() == right.size()){
            return (left.top()+right.top())/2.0;
        }
        return left.top();
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder* obj = new MedianFinder();
 * obj->addNum(num);
 * double param_2 = obj->findMedian();
 */
int main() {
        MedianFinder* obj = new MedianFinder();
        obj->addNum(5);
        cout<<obj->findMedian()<<endl;
        obj->addNum(15);
        cout<<obj->findMedian()<<endl;
        obj->addNum(1);
        cout<<obj->findMedian()<<endl;
        obj->addNum(3);
        cout<<obj->findMedian()<<endl;    
    return 0;
}