
function setup()
{
  canvas = createCanvas(640, 440);
  canvas.position(150, 150);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
}

function draw()
{
    image(video, 0, 0, 640, 440);

    fill(255, 0, 170);
    stroke(255, 0, 0);
    square(0, 0, 80);
    square(560, 0, 80);
    square(560, 360, 80);
    square(0, 360, 80);



    fill(255, 94, 0);
    stroke(0, 128, 0);

    rect(80, 0, 479, 40);
    rect(80, 400, 479, 40);
    rect(600, 80, 40, 280);
    rect(0, 80, 40, 280);

  
}

function take_snapshot(){
    save('student_image.png');
}