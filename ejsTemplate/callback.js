let xyz = (x,call) => {
    console.log(x);
    call(1,2)
}

xyz("blah",(a,b)=>{
    console.log(a+b);
})