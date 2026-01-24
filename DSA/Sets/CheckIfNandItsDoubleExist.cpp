// class Solution {
// public:
//     bool checkIfExist(vector<int>& arr) {
//         bool flag = false;
//         int n = arr.size();
//         set<int> s;
//         for (int x : arr) {
//             if (s.count(2 * x) || (x % 2 == 0 && s.count(x / 2)))
//                 flag=  true;
//             s.insert(x);
//         }
//         return flag;
//     }
// };

