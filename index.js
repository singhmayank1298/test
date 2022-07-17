  //let d=document.querySelector('.')
let myform=document.querySelector('.myform')
let inputname=document.querySelector('#name')
let inputemail=document.querySelector('#email') // we can also do like this .requeied if this field is fill then only do submit
let inputphone=document.querySelector('#phone')
let inputdate=document.querySelector('#date')
let inputtime=document.querySelector('#time')
let bt =document.querySelector('.s')
let h=document.querySelector('h1')

//  ON SUBMIT STORE IN LOCASTORAGE
// task 10
// 1=when click on submit make a Object and store info.. on it
// 2=store the object in localStorage by useing JSON.stringify and make ther value by inputphone.value

// task 11 display in screen
// 1= grap UL 
// 2=make new li and delete and edit button and 
// 3= make id or classname as inputphone.val  for li and for buttons (det& edt)
// 4= check if in the list the node is exist or not first if exist then remove the node then push new one5
// 5= push button to li and li to grap UL




myform.addEventListener("submit", function sub (event){
  event.preventDefault() 
       console.log(event.target)
       if(inputname.value==""||inputemail.value==""||inputphone.value==""||inputtime.value==""){  // we should always do (.value )inside the eventlistner(dont do outside) because whenever user put value eventlistner will grap 
        alert("Please enter the fields")
      }
     // if(inputname.value+ " "+ inputemail.value+" "+inputphone.value+" "+inputtime.value) {  //we can also uese thie instead of  (requered)
      let obj = JSON.stringify({"name":inputname.value , "email":inputemail.value,"phone":inputphone.value,"date":inputdate.value,"time":inputtime.value })
      localStorage.setItem(inputphone.value,obj)

      let submit=document.querySelector(".item")

 let grapid =document.getElementById(inputphone.value)
 if(grapid!=null){
   submit.removeChild(grapid)
 }
 
 
 let li =document.createElement("li")
 let deleteButton =document.createElement("button")
 let editButton =document.createElement("button")
 deleteButton.innerText="delete"
 deleteButton.className="det"
 editButton.innerText="edit"
 editButton.className="edt"
 li.id=inputphone.value
 //let user =JSON.parse(  localStorage.getItem(inputphone.value) )
 let node1 =document.createTextNode(inputname.value+ " "+ inputemail.value+" "+inputphone.value+" "+inputtime.value)
 //let node2 =document.createTextNode()

 //console.log(inputemail.value)
 
 li.appendChild(node1)
 li.appendChild(deleteButton)
 li.appendChild(editButton)
 submit.appendChild(li)

 alert("YOUR FORM IS SUBMITED")  
});

//REFRESH THE PAGE

// 1=first grap from the localstorage all values in Array
// 2= start iterating the array  
// 3= make li and delete and edit button and make id,classname as per above  (id shuld be .phone)
// 4=insert text in li by localstorage  values
// 5= grap UL and then insert li in it 


document.addEventListener("DOMContentLoaded",relode)
function relode(e){
console.log(h)

let valuearr=Object.values(localStorage)

for (let i=0;i<valuearr.length;i++){
let li =document.createElement("li")
let node =document.createTextNode(JSON.parse(valuearr[i]).name+" "+JSON.parse(valuearr[i]).email+" "+JSON.parse(valuearr[i]).phone)
li.appendChild(node)
let submit=document.querySelector(".item")
let delet=document.createElement("button")
let edit=document.createElement("button")
delet.innerText="Delete"
edit.innerText="Edit"
delet.className="det"
edit.className="edt"
li.id= JSON.parse(valuearr[i]).phone
li.appendChild(delet)
li.appendChild(edit)
submit.appendChild(li)
// console.log(li)

}
}

// DELETE FUNCTION

// 1=when click it will check that classname have (det )or not if yes
// 2= grap the parentnode and there id ==
// 3 = remove  parentnode and remove from localStorage by grap id
// 4= localStorage will grap key by (id) of parentnode 

let submit=document.querySelector(".item")

submit.addEventListener("click",deleteli) 


function deleteli(e){
e.preventDefault()
//console.log("fokddd")
if(e.target.classList.contains("det")){
let a= e.target.parentElement
console.log(a.id)
localStorage.removeItem(a.id)
submit.removeChild(a)
}
}


// EDIT

// 1=when click it will check that classname have (edt )or not if yes
// 2= grap the node from locslstroge  in obj form (use JSON.parse to make object and to grap use parentnode id)
// 3= set form value 
// 4= then remove parent node from UL and remove from localStorage by parentnode id



let lil= document.querySelector("li")
console.log(lil)

submit.addEventListener("click",edi)


function edi(e){
e.preventDefault()
// console.log(e.path[5])
if(e.target.classList.contains("edt")){

let s=localStorage.getItem( e.target.parentElement.id)
let obj = JSON.parse(s)

inputname.value=obj.name
inputphone.value=obj.phone
inputemail.value=obj.email
 let a= e.target.parentElement
 console.log(a.id)
 localStorage.removeItem(a.id)
    submit.removeChild(a)
}
}















