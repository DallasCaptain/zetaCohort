// Print 1 - 255

// for (var i = 1, y=9; i <= 255 && y > -200; i++,y--){
//     console.log(i,y)
// }

// for(var i=0,sum=0;i<256;i++,sum+=i){
//     console.log(i,sum)
// }
    
arr = [9,4,7,89,4,2,0]

function fAndPMax(arr){
    max = arr[0]
    for(var i =1; i<arr.length; i++){
        max = Math.max(arr[0],max)
    }
    console.log('max is :',max)
}

fAndPMax(arr)