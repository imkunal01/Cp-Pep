#include <bits/stdc++.h>
using namespace std;


void Bubble(vector<int> &arr){
    int n = arr.size();

    for(int i = 0; i < n - 1; i++){
        for(int j = 0; j < n - 1 - i; j++){
            if(arr[j] > arr[j + 1]){
                swap(arr[j], arr[j + 1]);
            }
        }
    }
}
// void OptimBubble(vector<int>& arr){
//     bool swapped;
//     int n = arr.size();
//     for(int i = 0; i < n - 1; i++){
//         swapped = false;
//         for(int j = 0; j < n - 1 - i; j++){
//             if(arr[j] > arr[j + 1]){
//                 swap(arr[j], arr[j + 1]);
//                 swapped = true;
//             }
//         }
//         if(!swapped){
//             break;
//         }
//     }
// }

int main() {
    vector<int>arr= {2,4,1,4,6,2,3};
    Bubble(arr);
    // OptimBubble(arr);

    for(int i : arr){
        cout << i << " ";
    }

    return 0;
}