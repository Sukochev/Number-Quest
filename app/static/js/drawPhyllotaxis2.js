

// Variables scoped within p5


var n = 0;
var c = 5;




const drawPhyllotaxis2 = () => {

    
    p5.angleMode('DEGREES');
    
    if (n < 375) {

    let a = n * 137.5;
    let r = c * p5.sqrt(n);

    let x = r * p5.cos(a) + p5.width * 0.92;
    let y = r * p5.sin(a) + p5.height / 2;

    p5.fill(255, n % 256, 25);
    p5.noStroke();
    p5.ellipse(x, y, 4, 4);

    n++;


    //console.log(x);
    }
    else {
        return;
    }
}



export default drawPhyllotaxis2;