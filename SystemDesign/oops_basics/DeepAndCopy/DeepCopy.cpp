#include <iostream>
using namespace std;

class Test {
public:
    int *p;

    Test(int val) {
        p = new int(val);
    }
    Test(const Test &t) {
        p = new int(*(t.p));
    }
};

int main() {
    Test t1(10);
    Test t2 = t1;  
    *t2.p = 50;

    cout <<"this object 1 "<< *t1.p;  
    cout << endl;
    cout << " This is object 2 " <<*t2.p;  
}