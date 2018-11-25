

const Explanation = () => {
    
   const explanation_div = document.createElement("div");
   explanation_div.id = "explanation_div";
   explanation_div.className = "grid";

   const body =        document.body
   body.appendChild(explanation_div);


   const explanation = document.createElement("p");
   const explanation_text = document.createTextNode("Can you identify the correct hidden number to unearth it's secrets and progress further? \
                                                    Cryptic clues abound, but so too distractions. Enjoy the hunt.");

   explanation.appendChild(explanation_text);
   explanation.id = "explanation";
   document.getElementById("explanation_div").appendChild(explanation);
}

export default Explanation;
