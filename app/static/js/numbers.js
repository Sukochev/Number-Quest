
const numbers = () => {
    
    let err_audio = new Audio();
    err_audio.src = error_audio;
    err_audio.type = "audio/wav";

    const numbers_div = document.createElement("div");
    numbers_div.id = "numbers_div";
    numbers_div.className = "grid";

    const body =        document.body
    body.appendChild(numbers_div);
 
    //Here are pi, some pi approximations, Mersenne primes, Euler numbers, Fibonacci sequence, 
    // Some Numberphile numbers, first and second Feigenbaum constants, gamma. 
    const number_p = document.createElement("p");
    const number_p_text = document.createTextNode("3.14159... 22/7 333/106 355/113 103993/33102 \
                                80000 13 17 19 31 61 89 107 127 521 607 1279 2203 2281 3217 4253 4423 \
                                2.71828... 1 1 5 61 1385 50521 2702765 199360981 19391512145 \
                                2404879675441 370371188237525 69348874393137901 15514534163557086905\
                                4087072509293123892361 1252259641403629865468285 441543893249023104553682821\
                                0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610\
                                1.20205... 10958 383 4.66920... 2.50290... 0.57721...");
    number_p.appendChild(number_p_text);
    number_p.id = "number_p";
    document.getElementById("numbers_div").appendChild(number_p);
    
    number_p.onclick = function() {
        err_audio.play();
    }

    //Primes A000040
    const number_p1 = document.createElement("p");
    const number_p1_text = document.createTextNode("2 3 5 7 11 13 17 19 23 29 31 37 41 43 \
                                                    47 53 59 61 67 71 73 79 83 89 97 101 103 \
                                                    107 109 113 127 131 137 139 149 151 157 163 \
                                                    167 173 179 181 191 193 197 199 211 223 227 \
                                                    229 233 239 241 251");
    number_p1.appendChild(number_p1_text);
    number_p1.id = "number_p1";
    document.getElementById("numbers_div").appendChild(number_p1);
    
    number_p1.onclick = function() {
        err_audio.play();
    }



    
    //Here is the Golden ratio conjugate
    const conjugate =       document.createElement("p");
    const conjugate_text =  document.createTextNode("-0.61804...");
    conjugate.appendChild(conjugate_text);
    conjugate.id = "conjugate";
    document.getElementById("numbers_div").appendChild(conjugate);
   
    let con_audio = new Audio();
    con_audio.src = conjugate_audio;
    con_audio.type = "audio/mp3";
   
    
    conjugate.onclick = function() {
        console.log("I'm very close to the number you seek.")
        conjugate.innerHTML = "Very Close!";
        conjugate.style.color = "red";

        con_audio.play();
        
        
    }


    //Here are some roots starting with 2 until 7
    const number_p2 = document.createElement("p");
    const number_p2_text =  document.createTextNode("555 1.41421... 1.73205... 2 2.23606... 2.44848... 2.64575...");
    number_p2.appendChild(number_p2_text);
    number_p2.id = "number_p2";
    document.getElementById("numbers_div").appendChild(number_p2);

    number_p2.onclick = function() {
        err_audio.play();
    }

    //Here are some powers of 2, Ackermann's sequence n^^n, Ackermannn's function, A039834,
   
    const number_p3 = document.createElement("p");
    const number_p3_text =  document.createTextNode("777 1 2 4 8 16 32 64 128 256 512 1024 2048 4096 8192 16384 \
                                                    1 1 4 7625597484987 1 2 3 5 13 65533 -3 5 -8 13 -21 34 -55 89 \
                                                     -144 233 -377 610 -987 1597 -2584 4181\
                                                    1 1 2 5 15 52 203 877 4140 21147 115975 678570 4213597 27644437 190899322 1382958545");

    number_p3.appendChild(number_p3_text);
    number_p3.id = "number_p3";
    document.getElementById("numbers_div").appendChild(number_p3);

    number_p3.onclick = function() {
        err_audio.play();
    }

     //Binary "Stairway to Heaven <p>1 _2", Bell or exponential numbers: A000110,
    const number_p31 = document.createElement("p");
    const number_p31_text =  document.createTextNode("01010011 01110100 01100001\
                                                    01101001 01110010 01110111 01100001 01111001 00100000 01110100\
                                                    01101111 00100000 01001000 01100101 01100001 01110110 01100101\
                                                    01101110 00100000 00111100 01110000 00111110 00110001 00100000 01011111 00110010")

    number_p31.appendChild(number_p31_text);
    number_p31.id = "number_p31";
    document.getElementById("numbers_div").appendChild(number_p31);

    number_p31.onclick = function() {
        err_audio.play();
    }

    
    //Coefficients of iterated exponentials(A000310)
    const number_p4 = document.createElement("p");
    const number_p4_text =  document.createTextNode("88888 1 4 26 234 2696 37919 630521 12111114 264051201");
    number_p4.appendChild(number_p4_text);
    number_p4.id = "number_p4";
    document.getElementById("numbers_div").appendChild(number_p4);

    number_p4.onclick = function() {
        err_audio.play();
    }
    

    //Here is the Golden ratio 
    const aurum =       document.createElement("p");
    const aurum_text =  document.createTextNode("1.61803...");
    aurum.appendChild(aurum_text);
    aurum.id = "aurum";
    document.getElementById("numbers_div").appendChild(aurum);

    let aur_audio = new Audio();
    aur_audio.src = aurum_audio;
    aur_audio.type = "audio/mp3";

    aurum.onclick = function() {
        aurum.innerHTML = "See Below!";
        aurum.style.color = "gold";
        document.getElementById("button").hidden = false;

        aur_audio.play();
        
    }



    
    //It's elementary. You seek a number related to the most malleable of all metals: Aurum.
    const number_p5 = document.createElement("p");
    const number_p5_text =  document.createTextNode("49 74 27 73 20 65 6c 65 6d 65 6e 74 61 72 79\
                                                     2e 20 59 6f 75 20 73 65 65 6b 20 61 20 6e 75 6d\
                                                      62 65 72 20 72 65 6c 61 74 65 64 20 74 6f 20 74\
                                                       68 65 20 6d 6f 73 74 20 6d 61 6c 6c 65 61 62 6c\
                                                        65 20 6f 66 20 61 6c 6c 20 6d 65 74 61 6c 73 3a\
                                                         20 41 75 72 75 6d 2e 20");

    number_p5.appendChild(number_p5_text);
    number_p5.id = "number_p5";
    document.getElementById("numbers_div").appendChild(number_p5);

    number_p5.onclick = function() {
        err_audio.play();
    }

    
    //Here is infinity 
    const infinity =       document.createElement("p");
    const infinity_text =  document.createTextNode("Infinity");
    infinity.appendChild(infinity_text);
    infinity.id = "infinity";
    infinity.className = "infinity";
    document.getElementById("numbers_div").appendChild(infinity);
    
    infinity.onclick = function() {
        infinity.innerHTML = "Did you really think it would be so easy?";
        con_audio.play();
    }




    //Exponential convolution of Fibonacci numbers with themselves (A014334)
    //Negative intergers
    //Luck
    //ASCII numbers: "Greetings Argonaut, what you seek is similar to what Jason sought in his epic quest. Godspeed. "
    const number_p6 = document.createElement("p");
    const number_p6_text =  document.createTextNode("0 0 2 6 22 70 230 742 2406 7782 25190 81510\
                                                     263782 853606 2762342 8939110 28927590 93611622\
                                                      302933606 980313702 3172361830 10265978470\
                                                       33221404262 107506722406 347899061862\
                                                       -3 -4 -5 -6 -7 -8 -9 -10 -11 -12 -13 -14 -15 -16\
                                                       -17 -18 -19 333 777\
                                                       071 114 101 101 116 105 110 103 115 032 065 114\
                                                        103 111 110 097 117 116 044 032 119 104 097 116\
                                                         032 121 111 117 032 115 101 101 107 032 105 115\
                                                          032 115 105 109 105 108 097 114 032 116 111\
                                                           032 119 104 097 116 032 074 097 115 111 110\
                                                            032 115 111 117 103 104 116 032 105 110 032\
                                                             104 105 115 032 101 112 105 099 032 113 117\
                                                              101 115 116 046 032 071 111 100 115 112\
                                                               101 101 100 046 032");

    number_p6.appendChild(number_p6_text);
    number_p6.id = "number_p6";
    document.getElementById("numbers_div").appendChild(number_p6);

    number_p6.onclick = function() {
        err_audio.play();
    }
    

    const button = document.createElement("button");
    const button_text = document.createTextNode("Well done Number Hunter! Click to proceed");
    button.appendChild(button_text);
    button.id = "button";
    document.getElementById("numbers_div").appendChild(button);
    document.getElementById("button").hidden = true;
        
    button.onclick = function() {
        window.location='http://149.28.175.75/result/';
    }

 }
 
 export default numbers;