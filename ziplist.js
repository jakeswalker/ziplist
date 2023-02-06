const letters = ['a', 'b', 'c'];
const numbers = [1, 2, 3];
function zipList(list1, list2) {
  const arr = [];
  for (let i = 0; i < list1.length; i++) {
    arr.push(list1[i]);
    arr.push(list2[i]);
  }
  return arr;
}
console.log(zipList(letters, numbers));

function zipListTheSimpleWay(list1, list2) {
  const arr = [];
  _.each(list1, function (value, index) {
    arr[index * 2] = value;
  });
  _.each(list2, function (value, index) {
    arr[index * 2 + 1] = value;
  });
  return arr;
}
console.log(zipListTheSimpleWay(letters, numbers));
