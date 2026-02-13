#include <bits/stdc++.h>
using namespace std;


class MyStack{
    public:
    vector<int>v;
    int topidx;
    void push(int x){
        v.push_back(x);
    }
    void pop(){
        if(!v.empty()){
            v.pop_back();
        }
    }
    int top(){
        if(v.empty()){
            return -1;
        }
        return v.back();
    }
    bool isEmpty(){
        return v.empty();
    }
    int size(){
        return v.size();
    }
};

int main() {
    MyStack stack;
    
    stack.push(10);
    stack.push(20);
    stack.push(30);
    
    cout << "Top element: " << stack.top() << endl;
    
    while(!stack.isEmpty()){
        cout << stack.top() << " ";
        stack.pop();
    }
    cout << endl;
    
    return 0;
}