philtrumX=0;
philtrumY=0;

function preload() {
  moustache = loadImage('https://i.postimg.cc/BnWzQznN/pngimg-com-moustache-PNG18-removebg-preview.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    philtrumX = results[0].pose.nose.x + 10;
    philtrumY = results[0].pose.nose.y + 10;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(moustache, philtrumX, philtrumY, 30, 30);
}

function take_snapshot(){    
  save('myFilterImage.png');
}
