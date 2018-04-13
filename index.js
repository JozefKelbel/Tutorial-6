var previewBox = document.getElementById("previewBox"),
    redRange = document.getElementById("redRange"),
    greenRange = document.getElementById("greenRange"),
    blueRange = document.getElementById("blueRange"),
    display = document.getElementById("display"),
    redArr = [],
    greenArr = [],
    blueArr = [];

function changeColor(){
    previewBox.style.backgroundColor = 
        "rgb("+redRange.value+","+greenRange.value+","+blueRange.value+")";
}

function createSwatch(){   //creates new div with swatch based on previewBox color
    var ndiv = document.createElement("div");
    ndiv.style.backgroundColor = previewBox.style.backgroundColor;
    ndiv.className = "swatches";
    display.appendChild(ndiv);
    
    redArr.push(parseInt(redRange.value));
    greenArr.push(parseInt(greenRange.value));
    blueArr.push(parseInt(blueRange.value));
    console.log(redArr, greenArr, blueArr);
    calcAvg();
    calcSum();
}


function calcAvg(){
    //for red
    var total = 0;
    for(var i = 0; i<redArr.length; i++){
        total = total + redArr[i];
    }
    
    var avg = total/redArr.length;
    var roundRed = Math.round(avg);
    
   //for green 
    total = 0;
    
     for(var i = 0; i<greenArr.length; i++){
        total = total + greenArr[i];
    }
    
    avg = total/greenArr.length;
    var roundGreen = Math.round(avg);
    
    //for blue
      total = 0;
    
     for(var i = 0; i<blueArr.length; i++){
        total = total + blueArr[i];
    }
    
    avg = total/blueArr.length;
    var roundBlue = Math.round(avg);
    
    //average box style
    document.getElementById("averageBox").style.backgroundColor = "rgb("+roundRed+","+roundGreen+","+roundBlue+")"
    
    console.log(roundRed, roundGreen, roundBlue);
}

function calcSum(){
    var totalRed = 0,
        totalGreen = 0,
        totalBlue = 0;
    
    for(var i = 0; i<redArr.length; i++){
        totalRed = totalRed + redArr[i];
        totalGreen = totalGreen + greenArr[i];
        totalBlue = totalBlue + blueArr[i];
        if(totalRed > 255){
            totalRed = 255;
        }
        
         if(totalGreen > 255){
            totalGreen = 255;
        }
        
         if(totalBlue > 255){
            totalBlue = 255;
        }
    }
    
    document.getElementById("mixBox").style.backgroundColor = "rgb("+totalRed+","+totalGreen+","+totalBlue+")";
    
    console.log(totalRed, totalGreen, totalBlue);
}

//changes color in first box with range bars
redRange.addEventListener("change", function(){
    changeColor();
});
greenRange.addEventListener("change", function(){
    changeColor();
});
blueRange.addEventListener("change", function(){
    changeColor();
});

document.getElementById("addColor").addEventListener("click", function(){
   createSwatch() 
});