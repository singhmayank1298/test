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

myform.addEventListener("submit", function sub (event){
  event.preventDefault() 
       console.log(event.target)
       if(inputname.value==""||inputemail.value==""||inputphone.value==""||inputtime.value==""){  // we should always do (.value )inside the eventlistner(dont do outside) because whenever user put value eventlistner will grap 
        alert("Please enter the fields")
      }
     // if(inputname.value+ " "+ inputemail.value+" "+inputphone.value+" "+inputtime.value) {  //we can also uese thie instead of  (requered)
      let obj = JSON.stringify({"name":inputname.value , "email":inputemail.value,"phone":inputphone.value,"date":inputdate.value,"time":inputtime.value })
      localStorage.setItem(inputphone.value,obj)

})