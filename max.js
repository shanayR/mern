// Write code to sum an array containing numbers
let arr = [1,2,3,4,5,6,7,8,9,10]
let sum = () => {
    
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i]
        
    }
    console.log(`array sum: ${total}`);
}
sum()

// Write code to find maximum value from an array containing numbers (first using for loop and then using reduce)

// using for loop
let maximum = () => {
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        if (max<arr[i]) {
            max =  arr[i]    
        }
        
        
    }
    console.log(`maximum value using for loop : ${max}`);
    for (let i = 0; max > 0; i++) {
        max--
        console.log(max);

        
        
    }
}

maximum()

// using .reduce()
let maximum2 = () =>{
    let max2 = arr.reduce((prev, curr) => {
          return Math.max(prev, curr)
    }); 
    console.log(`maximum value using reduce : ${max2}`);
    
}
maximum2()