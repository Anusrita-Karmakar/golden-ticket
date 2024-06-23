function genTicket(n){
    let arr=new Array(n);
    for(let i=0;i<n;i++){
        arr[i]=Math.floor(Math.random()*10);
    }
    return arr;
}
function sum(arr){
    let add=0;
    for(let it of arr){
        add+=it;
    }
    return add;
}
export {genTicket,sum};