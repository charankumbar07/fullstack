let a = 5;

for (let i = 0; i < a; i++) {
    console.log(+i);
}

let o = {
    name: "Charan",
    age: 19
}

for (const key in o) {
    const element = o[key];
    console.log(key, element);
}

for (const e of "charan") {
    console.log(e);
}
