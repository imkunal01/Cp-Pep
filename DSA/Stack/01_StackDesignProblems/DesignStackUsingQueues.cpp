#include <bits/stdc++.h>
using namespace std;

class MyStack{
    public:
    
    queue<int> q1,q2;

    void push(int x){
        q2.push(x);
        while (!q1.empty())
        {
            q2.push(q1.front());
            q1.pop();
        }
        swap(q1,q2);
        
    }

    void pop(){
        if(!q1.empty()){
            q1.pop();
        }  
    }

    int top(){
        return q1.front();
    }

    bool isEmpty(){
        return q1.empty();
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