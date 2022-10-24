/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  var list1 = l1.reverse();
  var list2 = l2.reverse();
  var n1 = list1.join('');
  var n2 = list2.join('');

  var numb = Number(n1) + Number(n2);
  numb = String(numb);
  var array = numb.split('');
  var result = array.reverse();

  return result;


};

// test
console.log(addTwoNumbers([0,0,2], [0,0,4]));