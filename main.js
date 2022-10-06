var canvas = new fabric.Canvas('mycanvas');

ball_y = 0;
ball_x = 0;

hole_y = 500;
hole_x = 800;


block_image_width= 30;
block_image_height= 30;


function load_img(){
    fabric.Image.fromURL("Hole.png", function(Img){
        hole_obj = Img;
        hole_obj.scaleToWidth(50);
        hole_obj.scaleToHeight(50);
        hole_obj.set({
            top: hole_y,
            left:hole_x
        });
        canvas.add(hole_obj);
    });
    new_image();
}


function new_image()
{
    fabric.Image.fromURL("ball.png", function(Img){
        ball_obj = Img;
        ball_obj.scaleToWidth(50);
        ball_obj.scaleToHeight(50);
        ball_obj.set({
            top:ball_y,
            left:ball_x
        });
        canvas.add(ball_obj);
    });
}

if((ball_x==hole_x)&&(ball_y==hole_y)){
    canvas.remove(ball_obj);
}

document.getElementById("hd3").innerHTML="You have Hit the Goal!!!";
document.getElementById("mycanvas").style.borderColor="red";







window.addEventListener("keydown", my_keydown());


function my_keydown(e){
    keyPressed= e.keyCode;
    if(e.shiftKey == true && keyPressed == '80'){
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    };

    if(e.shiftKey && keyPressed == '77'){
        block_image_width=block_image_width - 10;
        block_image_height=block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    };



if(keyPressed == "38")
    {
        up();
    }

    if(keyPressed == "40")
    {
        down();
    }

    if(keyPressed == "37")
    {
        left();
    }

    if(keyPressed == "39")
    {
        right();
    }





function down()
{
    if(ball_y <= 450)
    {
        ball_y= ball_y+block_image_height;
        canvas.remove(ball_obj);
        new_image();
    }
}




function up() 
{
    if(ball_y >= 0)
    {
        ball_y= ball_y-block_image_height;
        canvas.remove(ball_obj);
        new_image();

    }
}


function left() 
{
    if(ball_x >= 0)
    {
        ball_x= ball_x - block_image_width;
        canvas.remove(ball_obj);
        new_image();

    }
}

function left() 
{
    if(ball_x <= 850)
    {
        ball_x= ball_x - block_image_width;
        canvas.remove(ball_obj);
        new_image();

    };
};
};
