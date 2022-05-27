rightWrist_x =0;
leftWrist_x =0;
difference =0;

function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);

    canvas = createCanvas(800,400);
    canvas.position(430,130);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function draw(){
    background("#5196e3");
    textSize(difference);
    fill('black');
    text('Vihaan',380,200);

}

function modelLoaded(){
    console.log("PoseNet Is Initialized And Loaded");
}

function gotposes(results,error){
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);

       rightWrist_x =results[0].pose.rightWrist.x;
       leftWrist_x =results[0].pose.leftWrist.x;
       console.log("RightWristX = "+rightWrist_x+"LeftWristX = "+leftWrist_x);
       difference=floor(leftWrist_x - rightWrist_x);
       console.log("Difference = "+difference);
    }
}