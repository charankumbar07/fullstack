class Animal {
    constructor(name) {
        this.name = name;
        console.log("constructur is created");
    }
    eats() {
        console.log("I Am Eating")
    }
    jump() {
        console.log("I Am Jumping");
    }
}

class Lion extends Animal {
    constructor(name) {
        super(name)
        console.log("constructur is created By Lion")
    }
    rore() {
        console.log("I Am Roring");
    }
    eats() {
        super.eats()
        console.log("I Am eating Meet");
    }
}

let a = new Animal("Bunny")
console.log(a);

let l = new Lion("Simba")
console.log(l);