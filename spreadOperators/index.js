const arr = [1,2,3,4,5,6,7,8,9,10]

// arr.forEach(element => {
//     console.log(element*2)
// });
// const [a,b,c] = arr;
// console.log(`${a*2} ${b*2} ${c*2}`);   

// const [...args] = arr;
// for (let i = 0; i < args.length; i++) {
//     let sum = args[i]*2
//     console.log(sum);
    
// }

let table = (a,...args) => {
    // for (let i = 0; i < args.length; i++) {
    //     let sum = a * args[i];
    //     console.log(sum);
        
    // }
    args.forEach(element => {
        console.log(a*element);   
    });
}
// table(3,...arr)
 

