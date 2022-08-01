
//curring 
let multiply=function(x,y){
    console.log(x*y)
}

let multiplyby2=multiply.bind(this,2)
multiplyby2(4)

let multiplyby3=multiply.bind(this,3)
multiplyby3(3)






///using clouser

let multiply1=function (x){
    return function mul(y){
        console.log( x*y)
    }
}

let a= multiply1(2)
   a(8)

   let b= multiply1(3)
   b(8)
 //multiply1(1,2)