import p5 from 'p5';

import '../css/divs.css';

import Title_Module from './title.js';
import '../css/title.css';

import explanation from './explanation.js';
import '../css/explanation.css';

import numbers from './numbers.js';
import '../css/numbers.css';

import heroImage from './heroImage.js';
import '../css/heroImage.css';

import sketch from './sketch.js';
import '../css/sketch.css';





new p5(sketch);

Title_Module();

explanation()
numbers();
heroImage();





