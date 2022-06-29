function Circle(radius){
    this.radius=radius;
    this.draw=function(){
        console.log("draw");
    }
}

const another= new Circle(1);
another.draw(); //new operator will create an empty object