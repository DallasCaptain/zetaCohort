// Double Trouble: Create a function that changes a given array 
// to list each existing element twice, retaining original order.  
// Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].

function double(arr){
    // var counter = 0
    
    for(var i =0;i<arr.length;i+=2){
        arr.push(arr[i])
        for(let y = arr.length-1; y > i; y--){
            let temp = arr[y]
            arr[y] = arr[y-1]
            arr[y-1] = temp
        }
    }


}


arr = [4, "Ulysses", 42, false]
double(arr)
console.log(arr)