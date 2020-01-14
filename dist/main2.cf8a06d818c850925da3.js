!function(e){function t(t){for(var i,a,s=t[0],d=t[1],l=t[2],h=0,u=[];h<s.length;h++)a=s[h],r[a]&&u.push(r[a][0]),r[a]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(e[i]=d[i]);for(c&&c(t);u.length;)u.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,s=1;s<n.length;s++){var d=n[s];0!==r[d]&&(i=!1)}i&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},r={2:0},o=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="static/";var s=window.webpackJsonp=window.webpackJsonp||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=d;o.push([14,0]),n()}([,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i);var o=function(){var e=document.createElement("h1"),t=document.createTextNode("Congratulations!");e.appendChild(t),e.id="title2",e.className="grid",e.dataset.text="Congratulations!";var n=document.createElement("div");n.id="title_div2",n.className="grid",document.body.appendChild(n),n.appendChild(e)},a=(n(9),function(){var e=new Audio;e.src=reward_audio,e.type="audio/mp3";var t=document.createElement("div");t.id="explanation2_div",t.className="grid",document.body.appendChild(t);var n=document.createElement("p"),i=document.createTextNode("Well done, Hunter. Your ingenuity, knowledge and perseverance                                                        has paid off. You correctly identified that it was the Golden Ratio (1.61803...)                                                        that had to be found...or you just got lucky.                                                        Either way, you have earned a reward! ");n.appendChild(i),n.id="explanation2",document.getElementById("explanation2_div").appendChild(n);var r=document.createElement("p"),o=document.createTextNode("But first, did you know that the golden ratio                                                        (often denoted as phi - φ) can be represented as (1±√5)/2 ?                                                         It is also often found in nature.                                                         A number of natural patterns and structures have the golden ratio                                                          as part of their foundation.                                                         For example the order in which a sunflower grows new seeds approximately follows φ.                                                          Each new seed that grows at the center pushes the previous seed out by 161.8%                                                           of a full revolution before growing.                                                           This ensures that space is being maximised                                                          and there are no big gaps in between seeds.                                                          An interesting question that then arises is 'Why φ?'.                                                          Part of the answer is pragmatic. A sunflower that optimises it's use of space through φ                                                           should be able to produce more seeds per flower than one that doesn't and                                                            hence have a greater chance of survival. But if we delve a little deeper,                                                             things get more interesting.");r.appendChild(o),r.id="explanation2_1",document.getElementById("explanation2_div").appendChild(r);var a=document.createElement("p"),s=document.createTextNode("The golden ratio is the number of choice for the sunflower                                                         because it is the most irrational number.                                                         Any number that is rational (can be expressed as α/β                                                             where α and β are whole numbers) will eventually produce a seed pattern                                                             that makes gaps, because the pattern will effectively form 'spokes'                                                              and there will be space in between each 'spoke'.                                                               Other irrational numbers e.g. π will seemingly form spokes as well.                                                              How many? Well, for π about 22 of them can be seen quite early on.                                                               Why? Perhaps one reason is that π can                                                              be fairly well approximated by a rational number... 22/7.                                                              Yet the golden ratio is a number that's as far as it can get from                                                              a rational representation.");a.appendChild(s),a.id="explanation3_1",document.getElementById("explanation2_div").appendChild(a);var d=document.createElement("p"),l=document.createTextNode("With that said, enjoy your small but earned reward, Hunter!");d.appendChild(l),d.id="explanation4_1",document.getElementById("explanation2_div").appendChild(d);var c=document.createElement("button2"),h=document.createTextNode("Reward");c.appendChild(h),c.id="button2",document.getElementById("explanation2_div").appendChild(c),c.onclick=function(){e.play()}}),s=(n(10),n(11),function(e){window.innerWidth,window.innerHeight;var t,n,i=[];function r(t,n,i){this.pos=e.createVector(t,n),this.firework=i,this.lifespan=255,this.firework?this.vel=e.createVector(0,e.random(-9,-4)):this.vel=e.createVector(e.random(-7,7),e.random(-5,5)),this.acc=e.createVector(0,0),this.applyForce=function(e){this.acc.add(e)},this.update=function(){this.firework||(this.vel.mult(.85),this.lifespan-=4),this.vel.add(this.acc),this.pos.add(this.vel),this.acc.mult(0)},this.done=function(){return this.lifespan<0},this.show=function(){this.firework?(e.strokeWeight(5),e.stroke(e.random(180,250),90,20)):(e.strokeWeight(3),e.stroke(255,200,e.random(140),this.lifespan)),e.point(this.pos.x,this.pos.y)}}window.p5=e,e.setup=function(){(t=e.createCanvas(window.innerWidth,window.innerHeight/3)).id("canvas3"),t.class("grid"),n=e.createVector(0,.2),e.stroke(255),e.strokeWeight(5),e.background(0)},e.draw=function(){e.background(0,0,0,35),e.random(1)<.045&&i.push(new function(){this.firework=new r(e.random(e.width),e.height,!0),this.exploded=!1,this.particles=[],this.done=function(){return!(!this.exploded||0!==this.particles.length)},this.update=function(){this.exploded||(this.firework.applyForce(n),this.firework.update(),this.firework.vel.y>=0&&(this.exploded=!0,this.explode()));for(var e=this.particles.length-1;e>=0;e--)this.particles[e].applyForce(n),this.particles[e].update(),this.particles[e].done()&&this.particles.splice(e,1)},this.explode=function(){for(var e=0;e<40;e++){var t=new r(this.firework.pos.x,this.firework.pos.y,!1);this.particles.push(t)}},this.show=function(){this.exploded||this.firework.show();for(var e=0;e<this.particles.length;e++)this.particles[e].show()}});for(var t=i.length-1;t>=0;t--)i[t].update(),i[t].show(),i[t].done()&&i.splice(t,1)},e.windowResized=function(){e.setup()}});n(12);new r.a(s),o(),a()}]);