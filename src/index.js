let body = d3.select("body");
let screenHeight = parseInt(body.style("height"));
let screenWidth = parseInt(body.style("width"));

let colNum = 6;//number of squares in a column

var divPx = screenHeight / colNum;//pixel size of container (originally)
var rowNum = Math.ceil(screenWidth / divPx);//calculate max number of div in row + 1
divPx = Math.floor(screenWidth / rowNum);

var hI;//height index
var lI;//length index
for(var n = 0; n < (colNum * rowNum); n++){//cycle through rows, then columns
    lI = n % rowNum;//get length (x)
    hI = (n - lI) / rowNum;//get height (y)
    //console.log(`(${hI}, ${lI})`);
    d3.select("body").insert("div").styles({
        "width": `${divPx / 20}px`,
        "height": `${divPx / 20}px`,
        "left": `${(lI * divPx) + ((19 * divPx / 20) / 2)}px`,
        "top": `${(hI * divPx) + ((19 * divPx / 20) / 2)}px`,
        "background-color": "black",
        'position': 'absolute'
    }).attr("lI", lI).attr("hI", hI).transition().duration(5000).styles({
        "width": `${divPx}px`,
        "height": `${divPx}px`,
        "left": `${(lI * divPx)}px`,
        "top": `${(hI * divPx)}px`
    });
}

d3.selectAll("div").on("mouseover", function(){
    let tlI = d3.select(this).attr("lI");
    let thI = d3.select(this).attr("hI");
    d3.select(this).transition().duration(500).styles({
        "width": `${divPx / 20}px`,
        "height": `${divPx / 20}px`,
        "left": `${(tlI * divPx) + ((19 * divPx / 20) / 2)}px`,
        "top": `${(thI * divPx) + ((19 * divPx / 20) / 2)}px`
    }).transition().duration(5000).styles({
        "width": `${divPx}px`,
        "height": `${divPx}px`,
        "left": `${(tlI * divPx)}px`,
        "top": `${(thI * divPx)}px`
    });
});