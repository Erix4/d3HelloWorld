//code to move a color changing box around with the cursor and change it's size when clicked

let = screenHeight = parseInt(d3.select("body").style("height"));

d3.select("div").style("width", d3.select("div").style("height"));
let orSize = parseInt(d3.select("div").style("height"));//in _px format

d3.select("body").on("mousemove", function(){
    var m = d3.mouse(this);
    var box = d3.select("div");
    th = d3.select("body").style("height");//get screen height for coloring
    //
    console.log(box.transition().duration());
    box.transition().duration(0).style("left", box.style("left")).style("top", box.style("top"));
    //
    var x1 = m[0] - (parseInt(box.style('width')) / 2);
    var y1 = m[1] - (parseInt(box.style('height')) / 2);
    //
    box.style("left", `${x1}px`).style("top", `${y1}px`);
    box.style("background-color", `hsl(${y1 / parseInt(th) * 360}, 100%, 50%)`)
});

d3.select("body").on("click", function(){
    var m = d3.mouse(this);
    var box = d3.select("div");
    let w;
    let h;
    //
    console.log(parseInt(box.style("height")) + ", " + screenHeight);
    if(parseInt(box.style("height")) > (screenHeight / 2)){//shrink to original size
        w = orSize;
        h = orSize;
    }else{//make a little bigger
        w = parseInt(box.style("width")) * 1.5;
        h = parseInt(box.style("height")) * 1.5;
    }
    //
    var x1 = m[0] - (w / 2);
    var y1 = m[1] - (h / 2);
    //
    d3.select("div").transition().duration(500)
        .style("width", `${w}px`)
        .style("height", `${h}px`)
        .style("left", `${x1}px`)
        .style("top", `${y1}px`);
});