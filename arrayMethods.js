const arr=[5,2,8,7,4,6];

// const arrDivisibleBy2=arr.filter((i)=>i%2==0)
// console.log(arrDivisibleBy2)

Array.prototype.myFilter=function(cb){
    let arr=this
    let newArray=[];
    for(let i=0;i<arr.length;i++){
        if(cb(arr[i],i,this)){
            newArray.push(arr[i])
        }
    }
    return newArray
}


// console.log(arr.myFilter((i,index,arr)=>i%2==0))


//map
// arr.map((i,index,arr)=>i*2)

Array.prototype.myMap=function(cb){
    let arr=this
    let newArray=[];
    for(let i=0;i<arr.length;i++){
      newArray[i]=cb(arr[i],i,this);
    }
    return newArray
}

console.log(arr.myMap((i,index,arr)=>i*2))


function debounce(func,delay){
    let interval;
    return function(...args){
        clearTimeout(interval)
        interval=setTimeout(()=>func(...args),delay)
    }
}


function throttle(func,delay){
    let throttle=false
    return function(...args){
        if(!throttle){
            throttle=true
            func(...args)
            setTimeout(()=>{
                throttle=false
            },delay)
        }
    }

}


//PUSH

//POP

//SHIFT

//UNSHIFT

//INDEXOF

//SORT

//