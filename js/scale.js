


function readBotProperties(){
    var price = document.getElementById("price").value;
    var base_order = document.getElementById("base_order").value;
    var safty_order = document.getElementById("safty_order").value;
    var target_profit = document.getElementById("target_profit").value;
    var max_safty_orders = document.getElementById("max_safty_orders").value;
    var safty_order_price_deviation = document.getElementById("safty_order_price_deviation").value;
    var safty_order_volume_scale = document.getElementById("safty_order_volume_scale").value;
    var safty_order_step_scale = document.getElementById("safty_order_step_scale").value;
    clearPlot();
    drawPlot();
    var c = document.getElementById("base_canvas");
    var ctx = c.getContext("2d");
    ctx.translate(1.5, 1.5);
    var x_axis_width = 900;
    var vert_line_height = 400;
    var scale_x = x_axis_width/max_safty_orders;
    var start_x = 30;
    var start_y = 450;
    for(var i = 1;i <=max_safty_orders;i++){
        ctx.beginPath();
        ctx.moveTo(30+(i*scale_x)-10,440);
        ctx.lineTo(30+(i*scale_x)-10,460);
        ctx.stroke();
        ctx.font = "15px Arial";
        ctx.fillText(""+i, 30+(i*scale_x)-15, 475);
    }
    //alert(base_order);
}

function drawPlot(){
    var c = document.getElementById("base_canvas");
    var ctx = c.getContext("2d");
    ctx.lineWidth = 2
    ctx.translate(1.5, 1.5);
    ctx.beginPath();
    ctx.moveTo(30,10);
    ctx.lineTo(30,450);
    ctx.stroke();
    //ctx.translate(0.5, 0.5);
    ctx.beginPath();
    ctx.moveTo(30,450);
    ctx.lineTo(930,450);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(20,50);
    ctx.lineTo(40,50);
    ctx.stroke();
    ctx.font = "15px Arial";
    ctx.fillText("0", 20, 475);
    ctx.fillText("100",1,45);
    //update();
}

function updatePlot(){
    var c = document.getElementById("base_canvas");
    var ctx = c.getContext("2d");
    ctx.font = "20px Arial";
    ctx.fillText("test", 50, 300);
}

function clearPlot(){
    var c = document.getElementById("base_canvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    c.width = 1000;
    c.height = 500;
    //alert('ok');
}