let x = document.createElement("h1");
x.innertexr = "dynamic creation of html element";

x.setAttribute("id" , "demo");
console.log(x);

document.body.appendChild(x);

let image = document.createElement("img");
image.src = "./36062608.jpg";
console.log(image);

document.body.appendChild(image);
