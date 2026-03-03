// console.log("first")


class Shape {
    constructor(color,depth){
        this.color = color;
        this.depth = depth;
    }

    paint(){
        console.log("Painting with color ", this.color)
    }

    area(){
        throw new Error("The area must be implimented in subclass")
    }

    Volume(){
        return this.area() * this.depth
    }
}


class Rectangle extends Shape {
    constructor(height,width,color,depth){
        // shape.constructor(color) = super(color)
        super(color,depth)
        this.height = height;
        this.width = width;
    }

    static whoami(){
        console.log("I am raectangle")
    }

    area(){
        return this.width * this.height;
    }

    perimeter(){
        return 2*(this.width + this.height);
    }
}

class Circle extends Shape {
    constructor(radius,color,depth){
        super(color,depth)
        this.radius = radius;
        // this.radius = depth;
    }

    static whoami(){
        console.log("I am circle")
    }

    area(){
        return 3.142* this.radius * this.radius;
    }

    perimeter(){
        return 2* 3.142* this.radius;
    }
}

class Square extends Shape {
    constructor(side,color,depth){
        super(color,depth)
        // this.color = color;
        this.side = side;
    }

    static whoami(){
        console.log("I am Square")
    }

    area(){
        return this.side * this.side;
    }

    perimeter(){
        return 4* this.side;
    }
}

const r1 = new Rectangle(100,200,"Red",5)
// const c1 = new Circle(10,"Red",2)
// const s1 = new Square(50,"Red",4)

const area = r.area()

// Statics method
// rect.whoami() (Wrong X)
// Attach to class not objects
Rectangle.whoami()
console.log(area,"Area")
// What is this variable
// New keyword? what it does?

// Promise is also a class
// Date is also a class
// const d = new Date()
// const Day = d.getDate()
// const Month = d.getMonth()
// const FullYear = d.getFullYear()
// console.log(Day," - ",Month+1," - ",FullYear)
// const d = new Date()





// Code the promise class yourself
// class object vs normal object
// class can have properties and function for those properties

// js not support multiple inheritance, supports multi level
// js can impliment multiple classes but not extend

// What is map class? how is it different from objects
// const map =  new Map()



// Promises vs callbacks 
// Just another way both do same things (async) promise have few more benefits