arr = [2, 3, 4, 10, 40]
function BinarySearch(arr,l,h,num){
    let m = Math.floor((l + h)/2)
    console.log(m)
    if(num == arr[m]){
        return m;
    }
    else if(num > arr[m]){
        return BinarySearch(arr,m + 1,h,num)
    }
    else{
        return BinarySearch(arr,l,m - 1,num)
    }
}
console.log(BinarySearch(arr,0,4,10))