let prom1 = new Promise((resolve,reject) => {
  let a=Math.random();
  if(a<0.5){
    reject("NO Random Number Was Soppoting 1")
  }
  else{
    setTimeout(() => {
        console.log("Yes I Am Done 1")
        resolve("Charan")
    }, 3000);
  }
})

let prom2 = new Promise((resolve,reject) => {
  let a=Math.random();
  if(a<0.5){
    reject("NO Random Number Was Soppoting 2")
  }
  else{
    setTimeout(() => {
        console.log("Yes I Am Done 2")
        resolve("Charan 2")
    }, 1000);
  }
})

let prom3 = new Promise((resolve,reject) => {
  let a=Math.random();
  if(a<0.5){
    reject("NO Random Number Was Soppoting 3")
  }
  else{
    setTimeout(() => {
        console.log("Yes I Am Done 3")
        resolve("Charan3")
    }, 500);
  }
})

let prom4 = new Promise((resolve,reject) => {
  let a=Math.random();
  if(a<0.5){
    reject("NO Random Number Was Soppoting 4")
  }
  else{
    setTimeout(() => {
        console.log("Yes I Am Done 4")
        resolve("Charan4")
    }, 1500);
  }
})

let prom5 = new Promise((resolve,reject) => {
  let a=Math.random();
  if(a<0.5){
    reject("NO Random Number Was Soppoting 5")
  }
  else{
    setTimeout(() => {
        console.log("Yes I Am Done 5")
        resolve("Charan5")
    }, 300);
  }
})

// prom1.then((a) => {
//       console.log(a);
// }).catch((err) => {
//     console.log(err);
// })

let p3=Promise.reject([prom1,prom2,prom3,prom4,prom5])
p3.then((a) => {
  console.log(a);
}).catch ((err) => {
  console.log(err);
})

