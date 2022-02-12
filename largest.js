// function longest_str_in_array(arra) {
//     var max_str = arra[0].length;
//     var ans = arra[0];
//     for (var i = 1; i < arra.length; i++) {
//         var maxi = arra[i].length;
//         if (maxi > max_str) {
//             ans = arra[i];
//             max_str = maxi;
//         }
//     }
//     return ans;
// }
// console.log(longest_str_in_array(["ab", "a", "abcd"]));
// console.log(longest_str_in_array(["ab", "ab", "ab"]));

var arr = ['sokina', 'jyorina', 'morrffffjina', 'arjina', 'koffffffffffffrjina'];

var lgth = 0;
var longest;

for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > lgth) {
        var lgth = arr[i].length;
        longest = arr[i];
    }
}

console.log(longest);