
import drawPhyllotaxis from './drawPhyllotaxis.js';
import drawPhyllotaxis2 from './drawPhyllotaxis2.js';
import drawRecursion from './drawRecursion.js';




// Sketch scopepp5
const sketch = (p5) => {

  // Variables scoped within p5
  
  
  const canvasWidth2 = window.innerWidth;
  const canvasHeight2 = window.innerHeight/3;
  var canvas2;
 
  

  // make library globally available
  window.p5 = p5;


  // Setup function
  // ======================================
  p5.setup = () => {
    canvas2 = p5.createCanvas(window.innerWidth, window.innerHeight/3);
    canvas2.id("canvas2");
    canvas2.class("grid");
    //canvas2.parent(div1);
    p5.background('#000');
    drawRecursion();
     
    //canvas2.parent("canvas");

  }

  // Draw function
  // ======================================
  p5.draw = () => {
    
    drawPhyllotaxis();
    drawPhyllotaxis2();
    
  }

  p5.windowResized = () => {
    p5.setup();
    
  }
  
}

export default sketch;
