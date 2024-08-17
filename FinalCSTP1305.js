// Question1: Reverse an Integer (5 MARKS)
// Given an integer x, return the integer obtained by reversing the digits
// of x.
// If its a negative number , the sign should preserve
// Test Case 1: Positive Number
// ● Input: x = 123
// ● Expected Output: 321
// ● Explanation: The digits of 123 are reversed to 321.
// Test Case 2: Negative Number
// ● Input: x = -456
// ● Expected Output: -654
// ● Explanation: The digits of -456 are reversed to -654, with the
// negative sign preserved.

//DONE 2 test cases
function reverseInt(int){
    let stringInt = int.toString();
    let answer = stringInt.split("").reverse().join("");
    console.log(Math.sign(int)*parseInt(answer));


}

reverseInt(123);
reverseInt(-456);

// Question 2: Given a sorted array of distinct integers and a target
// value, return the index if the target is found. If not, return the index
// where it would be if it were inserted in order.( 5 MARKS)
// Test Case 1: Target is in the array
// ● Input: nums = [1, 3, 5, 6], target = 5
// ● Expected Output: 2
// ● Explanation: The target 5 is found at index 2.

// Test Case 2: Target is not in the array (insert position in
// between)
// ● Input: nums = [1, 3, 5, 6], target = 2
// ● Expected Output: 1
// ● Explanation: The target 2 is not found, but it would be inserted
// at index 1.

//return index if number is in the array
//else return the index where it would be 
// SORTED ARRAY

//DONE 2 test cases
function findNum(arr,num){
    let answer = arr.indexOf(num);
    if(answer == -1){
        arr.push(num)
        console.log(arr.sort().indexOf(num));
    } else {
        console.log(answer);
    }
}
let nums = [1, 3, 5, 6];
let target = 5;

let nums2 = [1, 3, 5, 6] ;
let target2 = 2;

findNum(nums,target);
findNum(nums2,target2);


// Question3: Delete Node in a Linked List (5 MARKS)
// Write a function to delete a node (except the tail) in a singly
// linked list, given only access to that node.
// Test Case 1: Basic Deletion
// ● Input:
// ○ Linked List Node: 4 , where linked list is 4 -> 5 -> 1 -> 9
// ○ Node to delete: 5
// ● Output:
// ○ Linked List: 4, where linked list should become 4 -> 1 -> 9

// Test Case 2: Basic Deletion
// ● Input:
// ○ Linked List Node: 4 , where linked list is 4 -> 5 -> 1 -> 9
// ○ Node to delete: 4
// ● Output:
// ○ Linked List: 5, where linked list should become 5 -> 1 -> 9

//DONE 2 test cases ~~

class Node {
    constructor(data) {
        this.data = data; // Data on that node
        this.next = null; // Pointer to the next node
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    prepend(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode; // Updating the new Node to the head
        this.size++; // Increment the size
    }
    printList() {
        let current = this.head;
        let str = '';
        while(current !== null) {
            str = str + current.data + ' -> ';
            current = current.next;
        }

        console.log(str + ' null ');
    }

    removeFirst() {
        if (!this.head) {
            return null;
        }

        let removedNode = this.head;
        this.head = this.head.next;
        this.size--;
        return removedNode;
    }

    removeAt(index) {
        if (index < 0 || index > this.size) {
            return null; // Out of bounds
        }

        if (index === 0) {
            return this.removeFirst();
        }

        let current = this.head;
        let previous;
        let count = 0;

        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        previous.next = current.next;
        this.size--;

        return current.data;
    }

    search(data) {
        let current = this.head;

        while (!current) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }

        return false;
    }

    updateAt(data, index) {
        if (index < 0 || index > this.size) {
            return null; // Out of bounds
        }

        let current = this.head;
        let count = 0;

        while (count < index) {
            current = current.next;
            count++;
        }

        current.data = data; 

    }

    deleteNode(data){
        let current = this.head;
        let count = 0;
        while (current != null) {
            if (current.data === data) {
                linkedList.removeAt(count);
            }
            current = current.next;
            count++;
        }
    }
}

// 4 -> 5 -> 1 -> 9 -> null
let linkedList = new LinkedList();
linkedList.prepend(9);
linkedList.prepend(1);
linkedList.prepend(5);
linkedList.prepend(4);

// Test Case 1: Basic Deletion
// ● Input:
// ○ Linked List Node: 4 , where linked list is 4 -> 5 -> 1 -> 9
// ○ Node to delete: 5

linkedList.deleteNode(5);
linkedList.printList();
//Output:
// ○ Linked List: 4, where linked list should become 4 -> 1 -> 9


// Test Case 2: Basic Deletion
// ● Input:
// ○ Linked List Node: 4 , where linked list is 4 -> 5 -> 1 -> 9
// ○ Node to delete: 4

linkedList.deleteNode(4);
linkedList.printList();
// ● Output:
// ○ Linked List: 5, where linked list should become 5 -> 1 -> 9





// Question4: Find all the duplicates in an array and return which
// is the smallest one. (5 MARKS)
// Test Case 1:
// Input:
// ○ Given array: [4, 10, 5, 1, 11, 5, 1, 4, 1]
// ● Output:
// ○ 1

// Test Case 2:
// Input:
// ○ Given array: [1, 10, 1, -1, 10, -1]
// ● Output:
// ○ -1

function findSmallestDup(arr){
    let dupArr = [];
    let answer = Infinity;
    for(let i=0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] == arr[j]){
                if(dupArr.indexOf(arr[i]) == -1){
                    dupArr.push(arr[i]);
                }
            }
        }
    }

    for(let n = 0; n < dupArr.length; n++){
        if(dupArr[n] < answer){
            answer = dupArr[n];
        }
    }
    console.log(answer);
}

let array = [4, 10, 5, 1, 11, 5, 1, 4, 1];
findSmallestDup(array);

let array2 = [1, 10, 1, -1, 10, -1];
findSmallestDup(array2);


// MULTIPLE CHOICE QUESTIONS (Each 2 Marks)

// Which type of search is efficient on a sorted array?
// ● A) Linear Search
// ● B) Binary Search
// ● C) Hash Search
// ● D) Exponential Search

// // Your answer: B


// What is the time complexity of inserting a new node at the
// beginning of a singly linked list?
// ● A) O(1)
// ● B) O(n)
// ● C) O(log n)
// ● D) O(n log n)

// Your answer: A


// In a binary search tree (BST), the left child of a node is always:
// ● A) Greater than the node
// ● B) Smaller than the node
// ● C) Equal to the node
// ● D) Random compared to the node

// Your answer: B


// Which traversal of a BST visits nodes in ascending order?
// ● A) Pre-order
// ● B) Post-order
// ● C) In-order
// ● D) Level-order

// Your answer: C

// In a doubly linked list, what does the prev pointer in the first
// node point to?
// ● A) The last node
// ● B) Null
// ● C) The second node
// ● D) The middle node

// Your answer: B