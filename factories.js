
function createCircle(radius){
    return {
            radius, //properties
            draw:function(){
                console.log("draw")
            }
}
}

// const circle=createCircle(1);
// circle.draw();
createCircle(1).draw();