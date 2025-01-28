// let element = document.getElementById("demo");
// element.innerText = "DOM";
// console.log(element);

// let div = document.getElementById("test");

// div.innerHTML = "<h1>Header</h1>"
// console.log(div);
// let ele = document.getElementsByClassName("test");
// console.log(ele);
// // console.log(Array.isArray(ele));
// ele[0].style.backgroungColor="yellow";
// let x = [...ele];
// console.log(x , Array.isArray(x));
// x.map((element)=>{
//     //console.log(element);
//     element.style.backgroundColor="teal";
// })

// let ele = document.getElementByName("username");
// console.log(ele);
// [...Element.map(element)]

// let ele = document.querySelectorAll(".test");
// // console.log(ele);
// [...ele].map(element=>{
//     console.log(element.innerText);
// })

// let bgColor = document.querySelectorAll(".bgColor");
// [...bgColor].map((element)=>{
//     element.addEventListener("mouseover",()=>{
//         element.style.backgroundColor=element.innerText;

//     });
//     element.addEventListener("mouseleave",()=>{
//         element.style.backgroundColor="transparent";
//     })
// })

// let mainEle = document.createElement("div");
// mainEle.setAttribute("class" , "mainblock");
// console.log(mainEle);

// let topEle = document.createElement("div");
// topEle.setAttribute("class" , "topBlock");


// let image = document.createElement("img");
// image.src="https://cdn.pixabay.com/photo/2017/02/14/11/29/pixabay-2065689_1280.png";
// image.width="300"
// image.height="300"

// let bottomEle = document.createElement("div");
// bottomEle.setAttribute("class" , "bottomBlock");

// let h1 = document.createElement("h1");
// h1.innerText="Heading";

// let btn =document.createElement("button");
// btn.innerText="View More";

// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);
// topEle.appendChild(image)
// mainEle.appendChild(topEle);
// mainEle.appendChild(bottomEle);
// document.body.appendChild(mainEle);


let form=document.querySelector("form");
let username = document.getElementById("uName");
let password = document.getElementById("uPass");
let check = document.getElementById("check");
let show = document.getElementById("show");

let gen = document.getElementsByName("gender");
// console.log(gen);

check.addEventListener("click",event=>{

    if(event.target.checked === true){
        password.setAttribute("type" , "text");
        show.innerText ="hide password";
    }else{
        password.setAttribute("type" , "password");
        show.innerText = "show password";
    }
})

form.addEventListener("submit",event=>{
    event.preventDefault();
    let un = username.value;
    let up = password.value;
    // console.log(un , up);
    let gender = "";
   
   for(let i=0;i<=gen.length-1;i++){
    if(gen[i].checked == true){
        // console.log("true" , gen[i].value);
        gender += gen[i].value;
    }
   }
//    console.log(ele);
let userDetails={
    un,up,gender
};
console.log(userDetails);
})

