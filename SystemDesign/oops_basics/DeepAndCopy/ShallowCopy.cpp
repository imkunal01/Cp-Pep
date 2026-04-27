#include <iostream>
using namespace std;

class Test {
public:
    int *p;

    Test(int val) {
        p = new int(val);
    }
};

int main() {
    Test t1(10);
    Test t2 = t1;  // shallow copy

    *t2.p = 50;

    cout << *t1.p;  // Output: 50 😬
}