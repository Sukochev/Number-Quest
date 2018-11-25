function Title_Module2() {

    const title2 =       document.createElement("h1");
    const title_text2 =  document.createTextNode("Congratulations!");
    title2.appendChild(title_text2);
    title2.id = "title2";
    title2.className = "grid";
    title2.dataset.text = "Congratulations!";
    
    const title_div2 = document.createElement("div");
    title_div2.id = "title_div2";
    title_div2.className = "grid";
    
    const body =        document.body
    body.appendChild(title_div2);
    
    title_div2.appendChild(title2);
    
    
    
    
    }
    
    export default Title_Module2;