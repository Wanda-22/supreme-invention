nosex=0;
nosey=0;

function preload() {
    x=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup() {
    canvas=createCanvas(300,300);
    canvas.center();    
    s=createCapture(VIDEO);
    s.size(300,300);
    s.hide();

    p=ml5.poseNet(s,loaded);
    p.on('pose',ans);
}

function loaded() {
    console.log('posenet is loaded');
}

function ans(result) {
    if (result.length>0) {
        console.log(result);
        nosex=result[0].pose.nose.x-15;
        nosey=result[0].pose.nose.y-15;
    }
}


function draw() {
    image(s,0,0,300,300);
    image(x,nosex,nosey,30,30);
}

function snap() {
    save('pic.png');    
}


