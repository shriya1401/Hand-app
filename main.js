
function preload(){

}

function setup(){
video=createCapture(VIDEO);
video.size(550,500);


canvas=createCanvas(550,550);
canvas.position(750,150);

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);

}

function draw(){
background('#F1F7A5');
}

function modelLoaded(){
    console.log("poseNet is Initialized");
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
    }
}