import p5 from 'p5';

import Title_Module2 from './title2.js';
import '../../css//result/title2.css';

import explanation2 from './explanation2.js';
import '../../css/result/explanation2.css';

import '../../css/result/divs2.css';

import sketch2 from './sketch2.js';
import '../../css/result/sketch2.css';




//Index files are the only place where we need to import p5.
//As here is the only time we initiate it.
new p5(sketch2);


Title_Module2();
explanation2();


