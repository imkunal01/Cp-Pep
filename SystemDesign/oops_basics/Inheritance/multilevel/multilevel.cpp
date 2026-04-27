#include <iostream>
using namespace std;
class Person{
    private:
        string name;
        int age;

    public: 
        Person(string n, int a) : name(n), age(a) {}

        void displayPerson(){
            cout<<"Name: "<<name<<" Age: "<<age<<endl;
        }
};

class Student : public Person{
    private: 
        int roll;

    public: 
        Student(string n, int a, int r) : Person(n, a), roll(r) {}

        void displayStudent(){
            cout<<"RollNo: "<< roll<<endl;
        }
};

class Monitor: public Student{
    private:
        string section;
    public: 
        Monitor(string n, int a, int r, string s) : Student(n, a, r), section(s) {}
        void displaySection(){
            cout<<"Section: "<<section<<endl;
        }
        void display(){
            displayPerson();
            displayStudent();
            displaySection();
        }
};

int main() {
    Monitor m("Alice", 20, 101, "A");
    m.display();
    return 0;
}