let body = d3.select("body");
let screenHeight = parseInt(body.style("height"));
let screenWidth = parseInt(body.style("width"));

let colNum = 40;//number of squares in a column

var divPx = screenHeight / colNum;//pixel size of container (originally)
var rowNum = Math.ceil(screenWidth / divPx);//calculate max number of div in row + 1
divPx = screenWidth / rowNum;

var hI;//height index
var lI;//length index
for(var n = 0; n < (colNum * rowNum); n++){//cycle through rows, then columns
    lI = n % rowNum;//get length (x)
    hI = (n - lI) / rowNum;//get height (y)
    //console.log(`(${hI}, ${lI})`);
    d3.select("body").insert("div").styles({
        "width": `${divPx}px`,
        "height": `${divPx}px`,
        "left": `${(lI * divPx)}px`,
        "top": `${(hI * divPx)}px`,
        "background-color": "black",
        'position': 'absolute'
    }).attr("lI", lI).attr("hI", hI);
}

d3.selectAll("div").on("mousemove", function(){
    console.log(d3.event.pageX);
    let tlI = d3.select(this).attr("lI");
    let thI = d3.select(this).attr("hI");
    d3.select(this).transition().duration(500).styles({
        "width": `${divPx / 50}px`,
        "height": `${divPx / 50}px`,
        "left": `${(tlI * divPx) + ((49 * divPx / 50) / 2)}px`,
        "top": `${(thI * divPx) + ((49 * divPx / 50) / 2)}px`,
        "background-color": "white"
    }).transition().duration(4000).styles({
        "width": `${divPx}px`,
        "height": `${divPx}px`,
        "left": `${(tlI * divPx)}px`,
        "top": `${(thI * divPx)}px`,
        "background-color": "black"
    });
});//yo