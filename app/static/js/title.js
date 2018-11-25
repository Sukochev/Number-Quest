function Title_Module() {

const title =       document.createElement("h1");
const title_text =  document.createTextNode("Number Quest");
title.appendChild(title_text);
title.id = "title1";
title.className = "grid";
title.dataset.text = "Number Quest";

const title_div = document.createElement("div");
title_div.id = "title_div";
title_div.className = "grid";

const body =        document.body
body.appendChild(title_div);

title_div.appendChild(title);




}

export default Title_Module;