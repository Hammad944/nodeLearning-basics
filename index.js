// var grades = [
//     [98,77,78],
//     [76, 82, 81],
//     [91, 94, 89]
// ]
// var total = 0;
// var average = 0.0;
// for(var row = 0; row < grades.length; ++row){
//     console.log(grades[row])
//     for(var col = 0; col < grades[row].length; ++col){
//         total += grades[row][col]
//         console.log(grades[row][col])
//     }
//     average = Math.floor(total / grades[row].length)
//     console.log('Average', average)
// }
// function Point(x,y){
//     this.x = x;
//     this.y = y;
// }
// function displayPts(arr){
//     for(var i = 0; i < arr.length; ++i){
//         console.log(arr[i].x + " ,"+ arr[i].y);
//     }
// }
// var p1 = new Point(1,2)
// var p2 = new Point(3,5)
// var p3 = new Point(2,8)
// var p4 = new Point(4,4)

// var points = [p1,p2,p3,p4];

// for(var i = 0; i < points.length; ++i){
//     console.log("Point "+ parseInt(i + 1) + ":" + points[i].x + "," + points[i].y)
// }
// var p5 = new Point(12,-3);
// points.push(p5);
// console.log("After push: ");
// displayPts(points);
// points.shift();
// console.log("After shift: ");
// displayPts(points);
// function weekTemps(){
//     this.dataStore = [];
//     this.add = add;
//     this.average = average;
// } 
// function add(temp){
//     this.dataStore.push(temp)
// }
// function average(){
//     var total = 0;
//     for(var i = 0; i < this.dataStore.length; ++i){
//         total += this.dataStore[i];
//     }
//     return total / this.dataStore.length;
// }
// var thisWeek = new weekTemps();
// thisWeek.add(52);
// thisWeek.add(55);
// thisWeek.add(61);
// thisWeek.add(65);
// thisWeek.add(55);
// thisWeek.add(50);
// thisWeek.add(52);
// thisWeek.add(49);
// console.log(thisWeek.average());
// function grades(){
//     this.gradesList = [];
//     this.add = add;
//     this.average = average;
// }
// function add(grade){
//     this.gradesList.push(grade);
// }
// function average(){
//     let total = 0;
//     for(var i = 0; i < this.gradesList.length; ++i){
//         total += this.gradesList[i];
//     }
//     let average = (total / this.gradesList.length)/2
//     return average;
// }
// var stud1 = new grades();
// stud1.add(55)
// stud1.add(58)
// stud1.add(54)
// stud1.add(5)
// stud1.add(15)
// console.log('Average: ',stud1.average());
let instance;
let counter = 0;
 
class Counter{
    constructor(){
        if(instance){
            throw new Error("You can only create one instance!");
        }
        instance = this;
    }
    getInstance(){
        return this;
    }
    getCount(){
        return counter;
    }
    increment(){
        return ++counter;
    }
    decrement(){
        return --counter;
    }
}
const counter1 = new Counter();
const counter2 = new Counter();
console.log(counter1.getInstance() === counter2.getInstance());