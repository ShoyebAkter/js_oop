function Circle(radius){
    this.radius=radius;
    this.draw=function(){
        console.log("draw")
    }
}

Circle.call({},1) //same as line 10
Circle.apply({},[1,2,3]) //use array

const another=new Circle(1); //empty object creation
