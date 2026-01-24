// #include <bits/stdc++.h>
// using namespace std;
// int main() {
//     int n = 13;
//     bool flag = false;
//     if(n<=1) flag = false;
//     if(n==2) flag = true;
//     if(n%2==0){
//         flag = false;
//     }
//     for(int i = 3;i*i<=n;i+=2){
//         if(n%2==0){
//             flag = false;
//         }
//         else{
//             flag = true;
//         }
//     }
//     cout<<flag;
    
//     return 0;
// }



#include <bits/stdc++.h>
using namespace std;
int main() {
    int n = 13;
    bool flag = false;
    if(n<=1) flag = false;
    if(n==2) flag = true;
    if(n%2==0){
        flag = false;
    }
    for(int i = 3;i*i<=n;i+=2){
        if(n%2==0){
            flag = false;
        }
        else{
            flag = true;
        }
    }
    cout<<flag;
    
    return 0;
}