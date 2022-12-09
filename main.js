function preload(){
    classifier=ml5.imageClassifier('DoodleNet');
}
function setup(){
    canvas = createCanvas(450, 450);
    canvas.center();
    canvas.mouseReleased(classifyCanvas);
}
function draw(){
    strokeWeight(5);
    stroke("black");
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}
function classifyCanvas(){
    classifier.classify(canvas, gotResult);
}
function gotResult(error, results){
    if (error){
        console.error(error);
    }
    console.log(results);
    document.getElementById("r-lbl").innerHTML=results[0].label;
}
function refresh(){
    background("white");
}