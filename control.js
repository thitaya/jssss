
var positionx = 0
var positiony =0
window.addEventListener('keydown',function(event){
    console.log(event.key)
    let ev = event.key;
    if(ev=="ArrowUp"){
        positiony =positiony-100
        document.getElementById("cat").style.marginTop= positiony
    }else if(ev=="ArrowDown"){
        positiony =positiony+100
        document.getElementById("cat").style.marginTop= positiony
    
    }else if(ev=="ArrowRight"){
    positionx =positionx+100
    document.getElementById("cat").style.marginLeft= positionx
}
    else if(ev=="ArrowLeft"){
    positionx =positionx-100
    document.getElementById("cat").style.marginLeft= positionx

    }   
})
    

document.getElementById("my-button").onclick =function(){
    positionx  = positionx+100

document.getElementById("cat").style.marginLeft= positionx

}
document.getElementById("my-button2").onclick =function(){
    positionx = positionx-100

document.getElementById("cat").style.marginLeft= positionx
}

document.getElementById("my-button4").onclick =function(){
    positiony =positiony+100
document.getElementById("cat").style.marginTop= positiony
}
function myFunction() {
    var cars = ["BMW", "Volvo", "Saab", "Ford"];
    var text = " ";
    var i;
    for (i = 0; i < cars.length; i++) {
        text += cars[i] + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
}
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("d").innerHTML = fruits;

function myFunction() {
    fruits.sort();
    document.getElementById("d").innerHTML = fruits;
