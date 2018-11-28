

const explanation2 = () => {
    let rew_audio = new Audio();
    rew_audio.src = reward_audio;
    rew_audio.type = "audio/mp3";
    
    const explanation2_div = document.createElement("div");
    explanation2_div.id = "explanation2_div";
    explanation2_div.className = "grid";

    const body =        document.body
    body.appendChild(explanation2_div);
 
 
    const explanation2 = document.createElement("p");
    const explanation2_text = document.createTextNode("Well done, Hunter. Your ingenuity, knowledge and perseverance\
                                                        has paid off. You correctly identified that it was the Golden Ratio (1.61803...)\
                                                        that had to be found...or you just got lucky.\
                                                        Either way, you have earned a reward! ");

    explanation2.appendChild(explanation2_text);
    explanation2.id = "explanation2";
    document.getElementById("explanation2_div").appendChild(explanation2);


    const explanation2_1 = document.createElement("p");
    const explanation2_1_text = document.createTextNode("But first, did you know that the golden ratio\
                                                        (often denoted as phi - \u03C6) can be represented as (1\xB1\u221A5)/2 ?\
                                                         It is also often found in nature.\
                                                         A number of natural patterns and structures have the golden ratio\
                                                          as part of their foundation.\
                                                         For example the order in which a sunflower grows new seeds approximately follows \u03C6.\
                                                          Each new seed that grows at the center pushes the previous seed out by 161.8%\
                                                           of a full revolution before growing. \
                                                          This ensures that space is being maximised\
                                                          and there are no big gaps in between seeds.\
                                                          An interesting question that then arises is 'Why \u03C6?'.\
                                                          Part of the answer is pragmatic. A sunflower that optimises it's use of space through \u03C6\
                                                           should be able to produce more seeds per flower than one that doesn't and\
                                                            hence have a greater chance of survival. But if we delve a little deeper,\
                                                             things get more interesting.");

    explanation2_1.appendChild(explanation2_1_text);
    explanation2_1.id = "explanation2_1";

    document.getElementById("explanation2_div").appendChild(explanation2_1);
    

    const explanation3_1 = document.createElement("p");
    const explanation3_1_text = document.createTextNode("The golden ratio is the number of choice for the sunflower,\
                                                         because it is the most irrational number.\
                                                         Any number that is rational (can be expressed as \u03B1/\u03B2 \
                                                            where \u03B1 and \u03B2 are whole numbers), will eventually produce a seed pattern\
                                                             that makes gaps, because the pattern will effectively form 'spokes'\
                                                              and there will be space in between each 'spoke'.\
                                                               Other irrational numbers e.g. \u03C0 will seemingly form spokes as well,\
                                                              how many? Well, for \u03C0 about 22 of them can be seen quite early on.\
                                                               Why? Perhaps one reason is that \u03C0 can\
                                                              be fairly well approximated by a rational number... 22/7.\
                                                              Yet the golden ratio is a number that's as far as it can get from\
                                                              a rational representation.");

    explanation3_1.appendChild(explanation3_1_text);
    explanation3_1.id = "explanation3_1";

    document.getElementById("explanation2_div").appendChild(explanation3_1);



    const explanation4_1 = document.createElement("p");
    const explanation4_1_text = document.createTextNode("With that said, enjoy your small but earned reward, Hunter!");

    explanation4_1.appendChild(explanation4_1_text);
    explanation4_1.id = "explanation4_1";
    document.getElementById("explanation2_div").appendChild(explanation4_1);
 
 

    const button2 = document.createElement("button2");
    const button2_text = document.createTextNode("Reward");
    button2.appendChild(button2_text);
    button2.id = "button2";
    document.getElementById("explanation2_div").appendChild(button2);

        
    button2.onclick = function() {
        rew_audio.play();
    }
 
 }
 
 export default explanation2;
 


 
 