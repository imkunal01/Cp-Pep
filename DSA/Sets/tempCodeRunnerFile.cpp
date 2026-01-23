#include <bits/stdc++.h>
using namespace std;
int main() {
    set<int> s = {3,4,2,3,4,1,2,3,7,6,5,10,9};
    auto it = s.begin();
    
    for (it = s.begin(); it != s.end(); ) {
        if (*it % 2 == 1) {
            it = s.erase(it);
            s.insert((*it) * (*it));
        } else {
            ++it;
        }
    }
    
    // // set<int> squared;
    // for (int v : s) {
    //     s.insert(v * v);
    // }

    auto highest = prev(s.end());

    
    for(int i : s){
        cout<<i<<" ";
    }
    cout<<endl;
    cout<<"Higest Element: "<< *highest<<endl;
    return 0;
}