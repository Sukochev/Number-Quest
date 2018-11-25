import Sunflower from '../images/sunflower1.jpg';


function heroImage() {
    const img = document.createElement('img');
    img.alt = 'Image';
    img.src = Sunflower;
    img.id = "heroImage";
    img.className = "grid";


    const img_div = document.createElement("div");
    img_div.id = "img_div";
    img_div.className = "grid";

    const body =        document.body
    body.appendChild(img_div);

    img_div.appendChild(img);






}

export default heroImage;