let random1=Math.random()
let result;
if (random1>0.6) {
    result="Crazy"
}
else if(random1>0.3){
    result="Amazing"
}
else{
    result="Fire"
}

let random2=Math.random()

if (random2>0.6) {
    result=result.concat(" Engine")
}
else if(random2>0.3){
    result=result.concat(" Foods")
}
else{
    result=result.concat(" Garments")
}


let random3=Math.random()

if (random3>0.6) {
    result=result.concat(" Bros")
}
else if(random3>0.3){
    result=result.concat(" Limited")
}
else{
    result=result.concat(" Hub")
}

console.log(result);