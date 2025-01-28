// let userDetails = {
//     name : "Sanjay",
//     age : 23,
//     city:"Hyderabad"
// };

// console.log(userDetails);
// console.log(userDetails.name);


// localStorage.setItem("user1","sanjay");

//  let user1 = localStorage.getItem("user1");
//  console.log(user1);
// sessionStorage.setItem("user1","sanjay");

// console.log(10);
// console.log(20);
// setTimeout(() => {
//     console.log(30);
// }, 5000);
// console.log(40);

// let p1 = new Promise((resolve , reject)=>{});
// //console.log(p1);

// let p2= new Promise((resolve , reject)=>{
//     resolve("Success")
// });

//console.log(p2);
// p2.then((response)=> {
//     console.log(response);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>console.log("finally printing for both"))

// let p3 = new Promise((resolve , reject)=>{
//     reject("Failures");
// });
// p3.catch((response)=>
// {
//     console.log(error);
// }
// )

//console.log(p3);

// function fetchUsers()
// {
//     let x = fetch("https://jsonplaceholder.typicode.com/users");
//     // console.log(x);
//     x
//     .then((response)=>{
//         // console.log(response)
//         // console.log(response.json());
//         return response.json().then(data=>{
//             console.log(data);
//             let store = document.getElementById("store");
//             // console.log(store);
//             data.map((user)=>{
//                 // console.log(user);
//                 store.innerHTML += `
//                 <tr>
//                 <td>${user.id}</td>
//                 <td>${user.name}</td>
//                 <td>${user.email}</td>
//                 <td>${user.company.name}</td>
//                 </tr>
//                 `
//             })
//         })
//     })
//     .catch(err=>console.log(err))
// }
// fetchUsers();

// let p = newPromise((resolve , reject)=>{
//     setTimeout(()=>{
//         resolve("Promise succesfully completing");
//     } , 3000)
// })
// function demo()
// {
//     console.log("Start");
//     let x = p;
//     console.log(x);

//     console.log("End");
// }
// demo();
  
async function fetchUsers(){
    let response = await fetch("https://api.github.com/users");
    let data = await response.json();
    console.log(data);
}
fetchUsers();