
var input = document.querySelector('#email');
const inputs =document.querySelectorAll('input');
const pattern ={
    email:/^([a-zA-Z0-9\.-_]+)@([a-zA-Z0-9]{2,8})\.([a-zA-Z0-9]{2,8})(\.[a-zA-Z0-9]{2,8})?$/,
    number:/^\d{10}/,
    pass: /[\w]{6,20}/,
}
function vaildate(field,regex){
    if(regex.test(field.value)){
        field.className = 'valid'

    }
    else{
        field.className = 'invalid'
    }
}
inputs.forEach(function(input){

    input.addEventListener('keyup',function(e){
        // console.log(e.target.attributes.name.value)
        vaildate(e.target, pattern[e.target.attributes.name.value])

    })
})

document.write("<hr>")
function say(){
    return 'hello'
}
console.log(say())
let myfunc = ()=>{
  return 'hello from canada '
}
console.log(myfunc())



hello = (par)=>'hi from usa mr' + par;

console.log(hello('sardar'))

sum  = (a,b)=>'sum of a + b :' + (a + b);
console.log(sum(5,8))

class myClass {
    constructor(name,age){
        this.theName =name;
        this.theAge = age;

    }
}

let mobj = new myClass('ahamd',23)
let uobj = new myClass ('sardar', 19)
console.log(mobj.theName)
console.log(mobj.theAge)
console.log(uobj.theName)
console.log(uobj.theAge)

