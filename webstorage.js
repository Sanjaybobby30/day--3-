//localStorage.clear();

localStorage.setItem("user1" , "Raghu");
localStorage.setItem("user2","Vamshi")
localStorage.setItem("user3" , "Pavithra");
localStorage.setItem("user4","Sanjay")
localStorage.setItem("user5" , "Rishi");
localStorage.setItem("user6","Shravan");


let user6 = localStorage.getItem("user6");
console.log(user6);

localStorage.removeItem("user1");

// localStorage.clear();