// let flag;
// function User(id,name,record){
//  this.id=id;
//  this.name=name;
// this.record=record;
// }
// function loading(){
//  /* ,פונקציה כאשר עמוד ההרשמה  יטען .היא  מכילה את הסקריפט הקשור רק לעמוד זה */

//  let arrUsers=localStorage.getItem("users");
//  arrUsers=JSON.parse(arrUsers);
//  let id=localStorage.getItem("index");
//  id=JSON.parse(id)+1;
//  document.querySelector("#t1").addEventListener("click",
// function (){
//     let userName= document.getElementById("user").value;flag=false;
// for(let i=0;i<arrUsers.length;i++){
//  if(arrUsers[i].name==userName){
// flag=true; 
//  localStorage.setItem("index",arrUsers[i].id);

//  }

// }
// if(flag==false){
//  let u=new User(id,userName,0);
//  localStorage.setItem("index",u.id);
//  arrUsers.push(u);
//  localStorage.setItem("users", JSON.stringify(arrUsers)); 
// } 





// // window:open("newProject.html", "_self")
// });
// document.querySelector("#t1").addEventListener("click",how);

// let cntInst=-1;
// /*פונקציה שפותחת את הדיב עם הוראות המשחק לחיצה אחת פותחת לחיצה שניה סוגרת*/
// function how()
// {
// cntInst++;
// if(cntInst%2==0){
// let p=document.createElement("p");;
// p.innerHTML=" Instructions: <br> 1.You have to try guessing what can be the word that hiding by pressing <br/> on the letters which on the screen <br/> 2.In each stage you get 5 hearts  (these are your tries) <br/>3. You win when you discover the word before the time and your hearts are over";
// document.querySelector("#instru").appendChild(p);
// }
// else{
// document.querySelector("#instru").innerHTML="";
// }
// }

// document.getElementById("user").addEventListener("focus",function () { event.target.style.border="pink 6px solid "});
// document.getElementById("user").addEventListener("blur",function () { event.target.style.border="blue 4px solid "});
// document.getElementById("pass").addEventListener("focus",function () { event.target.style.border=" pink 6px solid "});
// document.getElementById("pass").addEventListener("blur",function () { event.target.style.border="blue 4px solid "});




// }

// /*פונקציה שמאפסת את המערך וכל מה שקשור ללוקל סטורג*/
// function setArr() {let arrUsers=[];
//     localStorage.setItem("users", JSON.stringify(arrUsers)); 
// localStorage.setItem("index", JSON.stringify(-1));
//  localStorage.removeItem("user"); 

// //  window.open("newProject.html","_self");



// }

// let id = 0;
// let arr = [];
// let flag

// function User(name, record) {
//   this.id = id++;
//   this.name = name;
//   this.recored = record;
// }
// function record() {
//   document.getElementById("t2").addEventListener("click", function () {
//     localStorage.setItem("name", document.getElementById("name").value);
//   });

//   let plyer = new User(
//     localStorage.getItem("name"),
//     localStorage.getItem("record")
//   );
//   arr.push(plyer);
//   console.log(arr);
//   localStorage.setItem("user", arr);
// }
