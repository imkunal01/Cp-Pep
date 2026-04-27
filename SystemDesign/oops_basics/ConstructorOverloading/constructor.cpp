// constructor overloading with initialization list
#include <bits/stdc++.h>
using namespace std;
class student {
    public:
    string name;
    int age;
    student() : name("unknown"), age(0) {}
    student(string s, int a) : name(s), age(a) {}
    student(string s1, string s2, int b) : name(s1), age(b) {}
};
int main() {
    student s1;  // Calls default constructor
    student s2("Alice", 20);  // Calls parameterized constructor
    student s3("Bob", "25", 25);  // Calls parameterized constructor    
    return 0;
}