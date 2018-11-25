



// Sketch scopepp5
const sketch2 = (p5) => {

  // Variables scoped within p5
  
  
  const canvasWidth2 = window.innerWidth;
  const canvasHeight2 = window.innerHeight/3;
  var canvas3;
  var fireworks = [];
  var gravity;
 

  //Creates a particle
  function Particle(x, y, firework) {
      this.pos = p5.createVector(x, y);
      this.firework = firework;
      this.lifespan = 255;
      

      if (this.firework) {
      this.vel = p5.createVector(0, p5.random(-9, -4));
      } else {
          this.vel = p5.createVector(p5.random(-7, 7), p5.random(-5, 5));
      }
      this.acc = p5.createVector(0,0);

      this.applyForce = function(force) {
          this.acc.add(force);
      }

      this.update = function() {
          if (!this.firework) {
              this.vel.mult(0.85);
              this.lifespan -= 4;
          }
          this.vel.add(this.acc);
          this.pos.add(this.vel);
          this.acc.mult(0);
      }

      this.done = function() {
          if (this.lifespan < 0) {
              return true;
          } else {
              return false;
          }
      }

      this.show = function() {

          if (!this.firework) {
            p5.strokeWeight(3);
            p5.stroke(255, 200, p5.random(140), this.lifespan);
          } else {
            p5.strokeWeight(5);
            p5.stroke(p5.random(180, 250), 90, 20);
          }

          p5.point(this.pos.x, this.pos.y)
      }

  }

  //Will be responsible to both the main ball and the exploding ones.
  function Firework() {

    
    this.firework = new Particle(p5.random(p5.width), p5.height, true);
    this.exploded = false;
    this.particles = [];
    

    this.done = function() {
        if (this.exploded && this.particles.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    this.update = function() {
        if (!this.exploded) {
        this.firework.applyForce(gravity);
        this.firework.update();
        if (this.firework.vel.y >= 0) {
            this.exploded = true;
            this.explode();
        }
      }
      for (var i = this.particles.length -1; i >= 0; i--) {
        this.particles[i].applyForce(gravity);
        this.particles[i].update();
        if (this.particles[i].done()) {
            this.particles.splice(i, 1);
        }
    }
    }

    this.explode = function() {
        for (var i = 0; i < 40; i++) {
            var p = new Particle(this.firework.pos.x, this.firework.pos.y, false)
            this.particles.push(p);
          
        //    var x = 16*p5.pow(p5.sin(i), 3) 
        //    var y = 13*p5.cos(i) - 5*p5.cos(3*i) - p5.cos(4*i)
        }
    }

    this.show = function() {
        if (!this.exploded) {
        this.firework.show();
        }
        for (var i = 0; i < this.particles.length; i++) {
            this.particles[i].show()
        }


    }
}
 

  // make library globally available
  window.p5 = p5;



  //Preload function
  // ======================================


  // Setup function
  // ======================================
  p5.setup = () => {
    canvas3 = p5.createCanvas(window.innerWidth, window.innerHeight/3);
    canvas3.id("canvas3");
    canvas3.class("grid");
    gravity = p5.createVector(0, 0.2);
    
    p5.stroke(255);
    p5.strokeWeight(5);
    p5.background(0);
    
   

  }

  // Draw function
  // ======================================
  p5.draw = () => {
    p5.background(0, 0, 0, 35);
    if (p5.random(1) < 0.045) {
    fireworks.push(new Firework());
    }
    for (var i = fireworks.length-1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].show();
        if (fireworks[i].done()) {
            fireworks.splice(i, 1);
        }
    }
        
  }

  p5.windowResized = () => {
    p5.setup();
    
  }
  
}

export default sketch2;
