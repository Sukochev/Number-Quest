

// Variables scoped within p5


const drawRecursion = () => {
    p5.background(0);
    p5.stroke(255, 50, 50);
    p5.noFill();
    drawCircle(p5.width/2, p5.height/2, 800);
    
}

function drawCircle(x, y, d) {
    p5.ellipse(x, y, d);
    if (d > 4) {
    drawCircle(x + d * 0.3, y, d * 0.5);
    drawCircle(x - d * 0.3, y, d * 0.5);
    }
}

export default drawRecursion;